// File: data/database.js
const subjectDetails = {
    // ... (SSL101c, AIG202c không đổi) ...
    "SSL101c": {
        title: "Kỹ năng học tập (SSL101c)",
        description: "Câu hỏi trắc nghiệm ôn tập.",
        dataFile: "data/ssl101c.js",
        questionVar: "ssl101c_questions",
        questions: []
    },
    "AIG202c": {
        title: "Trí tuệ nhân tạo (AIG202c)",
        description: "Câu hỏi trắc nghiệm ôn tập.",
        dataFile: "data/aig202c.js",
        questionVar: "aig202c_questions",
        questions: []
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
        customLink: "MAI391_Web/MAI391_index.html", // Vẫn giữ customLink
        dataFile: "data/mai391.js",
        questionVar: "mai391_questions",
        questions: []
    },
    "JPD123": {
        title: "Tiếng Nhật 2 (JPD123)",
        description: "Bài 4,5,6,7 từ vựng và ngữ pháp.",
        customLink: "JPD123_Web/JPD123_index.html" 
    },
    "ADY201m": {
        title: "Phát triển Năng lực Doanh nghiệp (ADY201m)",
        description: "Câu hỏi trắc nghiệm ôn tập.",
        dataFile: "data/ady201m_questions.js",
        questionVar: "ady201m_questions",
        questions: []
    }
    ,
    "DBI202": {
        title: "Hệ quản trị Cơ sở dữ liệu (DBI202)",
        description: "Câu hỏi trắc nghiệm ôn tập.",
        dataFile: "data/dbi202_questions.js",
        questionVar: "dbi202_questions",
        questions: []
    }
};

const semesterLayout = {
    "Học Kỳ 2": ["SSL101c", "AIG202c", "DBI202", "JPD113"],
    "Học Kỳ 3": ["MAS291", "MAI391", "JPD123", "ADY201m"],
    // Thêm một kỳ học mới nếu cần
    // "Học Kỳ 4": ["Môn A", "Môn B"]
};

const quizData = subjectDetails;