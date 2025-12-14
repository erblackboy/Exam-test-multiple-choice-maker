document.addEventListener('DOMContentLoaded', function () {
    const subjectTitleEl = document.getElementById('subject-title');
    const breadcrumbNameEl = document.getElementById('subject-breadcrumb-name');
    const flashcardBtn = document.getElementById('flashcard-mode-btn');
    const quizBtn = document.getElementById('quiz-mode-btn');
    const modeSelectionContainer = document.querySelector('.mode-selection-container');

    // 1. Lấy mã môn học từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const subjectCode = urlParams.get('subject');

    // 2. Kiểm tra xem subjectDetails đã được tải chưa
    if (typeof subjectDetails === 'undefined') {
        displayError("Lỗi: Không thể tải dữ liệu môn học (database.js).");
        return;
    }

    // 3. Tìm thông tin môn học và kiểm tra sự tồn tại
    const subject = subjectDetails[subjectCode];

    if (!subjectCode || !subject) {
        // 4. Xử lý lỗi nếu không tìm thấy môn học
        displayError(`Lỗi: Không tìm thấy môn học với mã "${subjectCode || 'trống'}".`);
        return;
    }

    // 5. Cập nhật giao diện với thông tin môn học
    subjectTitleEl.textContent = subject.title;
    breadcrumbNameEl.textContent = subject.title;

    // 6. Thiết lập sự kiện click cho các nút chế độ
    // Xác định mã môn học sẽ được sử dụng cho flashcard và quiz
    const flashcardSubjectCode = subject.flashcardSubject || subjectCode;
    const quizSubjectCode = subject.quizSubject || subjectCode;

    flashcardBtn.addEventListener('click', () => {
        // Sửa lỗi: Kiểm tra đúng mã môn học cho flashcard
        if (subjectDetails[flashcardSubjectCode]) {
            window.location.href = `flashcards.html?subject=${flashcardSubjectCode}`;
        }
    });

    quizBtn.addEventListener('click', () => {
        // Sửa lỗi: Kiểm tra đúng mã môn học cho quiz
        if (subjectDetails[quizSubjectCode]) {
            window.location.href = `quiz-setup.html?subject=${quizSubjectCode}`;
        }
    });

    // Hàm tiện ích để hiển thị lỗi
    function displayError(message) {
        subjectTitleEl.textContent = "Lỗi";
        breadcrumbNameEl.textContent = "Lỗi";
        modeSelectionContainer.innerHTML = `<p style="color: red; text-align: center;">${message}<br>Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.</p>`;
    }
});