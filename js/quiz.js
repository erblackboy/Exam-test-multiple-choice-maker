document.addEventListener('DOMContentLoaded', () => {
    const quizSessionData = localStorage.getItem('quizSession');
    if (!quizSessionData) {
        alert('Không tìm thấy dữ liệu bài thi. Vui lòng thử lại.');
        window.location.href = 'index.html';
        return;
    }

    const { subjectCode, subjectTitle, questions, timeLimit } = JSON.parse(quizSessionData);
    
    // DOM Elements
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

            const answer = userAnswers[index];
            if (answer !== null && (!Array.isArray(answer) || answer.length > 0)) {
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
        // --- TỐI ƯU HÓA: Thêm hiệu ứng mờ khi tải câu hỏi mới ---
        const quizMain = document.querySelector('.quiz-main');
        quizMain.style.opacity = '0.5';

        const question = questions[index];
        questionCounterEl.textContent = `Câu ${index + 1}/${questions.length}`;
        questionTextEl.innerHTML = question.question;

        if (question.image) {
            questionImageEl.src = `imgs/${question.image}`;
            questionImageEl.style.display = 'block';
        } else {
            questionImageEl.style.display = 'none';
            questionImageEl.src = '';
        }

        optionsContainerEl.innerHTML = '';
        // --- TỐI ƯU HÓA LOGIC: Kiểm tra đáp án là mảng hay không ---
        // Điều này đáng tin cậy hơn là kiểm tra length, vì câu 1 đáp án có thể lưu là [2]
        const isMultiChoice = Array.isArray(question.answer);

        question.options.forEach((option, optionIndex) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'option-item';
            const input = document.createElement('input');
            input.type = isMultiChoice ? 'checkbox' : 'radio';
            input.name = `question${index}`;
            input.id = `option${optionIndex}_${index}`;
            input.value = optionIndex;

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.innerHTML = option;

            wrapper.appendChild(input);
            wrapper.appendChild(label);
            optionsContainerEl.appendChild(wrapper);

            wrapper.addEventListener('click', () => {
                if (isMultiChoice) {
                    input.checked = !input.checked;
                } else {
                    input.checked = true;
                }
                handleOptionSelect(index, isMultiChoice);
            });

            const savedAnswer = userAnswers[index];
            if (savedAnswer !== null) {
                if (isMultiChoice && Array.isArray(savedAnswer) && savedAnswer.includes(optionIndex)) {
                    input.checked = true;
                    wrapper.classList.add('selected');
                } else if (!isMultiChoice && savedAnswer === optionIndex) {
                    input.checked = true;
                    wrapper.classList.add('selected');
                }
            }
        });

        updateNavButtons();
        renderPalette();
        
        // Trigger MathJax to render all formulas (question and options) together
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([questionTextEl, optionsContainerEl]).then(() => {}).catch((err) => console.log('MathJax typeset error:', err));
        }

        setTimeout(() => {
            quizMain.style.opacity = '1';
        }
    }

    function handleOptionSelect(questionIndex, isMultiChoice) {
        const inputs = optionsContainerEl.querySelectorAll(`input[name="question${questionIndex}"]`);
        if (isMultiChoice) {
            const selected = [];
            inputs.forEach(input => {
                if (input.checked) {
                    selected.push(parseInt(input.value));
                    input.parentElement.classList.add('selected');
                } else {
                    input.parentElement.classList.remove('selected');
                }
            });
            userAnswers[questionIndex] = selected;
        } else {
            let selectedValue = null;
            inputs.forEach(input => {
                if (input.checked) {
                    selectedValue = parseInt(input.value);
                    input.parentElement.classList.add('selected');
                } else {
                    input.parentElement.classList.remove('selected');
                }
            });
            userAnswers[questionIndex] = selectedValue;
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
            subjectTitle
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

    submitBtn.addEventListener('click', () => {
        confirmModal.style.display = 'flex';
    });

    cancelSubmitBtn.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    });

    confirmSubmitBtn.addEventListener('click', submitQuiz);

    window.addEventListener('click', (event) => {
        if (event.target === confirmModal) {
            confirmModal.style.display = 'none';
        }
    });

    // Initial Load
    subjectCodeEl.textContent = subjectTitle;
    loadQuestion(currentQuestionIndex);
    startTimer();
});