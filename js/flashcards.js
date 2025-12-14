document.addEventListener('DOMContentLoaded', () => {

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Không thể tải script: ${src}`));
            document.head.appendChild(script);
        });
    }

    // Hàm khởi tạo chính
    async function initializeFlashcards() {
        // --- TỐI ƯU HÓA: Quản lý màn hình chờ bên trong hàm async ---
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        loadingOverlay.innerHTML = '<p style="font-size: 1.5em;">Đang tải dữ liệu...</p>';
        document.body.appendChild(loadingOverlay);
        // --- KẾT THÚC TỐI ƯU HÓA ---

        const urlParams = new URLSearchParams(window.location.search);
        const subjectCode = urlParams.get('subject');

        if (!subjectCode || !subjectDetails[subjectCode]) {
            alert('Mã môn học không hợp lệ hoặc không được cung cấp.');
            window.location.href = 'index.html';
            return;
        }

        const subjectInfo = subjectDetails[subjectCode]; 
        // Lấy title từ subjectDetails, nếu không có thì lấy từ subjectCode
        const subjectTitle = subjectInfo.title || subjectDetails[subjectCode].title || subjectCode;
        
        try {
            if (!subjectInfo.dataFile) {
                throw new Error(`Môn học ${subjectCode} chưa được cấu hình tệp dữ liệu.`);
            }

            loadingOverlay.style.display = 'flex'; // Hiển thị màn hình chờ

            await loadScript(subjectInfo.dataFile);
            // Sử dụng thuộc tính questionVar để lấy đúng tên biến
            const questions = window[subjectInfo.questionVar];
            
            if (!questions || questions.length === 0) {
                throw new Error(`Tệp dữ liệu ${subjectInfo.dataFile} không chứa câu hỏi hoặc có lỗi. (Biến: ${subjectInfo.questionVar})`);
            }

            // Bắt đầu logic của trang flashcard từ đây
            setupUI(subjectCode, subjectTitle, questions);

        } catch (error) {
            console.error(error);
            alert('Đã xảy ra lỗi khi tải dữ liệu câu hỏi: ' + error.message);
        } finally {
            // --- TỐI ƯU HÓA: Luôn ẩn màn hình chờ sau khi hoàn tất hoặc có lỗi ---
            loadingOverlay.style.display = 'none';
            // --- KẾT THÚC TỐI ƯU HÓA ---
        }
    }

    function setupUI(subjectCode, subjectTitle, questions) {
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
        let originalQuestions = [...questions]; // Lưu trữ bộ câu hỏi gốc

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
            flipCard.classList.remove('flipped');
            optionsContainerEl.classList.remove('answered');
            explanationEl.style.display = 'none';

            const front = flipCard.querySelector('.flip-card-front');
            const inner = flipCard.querySelector('.flip-card-inner');
            inner.style.height = 'auto'; // Reset height

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

            const setCardHeight = () => {
                const frontHeight = front.scrollHeight;
                const back = flipCard.querySelector('.flip-card-back');
                const backHeight = back.scrollHeight;

                // Lưu chiều cao vào data attributes
                inner.dataset.frontHeight = `${frontHeight}px`;
                inner.dataset.backHeight = `${backHeight}px`;

                // Đặt chiều cao ban đầu cho mặt trước
                inner.style.height = inner.dataset.frontHeight;
            };

            if (window.MathJax && window.MathJax.typesetPromise) {
                // --- TỐI ƯU HÓA: Chờ MathJax render xong rồi mới tính chiều cao ---
                window.MathJax.typesetPromise([questionTextEl, optionsContainerEl])
                    .then(() => setCardHeight())
                    .catch(err => console.log('MathJax typeset error:', err));
            } else {
                // Fallback nếu không có MathJax
                setTimeout(setCardHeight, 0);
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
            for (let i = questions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [questions[i], questions[j]] = [questions[j], questions[i]];
            }
            currentQuestionIndex = 0;
            answeredState = new Array(questions.length).fill(false);
            loadQuestion(currentQuestionIndex);
            alert('Đã xáo trộn thứ tự câu hỏi!');
        }

        function updateNavButtons() {
            prevBtn.disabled = currentQuestionIndex === 0;
            nextBtn.disabled = currentQuestionIndex === questions.length - 1;
        }

        flipBtn.addEventListener('click', () => {
            const inner = flipCard.querySelector('.flip-card-inner');
            const isFlipped = flipCard.classList.contains('flipped');

            // --- SỬA LỖI GIAO DIỆN: Sử dụng chiều cao đã lưu sẵn ---
            // Đặt chiều cao MỚI trước khi kích hoạt hiệu ứng lật
            inner.style.height = isFlipped ? inner.dataset.frontHeight : inner.dataset.backHeight;

            // Kích hoạt hiệu ứng lật
            flipCard.classList.toggle('flipped');
        });

        shuffleBtn.addEventListener('click', shuffleQuestions);
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
        backToHomeBtn.addEventListener('click', () => { window.location.href = 'index.html'; });

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
        }
    }

    initializeFlashcards();
});