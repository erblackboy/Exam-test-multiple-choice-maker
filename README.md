Chào bạn, tôi đã phân tích cấu trúc file mới từ các ảnh chụp màn hình bạn cung cấp.

Bạn đã thêm rất nhiều tính năng mới\! Trang web giờ đây có thêm các module nội dung riêng cho `JPD123_Web` và `MAI391_Web`, một trang `flashcards.html` chuyên dụng, và thư mục `js/` của bạn đã được module hóa rất rõ ràng.

Dưới đây là nội dung file `README.md` đã được cập nhật để phản ánh chính xác cấu trúc thư mục hiện tại của dự án.

-----

# Web Trắc Nghiệm và Học Tập - Đại Hệ Thống

Đây là một hệ thống web học tập cá nhân, được thiết kế để người dùng có thể ôn luyện kiến thức qua nhiều môn học khác nhau được sắp xếp theo từng kỳ học. Hệ thống hỗ trợ nhiều định dạng học tập, từ các bài thi trắc nghiệm tùy chỉnh đến các module học tập chuyên sâu cho từng môn.

## Cấu trúc thư mục

Dự án được tổ chức theo cấu trúc module hóa để dễ dàng quản lý và mở rộng.

```
/
├── index.html                  # Trang chủ, hiển thị danh sách môn học theo kỳ
├── subject.html                # Trang chọn chế độ (Lý thuyết/Bài tập)
├── flashcards.html             # Giao diện học Lý thuyết (Flashcards)
├── quiz-setup.html             # Trang thiết lập bài thi (Bài tập)
├── quiz.html                   # Giao diện làm bài thi trắc nghiệm
├── results.html                # Trang hiển thị kết quả thi
├── README.md                   # File hướng dẫn này
│
├── css/
│   └── style.css               # File CSS chính cho toàn bộ giao diện
│
├── js/
│   ├── main.js                 # Logic cho trang chủ (index.html)
│   ├── subject.js              # Logic cho trang chọn chế độ (subject.html)
│   ├── flashcards.js           # Logic cho trang flashcards
│   ├── quiz-setup.js           # Logic cho trang thiết lập bài thi
│   ├── quiz.js                 # Logic cho trang làm bài thi
│   └── results.js              # Logic cho trang kết quả
│
├── data/
│   ├── database.js             # File "cơ sở dữ liệu", định nghĩa và sắp xếp các môn học
│   ├── ssl101c.js              # Dữ liệu câu hỏi SSL101c
│   ├── aig202c.js              # Dữ liệu câu hỏi AIG202c
│   └── mai391.js               # Dữ liệu câu hỏi MAI391
│
├── imgs/                       # Thư mục chứa hình ảnh cho các câu hỏi
│   ├── MAI391/
│   ├── MAS291/
│   └── SSL101c_...webp
│
├── JPD113_Web/                 # Module học Tiếng Nhật 1 (JPD113)
│   ├── index.html
│   └── ...
│
├── JPD123_Web/                 # Module học Tiếng Nhật 2 (JPD123)
│   ├── index.html
│   └── ...
│
├── MAI391_Web/                 # Module Sổ tay Toán (MAI391)
│   ├── index.html
│   ├── chapter_3.html
│   └── ...
│
└── MAS291_Web/                 # Module Sổ tay Xác suất Thống kê (MAS291)
    ├── index.html
    ├── chapter_1.html
    └── ...
```

## Chức năng chính

### 1\. Hệ thống Môn học theo Kỳ

  * **Giao diện trực quan**: Trang chủ (`index.html`) tự động hiển thị các môn học được nhóm theo từng kỳ (Học Kỳ 2, Học Kỳ 3, v.v.), giúp người dùng dễ dàng theo dõi chương trình học.
  * **Hỗ trợ đa định dạng**: Hệ thống có thể tích hợp nhiều loại môn học:
      * **Môn trắc nghiệm**: Các môn như SSL101c, AIG202c, MAI391 cho phép người dùng chọn chế độ học.
      * **Môn có nội dung đặc biệt**: Các môn như JPD113, JPD123, và MAS291 có trang web và module học tập riêng, được liên kết trực tiếp từ trang chủ.

### 2\. Chức năng Học tập (Dành cho các môn trắc nghiệm)

  * **Chọn chế độ** (`subject.html`): Cho phép người dùng chọn giữa chế độ học "Lý Thuyết" hoặc "Bài Tập".
  * **Học Lý Thuyết** (`flashcards.html`): Cung cấp giao diện học kiểu flashcard, cho phép xem câu hỏi, chọn đáp án và nhận phản hồi/giải thích ngay lập tức.
  * **Làm Bài Tập** (`quiz-setup.html`, `quiz.html`):
      * **Thiết lập linh hoạt**: Người dùng có thể tùy chỉnh bài thi về số lượng câu hỏi và thời gian làm bài.
      * **Giao diện làm bài**: Hiển thị câu hỏi, bộ đếm thời gian, và bảng điều hướng câu hỏi.
  * **Xem lại kết quả** (`results.html`): Sau khi hoàn thành, hệ thống cung cấp điểm số, biểu đồ trực quan và cho phép xem lại chi tiết từng câu trả lời (đúng/sai) và giải thích.

## Hướng dẫn bảo trì và mở rộng

Việc quản lý môn học rất đơn giản và tập trung chủ yếu vào file `data/database.js`.

### Cách thêm một môn học mới

1.  **(Tùy chọn) Tạo file dữ liệu**: Nếu là môn trắc nghiệm, hãy tạo file `.js` mới trong thư mục `/data/` (ví dụ: `new_subject.js`) và định nghĩa mảng câu hỏi (`const new_subject_questions = [...]`).
2.  **Khai báo môn học**: Mở file `data/database.js` và thêm thông tin môn học mới vào đối tượng `subjectDetails`.
      * Đối với môn trắc nghiệm, cần có `title`, `description`, và `questions`.
      * Đối với môn có trang riêng, hãy dùng thuộc tính `customLink` để trỏ đến file `index.html` của môn đó (ví dụ: `JPD113_Web/index.html`).
      * Sử dụng `disabled: true` để tạm thời vô hiệu hóa các môn chưa có nội dung.
3.  **Sắp xếp vào kỳ học**: Thêm **ID** của môn học mới (ví dụ: `"new_subject"`) vào mảng của kỳ tương ứng trong đối tượng `semesterLayout`.

Trang chủ sẽ tự động cập nhật mà không cần chỉnh sửa thêm bất kỳ file HTML hay JS nào khác.