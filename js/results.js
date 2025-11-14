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

    // --- BẮT ĐẦU SỬA LOGIC CHẤM ĐIỂM ---
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index]; // Có thể là số (2) hoặc mảng ([2]) hoặc mảng ([0, 2])
        const correctAnswer = q.answer;        // Tương tự, có thể là số hoặc mảng
        let isCorrect = false;

        if (userAnswer === null || userAnswer === undefined) {
            isCorrect = false;
        } else if (Array.isArray(correctAnswer)) {
            // TRƯỜNG HỢP 1: Đáp án là MẢNG (dành cho SSL101c, AIG202c)
            if (Array.isArray(userAnswer)) {
                // A. Câu hỏi nhiều đáp án VÀ user chọn nhiều đáp án
                const sortedUser = [...userAnswer].sort();
                const sortedCorrect = [...correctAnswer].sort();
                isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
            } else {
                // B. Câu hỏi 1 đáp án (lưu dạng [2]) VÀ user chọn 1 đáp án (lưu dạng 2)
                isCorrect = (correctAnswer.length === 1 && userAnswer === correctAnswer[0]);
            }
        } else {
            // TRƯỜNG HỢP 2: Đáp án là SỐ (dành cho MAI391)
            // C. Câu hỏi 1 đáp án (lưu dạng 2) VÀ user chọn 1 đáp án (lưu dạng 2)
            isCorrect = (userAnswer === correctAnswer);
        }

        if (isCorrect) correctCount++;
        reviewItems.push({ question: q, userAnswer, isCorrect, index });
    });
    // --- KẾT THÚC SỬA LOGIC CHẤM ĐIỂM ---

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

    // Render Chart (Phần này đã đúng)
    if (chartCanvas) {
        new Chart(chartCanvas, {
            type: 'doughnut',
            data: {
                labels: ['Đúng', 'Sai'],
                datasets: [{
                    data: [correctCount, incorrectCount],
                    backgroundColor: ['var(--correct-color)', 'var(--incorrect-color)'],
                    borderColor: 'var(--white-color)',
                    borderWidth: 2
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
        });
    }

    function renderReview(filter = 'all') {
        if (!reviewContainerEl) return;
        reviewContainerEl.innerHTML = '';
        const filteredItems = reviewItems.filter(item => {
            if (filter === 'correct') return item.isCorrect;
            if (filter === 'incorrect') return !item.isCorrect;
            return true;
        });

        if (filteredItems.length === 0) {
            reviewContainerEl.innerHTML = `<p style="text-align: center;">Không có câu hỏi nào trong mục này.</p>`;
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
            reviewContainerEl.appendChild(itemEl);
        });
        
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