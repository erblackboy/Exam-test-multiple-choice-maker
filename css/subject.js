// File: js/subject.js

document.addEventListener('DOMContentLoaded', () => {
    // Đảm bảo các biến dữ liệu đã được tải
    if (typeof quizData === 'undefined' || typeof subjectDetails === 'undefined') {
        console.error("Dữ liệu môn học (quizData) chưa được tải.");
        alert("Lỗi tải dữ liệu, vui lòng thử lại.");
        window.location.href = 'index.html';
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const subjectCode = urlParams.get('subject');

    if (!subjectCode || !subjectDetails[subjectCode]) {
        alert("Mã môn học không hợp lệ.");
        window.location.href = 'index.html';
        return;
    }

    const subject = subjectDetails[subjectCode];
    const allQuestions = subject.questions || [];

    // Cập nhật tiêu đề và breadcrumb
    document.getElementById('subject-title').textContent = subject.title;
    document.getElementById('subject-breadcrumb').textContent = subject.title;
    document.title = `Học tập: ${subject.title}`;

    const quizModeBtn = document.getElementById('quiz-mode-btn');
    const flashcardModeBtn = document.getElementById('flashcard-mode-btn');

    // Xử lý sự kiện khi chọn "Làm Trắc Nghiệm"
    quizModeBtn.addEventListener('click', () => {
        if (allQuestions.length === 0) {
            alert(`Môn ${subject.title} chưa có dữ liệu câu hỏi trắc nghiệm.`);
            return;
        }
        // Chuyển đến trang thiết lập bài thi
        window.location.href = `quiz-setup.html?subject=${subjectCode}`;
    });

    // Xử lý sự kiện khi chọn "Học với Flashcard"
    flashcardModeBtn.addEventListener('click', () => {
        if (allQuestions.length === 0) {
            alert(`Môn ${subject.title} chưa có dữ liệu câu hỏi cho Flashcard.`);
            return;
        }

        // Chuẩn bị dữ liệu cho phiên flashcard
        const flashcardSettings = {
            subjectCode: subjectCode,
            subjectTitle: subject.title,
            questions: allQuestions // Lấy tất cả câu hỏi
        };

        // Lưu vào localStorage và chuyển trang
        localStorage.setItem('flashcardSession', JSON.stringify(flashcardSettings));
        window.location.href = 'flashcards.html';
    });
});