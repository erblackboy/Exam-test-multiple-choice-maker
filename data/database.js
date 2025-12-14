/**
 * This file acts as a simple database for the application.
 * It defines the subjects available and their arrangement by semester.
 */

// This object holds the details for each subject.
const subjectDetails = {
    // Semester 2
    ssl101c: {
        title: "Kỹ năng học tập",
        description: "Câu hỏi trắc nghiệm môn Kỹ năng học tập - SSL101c.",
        dataFile: 'data/ssl101c.js',
        questionVar: 'ssl101c_questions',
    },
    aig202c: {
        title: "Nhập môn trí tuệ nhân tạo",
        description: "Câu hỏi trắc nghiệm môn Nhập môn trí tuệ nhân tạo - AIG202c.",
        dataFile: 'data/aig202c.js',
        questionVar: 'aig202c_questions',
    },

    // Semester 3
    mai391: {
        title: "Toán cho Kỹ sư",
        description: "Câu hỏi trắc nghiệm môn Toán cho Kỹ sư - MAI391.",
        dataFile: 'data/mai391.js',
        questionVar: 'mai391_questions',
    },
    ite303c: {
        title: "AI và Luật (ITE303c)",
        description: "Câu hỏi trắc nghiệm về các khía cạnh đạo đức, xã hội và pháp lý của AI.",
        dataFile: 'data/import_ITE303c.js',
        questionVar: 'ite303c_questions',
    },

    // Custom Links from README
    jpd113: { title: "Tiếng Nhật 1", description: "Học từ vựng và ngữ pháp tiếng Nhật cơ bản.", customLink: "JPD113_Web/JPD113_index.html" },
    jpd123: { title: "Tiếng Nhật 2", description: "Học từ vựng và ngữ pháp tiếng Nhật trung cấp.", customLink: "JPD123_Web/JPD123_index.html" },
    mas291: { title: "Sổ tay Xác suất Thống kê", description: "Tổng hợp công thức và lý thuyết môn Xác suất Thống kê.", customLink: "MAS291_Web/MAS291_index.html" },
    mai391_web: { title: "Sổ tay Toán", description: "Tổng hợp công thức và lý thuyết môn Toán cho Kỹ sư.", customLink: "MAI391_Web/MAI391_index.html" },
};

// This object defines the layout of subjects by semester.
const semesterLayout = {
    semester2: {
        title: "Học Kỳ 2",
        subjects: ["ssl101c", "aig202c", "jpd113", "mas291"]
    },
    semester3: {
        title: "Học Kỳ 3",
        subjects: ["mai391", "ite303c", "jpd123", "mai391_web"]
    },
};

// Alias for compatibility with scripts expecting quizData
const quizData = subjectDetails;