# Hướng Dẫn Nâng Cấp và Bảo Trì Web Trắc Nghiệm

Đây là tài liệu hướng dẫn cách thêm môn học và câu hỏi mới vào hệ thống web trắc nghiệm.

## 1. Cấu trúc thư mục

Hệ thống được tổ chức theo cấu trúc module hóa để dễ dàng quản lý:

- `/data/`: Chứa toàn bộ dữ liệu câu hỏi.
  - `ssl101c.js`: File chứa câu hỏi cho môn SSL101c.
  - `database.js`: File tổng hợp tất cả các môn học.
- `/css/`: Chứa file CSS định dạng giao diện.
- `/js/`: Chứa các file JavaScript xử lý logic.
- `index.html`: Trang chủ để chọn môn học.
- `subject.html`: Trang chọn chế độ Lý thuyết/Bài tập.
- `quiz-setup.html`: Trang cài đặt số câu hỏi, thời gian.
- `quiz.html`: Trang làm bài thi.
- `results.html`: Trang hiển thị kết quả.

## 2. Cách thêm một môn học mới

Giả sử bạn muốn thêm môn `ECO101 - Kinh tế vi mô`.

### Bước 1: Tạo file dữ liệu câu hỏi

1.  Trong thư mục `data/`, tạo một file mới tên là `eco101.js`.
2.  Trong file này, khai báo một biến mảng chứa tất cả câu hỏi của môn học. Tên biến nên có quy tắc `[mã_môn]_questions`.

**Cấu trúc một đối tượng câu hỏi:**

```javascript
const eco101_questions = [
  {
    id: "eco101_001", // ID duy nhất: mã môn + số thứ tự
    question: "Nội dung câu hỏi ở đây...",
    // Thêm dòng này nếu câu hỏi có hình ảnh
    image: "path/to/your/image.jpg", // hoặc null nếu không có
    options: [
      "Lựa chọn A",
      "Lựa chọn B",
      "Lựa chọn C",
      "Lựa chọn D"
    ],
    // Đáp án là một mảng chứa chỉ số (index) của lựa chọn đúng.
    // Index bắt đầu từ 0.
    answer: [1], // Đáp án là B
    // Với câu hỏi nhiều đáp án, ví dụ B và D đúng:
    // answer: [1, 3],
    explanation: "Phần giải thích chi tiết cho đáp án."
  },
  // ... thêm các câu hỏi khác
];
```

### Bước 2: Tích hợp môn học mới vào hệ thống

1.  Mở file `data/database.js`.
2.  Thêm môn học mới vào đối tượng `quizData`.
3.  **Quan trọng**: Mở các file HTML (`index.html`, `quiz-setup.html`, `quiz.html`, `results.html`) và thêm một thẻ `<script>` để tải file dữ liệu mới của bạn. Thẻ này phải được đặt **trước** thẻ `<script src="data/database.js"></script>`.

**Ví dụ trong `data/database.js`:**

```javascript
// ... (nội dung hiện có)

const quizData = {
    "SSL101c": {
        title: "Kỹ năng học tập thành công (SSL101c)",
        questions: ssl101c_questions
    },
    // Thêm môn mới vào đây
    "ECO101": {
        title: "Kinh tế vi mô (ECO101)",
        questions: eco101_questions // Tên biến từ file eco101.js
    }
};
```

**Ví dụ thêm thẻ script trong `index.html`:**

```html
<script src="data/ssl101c.js"></script>
<script src="data/eco101.js"></script> <script src="data/database.js"></script>
<script src="js/main.js"></script>
```

Sau khi hoàn thành các bước trên, môn học mới sẽ tự động xuất hiện trên trang chủ và sẵn sàng để sử dụng.
