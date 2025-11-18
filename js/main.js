// File: js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('subject-selection-container');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // --- Dark Mode ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // --- Render Subjects by Semester ---
    if (container && typeof semesterLayout !== 'undefined' && typeof subjectDetails !== 'undefined') {
        container.innerHTML = ''; // Xóa nội dung cũ

        // Lặp qua từng kỳ trong semesterLayout
        for (const semesterName in semesterLayout) {
            const subjectIds = semesterLayout[semesterName];

            const semesterHeader = document.createElement('h2');
            semesterHeader.className = 'semester-header';
            semesterHeader.textContent = semesterName;
            container.appendChild(semesterHeader);

            const subjectGrid = document.createElement('div');
            subjectGrid.className = 'subject-grid';

            // Lặp qua ID các môn trong kỳ
            subjectIds.forEach(subjectId => {
                const subject = subjectDetails[subjectId]; // Tra cứu thông tin chi tiết
                if (!subject) return; // Bỏ qua nếu không tìm thấy thông tin

                const card = document.createElement('div');
                card.className = 'subject-card';
                if (subject.disabled) {
                    card.classList.add('disabled');
                }

                const subjectName = document.createElement('h3');
                subjectName.textContent = subject.title;

                const subjectDescription = document.createElement('p');
                subjectDescription.textContent = subject.description;

                card.appendChild(subjectDescription);
                card.appendChild(subjectName);
                
                card.addEventListener('click', () => {
                    if (!subject.disabled) {
                        if (subject.customLink) {
                            window.location.href = subject.customLink;
                        } else {
                            window.location.href = `subject.html?subject=${subjectId}`;
                        }
                    }
                });

                subjectGrid.appendChild(card);
            });
            
            container.appendChild(subjectGrid);
        }
    } else {
        // Thông báo lỗi này sẽ hiển thị nếu file database.js sai hoặc không được tải
        container.innerHTML = '<p>Không tải được dữ liệu môn học. Vui lòng kiểm tra lại file `data/database.js`.</p>';
    }
});