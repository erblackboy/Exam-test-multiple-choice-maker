// File này tổng hợp dữ liệu từ các môn học khác nhau.
// Để thêm một môn học mới, hãy tạo một file .js riêng cho môn đó trong thư mục /data/
// và định nghĩa một biến chứa các câu hỏi (ví dụ: eco101_questions).
// Sau đó, thêm nó vào đối tượng quizData bên dưới.

const quizData = {
    "SSL101c": {
        title: "Kỹ năng học tập thành công (SSL101c)",
        questions: ssl101c_questions
    },
    "AIG202c": {
        title: "Trí tuệ nhân tạo (AIG202c)",
        questions: aig202c_questions
    }
};
    // Ví dụ khi thêm môn mới:
    // "ECO101": {
    //     title: "Kinh tế vi mô (ECO101)",
    //     questions: eco101_questions // Biến này phải được định nghĩa trong file eco101.js
    // }

