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

    // Cập nhật tiêu đề và breadcrumb
    document.getElementById('subject-title').textContent = subject.title;
    document.getElementById('subject-breadcrumb-name').textContent = subject.title;
    document.title = `Học tập: ${subject.title}`;

    const flashcardModeBtn = document.getElementById('flashcard-mode-btn');
    const quizModeBtn = document.getElementById('quiz-mode-btn');

    // Xử lý sự kiện khi chọn "Học với Flashcard"
    flashcardModeBtn.addEventListener('click', () => {
        // Thay vì kiểm tra `questions.length`, kiểm tra xem môn học có được cấu hình để có câu hỏi không
        if (!subject.dataFile) {
            alert(`Môn ${subject.title} chưa được cấu hình dữ liệu câu hỏi.`);
            return;
        }

        // Chuẩn bị dữ liệu cho phiên flashcard
        const flashcardSettings = {
            subjectCode: subjectCode,
            subjectTitle: subject.title
            // Không cần gửi 'questions' nữa vì nó sẽ được tải động trên trang flashcards.html
        };

        // Lưu vào localStorage và chuyển trang
        localStorage.setItem('flashcardSession', JSON.stringify(flashcardSettings));
        window.location.href = 'flashcards.html';
    });

    // Xử lý sự kiện khi chọn "Làm Trắc Nghiệm"
    quizModeBtn.addEventListener('click', () => {
        window.location.href = `quiz-setup.html?subject=${subjectCode}`;
    });
});