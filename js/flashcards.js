document.addEventListener('DOMContentLoaded', () => {
    const subjectCode = localStorage.getItem('selectedSubject');
    
    if (!subjectCode || !quizData[subjectCode]) {
        alert("Vui lòng chọn môn học trước!");
        window.location.href = 'index.html';
        return;
    }
    
    const subjectTitle = quizData[subjectCode].title;
    document.getElementById('flashcard-title').textContent = `Flashcards: ${subjectTitle}`;
    
    const allQuestions = quizData[subjectCode].questions;
    if (!allQuestions || allQuestions.length === 0) {
        document.getElementById('flashcard-question-text').textContent = "Không có câu hỏi để hiển thị.";
        return;
    }

    let currentCardIndex = 0;

    const questionTextEl = document.getElementById('flashcard-question-text');
    const optionsAreaEl = document.getElementById('options-area');
    const feedbackAreaEl = document.getElementById('feedback-area');
    const feedbackTextEl = document.getElementById('feedback-text');
    const explanationTextEl = document.getElementById('explanation-text');
    const counterEl = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-flashcard-btn');
    const nextBtn = document.getElementById('next-flashcard-btn');

    function displayCard(index) {
        feedbackAreaEl.style.display = 'none';
        optionsAreaEl.innerHTML = '';
        
        const card = allQuestions[index];
        questionTextEl.innerHTML = `<b>Câu hỏi ${index + 1}:</b> ${card.question}`;
        counterEl.textContent = `Câu ${index + 1}/${allQuestions.length}`;
        
        // Xác định kiểu đáp án (mảng hay không)
        const isMultiChoice = Array.isArray(card.answer) && card.answer.length > 1;

        card.options.forEach((option, optionIndex) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'option-item';
            
            const input = document.createElement('input');
            // Sửa: Dùng isMultiChoice để quyết định radio hay checkbox
            input.type = isMultiChoice ? 'checkbox' : 'radio';
            input.name = `flashcard${index}`;
            input.id = `option${optionIndex}_${index}`;
            input.value = optionIndex;

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.innerHTML = option;

            wrapper.appendChild(input);
            wrapper.appendChild(label);
            optionsAreaEl.appendChild(wrapper);

            // Sửa: Chỉ gọi handleSelection khi click, không cần truyền tham số
            wrapper.addEventListener('click', () => handleSelection(card));
        });

        updateNavButtons();
        
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([questionTextEl, optionsAreaEl]).then(() => {}).catch((err) => console.log('MathJax typeset error:', err));
        }
    }

    // --- BẮT ĐẦU SỬA LỖI LOGIC ---
    function handleSelection(card) {
        const inputs = optionsAreaEl.querySelectorAll('input');
        const selectedIndexes = [];
        inputs.forEach(input => {
            if (input.checked) {
                selectedIndexes.push(parseInt(input.value));
            }
        });

        const correctAnswers = card.answer;
        let isCorrect = false;

        if (Array.isArray(correctAnswers)) {
            // Trường hợp 1: Đáp án là MẢNG (cho SSL101c, AIG202c)
            if (correctAnswers.length > 1) {
                // Nhiều đáp án đúng (so sánh 2 mảng)
                const sortedUser = [...selectedIndexes].sort();
                const sortedCorrect = [...correctAnswers].sort();
                isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
            } else {
                // Một đáp án đúng (lưu trong mảng 1 phần tử)
                isCorrect = selectedIndexes.length === 1 && selectedIndexes[0] === correctAnswers[0];
            }
        } else {
            // Trường hợp 2: Đáp án là SỐ (cho MAI391)
            isCorrect = selectedIndexes.length === 1 && selectedIndexes[0] === correctAnswers;
        }
        // --- KẾT THÚC SỬA LỖI LOGIC ---

        if (isCorrect) {
            feedbackTextEl.textContent = 'Chính xác! 🎉';
            feedbackTextEl.className = 'feedback-text feedback-correct';
        } else {
            feedbackTextEl.textContent = 'Không chính xác. 🙁';
            feedbackTextEl.className = 'feedback-text feedback-incorrect';
        }

        // Đánh dấu và vô hiệu hóa các lựa chọn
        optionsAreaEl.querySelectorAll('.option-item').forEach((item, optIndex) => {
            item.classList.add('disabled'); // Vô hiệu hóa click
            
            const isUserSelection = selectedIndexes.includes(optIndex);
            
            // Kiểm tra đáp án đúng (bất kể là mảng hay số)
            const isCorrectAnswer = Array.isArray(correctAnswers) ? 
                                    correctAnswers.includes(optIndex) : 
                                    correctAnswers === optIndex;

            if(isCorrectAnswer) {
                item.classList.add('option-correct');
            } else if (isUserSelection && !isCorrectAnswer) {
                item.classList.add('option-incorrect');
            }
        });

        explanationTextEl.innerHTML = `<b>Giải thích:</b> ${card.explanation || "Không có giải thích."}`;
        feedbackAreaEl.style.display = 'block';
        
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([explanationTextEl]).then(() => {}).catch((err) => console.log('MathJax typeset error:', err));
        }
    }
    // --- HẾT PHẦN SỬA LỖI ---

    function updateNavButtons() {
        prevBtn.disabled = currentCardIndex === 0;
        nextBtn.disabled = currentCardIndex === allQuestions.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            displayCard(currentCardIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < allQuestions.length - 1) {
            currentCardIndex++;
            displayCard(currentCardIndex);
        }
    });

    // Initial Load
    displayCard(currentCardIndex);
});