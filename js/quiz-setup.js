// Đảm bảo quizData đã được load trước khi chạy
function initQuizSetup() {
    // Kiểm tra quizData đã sẵn sàng chưa
    if (typeof quizData === 'undefined') {
        console.error('quizData chưa được định nghĩa! Đang đợi...');
        setTimeout(initQuizSetup, 100);
        return;
    }
    
    // Check URL parameters first, then localStorage
    const urlParams = new URLSearchParams(window.location.search);
    let subjectCode = urlParams.get('subject');
    let subjectTitle = null;
    
    if (subjectCode && quizData[subjectCode]) {
        subjectTitle = quizData[subjectCode].title;
        localStorage.setItem('selectedSubject', subjectCode);
        localStorage.setItem('selectedSubjectTitle', subjectTitle);
    } else {
        subjectCode = localStorage.getItem('selectedSubject');
        if (subjectCode && quizData[subjectCode]) {
            subjectTitle = quizData[subjectCode].title;
        } else {
            subjectTitle = localStorage.getItem('selectedSubjectTitle');
        }
    }
    
    if (!subjectCode || !quizData[subjectCode]) {
        alert("Vui lòng chọn một môn học trước!");
        window.location.href = 'index.html';
        return;
    }
    
    // Ensure subjectTitle is set from quizData
    if (!subjectTitle) {
        subjectTitle = quizData[subjectCode].title;
    }

    // Kiểm tra xem có questions không
    if (!quizData[subjectCode].questions || quizData[subjectCode].questions.length === 0) {
        alert(`Môn học ${subjectTitle} chưa có câu hỏi. Vui lòng kiểm tra lại file data.`);
        console.error(`Subject ${subjectCode} has no questions.`, {
            subjectCode: subjectCode,
            subject: quizData[subjectCode],
            questions: quizData[subjectCode].questions,
            mai391_questions_loaded: typeof mai391_questions !== 'undefined',
            mai391_questions_count: typeof mai391_questions !== 'undefined' ? mai391_questions.length : 0,
            quizData_keys: Object.keys(quizData)
        });
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

    // --- SỬA LỖI LOGIC ---
    // Xác định đúng trang để quay về và cập nhật breadcrumb
    const subjectBreadcrumbLink = document.getElementById('subject-breadcrumb-link');
    let backUrl = 'subject.html'; // Mặc định cho các môn không có customLink

    if (quizData[subjectCode].customLink) {
        // Nếu là môn có trang riêng (như MAI391, MAS291)
        backUrl = quizData[subjectCode].customLink;
    }

    subjectBreadcrumbLink.href = backUrl;
    subjectBreadcrumbLink.textContent = subjectTitle;
    // --- KẾT THÚC SỬA LỖI ---

    setupTitle.textContent = `Thiết Lập Bài Thi: ${subjectTitle}`;
    maxQuestionsSpan.textContent = maxQuestions;
    numQuestionsInput.value = Math.min(50, maxQuestions); 
    numQuestionsInput.max = maxQuestions;

    backBtn.addEventListener('click', () => {
        window.location.href = backUrl; // Sửa để quay về đúng trang
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
}

// Chạy khi DOM đã sẵn sàng
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuizSetup);
} else {
    // DOM đã loaded
    initQuizSetup();
}