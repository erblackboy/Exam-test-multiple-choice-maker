document.addEventListener('DOMContentLoaded', () => {
    const subjectCode = localStorage.getItem('selectedSubject');
    const subjectTitle = localStorage.getItem('selectedSubjectTitle');
    
    if (!subjectCode || !quizData[subjectCode]) {
        alert("Vui lòng chọn một môn học trước!");
        window.location.href = 'index.html';
        return;
    }

    const maxQuestions = quizData[subjectCode].questions.length;
    const maxQuestionsSpan = document.getElementById('max-questions');
    const numQuestionsInput = document.getElementById('num-questions');
    const timeLimitInput = document.getElementById('time-limit');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const backBtn = document.getElementById('back-to-subject-btn');
    const setupTitle = document.getElementById('setup-title');

    setupTitle.textContent = `Thiết Lập Bài Thi: ${subjectTitle}`;
    maxQuestionsSpan.textContent = maxQuestions;
    // THAY ĐỔI: Đặt giá trị mặc định là 50 hoặc tối đa nếu ít hơn
    numQuestionsInput.value = Math.min(50, maxQuestions); 
    numQuestionsInput.max = maxQuestions;

    backBtn.addEventListener('click', () => {
        window.location.href = 'subject.html';
    });

    startQuizBtn.addEventListener('click', () => {
        const numQuestions = parseInt(numQuestionsInput.value);
        const timeLimit = parseInt(timeLimitInput.value);

        if (isNaN(numQuestions) || numQuestions <= 0 || numQuestions > maxQuestions) {
            alert(`Số câu hỏi phải nằm trong khoảng từ 1 đến ${maxQuestions}.`);
            return;
        }
        if (isNaN(timeLimit) || timeLimit <= 0) {
            alert("Thời gian phải là một số dương.");
            return;
        }

        const allQuestions = quizData[subjectCode].questions;
        const shuffledQuestions = [...allQuestions].sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, numQuestions);

        const quizSettings = {
            subjectCode,
            subjectTitle,
            questions: selectedQuestions,
            timeLimit: timeLimit * 60 // Chuyển sang giây
        };
        localStorage.setItem('quizSession', JSON.stringify(quizSettings));

        window.location.href = 'quiz.html';
    });
});