document.addEventListener('DOMContentLoaded', () => {
    // Hàm tải script động
    // --- TỐI ƯU HÓA: Thêm màn hình chờ ---
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<p style="font-size: 1.5em;">Đang tải dữ liệu...</p>';
    document.body.appendChild(loadingOverlay);
    loadingOverlay.style.display = 'none'; // Ẩn ban đầu
    // --- KẾT THÚC ---

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Không thể tải script: ${src}`));
            document.head.appendChild(script);
        });
    }

    // Hàm khởi tạo chính
    async function initializeQuizSetup() {
        const urlParams = new URLSearchParams(window.location.search);
        const subjectCode = urlParams.get('subject');

        if (subjectCode && quizData[subjectCode]) {
            const subjectInfo = quizData[subjectCode];
            
            if (!subjectInfo.dataFile) {
                alert(`Môn học ${subjectInfo.title} chưa được cấu hình tệp dữ liệu.`);
                window.location.href = 'index.html';
                return;
            }

            try {
                // --- TỐI ƯU HÓA: Hiển thị màn hình chờ ---
                loadingOverlay.style.display = 'flex';
                // --- KẾT THÚC ---
                await loadScript(subjectInfo.dataFile);
                // Sử dụng thuộc tính questionVar để lấy đúng tên biến
                const questions = window[subjectInfo.questionVar];

                if (!questions || questions.length === 0) {
                    throw new Error('Tệp dữ liệu không chứa câu hỏi hoặc có lỗi.');
                }

                // Gán câu hỏi vào subjectDetails để các phần khác có thể dùng
                subjectDetails[subjectCode].questions = questions;

                // Bắt đầu logic của trang setup
                setupUI(subjectCode, subjectInfo.title, questions);

            } catch (error) {
                console.error(error);
                alert(`Đã xảy ra lỗi khi tải dữ liệu câu hỏi cho môn ${subjectInfo.title}.`);
                window.location.href = 'index.html';
            } finally {
                // --- TỐI ƯU HÓA: Luôn ẩn màn hình chờ ---
                loadingOverlay.style.display = 'none';
            }
        } else {
            alert("Mã môn học không hợp lệ.");
            window.location.href = 'index.html';
        }
    }

    function setupUI(subjectCode, subjectTitle, questions) {
        const maxQuestions = questions.length;
        const maxQuestionsSpan = document.getElementById('max-questions');
        const numQuestionsInput = document.getElementById('num-questions');
        const timeLimitInput = document.getElementById('time-limit');
        const startQuizBtn = document.getElementById('start-quiz-btn');
        const backBtn = document.getElementById('back-to-subject-btn');
        const setupTitle = document.getElementById('setup-title');
        const subjectBreadcrumbLink = document.getElementById('subject-breadcrumb-link');

        let backUrl = 'subject.html?subject=' + subjectCode;
        if (quizData[subjectCode] && quizData[subjectCode].customLink) {
            backUrl = quizData[subjectCode].customLink;
        }

        subjectBreadcrumbLink.href = backUrl;
        subjectBreadcrumbLink.textContent = subjectTitle;

        setupTitle.textContent = `Thiết Lập Bài Thi: ${subjectTitle}`;
        maxQuestionsSpan.textContent = maxQuestions;
        numQuestionsInput.value = Math.min(50, maxQuestions);
        numQuestionsInput.max = maxQuestions;

        backBtn.addEventListener('click', () => {
            window.location.href = `subject.html?subject=${subjectCode}`;
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

            const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
            const selectedQuestions = shuffledQuestions.slice(0, numQuestions);

            const quizSettings = {
                subjectCode,
                subjectTitle,
                questions: selectedQuestions,
                timeLimit: timeLimit * 60
            };
            localStorage.setItem('quizSession', JSON.stringify(quizSettings));
            window.location.href = 'quiz.html';
        });
    }

    initializeQuizSetup();
});