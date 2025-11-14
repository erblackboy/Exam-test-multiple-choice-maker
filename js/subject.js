document.addEventListener('DOMContentLoaded', () => {
    // Lấy subjectCode từ URL trước
    const urlParams = new URLSearchParams(window.location.search);
    let subjectCode = urlParams.get('subject');

    if (subjectCode) {
        // Nếu tìm thấy trong URL, lưu nó vào localStorage cho các trang sau
        localStorage.setItem('selectedSubject', subjectCode);
    } else {
        // Nếu không có trên URL, thử lấy từ localStorage (cho trường hợp quay lại)
        subjectCode = localStorage.getItem('selectedSubject');
    }

    // Kiểm tra cuối cùng
    if (!subjectCode || typeof quizData === 'undefined' || !quizData[subjectCode]) {
        alert("Không tìm thấy môn học. Vui lòng chọn lại từ trang chủ.");
        window.location.href = 'index.html';
        return;
    }
    
    // Lấy tên môn học trực tiếp từ quizData
    const subjectTitle = quizData[subjectCode].title;
    document.getElementById('subject-title').textContent = subjectTitle;

    document.getElementById('theory-btn').addEventListener('click', () => {
        window.location.href = 'flashcards.html';
    });

    document.getElementById('practice-btn').addEventListener('click', () => {
        window.location.href = 'quiz-setup.html';
    });
    
    document.getElementById('back-to-index-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});