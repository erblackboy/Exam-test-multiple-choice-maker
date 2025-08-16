document.addEventListener('DOMContentLoaded', () => {
    const quizSessionData = localStorage.getItem('quizSession');
    if (!quizSessionData) {
        alert('Không tìm thấy dữ liệu bài thi. Vui lòng thử lại.');
        window.location.href = 'index.html';
        return;
    }

    const { subjectCode, questions, timeLimit } = JSON.parse(quizSessionData);
    
    // Khai báo các biến DOM
    const subjectCodeEl = document.getElementById('quiz-subject-code');
    const timerEl = document.getElementById('timer');
    const questionCounterEl = document.getElementById('question-counter');
    const questionTextEl = document.getElementById('question-text');
    const questionImageEl = document.getElementById('question-image');
    const optionsContainerEl = document.getElementById('options-container');
    const paletteContainerEl = document.getElementById('palette-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmSubmitBtn = document.getElementById('confirm-submit-btn');
    const cancelSubmitBtn = document.getElementById('cancel-submit-btn');

    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let timeLeft = timeLimit;
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert('Hết giờ làm bài!');
                submitQuiz();
                return;
            }
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    function renderPalette() {
        paletteContainerEl.innerHTML = '';
        questions.forEach((_, index) => {
            const paletteBtn = document.createElement('button');
            paletteBtn.className = 'palette-btn';
            paletteBtn.textContent = index + 1;
            if (userAnswers[index] !== null && userAnswers[index].length !== 0) {
                paletteBtn.classList.add('answered');
            }
            if (index === currentQuestionIndex) {
                paletteBtn.classList.add('current');
            }
            paletteBtn.addEventListener('click', () => {
                currentQuestionIndex = index;
                loadQuestion(currentQuestionIndex);
            });
            paletteContainerEl.appendChild(paletteBtn);
        });
    }

    function loadQuestion(index) {
        const question = questions[index];
        questionCounterEl.textContent = `Câu ${index + 1}/${questions.length}`;
        questionTextEl.innerHTML = question.question;

        if (question.image) {
            // QUAN TRỌNG: Thêm đường dẫn thư mục 'imgs/'
            questionImageEl.src = `imgs/${question.image}`;
            questionImageEl.style.display = 'block';
        } else {
            questionImageEl.style.display = 'none';
        }
        
        optionsContainerEl.innerHTML = '';
        const isMultiChoice = Array.isArray(question.answer) && question.answer.length > 1;

        question.options.forEach((option, optionIndex) => {
            const optionId = `q${index}_option${optionIndex}`;
            const wrapper = document.createElement('div');
            wrapper.className = 'option-item';

            const input = document.createElement('input');
            input.type = isMultiChoice ? 'checkbox' : 'radio';
            input.name = `question${index}`;
            input.id = optionId;
            input.value = optionIndex;

            const label = document.createElement('label');
            label.htmlFor = optionId;
            label.innerHTML = option;

            wrapper.appendChild(input);
            wrapper.appendChild(label);
            optionsContainerEl.appendChild(wrapper);

            const savedAnswer = userAnswers[index];
            if (savedAnswer !== null) {
                if (Array.isArray(savedAnswer) && savedAnswer.includes(optionIndex)) {
                    input.checked = true;
                } else if (!Array.isArray(savedAnswer) && savedAnswer === optionIndex) {
                    input.checked = true;
                }
            }
            input.addEventListener('change', () => handleOptionSelect(index, isMultiChoice));
        });

        updateNavButtons();
        renderPalette();
    }

    function handleOptionSelect(questionIndex, isMultiChoice) {
        const inputs = optionsContainerEl.querySelectorAll(`input[name="question${questionIndex}"]`);
        if (isMultiChoice) {
            const selected = [];
            inputs.forEach(input => {
                if (input.checked) {
                    selected.push(parseInt(input.value));
                }
            });
            userAnswers[questionIndex] = selected.length > 0 ? selected : null;
        } else {
            inputs.forEach(input => {
                if (input.checked) {
                    userAnswers[questionIndex] = parseInt(input.value);
                }
            });
        }
        renderPalette();
    }
    
    function updateNavButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    }
    
    function submitQuiz() {
        clearInterval(timerInterval);
        const results = {
            questions,
            userAnswers,
            subjectTitle: quizData[subjectCode].title
        };
        localStorage.setItem('quizResults', JSON.stringify(results));
        localStorage.removeItem('quizSession');
        window.location.href = 'results.html';
    }

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    });

    submitBtn.addEventListener('click', () => confirmModal.style.display = 'flex');
    cancelSubmitBtn.addEventListener('click', () => confirmModal.style.display = 'none');
    confirmSubmitBtn.addEventListener('click', submitQuiz);
    window.addEventListener('click', (event) => {
        if (event.target == confirmModal) {
            confirmModal.style.display = 'none';
        }
    });

    // Initial Load
    subjectCodeEl.textContent = subjectCode;
    loadQuestion(currentQuestionIndex);
    startTimer();
});