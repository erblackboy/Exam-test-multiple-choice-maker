document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('subject-selection-container');
    if (!container) return;

    // Lấy danh sách các môn học từ database
    const subjects = Object.keys(quizData);

    subjects.forEach(subjectCode => {
        const subject = quizData[subjectCode];
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `<h3>${subject.title}</h3>`;
        card.addEventListener('click', () => {
            // Lưu môn học đã chọn vào localStorage để các trang sau sử dụng
            localStorage.setItem('selectedSubject', subjectCode);
            localStorage.setItem('selectedSubjectTitle', subject.title);
            window.location.href = 'subject.html';
        });
        container.appendChild(card);
    });

    // Hiển thị lịch sử thi
    const historyContainer = document.getElementById('history-container');
    if (historyContainer) {
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        const historyBody = document.getElementById('history-body');
        historyBody.innerHTML = history.map(h => 
            `<tr><td>${h.subject}</td><td>${h.score.toFixed(2)}/10</td><td>${h.date}</td></tr>`
        ).join('');
    }

    // Thêm toggle dark mode
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.className = 'toggle-dark';
    toggle.addEventListener('change', () => document.body.classList.toggle('dark-mode'));
    document.body.appendChild(toggle);
});