document.addEventListener('DOMContentLoaded', () => {
    const resultsData = localStorage.getItem('quizResults');
    if (!resultsData) {
        document.body.innerHTML = '<h1>Không tìm thấy kết quả. Vui lòng làm bài thi trước.</h1><a href="index.html">Quay về trang chủ</a>';
        return;
    }

    const { questions, userAnswers, subjectTitle } = JSON.parse(resultsData);

    const scoreTextEl = document.getElementById('score-text');
    const correctCountEl = document.getElementById('correct-count');
    const incorrectCountEl = document.getElementById('incorrect-count');
    const reviewContainerEl = document.getElementById('review-questions-container');
    const chartCanvas = document.getElementById('results-chart');
    
    let correctCount = 0;
    const reviewItems = [];

    // --- TỐI ƯU HÓA LOGIC CHẤM ĐIỂM ---
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.answer;
        let isCorrect = false;

        // Chuyển cả hai về dạng mảng để so sánh nhất quán
        const userAnswerAsArray = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
        const correctAnswerAsArray = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];

        // Loại bỏ các giá trị null/undefined khỏi câu trả lời của người dùng
        const cleanedUserAnswer = userAnswerAsArray.filter(ans => ans !== null && ans !== undefined);

        if (cleanedUserAnswer.length === correctAnswerAsArray.length) {
            // Sắp xếp cả hai mảng để so sánh không phụ thuộc thứ tự
            const sortedUser = [...cleanedUserAnswer].sort();
            const sortedCorrect = [...correctAnswerAsArray].sort();
            isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
        } else {
            isCorrect = false; // Số lượng lựa chọn không khớp
        }

        if (isCorrect) correctCount++;
        reviewItems.push({ question: q, userAnswer, isCorrect, index });
    });

    const incorrectCount = questions.length - correctCount;
    const score = (correctCount / questions.length) * 10;
    
    if(scoreTextEl) scoreTextEl.textContent = `${score.toFixed(2)}/10`;
    if(correctCountEl) correctCountEl.textContent = `${correctCount}`;
    if(incorrectCountEl) incorrectCountEl.textContent = `${incorrectCount}`;

    // Save to history (Phần này đã đúng)
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    history.unshift({
        subject: subjectTitle,
        score: score,
        date: new Date().toLocaleDateString('vi-VN')
    });
    localStorage.setItem('quizHistory', JSON.stringify(history.slice(0, 10)));

    // Render Chart (Cải tiến: Doughnut chart với text ở giữa)
    if (chartCanvas) {
        // Lấy giá trị màu từ biến CSS để Chart.js hiển thị đúng (hỗ trợ Dark Mode)
        const computedStyle = getComputedStyle(document.body);
        const correctColor = computedStyle.getPropertyValue('--correct-color').trim();
        const incorrectColor = computedStyle.getPropertyValue('--incorrect-color').trim();
        const whiteColor = computedStyle.getPropertyValue('--white-color').trim();
        const textColor = computedStyle.getPropertyValue('--dark-text').trim();

        // Plugin vẽ điểm số ở giữa biểu đồ
        const centerTextPlugin = {
            id: 'centerText',
            beforeDraw: function(chart) {
                const width = chart.width,
                      height = chart.height,
                      ctx = chart.ctx;
        
                ctx.restore();
                // Tính toán cỡ chữ dựa trên chiều cao biểu đồ
                const fontSize = (height / 150).toFixed(2);
                ctx.font = `bold ${fontSize}em sans-serif`;
                ctx.textBaseline = "middle";
                ctx.fillStyle = textColor;
        
                const text = `${Math.round((correctCount / questions.length) * 100)}%`;
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                
                // Căn chỉnh vị trí Y để nằm giữa phần biểu đồ (trừ đi phần legend ở dưới)
                const legendHeight = chart.legend ? chart.legend.height : 0;
                const textY = (height - legendHeight) / 2;

                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        };

        new Chart(chartCanvas, {
            type: 'doughnut',
            data: {
                labels: ['Đúng', 'Sai'],
                datasets: [{
                    data: [correctCount, incorrectCount],
                    backgroundColor: [correctColor, incorrectColor],
                    borderColor: whiteColor,
                    borderWidth: 3,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%', // Tạo khoảng trống ở giữa
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: textColor,
                            font: { size: 14, family: 'sans-serif' },
                            padding: 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.raw;
                                const total = context.chart._metasets[context.datasetIndex].total;
                                const percentage = Math.round((value / total) * 100) + '%';
                                return `${context.label}: ${value} câu (${percentage})`;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            },
            plugins: [centerTextPlugin]
        });
    }

    function renderReview(filter = 'all') {
        if (!reviewContainerEl) return;
        reviewContainerEl.innerHTML = '';
        // --- TỐI ƯU HÓA: Sử dụng DocumentFragment để giảm reflow/repaint ---
        const fragment = document.createDocumentFragment();

        const filteredItems = reviewItems.filter(item => {
            if (filter === 'correct') return item.isCorrect;
            if (filter === 'incorrect') return !item.isCorrect;
            return true;
        });

        if (filteredItems.length === 0) {
            reviewContainerEl.innerHTML = `<p class="empty-message">Không có câu hỏi nào trong mục này.</p>`;
            return;
        }

        filteredItems.forEach(({ question, userAnswer, isCorrect, index }) => {
            const itemEl = document.createElement('div');
            itemEl.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

            // --- BẮT ĐẦU SỬA LOGIC HIỂN THỊ ---
            const optionsHtml = question.options.map((option, optIndex) => {
                
                // 1. Tạo một Set chứa các đáp án đúng (dùng Set để xử lý cả số và mảng)
                const correctAnswerSet = Array.isArray(question.answer) ? 
                                         new Set(question.answer) : 
                                         new Set([question.answer]); // Biến số 2 thành Set {2}

                // 2. Kiểm tra xem lựa chọn này có phải đáp án đúng không
                const isCorrectAnswer = correctAnswerSet.has(optIndex);
                
                // 3. Kiểm tra xem user có chọn đáp án này không
                let isUserChoice = false;
                if (Array.isArray(userAnswer)) {
                    isUserChoice = userAnswer.includes(optIndex);
                } else {
                    isUserChoice = (userAnswer === optIndex);
                }

                // 4. Gán class và nhãn
                let className = 'option';
                let mark = '';

                if (isCorrectAnswer) {
                    className += ' option-correct';
                    mark = ' (Đáp án đúng)';
                }
                if (isUserChoice && !isCorrectAnswer) {
                    className += ' option-user-incorrect';
                    mark = ' (Lựa chọn của bạn)';
                }
                 if (isUserChoice && isCorrectAnswer) {
                    mark = ' (Lựa chọn đúng của bạn)';
                }

                return `<li class="${className}">${option}${mark}</li>`;
            }).join('');
            // --- KẾT THÚC SỬA LOGIC HIỂN THỊ ---

            itemEl.innerHTML = `
                <h4>Câu ${index + 1}: ${question.question}</h4>
                ${question.image ? `<img src="imgs/${question.image}" alt="Hình ảnh câu hỏi" style="max-width: 100%; border-radius: 10px; margin-bottom: 20px;">` : ''}
                <ul class="review-options">${optionsHtml}</ul>
                <div class="explanation">
                    <strong>Giải thích:</strong> ${question.explanation || "Không có giải thích."}
                </div>
            `;
            fragment.appendChild(itemEl);
        });

        // Thêm tất cả các mục vào DOM chỉ một lần
        reviewContainerEl.appendChild(fragment);
        
        // Trigger MathJax
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([reviewContainerEl]).then(() => {}).catch((err) => console.log('MathJax typeset error:', err));
        }
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.currentTarget.classList.add('active');
            renderReview(e.currentTarget.id.replace('filter-', ''));
        });
    });

    document.getElementById('back-to-home-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    renderReview('all');
});