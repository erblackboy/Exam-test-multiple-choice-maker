Chào bạn, tôi đã rà soát lại toàn bộ dự án và cập nhật file `README.md` để phản ánh chính xác cấu trúc, chức năng và cách sử dụng hiện tại.

---

# Web App Luyện Thi & Học Tập

Đây là một hệ thống web học tập cá nhân, được thiết kế để người dùng có thể ôn luyện kiến thức qua nhiều môn học khác nhau được sắp xếp theo từng kỳ học. Hệ thống hỗ trợ nhiều định dạng học tập, từ các bài thi trắc nghiệm tùy chỉnh đến các module học tập chuyên sâu cho từng môn.

## ✨ Chức năng chính

*   **Tổ chức Môn học theo Kỳ**: Trang chủ tự động hiển thị các môn học được nhóm theo từng kỳ, giúp dễ dàng theo dõi chương trình học.
*   **Hệ thống Trắc nghiệm**:
    *   **Thiết lập linh hoạt**: Tùy chỉnh bài thi về số lượng câu hỏi và thời gian làm bài.
    *   **Giao diện tương tác**: Có đồng hồ đếm ngược, bảng điều hướng câu hỏi và theo dõi tiến độ.
    *   **Kết quả tức thì**: Cung cấp điểm số, biểu đồ trực quan và cho phép xem lại chi tiết từng câu trả lời kèm giải thích.
*   **Chế độ Flashcard**: Giao diện học lý thuyết, cho phép xem câu hỏi, chọn đáp án và nhận phản hồi ngay lập tức.
*   **Module Môn học riêng**: Các module nội dung chuyên sâu cho các môn như Tiếng Nhật (JPD113, JPD123) và Toán/Thống kê (MAI391, MAS291) với các trang nội dung riêng.
*   **Chế độ Tối (Dark Mode)**: Chuyển đổi giao diện để xem thoải mái trong môi trường ánh sáng yếu.
*   **Thiết kế Responsive**: Giao diện được tối ưu hóa cho cả máy tính để bàn và thiết bị di động.
*   **Hỗ trợ MathJax**: Hiển thị các công thức toán học một cách đẹp mắt trong câu hỏi và giải thích.

## 🚀 Cách chạy trên máy cục bộ (Local)

Dự án này là một trang web tĩnh nhưng đi kèm một server đơn giản bằng Python để dễ dàng chạy trên máy tính cá nhân.

1.  **Yêu cầu**: Đảm bảo bạn đã cài đặt Python trên máy.
2.  **Chạy server**:
    *   Mở terminal (hoặc Command Prompt) tại thư mục gốc của dự án.
    *   Thực thi file `server.py`:
        ```bash
        python server.py
        ```
3.  **Truy cập trang web**:
    *   Server sẽ khởi động và tự động mở trình duyệt web của bạn tại địa chỉ `http://localhost:8000`.
    *   Cửa sổ terminal cũng sẽ hiển thị một địa chỉ IP mạng LAN (ví dụ: `http://192.168.1.x:8000`). Bạn có thể dùng địa chỉ này để truy cập trang web từ các thiết bị khác (như điện thoại, máy tính bảng) trong cùng một mạng WiFi.

## 📂 Cấu trúc thư mục

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
├── server.py                   # Script Python để chạy server local
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
│   ├── mai391.js               # Dữ liệu câu hỏi MAI391
│   └── ite303c.js              # Dữ liệu câu hỏi ITE303c
│
├── imgs/                       # Thư mục chứa hình ảnh cho các câu hỏi
│   ├── MAI391/
│   ├── MAS291/
│   └── SSL101c/
│
├── JPD113_Web/                 # Module học Tiếng Nhật 1 (JPD113)
│   ├── JPD113_index.html
│   └── ...
│
├── JPD123_Web/                 # Module học Tiếng Nhật 2 (JPD123)
│   ├── JPD123_index.html
│   └── ...
│
├── MAI391_Web/                 # Module Sổ tay Toán (MAI391)
│   ├── MAI391_index.html
│   ├── chapter_3.html
│   └── ...
│
└── MAS291_Web/                 # Module Sổ tay Xác suất Thống kê (MAS291)
    ├── MAS291_index.html
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