// File: data/database.js
const subjectDetails = {
    // ... (SSL101c, AIG202c không đổi) ...
    "SSL101c": {
        title: "Kỹ năng học tập (SSL101c)",
        description: "Câu hỏi trắc nghiệm ôn tập.",
        questions: typeof ssl101c_questions !== 'undefined' ? ssl101c_questions : []
    },
    "AIG202c": {
        title: "Trí tuệ nhân tạo (AIG202c)",
        description: "Câu hỏi trắc nghiệm ôn tập.",
        questions: typeof aig202c_questions !== 'undefined' ? aig202c_questions : []
    },
    
    // --- SỬA CÁC ĐƯỜNG DẪN customLink ---
    "JPD113": {
        title: "Tiếng Nhật 1 (JPD113)",
        description: "Bài 1,2,3 từ vựng, ngữ pháp và bảng chữ cái.",
        customLink: "JPD113_Web/JPD113_index.html" 
    },
    "MAS291": {
        title: "Xác suất Thống kê (MAS291)",
        description: "Sổ tay, lý thuyết và bài tập.",
        customLink: "MAS291_Web/MAS291_index.html" 
    },
    "MAI391": {
        title: "Toán ứng dụng và AI (MAI391)",
        description: "Mathematics for Machine Learning.",
        customLink: "MAI391_Web/MAI391_index.html",
        questions: typeof mai391_questions !== 'undefined' ? mai391_questions : []
    },
    "JPD123": {
        title: "Tiếng Nhật 2 (JPD123)",
        description: "Bài 4,5,6,7 từ vựng và ngữ pháp.",
        customLink: "JPD123_Web/JPD123_index.html" 
    },
    "ADY201m": {
        title: "Phát triển Năng lực Doanh nghiệp (ADY201m)",
        description: "Chưa có dữ liệu.",
        disabled: true
    }
};

const semesterLayout = {
    "Học Kỳ 2": ["SSL101c", "AIG202c", "JPD113"],
    "Học Kỳ 3": ["MAS291", "MAI391", "JPD123", "ADY201m"]
};

const quizData = subjectDetails;