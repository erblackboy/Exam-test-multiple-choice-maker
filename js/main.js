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
        // Tối ưu hóa: Sử dụng DocumentFragment để giảm thiểu reflow/repaint
        const fragment = document.createDocumentFragment();

        // Lặp qua từng kỳ trong semesterLayout
        for (const semesterKey in semesterLayout) {
            const semester = semesterLayout[semesterKey];
            const subjectIds = semester.subjects;

            // Tạo tiêu đề học kỳ
            const semesterHeader = document.createElement('h2');
            semesterHeader.className = 'semester-header';
            semesterHeader.textContent = semester.title;
            fragment.appendChild(semesterHeader);

            // Tạo lưới chứa các môn học
            const subjectGrid = document.createElement('div');
            subjectGrid.className = 'subject-grid';

            // Lặp qua ID các môn trong kỳ
            subjectIds.forEach((subjectId, index) => {
                const subject = subjectDetails[subjectId]; // Tra cứu thông tin chi tiết
                if (!subject) {
                    console.warn(`Không tìm thấy thông tin cho môn học với ID: ${subjectId}`);
                    return; // Bỏ qua nếu không tìm thấy thông tin
                }

                // Tạo thẻ môn học
                const card = document.createElement('div');
                card.className = 'subject-card fade-in';
                card.style.animationDelay = `${index * 0.05}s`; // Hiệu ứng xuất hiện so le
                if (subject.disabled) {
                    card.classList.add('disabled');
                }

                // Sửa lỗi: Dùng createElement để tạo cấu trúc, an toàn và đúng thứ tự hơn
                const titleEl = document.createElement('h3');
                titleEl.textContent = subjectId.toUpperCase();

                const descEl = document.createElement('p');
                descEl.textContent = subject.title;

                card.appendChild(titleEl);
                card.appendChild(descEl);
                // --- Kết thúc sửa lỗi ---

                card.addEventListener('click', () => {
                    if (!subject.disabled) {
                        // Ưu tiên customLink, nếu không có thì dùng trang subject.html
                        window.location.href = subject.customLink || `subject.html?subject=${subjectId}`;
                    }
                });

                subjectGrid.appendChild(card);
            });
            
            fragment.appendChild(subjectGrid);
        }
        // Xóa nội dung cũ và chèn toàn bộ fragment vào DOM chỉ một lần
        container.innerHTML = ''; 
        container.appendChild(fragment);
    } else {
        // Thông báo lỗi này sẽ hiển thị nếu file database.js sai hoặc không được tải
        if (container) {
            container.innerHTML = '<p style="text-align:center; color:red;">Không tải được dữ liệu môn học. Vui lòng kiểm tra lại file <code>data/database.js</code> và các file dữ liệu.</p>';
        } else {
            console.error("Không tìm thấy phần tử chứa danh sách môn học (ID: subject-selection-container).");
        }
    }
});