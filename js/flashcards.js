document.addEventListener('DOMContentLoaded', () => {
    const subjectCode = localStorage.getItem('selectedSubject');
    const subjectTitle = localStorage.getItem('selectedSubjectTitle');

    if (!subjectCode || !quizData[subjectCode]) {
        alert("Vui lòng chọn môn học trước!");
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('flashcard-title').textContent = `Flashcards: ${subjectTitle}`;
    document.getElementById('breadcrumb-subject').textContent = subjectTitle;
    
    const allQuestions = quizData[subjectCode].questions;
    // Xáo trộn câu hỏi để mỗi lần học là một trải nghiệm mới
    const shuffledQuestions = [...allQuestions].sort(() => 0.5 - Math.random());

    let currentCardIndex = 0;

    const questionTextEl = document.getElementById('flashcard-question-text');
    const optionsAreaEl = document.getElementById('options-area');
    const feedbackAreaEl = document.getElementById('feedback-area');
    const feedbackTextEl = document.getElementById('feedback-text');
    const explanationTextEl = document.getElementById('explanation-text');
    const nextButton = document.getElementById('next-flashcard-btn');

    function displayCard(index) {
        // Reset
        feedbackAreaEl.style.display = 'none';
        optionsAreaEl.innerHTML = '';
        
        if (index >= shuffledQuestions.length) {
            questionTextEl.textContent = "Bạn đã hoàn thành tất cả các flashcards!";
            nextButton.textContent = "Học lại từ đầu";
            currentCardIndex = 0; // Reset để có thể học lại
            return;
        }

        const card = shuffledQuestions[index];
        questionTextEl.innerHTML = `<b>Câu hỏi ${index + 1}:</b> ${card.question}`;
        
        card.options.forEach((option, optionIndex) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option-btn';
            optionButton.innerHTML = option;
            optionButton.dataset.index = optionIndex;
            optionButton.addEventListener('click', handleOptionClick);
            optionsAreaEl.appendChild(optionButton);
        });
        
        nextButton.textContent = "Câu Tiếp Theo →";
    }

    function handleOptionClick(event) {
        const selectedButton = event.target;
        const selectedIndex = parseInt(selectedButton.dataset.index);
        const card = shuffledQuestions[currentCardIndex];
        const correctAnswers = card.answer;

        // Vô hiệu hóa tất cả các nút sau khi chọn
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

        const isCorrect = correctAnswers.includes(selectedIndex);

        if (isCorrect) {
            selectedButton.classList.add('correct');
            feedbackTextEl.textContent = 'Chính xác! 🎉';
            feedbackTextEl.className = 'feedback-correct';
        } else {
            selectedButton.classList.add('incorrect');
            feedbackTextEl.textContent = 'Không chính xác. 🙁';
            feedbackTextEl.className = 'feedback-incorrect';
            
            // Hiển thị đáp án đúng
            document.querySelectorAll('.option-btn').forEach(btn => {
                if (correctAnswers.includes(parseInt(btn.dataset.index))) {
                    btn.classList.add('correct');
                }
            });
        }
        
        explanationTextEl.textContent = card.explanation;
        feedbackAreaEl.style.display = 'block';
    }
    
    nextButton.addEventListener('click', () => {
        currentCardIndex++;
        displayCard(currentCardIndex);
    });

    // Tải thẻ đầu tiên
    displayCard(currentCardIndex);
});