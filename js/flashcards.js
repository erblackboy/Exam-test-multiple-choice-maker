document.addEventListener('DOMContentLoaded', () => {
    const flashcardSessionData = localStorage.getItem('flashcardSession');
    if (!flashcardSessionData) {
        alert('Không tìm thấy dữ liệu flashcard. Vui lòng thử lại.');
        window.location.href = 'index.html';
        return;
    }

    const { subjectCode, subjectTitle, questions } = JSON.parse(flashcardSessionData);

    // DOM Elements
    const subjectBreadcrumbLink = document.getElementById('subject-breadcrumb-link');
    const subjectCodeEl = document.getElementById('flashcard-subject-code');
    const questionCounterEl = document.getElementById('question-counter');
    const questionTextEl = document.getElementById('flashcard-question-text');
    const questionImageEl = document.getElementById('question-image');
    const optionsContainerEl = document.getElementById('options-container');
    const explanationEl = document.querySelector('.explanation');
    const paletteContainerEl = document.getElementById('palette-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const flipBtn = document.getElementById('flip-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const flipCard = document.querySelector('.flip-card');
    const backToHomeBtn = document.getElementById('back-to-home-btn');

    let currentQuestionIndex = 0;
    let answeredState = new Array(questions.length).fill(false);

    function renderPalette() {
        paletteContainerEl.innerHTML = '';
        questions.forEach((_, index) => {
            const paletteBtn = document.createElement('button');
            paletteBtn.className = 'palette-btn';
            paletteBtn.textContent = index + 1;

            if (answeredState[index]) {
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
        // Reset card state
        flipCard.classList.remove('flipped');
        optionsContainerEl.classList.remove('answered');
        explanationEl.style.display = 'none';

        const question = questions[index];
        questionCounterEl.textContent = `Câu ${index + 1}/${questions.length}`;
        
        // Hiển thị câu hỏi ở mặt trước
        questionTextEl.innerHTML = question.question;
        if (question.image) {
            questionImageEl.src = `imgs/${question.image}`;
            questionImageEl.style.display = 'block';
        } else {
            questionImageEl.style.display = 'none';
            questionImageEl.src = '';
        }

        // Chuẩn bị đáp án ở mặt sau
        optionsContainerEl.innerHTML = '';
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
                if (optionsContainerEl.classList.contains('answered')) return;
                
                if (isMultiChoice) {
                    input.checked = !input.checked;
                } else {
                    input.checked = true;
                }
                checkAnswer(index);
            });
        });

        updateNavButtons();
        renderPalette();

        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([questionTextEl, optionsContainerEl]).catch(err => console.log('MathJax typeset error:', err));
        }
    }

    function checkAnswer(questionIndex) {
        if (optionsContainerEl.classList.contains('answered')) return;

        const question = questions[questionIndex];
        const options = optionsContainerEl.querySelectorAll('.option-item');
        const correctAnswer = question.answer;
        
        answeredState[questionIndex] = true;
        optionsContainerEl.classList.add('answered');

        options.forEach((wrapper, index) => {
            const input = wrapper.querySelector('input');
            input.disabled = true;

            const isCorrectOption = Array.isArray(correctAnswer) ? correctAnswer.includes(index) : (index === correctAnswer);
            const isUserChoice = input.checked;

            if (isCorrectOption) {
                wrapper.classList.add('option-correct');
            } else if (isUserChoice && !isCorrectOption) {
                wrapper.classList.add('option-incorrect');
            }
        });

        if (question.explanation) {
            explanationEl.innerHTML = `<strong>Giải thích:</strong> ${question.explanation || 'Không có giải thích.'}`;
            explanationEl.style.display = 'block';
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([explanationEl]).catch(err => console.log('MathJax typeset error:', err));
            }
        }
        
        renderPalette();
    }

    function shuffleQuestions() {
        // Thuật toán xáo trộn Fisher-Yates
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        // Reset lại trạng thái
        currentQuestionIndex = 0;
        answeredState = new Array(questions.length).fill(false);

        // Tải lại câu hỏi đầu tiên và giao diện
        loadQuestion(currentQuestionIndex);
        alert('Đã xáo trộn thứ tự câu hỏi!');
    }

    function updateNavButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    }

    // Event Listeners
    flipBtn.addEventListener('click', () => {
        const isFlipped = flipCard.classList.toggle('flipped');
        
        // --- THÊM LOGIC ĐIỀU CHỈNH CHIỀU CAO ---
        const front = flipCard.querySelector('.flip-card-front');
        const back = flipCard.querySelector('.flip-card-back');
        const inner = flipCard.querySelector('.flip-card-inner');

        if (isFlipped) {
            // Khi lật ra mặt sau, đặt chiều cao của thẻ bằng chiều cao của mặt sau
            inner.style.height = back.offsetHeight + 'px';
        } else {
            // Khi lật về mặt trước, đặt chiều cao bằng chiều cao của mặt trước
            inner.style.height = front.offsetHeight + 'px';
        }
    });

    shuffleBtn.addEventListener('click', () => {
        shuffleQuestions();
    });

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

    backToHomeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Initial Load
    if (subjectBreadcrumbLink) {
        subjectBreadcrumbLink.textContent = subjectTitle;
        subjectBreadcrumbLink.href = `subject.html?subject=${subjectCode}`;
    }
    if (subjectCodeEl) {
        subjectCodeEl.textContent = subjectTitle;
    }
    if (questions.length > 0) {
        loadQuestion(currentQuestionIndex);
    } else {
        document.querySelector('.flashcard-main').innerHTML = '<h1>Không có câu hỏi nào cho môn học này.</h1>';
        return;
    }
});