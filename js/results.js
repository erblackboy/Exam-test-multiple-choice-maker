document.addEventListener('DOMContentLoaded', () => {
    const resultsData = localStorage.getItem('quizResults');
    if (!resultsData) {
        alert('Không tìm thấy kết quả. Vui lòng làm bài thi trước.');
        window.location.href = 'index.html';
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

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.answer;
        let isCorrect = false;

        if (Array.isArray(userAnswer)) { // Multiple choice
            isCorrect = userAnswer.length === correctAnswer.length && userAnswer.every(val => correctAnswer.includes(val));
        } else { // Single choice
            isCorrect = correctAnswer.length === 1 && userAnswer === correctAnswer[0];
        }

        if (isCorrect) {
            correctCount++;
        }
        reviewItems.push({ question: q, userAnswer, isCorrect, index });
    });

    const incorrectCount = questions.length - correctCount;
    const score = (correctCount / questions.length) * 10;
    
    scoreTextEl.textContent = `${score.toFixed(2)}/10`;
    correctCountEl.textContent = `${correctCount}/${questions.length}`;
    incorrectCountEl.textContent = `${incorrectCount}/${questions.length}`;

    // --- THÊM MỚI: Lưu Lịch sử thi ---
    function saveHistory() {
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        const newEntry = {
            subject: subjectTitle,
            score: score,
            date: new Date().toLocaleDateString('vi-VN') // Định dạng ngày Việt Nam
        };
        // Thêm vào đầu mảng và giới hạn 10 lần thi gần nhất
        history.unshift(newEntry);
        localStorage.setItem('quizHistory', JSON.stringify(history.slice(0, 10)));
    }
    saveHistory();
    // --- KẾT THÚC PHẦN THÊM MỚI ---

    // Render chart
    new Chart(chartCanvas, {
        type: 'doughnut',
        data: {
            labels: ['Đúng', 'Sai'],
            datasets: [{
                data: [correctCount, incorrectCount],
                backgroundColor: ['#28a745', '#dc3545'],
                borderColor: ['#ffffff', '#ffffff'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });


    function renderReview(filter = 'all') {
        reviewContainerEl.innerHTML = '';
        const filteredItems = reviewItems.filter(item => {
            if (filter === 'correct') return item.isCorrect;
            if (filter === 'incorrect') return !item.isCorrect;
            return true;
        });

        if (filteredItems.length === 0) {
            reviewContainerEl.innerHTML = `<p>Không có câu hỏi nào.</p>`;
            return;
        }

        filteredItems.forEach(({ question, userAnswer, isCorrect, index }) => {
            const itemEl = document.createElement('div');
            itemEl.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

            let optionsHtml = question.options.map((option, optIndex) => {
                let className = '';
                const isCorrectAnswer = question.answer.includes(optIndex);
                const isUserChoice = Array.isArray(userAnswer) ? userAnswer.includes(optIndex) : userAnswer === optIndex;

                if (isCorrectAnswer) className = 'option-correct';
                if (isUserChoice && !isCorrectAnswer) className = 'option-incorrect';
                
                let checkMark = isUserChoice ? (isCorrect ? ' ✔️' : ' ❌') : (isCorrectAnswer ? ' ✔️' : '');

                return `<li class="${className}">${option}${checkMark}</li>`;
            }).join('');

            itemEl.innerHTML = `
                <h4>Câu ${index + 1}: ${question.question}</h4>
                <ol type="A" style="list-style-type: none; padding-left: 0;">${optionsHtml}</ol>
                <div class="explanation">
                    <strong>Giải thích:</strong> ${question.explanation}
                </div>
            `;
            reviewContainerEl.appendChild(itemEl);
        });
    }
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            renderReview(btn.id.replace('filter-', ''));
        });
    });

    document.getElementById('back-to-home-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    renderReview('all');
});