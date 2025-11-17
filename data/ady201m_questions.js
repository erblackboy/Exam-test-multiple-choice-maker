const ady201m_questions = [
  {
    id: "ady201m_001",
    status: "verified",
    question: "What is Data Science? (Khoa học dữ liệu là gì?)",
    options: [
      "A. The study of computer science (Nghiên cứu về khoa học máy tính)",
      "B. The extraction of insights from data (Việc trích xuất thông tin chi tiết từ dữ liệu)",
      "C. The art of designing databases (Nghệ thuật thiết kế cơ sở dữ liệu)",
      "D. The creation of graphical user interfaces (Việc tạo ra giao diện người dùng đồ họa)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_002",
    status: "verified",
    question: "What does the term \"Big Data\" refer to in Data Science? (Thuật ngữ \"Dữ liệu lớn\" trong Khoa học dữ liệu đề cập đến điều gì?)",
    options: [
      "A. Small datasets that fit in memory (Các bộ dữ liệu nhỏ vừa vặn trong bộ nhớ)",
      "B. Extremely large and complex datasets (Các bộ dữ liệu cực kỳ lớn và phức tạp)",
      "C. Data collected from social media only (Dữ liệu chỉ được thu thập từ mạng xã hội)",
      "D. Data with low variability (Dữ liệu có độ biến thiên thấp)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_003",
    status: "verified",
    question: "When dealing with missing data in a dataset, what is an appropriate strategy? (Khi xử lý dữ liệu bị thiếu trong một bộ dữ liệu, chiến lược nào là phù hợp?)",
    options: [
      "A. Removing all rows with missing values (Xóa tất cả các hàng có giá trị bị thiếu)",
      "B. Replacing missing values with the mean or median (Thay thế các giá trị bị thiếu bằng giá trị trung bình hoặc trung vị)",
      "C. Ignoring missing values during analysis (Bỏ qua các giá trị bị thiếu trong quá trình phân tích)",
      "D. Adding a constant value to fill missing entries (Thêm một giá trị không đổi để điền vào các mục bị thiếu)"
    ],
    answer: 1,
    explanation: "<p>Lưu ý: A cũng là một chiến lược, nhưng B là một kỹ thuật điền dữ liệu (imputation) phổ biến và thường được ưu tiên hơn.</p>"
  },
  {
    id: "ady201m_004",
    status: "verified",
    question: "What is the primary goal of the Diagnostic Measures phase in Data Science evaluation? (Mục tiêu chính của giai đoạn Đo lường chẩn đoán trong đánh giá Khoa học dữ liệu là gì?)",
    options: [
      "A. To identify and understand why the model fails or succeeds (Để xác định và hiểu tại sao mô hình thất bại hoặc thành công)",
      "B. To predict future outcomes (Để dự đoán kết quả trong tương lai)",
      "C. To fine-tune hyperparameters for model improvement (Để tinh chỉnh các siêu tham số nhằm cải thiện mô hình)",
      "D. To create visualizations of data distributions (Để tạo trực quan hóa các phân phối dữ liệu)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_005",
    status: "verified",
    question: "What role does stakeholder engagement play in the Business Understanding stage of a Data Science project? (Việc thu hút các bên liên quan đóng vai trò gì trong giai đoạn Hiểu biết nghiệp vụ của một dự án Khoa học dữ liệu?)",
    options: [
      "A. To identify business requirements and constraints (Để xác định các yêu cầu và ràng buộc nghiệp vụ)",
      "B. To solely gather data for analysis (Chỉ để thu thập dữ liệu cho phân tích)",
      "C. To clean and preprocess data (Để làm sạch và tiền xử lý dữ liệu)",
      "D. To execute machine learning algorithms (Để thực thi các thuật toán học máy)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_006",
    status: "verified",
    question: "What does the term \"missing value imputation\" refer to in EDA? (Thuật ngữ \"điền giá trị bị thiếu\" trong EDA đề cập đến điều gì?)",
    options: [
      "A. Filling in missing values using statistical measures (Điền vào các giá trị bị thiếu bằng các thước đo thống kê)",
      "B. Removing missing values from the dataset (Xóa các giá trị bị thiếu khỏi bộ dữ liệu)",
      "C. Replacing missing values with arbitrary numbers (Thay thế các giá trị bị thiếu bằng các con số tùy ý)",
      "D. Ignoring missing values during analysis (Bỏ qua các giá trị bị thiếu trong quá trình phân tích)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_007",
    status: "verified",
    question: "What is the primary role of the data understanding phase in the data science methodology? (Vai trò chính của giai đoạn hiểu dữ liệu trong phương pháp luận khoa học dữ liệu là gì?)",
    options: [
      "A. Creating data visualizations (Tạo các trực quan hóa dữ liệu)",
      "B. Assessing data quality and representativeness (Đánh giá chất lượng và tính đại diện của dữ liệu)",
      "C. Running complex algorithms (Chạy các thuật toán phức tạp)",
      "D. Building machine learning models (Xây dựng các mô hình học máy)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_008",
    status: "verified",
    question: "What Python library is commonly used to perform data manipulation and analysis before sending SQL queries? (Thư viện Python nào thường được sử dụng để thực hiện thao tác và phân tích dữ liệu trước khi gửi các truy vấn SQL?)",
    options: [
      "A. NumPy",
      "B. Matplotlib",
      "C. Pandas",
      "D. SciPy"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_009",
    status: "verified",
    question: "You have a pandas DataFrame `df` with columns 'product_name', 'category', and 'price'. You want to filter the DataFrame to select products in the 'Electronics' category with prices between $100 and $200. Which pandas command and SQL query achieve this?",
    options: [
      "A. df_filtered = df[(df['category'] == 'Electronics') & (df['price'] >= 100) & (df['price'] <= 200)] AND SELECT * FROM df WHERE category = 'Electronics' AND price BETWEEN 100 AND 200",
      "B. df_filtered = df[(df['category'] == 'Electronics') & (df['price'] >= 100) & (df['price'] <= 200)] AND SELECT * FROM df WHERE category = 'Electronics' OR price BETWEEN 100 AND 200",
      "C. df_filtered = df[(df['category'] == 'Electronics') | (df['price'] >= 100) & (df['price'] <= 200)] AND SELECT * FROM df WHERE category = 'Electronics' AND price BETWEEN 100 AND 200",
      "D. df_filtered = df[(df['category'] == 'Electronics') && (df['price'] >= 100) && (df['price'] <= 200)] AND SELECT * FROM df WHERE category = 'Electronics' AND price BETWEEN 100 AND 200"
    ],
    answer: 0,
    explanation: "<p>Pandas sử dụng `&` cho toán tử AND logic, trong khi SQL có thể dùng `BETWEEN ... AND ...` cho khoảng giá trị.</p>"
  },
  {
    id: "ady201m_010",
    status: "verified",
    question: "What is the purpose of the WHERE clause in a SQL query? (Mục đích của mệnh đề WHERE trong truy vấn SQL là gì?)",
    options: [
      "A. To specify the columns to be selected (Để chỉ định các cột được chọn)",
      "B. To filter rows based on a specified condition (Để lọc các hàng dựa trên một điều kiện cụ thể)",
      "C. To order the results in ascending or descending order (Để sắp xếp kết quả theo thứ tự tăng dần hoặc giảm dần)",
      "D. To join two tables together (Để kết hợp hai bảng lại với nhau)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_011",
    status: "verified",
    question: "Which SQL keyword is used in DB2 to add new rows to a table? (Từ khóa SQL nào được sử dụng trong DB2 để thêm hàng mới vào bảng?)",
    options: [
      "A. INSERT",
      "B. APPEND",
      "C. ADD",
      "D. UPDATE"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_012",
    status: "verified",
    question: "To create a table from Python, you would use... (Để tạo một bảng từ Python, bạn sẽ sử dụng...)",
    options: [
      "A. An ibm_db.exec_immediate function that includes connection information and a SQL statement... (Một hàm ibm_db.exec_immediate bao gồm thông tin kết nối và câu lệnh SQL...)",
      "B. An ibm_db.exec_immediate function that includes connection information (Một hàm ibm_db.exec_immediate bao gồm thông tin kết nối)",
      "C. You cannot create a table from Python (Bạn không thể tạo bảng từ Python)",
      "D. An ibm_db.exec_immediate function that includes a SQL statement to create the table (Một hàm ibm_db.exec_immediate bao gồm câu lệnh SQL để tạo bảng)"
    ],
    answer: 3,
    explanation: "<p>Thông tin kết nối thường được quản lý riêng, hàm thực thi chỉ cần nhận câu lệnh SQL.</p>"
  },
  {
    id: "ady201m_013",
    status: "verified",
    question: "What command in DB2 is used to remove a table from the database? (Lệnh nào trong DB2 được sử dụng để xóa một bảng khỏi cơ sở dữ liệu?)",
    options: [
      "A. DROP TABLE",
      "B. ERASE TABLE",
      "C. DELETE TABLE",
      "D. REMOVE TABLE"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_014",
    status: "verified",
    question: "Which SQL statement is used to retrieve data from a DB2 database? (Câu lệnh SQL nào được sử dụng để truy xuất dữ liệu từ cơ sở dữ liệu DB2?)",
    options: [
      "A. SELECT",
      "B. GET",
      "C. FETCH",
      "D. QUERY"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_015",
    status: "verified",
    question: "In the context of GitHub, what is a \"pull request\" used for? (Trong bối cảnh của GitHub, \"pull request\" được sử dụng để làm gì?)",
    options: [
      "A. Merging code changes from one branch to another (Hợp nhất các thay đổi code từ một nhánh sang nhánh khác)",
      "B. Requesting data access (Yêu cầu truy cập dữ liệu)",
      "C. Opening an issue for discussion (Mở một vấn đề để thảo luận)",
      "D. Creating a new repository (Tạo một kho lưu trữ mới)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_016",
    status: "verified",
    question: "Which command in Git is used to stage files for a commit? (Lệnh nào trong Git được sử dụng để chuẩn bị (stage) các tệp cho một commit?)",
    options: [
      "A. git add",
      "B. git push",
      "C. git commit",
      "D. git stage"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_017",
    status: "verified",
    question: "Which language is commonly used for its seamless integration with database systems and extensive usage in backend server applications? (Ngôn ngữ nào thường được sử dụng vì khả năng tích hợp liền mạch với các hệ thống cơ sở dữ liệu và được sử dụng rộng rãi trong các ứng dụng máy chủ backend?)",
    options: [
      "A. SQL",
      "B. JavaScript",
      "C. Python",
      "D. C++"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_018",
    status: "verified",
    question: "How does Conda contribute to managing dependencies in data science projects compared to pip? (Conda đóng góp như thế nào vào việc quản lý các phụ thuộc trong các dự án khoa học dữ liệu so với pip?)",
    options: [
      "A. Conda is specifically designed for managing Python dependencies (Conda được thiết kế đặc biệt để quản lý các phụ thuộc của Python)",
      "B. Conda only manages dependencies for Jupyter Notebooks (Conda chỉ quản lý các phụ thuộc cho Jupyter Notebooks)",
      "C. Conda resolves dependencies in a more comprehensive way, including non-Python libraries (Conda giải quyết các phụ thuộc một cách toàn diện hơn, bao gồm cả các thư viện không phải của Python)",
      "D. Conda is used for version control of datasets (Conda được sử dụng để kiểm soát phiên bản của các bộ dữ liệu)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_019",
    status: "verified",
    question: "Which category of Data Science tools involves platforms like Alteryx, Talend, and Informatica? (Danh mục công cụ Khoa học dữ liệu nào bao gồm các nền tảng như Alteryx, Talend và Informatica?)",
    options: [
      "A. Data Integration tools (Công cụ tích hợp dữ liệu)",
      "B. Data Cleaning tools (Công cụ làm sạch dữ liệu)",
      "C. Data Analysis tools (Công cụ phân tích dữ liệu)",
      "D. Machine Learning tools (Công cụ học máy)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_020",
    status: "verified",
    question: "What does a \"fork\" represent in the context of GitHub? (\"Fork\" đại diện cho điều gì trong bối cảnh của GitHub?)",
    options: [
      "A. A copy of a repository in a user's GitHub account (Một bản sao của kho lưu trữ trong tài khoản GitHub của người dùng)",
      "B. A clone of a repository to the local machine (Một bản sao (clone) của kho lưu trữ về máy cục bộ)",
      "C. A request for code review (Yêu cầu xem xét code)",
      "D. A branch in a repository (Một nhánh trong kho lưu trữ)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_021",
    status: "verified",
    question: "What does the function np.eye(3) return in NumPy? (Hàm np.eye(3) trả về gì trong NumPy?)",
    options: [
      "A. An identity matrix of shape (3, 3) (Một ma trận đơn vị có hình dạng (3, 3))",
      "B. An array of zeros with three rows and three columns (Một mảng số 0 có 3 hàng 3 cột)",
      "C. An array of ones with three rows and three columns (Một mảng số 1 có 3 hàng 3 cột)",
      "D. A random matrix of shape (3, 3) (Một ma trận ngẫu nhiên có hình dạng (3, 3))"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_022",
    status: "verified",
    question: "Which function in NumPy is used to calculate the exponential values of elements in an array? (Hàm nào trong NumPy được sử dụng để tính giá trị hàm mũ (e^x) của các phần tử trong một mảng?)",
    options: [
      "A. exp()",
      "B. exp_values()",
      "C. exponential()",
      "D. power()"
    ],
    answer: 0,
    explanation: "<p>Cú pháp đúng là `np.exp()`.</p>"
  },
  {
    id: "ady201m_023",
    status: "verified",
    question: "What is a potential disadvantage of using pandas for large datasets in data analysis? (Một nhược điểm tiềm tàng của việc sử dụng pandas cho các bộ dữ liệu lớn trong phân tích dữ liệu là gì?)",
    options: [
      "A. It is not suitable for handling missing data (Nó không phù hợp để xử lý dữ liệu bị thiếu)",
      "B. It requires extensive knowledge of machine learning (Nó đòi hỏi kiến thức sâu rộng về học máy)",
      "C. It may consume significant memory for large datasets (Nó có thể tiêu tốn bộ nhớ đáng kể cho các bộ dữ liệu lớn)",
      "D. It lacks support for reading CSV files (Nó thiếu hỗ trợ đọc tệp CSV)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_024",
    status: "verified",
    question: "How does using a generator differ from creating a list in terms of memory usage? (Việc sử dụng generator khác gì so với việc tạo list về mức sử dụng bộ nhớ?)",
    options: [
      "A. Generators use more memory than lists (Generators sử dụng nhiều bộ nhớ hơn lists)",
      "B. Generators and lists have similar memory usage (Generators và lists có mức sử dụng bộ nhớ tương tự)",
      "C. Generators use less memory compared to lists (Generators sử dụng ít bộ nhớ hơn so với lists)",
      "D. Generators are not suitable for data manipulation (Generators không phù hợp cho thao tác dữ liệu)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_025",
    status: "verified",
    question: "What is the primary purpose of the requests library in Python? (Mục đích chính của thư viện requests trong Python là gì?)",
    options: [
      "A. Generating random numbers (Tạo số ngẫu nhiên)",
      "B. Interacting with web services and making HTTP requests (Tương tác với các dịch vụ web và thực hiện các yêu cầu HTTP)",
      "C. Reading and writing CSV files (Đọc và ghi tệp CSV)",
      "D. Creating visualizations (Tạo trực quan hóa)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_026",
    status: "verified",
    question: "What is the primary characteristic of a Python set? (Đặc điểm chính của một set trong Python là gì?)",
    options: [
      "A. Stores only unique elements (Chỉ lưu trữ các phần tử duy nhất)",
      "B. Allows duplicate elements (Cho phép các phần tử trùng lặp)",
      "C. Maintains insertion order (Duy trì thứ tự chèn)",
      "D. Stores elements in key-value pairs (Lưu trữ các phần tử theo cặp key-value)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_027",
    status: "verified",
    question: "What does the function np.arange(10) return in NumPy? (Hàm np.arange(10) trả về gì trong NumPy?)",
    options: [
      "A. An array containing numbers from 0 to 9 (Một mảng chứa các số từ 0 đến 9)",
      "B. An array containing numbers from 1 to 10 (Một mảng chứa các số từ 1 đến 10)",
      "C. An array containing 10 random numbers (Một mảng chứa 10 số ngẫu nhiên)",
      "D. An array containing 10 elements, all initialized to zero (Một mảng chứa 10 phần tử, tất cả đều được khởi tạo bằng 0)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_028",
    status: "verified",
    question: "What is the output of the following: for i,x in enumerate(['A','B','C']): print(i,x)",
    options: [
      "A. 0 A 1 B 2 C",
      "B. 1 A<br>2 B<br>3 C",
      "C. A4<br>B8<br>CC",
      "D. A 1<br>B 2<br>C 3"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_029",
    status: "verified",
    question: "Given the code: `import numpy as np; matrix = np.array([[1,2],[3,4],[5,6],[7,8]])`. What is the output of `print(matrix[:,0] + matrix[:,1])`?",
    options: [
      "A. [ 3  7 11 15]",
      "B. [ 2  6 10 14]",
      "C. [ 4  8 12 16]",
      "D. Error"
    ],
    answer: 0,
    explanation: "<p><strong>Giải thích:</strong></p><p>Đoạn mã tính tổng của cột đầu tiên `[1, 3, 5, 7]` và cột thứ hai `[2, 4, 6, 8]`, cho kết quả `[3, 7, 11, 15]`.</p>"
  },
  {
    id: "ady201m_030",
    status: "verified",
    question: "What is the interquartile range (IQR) of the following dataset: 16, 5, 8, 22, 12, 15, 27, 31? (Khoảng tứ phân vị (IQR) của bộ dữ liệu sau là gì?)",
    options: [
      "A. 18.5",
      "B. 15.5",
      "C. 14.5",
      "D. 12"
    ],
    answer: 2,
    explanation: "<p><strong>Giải thích:</strong></p><ol><li>Sắp xếp: 5, 8, 12, 15, 16, 22, 27, 31</li><li>Q1 (trung vị của nửa dưới [5, 8, 12, 15]): (8 + 12) / 2 = 10</li><li>Q3 (trung vị của nửa trên [16, 22, 27, 31]): (22 + 27) / 2 = 24.5</li><li>IQR = Q3 - Q1 = 24.5 - 10 = 14.5</li></ol>"
  },
  {
    id: "ady201m_031",
    status: "verified",
    question: "In a situation where data is missing at random (MAR), which method is suitable for imputing missing values? (Trong tình huống dữ liệu bị thiếu ngẫu nhiên (MAR), phương pháp nào là phù hợp để điền giá trị bị thiếu?)",
    options: [
      "A. Mean imputation (Điền bằng giá trị trung bình)",
      "B. Median imputation (Điền bằng giá trị trung vị)",
      "C. K-Nearest Neighbors imputation (Điền bằng K-hàng xóm gần nhất)",
      "D. Mode imputation (Điền bằng giá trị yếu vị)"
    ],
    answer: 2,
    explanation: "<p>Khi dữ liệu thiếu ngẫu nhiên (MAR), tức là sự thiếu hụt có liên quan đến các biến khác, các phương pháp như KNN hoặc hồi quy (sử dụng các biến khác đó) thường được ưu tiên hơn là điền bằng giá trị trung bình/trung vị đơn giản.</p>"
  },
  {
    id: "ady201m_032",
    status: "verified",
    question: "Which method in Matplotlib is used to save a plot as an image file? (Phương thức nào trong Matplotlib được sử dụng để lưu biểu đồ dưới dạng tệp hình ảnh?)",
    options: [
      "A. savefig()",
      "B. save_figure()",
      "C. save_plot()",
      "D. save_image()"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_033",
    status: "verified",
    question: "A company wants to determine if their new marketing campaign is effective. The Z-Score for the increase in sales is 2.5. What does this Z-Score indicate? (Một công ty muốn xác định... Điểm Z-Score cho sự gia tăng doanh số là 2.5. Điểm Z-Score này cho biết điều gì?)",
    options: [
      "A. The campaign is significantly more effective than expected (Chiến dịch hiệu quả hơn đáng kể so với dự kiến)",
      "B. The campaign is significantly less effective than expected (Chiến dịch kém hiệu quả hơn đáng kể so với dự kiến)",
      "C. The campaign has no effect on sales (Chiến dịch không có tác dụng)",
      "D. The Z-Score cannot be used in this context (Không thể sử dụng Z-Score trong bối cảnh này)"
    ],
    answer: 0,
    explanation: "<p>Z-score = 2.5 nghĩa là kết quả này cao hơn 2.5 độ lệch chuẩn so với giá trị trung bình/kỳ vọng. Đây là một kết quả tốt và có ý nghĩa thống kê (thường so với ngưỡng 1.96).</p>"
  },
  {
    id: "ady201m_034",
    status: "verified",
    question: "In multiple regression analysis, what does a coefficient represent? (Trong phân tích hồi quy bội, một hệ số đại diện cho điều gì?)",
    options: [
      "A. The intercept of the regression line (Điểm cắt trục tung của đường hồi quy)",
      "B. The change in the dependent variable for a one-unit change in the independent variable, holding other variables constant (Sự thay đổi của biến phụ thuộc khi biến độc lập tương ứng thay đổi 1 đơn vị, trong khi giữ nguyên các biến khác)",
      "C. The probability of a Type I error (Xác suất của sai lầm loại I)",
      "D. The mean squared error of the model (Sai số bình phương trung bình của mô hình)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_035",
    status: "verified",
    question: "If the mean of a dataset is 20 and the sum of all values in the dataset is 100, how many values are in the dataset? (Nếu giá trị trung bình của một bộ dữ liệu là 20 và tổng của tất cả các giá trị trong bộ dữ liệu là 100, có bao nhiêu giá trị trong bộ dữ liệu?)",
    options: [
      "A. 5",
      "B. 4",
      "C. 3",
      "D. 20"
    ],
    answer: 0,
    explanation: "<p>Trung bình = Tổng / Số lượng => 20 = 100 / N => N = 100 / 20 = 5.</p>"
  },
  {
    id: "ady201m_036",
    status: "verified",
    question: "What type of relationship is depicted by a scatter plot where points are tightly clustered along a line with a positive slope? (Loại mối quan hệ nào được mô tả bằng biểu đồ phân tán trong đó các điểm tụ lại chặt chẽ dọc theo một đường có độ dốc dương?)",
    options: [
      "A. Negative correlation (Tương quan âm)",
      "B. No correlation (Không tương quan)",
      "C. Positive correlation (Tương quan dương)",
      "D. Perfect correlation (Tương quan hoàn hảo)"
    ],
    answer: 2,
    explanation: "<p>Nếu các điểm \"nằm trên\" một đường thẳng, đó sẽ là \"Tương quan hoàn hảo\" (D). Vì chúng chỉ \"tụ lại chặt chẽ\", nên C là câu trả lời chính xác nhất.</p>"
  },
  {
    id: "ady201m_037",
    status: "verified",
    question: "Which Matplotlib function is used to set the title of a plot? (Hàm Matplotlib nào được sử dụng để đặt tiêu đề cho biểu đồ?)",
    options: [
      "A. set_title()",
      "B. set_plot_title()",
      "C. label()",
      "D. plot_title()"
    ],
    answer: 0,
    explanation: "<p>Khi sử dụng giao diện hướng đối tượng, ví dụ: `ax.set_title(\"Tiêu đề\")`. Nếu dùng pyplot, bạn sẽ dùng `plt.title(\"Tiêu đề\")`.</p>"
  },
  {
    id: "ady201m_038",
    status: "verified",
    question: "Which assumption is crucial for ANOVA testing? (Giả định nào là quan trọng đối với kiểm định ANOVA?)",
    options: [
      "A. Homogeneity of variance (Tính đồng nhất của phương sai)",
      "B. Skewness of the data (Độ xiên của dữ liệu)",
      "C. Independence of observations (Tính độc lập của các quan sát)",
      "D. Multicollinearity between variables (Đa cộng tuyến giữa các biến)"
    ],
    answer: 0,
    explanation: "<p>Cả A và C đều là giả định quan trọng của ANOVA, cùng với giả định về phân phối chuẩn của phần dư. Tuy nhiên, \"Đồng nhất phương sai\" (A) là giả định cốt lõi để so sánh các nhóm.</p>"
  },
  {
    id: "ady201m_039",
    status: "verified",
    question: "What is the median of the following dataset: 12, 10, 7, 16, 14, 19? (Giá trị trung vị của bộ dữ liệu sau là gì?)",
    options: [
      "A. 13",
      "B. 15",
      "C. 17",
      "D. 12"
    ],
    answer: 0,
    explanation: "<p><strong>Giải thích:</strong></p><ol><li>Sắp xếp: 7, 10, 12, 14, 16, 19</li><li>Trung vị (vì n=6, là số chẵn): (12 + 14) / 2 = 13</li></ol>"
  },
  {
    id: "ady201m_040",
    status: "verified",
    question: "What distribution is commonly used for hypothesis testing when the sample size is small and the population standard deviation is unknown? (Phân phối nào thường được sử dụng để kiểm định giả thuyết khi kích thước mẫu nhỏ và không rõ độ lệch chuẩn của tổng thể?)",
    options: [
      "A. Normal Distribution (Phân phối chuẩn)",
      "B. T-Distribution (Phân phối T)",
      "C. Chi-Square Distribution (Phân phối Chi-bình phương)",
      "D. Poisson Distribution (Phân phối Poisson)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_041",
    status: "verified",
    question: "A pharmaceutical company is testing a new drug. The p-value obtained from the hypothesis test is 0.02. What decision should the company make regarding the null hypothesis at a significance level of 0.05? (Một công ty dược đang thử nghiệm... p-value thu được là 0.02. Công ty nên quyết định gì... ở mức ý nghĩa 0.05?)",
    options: [
      "A. The drug has an effect on blood pressure (Thuốc có ảnh hưởng đến huyết áp)",
      "B. Fail to reject the null hypothesis (Không thể bác bỏ giả thuyết H0)",
      "C. Cannot make a decision based on the given information (Không thể quyết định...)",
      "D. Retest the hypothesis with a larger sample size (Kiểm định lại...)"
    ],
    answer: 0,
    explanation: "<p>Vì p-value (0.02) < mức ý nghĩa (0.05), chúng ta bác bỏ giả thuyết H0 (là \"thuốc không có tác dụng\").</p>"
  },
  {
    id: "ady201m_042",
    status: "verified",
    question: "A manufacturing company... two independent samples... the calculated p-value is 0.10. What decision should the company make... at a significance level of 0.05? (Một công ty sản xuất... p-value tính được là 0.10. Công ty nên quyết định gì... ở mức ý nghĩa 0.05?)",
    options: [
      "A. Material type will affect the strength... (Loại vật liệu sẽ ảnh hưởng...)",
      "B. Material A will have higher strength... (Vật liệu A bền hơn...)",
      "C. Material B will have higher strength... (Vật liệu B bền hơn...)",
      "D. Inconclusive test since the p-value is too small (Kiểm định không có kết luận vì p-value quá nhỏ)",
      "E. Fail to reject the null hypothesis (Không thể bác bỏ giả thuyết H0)"
    ],
    answer: 4,
    explanation: "<p>Vì p-value (0.10) > mức ý nghĩa (0.05), chúng ta <strong>không thể bác bỏ giả thuyết H0</strong> (rằng không có sự khác biệt). Các đáp án A, B, C đều ngụ ý việc bác bỏ H0. Đáp án D có lý do sai (p-value \"quá lớn\" mới là lý do, không phải \"quá nhỏ\").</p>"
  },
  {
    id: "ady201m_043",
    status: "verified",
    question: "A city's average temperature in July is 25°C with a standard deviation of 3°C. One year, the temperature... averages 19°C. What is the Z-Score...? (Nhiệt độ trung bình tháng 7 là 25°C, độ lệch chuẩn 3°C. Một năm nọ, nhiệt độ là 19°C. Z-Score là bao nhiêu?)",
    options: [
      "A. -2",
      "B. -1.67",
      "C. -1.5",
      "D. -1"
    ],
    answer: 0,
    explanation: "<p>Z = (X - μ) / σ = (19 - 25) / 3 = -6 / 3 = -2</p>"
  },
  {
    id: "ady201m_044",
    status: "verified",
    question: "Which method is used to address class imbalance in a classification problem? (Phương pháp nào được dùng để xử lý mất cân bằng lớp trong bài toán phân loại?)",
    options: [
      "A. Over-sampling the minority class (Lấy mẫu quá mức lớp thiểu số)",
      "B. Under-sampling the majority class (Lấy mẫu dưới mức lớp đa số)",
      "C. Synthetic data generation (Tạo dữ liệu tổng hợp)",
      "D. All of the above (Tất cả các đáp án trên)"
    ],
    answer: 3,
    explanation: ""
  },
  {
    id: "ady201m_045",
    status: "verified",
    question: "After training a regression model in Scikit-learn, what method is used to make predictions on new data? (Sau khi huấn luyện mô hình hồi quy trong Scikit-learn, phương thức nào được dùng để dự đoán trên dữ liệu mới?)",
    options: [
      "A. predict()",
      "B. forecast()",
      "C. estimate()",
      "D. compute()"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_046",
    status: "verified",
    question: "What is overfitting in machine learning? (Overfitting (quá khớp) trong học máy là gì?)",
    options: [
      "A. The model is too simple and fails to capture underlying patterns (Mô hình quá đơn giản và không nắm bắt được các mẫu)",
      "B. The model learns the training data too well, capturing noise and performing poorly on new data (Mô hình học dữ liệu huấn luyện quá tốt, bao gồm cả nhiễu, và hoạt động kém trên dữ liệu mới)",
      "C. The model achieves high accuracy on both training and validation data (Mô hình đạt độ chính xác cao trên cả dữ liệu...)",
      "D. The model is perfectly balanced in terms of complexity (Mô hình cân bằng hoàn hảo...)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_047",
    status: "verified",
    question: "In k-fold cross-validation, how many times is the dataset split into training and test sets? (Trong kiểm định chéo k-lần, bộ dữ liệu được chia thành tập huấn luyện và tập kiểm tra bao nhiêu lần?)",
    options: [
      "A. Once (Một lần)",
      "B. Twice (Hai lần)",
      "C. k times (k lần)",
      "D. It depends on the size of the dataset (Tùy thuộc vào kích thước bộ dữ liệu)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_048",
    status: "verified",
    question: "What is the purpose of regularization techniques in machine learning models? (Mục đích của các kỹ thuật điều chuẩn (regularization) trong mô hình học máy là gì?)",
    options: [
      "A. To reduce bias (Giảm độ chệch)",
      "B. To reduce variance (Giảm phương sai)",
      "C. To prevent overfitting (Để ngăn chặn quá khớp)",
      "D. All of the above (Tất cả các đáp án trên)"
    ],
    answer: 2,
    explanation: "<p>Ngăn chặn quá khớp là mục đích chính. Nó thực hiện điều này bằng cách giảm phương sai (B), thường đánh đổi bằng việc tăng độ chệch (ngược lại với A).</p>"
  },
  {
    id: "ady201m_049",
    status: "verified",
    question: "Which Pandas method is used to check for and handle missing values in a DataFrame? (Phương thức Pandas nào được dùng để kiểm tra và xử lý giá trị bị thiếu...?)",
    options: [
      "A. clean()",
      "B. check_missing()",
      "C. fill_missing()",
      "D. isnull()"
    ],
    answer: 3,
    explanation: "<p>Dùng `isnull()` để kiểm tra, `fillna()` hoặc `dropna()` để xử lý. Trong các lựa chọn, D là phương thức hợp lệ để bắt đầu quá trình.</p>"
  },
  {
    id: "ady201m_050",
    status: "verified",
    question: "What is the importance of exploratory data analysis (EDA) in Data Science? (Tầm quan trọng của phân tích dữ liệu khám phá (EDA) trong Khoa học dữ liệu là gì?)",
    options: [
      "A. Building machine learning models (Xây dựng mô hình học máy)",
      "B. Creating visualizations to understand data patterns (Tạo trực quan hóa để hiểu các mẫu dữ liệu)",
      "C. Cleaning and organizing raw data (Làm sạch và tổ chức dữ liệu thô)",
      "D. Dealing with numerical data (Xử lý dữ liệu số)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_051",
    status: "verified",
    question: "In the context of Data Science deployment, what are the key security considerations...? (Trong bối cảnh triển khai Khoa học dữ liệu, các cân nhắc bảo mật chính là gì?)",
    options: [
      "A. Security considerations only apply to data collection (Bảo mật chỉ áp dụng cho thu thập dữ liệu)",
      "B. Security considerations involve protecting data from unauthorized access and ensuring model robustness (Bảo mật bao gồm việc bảo vệ dữ liệu khỏi truy cập trái phép và đảm bảo sự vững chắc của mô hình)",
      "C. Security considerations are unrelated to the deployment stage (Bảo mật không liên quan...)",
      "D. Security considerations focus on optimizing model performance (Bảo mật tập trung vào tối ưu hóa hiệu suất)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_052",
    status: "verified",
    question: "What is the primary function of the BeautifulSoup library in Python? (Chức năng chính của thư viện BeautifulSoup trong Python là gì?)",
    options: [
      "A. Scraping and parsing HTML/XML data (Cào và phân tích cú pháp dữ liệu HTML/XML)",
      "B. Handling HTTP requests (Xử lý yêu cầu HTTP)",
      "C. Cleaning and preprocessing text data (Làm sạch và tiền xử lý dữ liệu văn bản)",
      "D. Analyzing financial data (Phân tích dữ liệu tài chính)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_053",
    status: "verified",
    question: "What is the initial step in the Data Science pipeline? (Bước đầu tiên trong quy trình Khoa học dữ liệu là gì?)",
    options: [
      "A. Problem formulation (Xác định vấn đề)",
      "B. Data collection (Thu thập dữ liệu)",
      "C. Modeling (Mô hình hóa)",
      "D. Deployment (Triển khai)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_054",
    status: "verified",
    question: "What is the role of the GROUP BY clause in SQL queries? (Vai trò của mệnh đề GROUP BY trong truy vấn SQL là gì?)",
    options: [
      "A. Sorting rows in ascending order (Sắp xếp hàng...)",
      "B. Grouping rows based on the values in one or more columns (Nhóm các hàng dựa trên giá trị trong một hoặc nhiều cột)",
      "C. Joining two tables together (Kết hợp hai bảng...)",
      "D. Filtering rows based on a specified condition (Lọc hàng...)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_055",
    status: "verified",
    question: "What SQL command is used to retrieve all records from a table named \"students\"? (Lệnh SQL nào được dùng để lấy tất cả bản ghi từ bảng \"students\"?)",
    options: [
      "A. SELECT * FROM students",
      "B. RETRIEVE * FROM students",
      "C. GET ALL FROM students",
      "D. FETCH * FROM students"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_056",
    status: "verified",
    question: "What SQL statement is used to modify existing records in a table? (Câu lệnh SQL nào được dùng để sửa đổi các bản ghi hiện có trong bảng?)",
    options: [
      "A. UPDATE TABLE",
      "B. MODIFY RECORD",
      "C. ALTER TABLE",
      "D. UPDATE"
    ],
    answer: 3,
    explanation: "<p>Cú pháp là `UPDATE table_name SET ...`, trong khi `ALTER TABLE` dùng để thay đổi cấu trúc bảng.</p>"
  },
  {
    id: "ady201m_057",
    status: "verified",
    question: "How is a JOIN operation used in SQL? (Phép toán JOIN được sử dụng trong SQL như thế nào?)",
    options: [
      "A. To create a new table (Để tạo bảng mới)",
      "B. To combine rows from two or more tables (Để kết hợp các hàng từ hai hoặc nhiều bảng)",
      "C. To delete records from a table (Để xóa bản ghi...)",
      "D. To rearrange the columns of a table (Để sắp xếp lại các cột...)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_058",
    status: "verified",
    question: "How is data typically organized in a relational database? (Dữ liệu thường được tổ chức như thế nào trong cơ sở dữ liệu quan hệ?)",
    options: [
      "A. In a single flat file (Trong một tệp phẳng duy nhất)",
      "B. In a hierarchical structure (Trong cấu trúc phân cấp)",
      "C. In tables with rows and columns (Trong các bảng có hàng và cột)",
      "D. In a network structure (Trong cấu trúc mạng)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_059",
    status: "verified",
    question: "In the context of distributed databases, what are the challenges and solutions related to data consistency? (Trong bối cảnh CSDL phân tán, các thách thức và giải pháp liên quan đến tính nhất quán của dữ liệu là gì?)",
    options: [
      "A. Ensuring data is the same across all nodes in real-time (Đảm bảo dữ liệu giống nhau trên mọi nút theo thời gian thực)",
      "B. Accepting eventual consistency and resolving conflicts (Chấp nhận tính nhất quán cuối cùng và giải quyết xung đột)",
      "C. Utilizing synchronous replication for all transactions (Sử dụng nhân bản đồng bộ cho mọi giao dịch)",
      "D. Avoiding data replication entirely (Tránh nhân bản dữ liệu hoàn toàn)"
    ],
    answer: 1,
    explanation: "<p>Đây là một mô hình (giải pháp/thỏa hiệp) phổ biến để xử lý thách thức về tính nhất quán trong các hệ thống phân tán.</p>"
  },
  {
    id: "ady201m_060",
    status: "verified",
    question: "What is the primary purpose of using virtual environments in Python for data science projects? (Mục đích chính của việc sử dụng môi trường ảo trong Python cho các dự án khoa học dữ liệu là gì?)",
    options: [
      "A. To create isolated environments for different projects (Để tạo các môi trường cô lập cho các dự án khác nhau)",
      "B. To optimize code for execution speed (Để tối ưu hóa tốc độ thực thi code)",
      "C. To visualize data in 3D space (Để trực quan hóa dữ liệu 3D)",
      "D. To generate synthetic datasets (Để tạo bộ dữ liệu tổng hợp)"
    ],
    answer: 0,
    explanation: "<p>Giúp quản lý các gói phụ thuộc khác nhau cho mỗi dự án.</p>"
  },
  {
    id: "ady201m_061",
    status: "verified",
    question: "Explain the role of Apache Hadoop in the context of big data and data science. (Giải thích vai trò của Apache Hadoop trong bối cảnh dữ liệu lớn và khoa học dữ liệu.)",
    options: [
      "A. A distributed computing framework for processing large datasets (Một nền tảng điện toán phân tán để xử lý các bộ dữ liệu lớn)",
      "B. An interactive development environment for data analysis (Môi trường phát triển tương tác...)",
      "C. A machine learning library for distributed computing (Thư viện học máy...)",
      "D. A version control system for Hadoop applications (Hệ thống quản lý phiên bản...)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_062",
    status: "verified",
    question: "Which category of Data Science tools is associated with software like Jupyter Notebook, RStudio, and Spyder? (Danh mục công cụ Khoa học dữ liệu nào được liên kết với phần mềm như Jupyter Notebook, RStudio và Spyder?)",
    options: [
      "A. Development Environment tools (Công cụ môi trường phát triển)",
      "B. Data Visualization tools (Công cụ trực quan hóa dữ liệu)",
      "C. Data Analysis tools (Công cụ phân tích dữ liệu)",
      "D. Data Cleaning tools (Công cụ làm sạch dữ liệu)"
    ],
    answer: 0,
    explanation: "<p>Đây đều là các IDE - Môi trường phát triển tích hợp.</p>"
  },
  {
    id: "ady201m_063",
    status: "verified",
    question: "Which magic command is used in Jupyter Notebook to display Matplotlib plots inline? (Lệnh \"magic\" nào được dùng trong Jupyter Notebook để hiển thị biểu đồ Matplotlib nội tuyến?)",
    options: [
      "A. %matplotlib inline",
      "B. %plot",
      "C. %inlineplot",
      "D. %showplot"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_064",
    status: "verified",
    question: "How does Docker contribute to reproducibility in data science projects? (Docker đóng góp như thế nào vào khả năng tái lập trong các dự án khoa học dữ liệu?)",
    options: [
      "A. It is a version control system for datasets (Nó là hệ thống quản lý phiên bản...)",
      "B. It provides a consistent environment for code execution (Nó cung cấp một môi trường nhất quán để thực thi code)",
      "C. It is a web-based platform for collaborative coding (Nó là nền tảng web...)",
      "D. It automates the process of model training (Nó tự động hóa quá trình huấn luyện...)"
    ],
    answer: 1,
    explanation: "<p>Đóng gói code, thư viện và các phụ thuộc vào một container để đảm bảo nó chạy giống nhau ở mọi nơi.</p>"
  },
  {
    id: "ady201m_065",
    status: "verified",
    question: "Which statement best describes a \"commit\" in Git? (Câu nào mô tả đúng nhất về \"commit\" trong Git?)",
    options: [
      "A. A snapshot of changes made to the repository (Một ảnh chụp nhanh (snapshot) các thay đổi được thực hiện đối với kho lưu trữ)",
      "B. A command used to sync local and remote repositories (Lệnh dùng để đồng bộ...)",
      "C. A log of all changes made by team members (Một bản ghi (log) tất cả thay đổi...)",
      "D. A branch in the repository (Một nhánh trong kho lưu trữ)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_066",
    status: "verified",
    question: "What data structure in Python is best used to store key-value pairs? (Cấu trúc dữ liệu nào trong Python là tốt nhất để lưu trữ các cặp key-value?)",
    options: [
      "A. Dictionary",
      "B. Tuple",
      "C. List",
      "D. Set"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_067",
    status: "verified",
    question: "What is the purpose of the pd.concat() function in pandas? (Mục đích của hàm pd.concat() trong pandas là gì?)",
    options: [
      "A. To concatenate two or more pandas DataFrames or Series (Để nối hai hoặc nhiều DataFrame hoặc Series)",
      "B. To perform concatenation of arrays in NumPy (Để thực hiện nối mảng trong NumPy)",
      "C. To compute the correlation coefficient... (Để tính toán hệ số tương quan...)",
      "D. To concatenate strings in pandas Series (Để nối chuỗi...)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_068",
    status: "verified",
    question: "What does the Python csv module provide for working with CSV files? (Mô-đun csv của Python cung cấp điều gì khi làm việc với tệp CSV?)",
    options: [
      "A. Tools for creating graphical visualizations (Công cụ tạo trực quan hóa đồ họa)",
      "B. Methods for sorting data in ascending order (Phương thức sắp xếp dữ liệu...)",
      "C. Functionality for reading from and writing to CSV files (Chức năng đọc và ghi tệp CSV)",
      "D. Features for conducting statistical analysis (Tính năng thực hiện phân tích thống kê)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_069",
    status: "verified",
    question: "Given the HTML: `...<td>1</td><td>A</td><td>2</td><td>B</td>...`. What is the output of the following Python code using BeautifulSoup? `table = soup.find('table'); row_cells = table.find_all('td'); print(len(row_cells[1:2]))`",
    options: [
      "A. 2",
      "B. 1",
      "C. 3",
      "D. 4"
    ],
    answer: 1,
    explanation: "<p>`row_cells` là một danh sách tất cả các thẻ `<td>`. `row_cells[1:2]` là một lát cắt (slice) chỉ chứa phần tử ở chỉ mục 1. Chiều dài (len) của danh sách này là 1.</p>"
  },
  {
    id: "ady201m_070",
    status: "verified",
    question: "What are the 3 parts to a response message? (3 phần của một thông điệp phản hồi (HTTP) là gì?)",
    options: [
      "A. HTTP headers, blank line, and body (Tiêu đề HTTP, dòng trống, và thân)",
      "B. Start or status line, header, and body (Dòng bắt đầu hoặc trạng thái, tiêu đề, và thân)",
      "C. Bookmarks, history, and security (Dấu trang, lịch sử, và bảo mật)",
      "D. Encoding, body, and cache (Mã hóa, thân, và bộ đệm)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_071",
    status: "verified",
    question: "What is the primary use of the BeautifulSoup library in Python for web scraping? (Công dụng chính của thư viện BeautifulSoup trong Python cho việc cào web là gì?)",
    options: [
      "A. Generating synthetic datasets (Tạo bộ dữ liệu tổng hợp)",
      "B. Scraping and parsing HTML and XML documents (Cào và phân tích cú pháp tài liệu HTML và XML)",
      "C. Sorting elements in a list (Sắp xếp các phần tử...)",
      "D. Creating visualizations... (Tạo trực quan hóa...)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_072",
    status: "verified",
    question: "What kind of API does Watson Text to Speech primarily offer for integration into applications? (Watson Text to Speech chủ yếu cung cấp loại API nào để tích hợp vào ứng dụng?)",
    options: [
      "A. RESTful API",
      "B. WebSockets API",
      "C. SOAP API",
      "D. GraphQL API"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_073",
    status: "verified",
    question: "Given `arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])`. What does the slicing expression `arr[1:, 1:]` do? (Biểu thức cắt lát này làm gì?)",
    options: [
      "A. An array containing all elements except the first row and the first column (Một mảng chứa mọi phần tử trừ hàng đầu tiên và cột đầu tiên)",
      "B. ...except the last row and the last column (trừ hàng cuối và cột cuối)",
      "C. ...except the first row (trừ hàng đầu tiên)",
      "D. ...except the last column (trừ cột cuối cùng)"
    ],
    answer: 0,
    explanation: "<p>`1:` (hàng) nghĩa là \"bỏ qua chỉ mục 0\". `1:` (cột) nghĩa là \"bỏ qua chỉ mục 0\".</p>"
  },
  {
    id: "ady201m_074",
    status: "verified",
    question: "The Python library we used to plot the chart in the lab is: (Thư viện Python chúng ta dùng để vẽ biểu đồ trong lab là:)",
    options: [
      "A. Matplotlib",
      "B. PyCoinGecko",
      "C. Pandas",
      "D. Plotly"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_075",
    status: "verified",
    question: "If you got a 75 on a test in a class with a mean score of 85 and a standard deviation of 5, the z-score... would be: (Bạn được 75 điểm, trung bình là 85, độ lệch chuẩn là 5. z-score là:)",
    options: [
      "A. 3",
      "B. -3",
      "C. 2",
      "D. -2"
    ],
    answer: 3,
    explanation: "<p>Z = (75 - 85) / 5 = -10 / 5 = -2</p>"
  },
  {
    id: "ady201m_076",
    status: "verified",
    question: "When is it appropriate to use a pie chart for data visualization? (Khi nào thì thích hợp sử dụng biểu đồ tròn để trực quan hóa dữ liệu?)",
    options: [
      "A. When comparing the distribution of categories in a whole (Khi so sánh sự phân bổ của các danh mục trong một tổng thể)",
      "B. When showing trends over time (Khi hiển thị xu hướng theo thời gian)",
      "C. When displaying relationships between two variables (Khi hiển thị mối quan hệ giữa hai biến)",
      "D. When comparing values of different groups (Khi so sánh giá trị của các nhóm khác nhau)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_077",
    status: "verified",
    question: "Which phase of the Data Science lifecycle involves selecting the appropriate machine learning algorithms? (Giai đoạn nào trong vòng đời Khoa học dữ liệu bao gồm việc chọn thuật toán học máy phù hợp?)",
    options: [
      "A. Data Collection (Thu thập dữ liệu)",
      "B. Data Cleaning (Làm sạch dữ liệu)",
      "C. Model Building (Xây dựng mô hình)",
      "D. Model Deployment (Triển khai mô hình)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_078",
    status: "verified",
    question: "In which scenario is the median a more appropriate measure of central tendency than the mean? (Trong kịch bản nào thì trung vị là thước đo xu hướng trung tâm thích hợp hơn trung bình?)",
    options: [
      "A. When the data is symmetrically distributed (Khi dữ liệu phân phối đối xứng)",
      "B. When there are extreme outliers in the dataset (Khi có các giá trị ngoại lai cực đoan trong bộ dữ liệu)",
      "C. When the data is normally distributed (Khi dữ liệu phân phối chuẩn)",
      "D. When the data has a bell-shaped curve (Khi dữ liệu có đường cong hình chuông)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_079",
    status: "verified",
    question: "In a normal distribution, what percentage of data falls within one standard deviation of the mean? (Trong phân phối chuẩn, bao nhiêu phần trăm dữ liệu nằm trong phạm vi một độ lệch chuẩn so với trung bình?)",
    options: [
      "A. 25%",
      "B. 50%",
      "C. 68%",
      "D. 95%"
    ],
    answer: 2,
    explanation: "<p>Theo quy tắc 68-95-99.7.</p>"
  },
  {
    id: "ady201m_080",
    status: "verified",
    question: "We run a regression analysis... If I get a coefficient of -0.33... and an R-square value of 0.81. What is the correlation coefficient? (Chạy hồi quy... hệ số là -0.33... R-square là 0.81. Hệ số tương quan là gì?)",
    options: [
      "A. -0.9",
      "B. 0.9",
      "C. -0.66",
      "D. 0.66"
    ],
    answer: 0,
    explanation: "<p>Hệ số tương quan (r) là căn bậc hai của R-square. √0.81 = 0.9. Vì hệ số hồi quy (-0.33) là âm, nên hệ số tương quan (r) cũng phải là âm.</p>"
  },
  {
    id: "ady201m_081",
    status: "verified",
    question: "When presented with a new dataset, what is the primary step in data exploration and preparation? (Khi được cung cấp một bộ dữ liệu mới, bước chính trong khám phá và chuẩn bị dữ liệu là gì?)",
    options: [
      "A. Cleaning missing values (Làm sạch các giá trị bị thiếu)",
      "B. Visualizing the data (Trực quan hóa dữ liệu)",
      "C. Feature selection (Lựa chọn đặc trưng)",
      "D. Calculating summary statistics (Tính toán các thống kê tóm tắt)"
    ],
    answer: 0,
    explanation: "<p>Việc xác định và xử lý các giá trị bị thiếu thường là bước đầu tiên để đảm bảo các bước thống kê (D) hoặc trực quan hóa (B) sau đó có ý nghĩa.</p>"
  },
  {
    id: "ady201m_082",
    status: "verified",
    question: "ANOVA (Analysis of Variance) is used to compare means between: (ANOVA được sử dụng để so sánh giá trị trung bình giữa:)",
    options: [
      "A. More than two independent groups (Nhiều hơn hai nhóm độc lập)",
      "B. Two independent groups (Hai nhóm độc lập)",
      "C. Categorical and continuous variables (Biến phạm trù và biến liên tục)",
      "D. Paired samples (Các mẫu theo cặp)"
    ],
    answer: 0,
    explanation: "<p>Mặc dù ANOVA về mặt toán học có thể dùng cho 2 nhóm (tương đương T-test), nhưng công dụng chính của nó là so sánh 3 nhóm trở lên.</p>"
  },
  {
    id: "ady201m_083",
    status: "verified",
    question: "Which chart is most suitable for visualizing the spread and density of a dataset along with its probability distribution? (Biểu đồ nào là phù hợp nhất để trực quan hóa sự phân tán và mật độ của một bộ dữ liệu cùng với phân phối xác suất của nó?)",
    options: [
      "A. Violin plot (Biểu đồ Violin)",
      "B. Area plot (Biểu đồ Miền)",
      "C. Bar plot (Biểu đồ Cột)",
      "D. Pie chart (Biểu đồ Tròn)"
    ],
    answer: 0,
    explanation: "<p>Biểu đồ Violin kết hợp một biểu đồ hộp (box plot - thể hiện sự phân tán) với một biểu đồ mật độ (kernel density plot - thể hiện phân phối).</p>"
  },
  {
    id: "ady201m_084",
    status: "verified",
    question: "According to the rules of probability, what is the probability of either event A or event B occurring? (Theo các quy tắc xác suất, xác suất để sự kiện A hoặc sự kiện B xảy ra là gì?)",
    options: [
      "A. P(A) * P(B)",
      "B. P(A) + P(B)",
      "C. P(A) / P(B)",
      "D. P(A and B)"
    ],
    answer: 1,
    explanation: "<p>Đây là quy tắc cộng xác suất cho các sự kiện <strong>xung khắc</strong>. Quy tắc đầy đủ là P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</p>"
  },
  {
    id: "ady201m_085",
    status: "verified",
    question: "Which category of Data Science tools encompasses software like Apache Airflow, Luigi, and Oozie? (Danh mục công cụ Khoa học dữ liệu nào bao gồm các phần mềm như Apache Airflow, Luigi và Oozie?)",
    options: [
      "A. Workflow Management tools (Công cụ Quản lý luồng công việc)",
      "B. Big Data tools (Công cụ Dữ liệu lớn)",
      "C. Data Cleaning tools (Công cụ Làm sạch dữ liệu)",
      "D. Data Integration tools (Công cụ Tích hợp dữ liệu)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_086",
    status: "verified",
    question: "Which category of Data Science tools encompasses libraries like TensorFlow, PyTorch, and Keras? (Danh mục... nào bao gồm các thư viện như TensorFlow, PyTorch và Keras?)",
    options: [
      "A. Machine Learning tools (Công cụ Học máy)",
      "B. Data Cleaning tools (Công cụ Làm sạch dữ liệu)",
      "C. Data Visualization tools (Công cụ Trực quan hóa dữ liệu)",
      "D. Data Integration tools (Công cụ Tích hợp dữ liệu)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_087",
    status: "verified",
    question: "Which category of Data Science tools includes platforms like SAS, SPSS, and STATA? (Danh mục... nào bao gồm các nền tảng như SAS, SPSS và STATA?)",
    options: [
      "A. Data Analysis tools (Công cụ Phân tích dữ liệu)",
      "B. Data Cleaning tools (Công cụ Làm sạch dữ liệu)",
      "C. Machine Learning tools (Công cụ Học máy)",
      "D. Data Visualization tools (Công cụ Trực quan hóa dữ liệu)"
    ],
    answer: 0,
    explanation: "<p>Đây là các phần mềm chuyên dụng cho phân tích thống kê.</p>"
  },
  {
    id: "ady201m_088",
    status: "verified",
    question: "Which category of Data Science tools involves software like Docker, Kubernetes, and Ansible? (Danh mục... nào liên quan đến các phần mềm như Docker, Kubernetes và Ansible?)",
    options: [
      "A. Development Environment tools (Công cụ Môi trường phát triển)",
      "B. Big Data tools (Công cụ Dữ liệu lớn)",
      "C. Data Integration tools (Công cụ Tích hợp dữ liệu)",
      "D. Workflow Management tools (Công cụ Quản lý luồng công việc)"
    ],
    answer: 0,
    explanation: "<p>Chúng là các công cụ hỗ trợ DevOps/MLOps, thuộc về môi trường phát triển và vận hành.</p>"
  },
  {
    id: "ady201m_089",
    status: "verified",
    question: "If `arr` is a 2D numpy array of shape (5, 5), what will be the shape of `arr[2: , 2:]`? (Nếu arr có shape (5, 5), shape của arr[2: , 2:] là gì?)",
    options: [
      "A. (3, 3)",
      "B. (5, 5)",
      "C. (2, 2)",
      "D. (3, 5)"
    ],
    answer: 0,
    explanation: "<p><strong>Giải thích:</strong></p><ul><li>`2:` (chiều 0 - hàng): Lấy từ chỉ mục 2 đến cuối (chỉ mục 2, 3, 4). -> 3 hàng.</li><li>`2:` (chiều 1 - cột): Lấy từ chỉ mục 2 đến cuối (chỉ mục 2, 3, 4). -> 3 cột.</li><li>Kết quả: (3, 3).</li></ul>"
  },
  {
    id: "ady201m_090",
    status: "verified",
    question: "Given `arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])`. What does the numpy array slicing expression `arr[1:, ::-1]` do? (Biểu thức cắt lát này làm gì?)",
    options: [
      "A. Selects all rows starting from the second row and all columns in reverse order. (Chọn tất cả các hàng từ hàng thứ hai và tất cả các cột theo thứ tự ngược lại.)",
      "B. Selects all rows starting from the first row and reverses the order of columns. (Chọn tất cả các hàng từ hàng đầu tiên...)",
      "C. Selects all rows and reverses the order of columns starting from the first row. (Chọn tất cả các hàng và đảo ngược thứ tự cột...)",
      "D. Selects all rows starting from the second row and all columns except the last column. (Chọn tất cả các hàng từ hàng thứ hai và tất cả các cột trừ cột cuối cùng.)"
    ],
    answer: 0,
    explanation: "<p>`1:`: Bắt đầu từ chỉ mục 1 (hàng thứ hai). `::-1`: Lấy tất cả các cột theo thứ tự đảo ngược.</p>"
  },
  {
    id: "ady201m_091",
    status: "verified",
    question: "What will be the shape of the sliced numpy array if `arr` is a 2D numpy array of shape (8, 6) and we use the slicing expression `arr[1: , :2]`? (Shape sẽ là gì nếu arr có shape (8, 6) và ta cắt lát arr[1: , :2]?)",
    options: [
      "A. (3, 3)",
      "B. (3, 4)",
      "C. (2, 2)",
      "D. (7, 2)"
    ],
    answer: 3,
    explanation: "<p><strong>Giải thích:</strong></p><ul><li>`1:` (hàng): Lấy từ chỉ mục 1 đến 7. -> 7 hàng.</li><li>`:2` (cột): Lấy chỉ mục 0 và 1. -> 2 cột.</li><li>Shape đúng là (7, 2).</li></ul>"
  },
  {
    id: "ady201m_092",
    status: "verified",
    question: "According to the study, what is admirable about Dr. Patil's definition of a data scientist? (Theo nghiên cứu, điều gì đáng ngưỡng mộ về định nghĩa của Dr. Patil về nhà khoa học dữ liệu?)",
    options: [
      "A. His definition excludes statistics. (Định nghĩa của ông loại trừ thống kê.)",
      "B. His definition limits data science to activities involving machine learning. (Định nghĩa của ông giới hạn...)",
      "C. His definition is about weaving strong narratives into analytics. (Định nghĩa của ông là về việc đan xen...)",
      "D. His definition is inclusive of individuals from various academic backgrounds and training. (Định nghĩa của ông bao gồm cả những cá nhân từ nhiều nền tảng học thuật và đào tạo khác nhau.)"
    ],
    answer: 3,
    explanation: ""
  },
  {
    id: "ady201m_093",
    status: "verified",
    question: "The first state of the data science methodology is __________. (Giai đoạn đầu tiên của phương pháp luận khoa học dữ liệu là __________.)",
    options: [
      "A. Data Understanding (Hiểu dữ liệu)",
      "B. Modeling (Mô hình hóa)",
      "C. Business Understanding (Hiểu nghiệp vụ)",
      "D. Data Collection (Thu thập dữ liệu)"
    ],
    answer: 2,
    explanation: "<p>Theo các phương pháp luận tiêu chuẩn như CRISP-DM, \"Hiểu nghiệp vụ\" (hoặc \"Xác định vấn đề\") luôn là bước đầu tiên.</p>"
  },
  {
    id: "ady201m_094",
    status: "verified",
    question: "Support vector machines and neural networks are what type of algorithms? (Máy vector hỗ trợ (SVM) và mạng nơ-ron là loại thuật toán gì?)",
    options: [
      "A. Extraction (Trích xuất)",
      "B. Clustering (Phân cụm - Unsupervised)",
      "C. Classification (Phân loại - Supervised)",
      "D. Regression (Hồi quy - Supervised)"
    ],
    answer: 2,
    explanation: "<p>Mặc dù cả hai đều có thể được điều chỉnh để Hồi quy (D), nhưng chúng chủ yếu được biết đến và sử dụng cho các bài toán Phân loại.</p>"
  },
  {
    id: "ady201m_095",
    status: "verified",
    question: "How would you access the column \"body-style\" from the dataframe df? (Bạn sẽ truy cập cột \"body-style\" từ dataframe df như thế nào?)",
    options: [
      "A. df[\"body-style\"]",
      "B. df == \"body-style\"",
      "C. df\"body-style\"",
      "D. df.(body-style)"
    ],
    answer: 0,
    explanation: "<p>Cú pháp `df.body-style` không hoạt động vì có dấu gạch ngang, do đó phải dùng `[]`.</p>"
  },
  {
    id: "ady201m_096",
    status: "verified",
    question: "What do the following lines of code do? `with open(\"Example3.txt\", \"a\") as file1: file1.write(\"This is line C\\n\")` (Các dòng code sau làm gì?)",
    options: [
      "A. Read the file \"Example3.txt\" (Đọc file)",
      "B. Write to the file \"Example3.txt\" (Ghi vào file)",
      "C. Append to the file \"Example3.txt\" (Nối (ghi tiếp) vào file)",
      "D. None of others (Không có đáp án nào đúng)"
    ],
    answer: 2,
    explanation: "<p>Tham số \"a\" có nghĩa là \"append\" (nối vào cuối), nó sẽ tạo file nếu chưa tồn tại hoặc ghi tiếp vào cuối file nếu đã tồn tại.</p>"
  },
  {
    id: "ady201m_097",
    status: "verified",
    question: "Attributes of an entity become __________ in a table. (Các thuộc tính của một thực thể trở thành __________ trong một bảng.)",
    options: [
      "A. rows (hàng, đại diện cho bản ghi)",
      "B. columns (cột, đại diện cho thuộc tính)",
      "C. constraints (ràng buộc)",
      "D. keys (khóa)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_098",
    status: "verified",
    question: "What steps do the following lines of code perform? `Input=[('scale',StandardScaler()), ('model',LinearRegression())]; pipe=Pipeline(Input); pipe.fit(Z,y); ypipe=pipe.predict(Z)`",
    options: [
      "A. Standardize the data, then perform a polynomial transform on the features Z. (Chuẩn hóa dữ liệu, sau đó thực hiện biến đổi đa thức...)",
      "B. Find the correlation between Z and y. (Tìm tương quan...)",
      "C. Standardize the data, then perform a prediction using a linear regression model. (Chuẩn hóa dữ liệu, sau đó thực hiện dự đoán bằng mô hình hồi quy tuyến tính.)",
      "D. None of others"
    ],
    answer: 2,
    explanation: "<p>Pipeline thực hiện tuần tự: `StandardScaler` (chuẩn hóa), sau đó `fit` (huấn luyện) mô hình `LinearRegression`, và cuối cùng là `predict` (dự đoán).</p>"
  },
  {
    id: "ady201m_099",
    status: "verified",
    question: "Fill in the blank: The MAX model-serving microservices expose a __________ that consume a model. (Điền vào chỗ trống: Các vi dịch vụ MAX phục vụ mô hình hiển thị (expose) một __________ để sử dụng mô hình.)",
    options: [
      "A. Scale API",
      "B. Java API",
      "C. REST API",
      "D. Python API"
    ],
    answer: 2,
    explanation: "<p>REST API là cách phổ biến nhất để triển khai các mô hình dưới dạng microservice, cho phép các ứng dụng khác \"tiêu thụ\" (gọi) mô hình.</p>"
  },
  {
    id: "ady201m_100",
    status: "verified",
    question: "Which of the following are Data Integration and Transformation tools? (Select all that apply.) (Đâu là các công cụ Tích hợp và Biến đổi Dữ liệu?)",
    options: [
      "A. Cassandra",
      "B. Apache Kafka",
      "C. Ceph",
      "D. None of the others (Không có đáp án nào đúng)"
    ],
    answer: 3,
    explanation: "<p>Kafka (B) thường được dùng trong các pipeline tích hợp, nhưng bản thân nó không phải là một công cụ ETL/biến đổi. A và C là các hệ thống lưu trữ.</p>"
  },
  {
    id: "ady201m_101",
    status: "verified",
    question: "In Python, if you executed `name = 'Lizz'`, what would be the output of `print(name[0:2])`? (Nếu name = 'Lizz', kết quả của name[0:2] là gì?)",
    options: [
      "A. Lizz",
      "B. L",
      "C. Liz",
      "D. Li"
    ],
    answer: 3,
    explanation: "<p>Cắt lát (slicing) trong Python lấy từ chỉ mục bắt đầu (0) đến <i>trước</i> chỉ mục kết thúc (2). Tức là lấy chỉ mục 0 ('L') và 1 ('i').</p>"
  },
  {
    id: "ady201m_102",
    status: "verified",
    question: "Consider the Set `V={'A','B','C'}`. What is the result of `V.add('C')`? (Xem Set V={'A','B','C'}. Kết quả của V.add('C') là gì?)",
    options: [
      "A. {'A', 'B'}",
      "B. {'A', 'B', 'C'}",
      "C. {'A', 'B', 'C', 'C'}",
      "D. error"
    ],
    answer: 1,
    explanation: "<p>Set (tập hợp) chỉ lưu trữ các phần tử duy nhất. Thêm một phần tử đã tồn tại ('C') không làm thay đổi Set.</p>"
  },
  {
    id: "ady201m_103",
    status: "verified",
    question: "In the Data Collection stage, techniques such as __________ and visualization can be applied... (Trong giai đoạn Thu thập dữ liệu, các kỹ thuật như __________ và trực quan hóa có thể được áp dụng...)",
    options: [
      "A. Descriptive statistics (Thống kê mô tả)",
      "B. The unsupervised method (Phương pháp không giám sát)",
      "C. Data manipulation (Thao tác dữ liệu)",
      "D. The supervised method (Phương pháp có giám sát)"
    ],
    answer: 0,
    explanation: "<p>Sau khi thu thập, thống kê mô tả (như min, max, mean, count) được dùng để hiểu nhanh về dữ liệu.</p>"
  },
  {
    id: "ady201m_104",
    status: "verified",
    question: "Consider the following Python Dictionary: `Dict={\"A\":1, \"B\":\"2\", \"C\":[3,3,3], \"D\":(4,4,4), \"E\":5, \"F\":6}`. What is the result of the following operation: `Dict[\"D\"]`?",
    options: [
      "A. 3",
      "B. [3,3,3]",
      "C. (4, 4, 4)",
      "D. error"
    ],
    answer: 2,
    explanation: "<p>Thao tác này truy xuất giá trị (value) được liên kết với khóa (key) \"D\".</p>"
  },
  {
    id: "ady201m_105",
    status: "verified",
    question: "For predictive models, a test set, which is similar to - but independent of - the training set, is [used to assess] how well the model predicts outcomes... This is an example of what step in the methodology? (Đối với mô hình dự đoán, một tập kiểm tra... được sử dụng để đánh giá... Đây là ví dụ về bước nào?)",
    options: [
      "A. Model Evaluation (Đánh giá mô hình)",
      "B. Data Requirements (Yêu cầu dữ liệu)",
      "C. Analytic Approach (Phương pháp phân tích)",
      "D. Deployment (Triển khai)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_106",
    status: "verified",
    question: "Which of the following are data management tools? (Đâu là các công cụ quản lý dữ liệu?)",
    options: [
      "A. GitHub",
      "B. MySQL",
      "C. KubeFlow",
      "D. PixieDust"
    ],
    answer: 1,
    explanation: "<p>MySQL là một hệ thống quản lý cơ sở dữ liệu quan hệ (RDBMS). GitHub quản lý mã nguồn, KubeFlow là nền tảng MLOps, PixieDust là thư viện Python.</p>"
  },
  {
    id: "ady201m_107",
    status: "verified",
    question: "What is the function of a primary key? (Chức năng của khóa chính là gì?)",
    options: [
      "A. The primary key is used to grant access to a table. (dùng để cấp quyền...)",
      "B. The primary key enables you to add data to columns. (cho phép thêm dữ liệu...)",
      "C. The primary key uniquely identifies each row in a table. (xác định duy nhất mỗi hàng trong bảng.)",
      "D. The primary key is used to identify any rows... that contain NULL values. (dùng để xác định hàng chứa NULL.)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_108",
    status: "verified",
    question: "Which API do you use to connect to a database from Python? (Bạn sử dụng API nào để kết nối với cơ sở dữ liệu từ Python?)",
    options: [
      "A. REST API",
      "B. Watson API",
      "C. DB API such as ibm_db_API (API Cơ sở dữ liệu như ibm_db_API)",
      "D. Census API"
    ],
    answer: 2,
    explanation: "<p>Python DB API (PEP 249) là một đặc tả chuẩn cho các thư viện kết nối CSDL, ví dụ như ibm_db, psycopg2, sqlite3.</p>"
  },
  {
    id: "ady201m_109",
    status: "verified",
    question: "What is the code to create a ridge regression object `RR` with an alpha term equal to 10? (Code để tạo đối tượng hồi quy Ridge RR với tham số alpha bằng 10 là gì?)",
    options: [
      "A. RR=LinearRegression(alpha=10)",
      "B. RR=Ridge(alpha=10)",
      "C. RR=Ridge(alpha=1)",
      "D. None of others"
    ],
    answer: 1,
    explanation: "<p>Trong Scikit-learn, lớp này được gọi là `Ridge`.</p>"
  },
  {
    id: "ady201m_110",
    status: "verified",
    question: "Formal evaluation could include testing the predictive capabilities... effective and efficient the algorithms have been in reproducing data. This is known as: (Đánh giá chính thức có thể bao gồm việc kiểm tra khả năng dự đoán... các thuật toán đã hiệu quả và hiệu quả như thế nào trong việc tái tạo dữ liệu. Điều này được gọi là:)",
    options: [
      "A. Prototyping (Tạo mẫu)",
      "B. Overfitting (Quá khớp)",
      "C. In-sample forecast (Dự báo trong mẫu)",
      "D. Reverse engineering (Kỹ thuật đảo ngược)"
    ],
    answer: 2,
    explanation: "<p>Kiểm tra mô hình trên chính dữ liệu mà nó đã được huấn luyện (reproducing data) được gọi là đánh giá \"trong mẫu\" (in-sample).</p>"
  },
  {
    id: "ady201m_111",
    status: "verified",
    question: "Which of the following statements about built-in database functions is correct? (Câu nào sau đây đúng về các hàm CSDL tích hợp sẵn?)",
    options: [
      "A. Built-in database functions may increase processing time. (có thể làm tăng thời gian xử lý.)",
      "B. Built-in database functions may increase network bandwidth consumed. (có thể làm tăng băng thông mạng...)",
      "C. Built-in database functions reduce the amount of data that is retrieved. (giảm lượng dữ liệu được truy xuất.)",
      "D. Built-in database functions must be called from a programming language like Python. (phải được gọi từ Python...)"
    ],
    answer: 2,
    explanation: "<p>Ví dụ, các hàm tổng hợp như `AVG()`, `SUM()`, `COUNT()` thực hiện tính toán trên máy chủ CSDL và chỉ trả về kết quả cuối cùng, giảm lượng dữ liệu truyền qua mạng.</p>"
  },
  {
    id: "ady201m_112",
    status: "verified",
    question: "What does the horizontal axis in a scatter plot represent? (Trục ngang trong biểu đồ phân tán đại diện cho điều gì?)",
    options: [
      "A. Independent variable (Biến độc lập)",
      "B. Dependent variable (Biến phụ thuộc)",
      "C. Correlation variable (Biến tương quan)",
      "D. None of others"
    ],
    answer: 0,
    explanation: "<p>Theo quy ước, trục X (ngang) biểu thị biến độc lập (hoặc biến dự đoán) và trục Y (dọc) biểu thị biến phụ thuộc (biến kết quả).</p>"
  },
  {
    id: "ady201m_113",
    status: "verified",
    question: "How many duplicate elements can you have in a set? (Bạn có thể có bao nhiêu phần tử trùng lặp trong một set?)",
    options: [
      "A. 1",
      "B. 0",
      "C. 100",
      "D. depends on the number of elements in your set."
    ],
    answer: 1,
    explanation: "<p>Set, theo định nghĩa, là một tập hợp các phần tử <i>duy nhất</i>.</p>"
  },
  {
    id: "ady201m_114",
    status: "verified",
    question: "Which of the following statements is true? (Câu nào sau đây đúng?)",
    options: [
      "A. Keras, Scikit-Learn, Matplotlib, Pandas, and TensorFlow are all built with Python. (Keras, Scikit-Learn... đều được xây dựng bằng Python.)",
      "B. Java is the most popular language in data science. (Java là ngôn ngữ phổ biến nhất...)",
      "C. SQL is useful for AI, machine learning, web development, and IoT. (SQL hữu ích cho AI, ML...)",
      "D. All of the above"
    ],
    answer: 0,
    explanation: "<p>Tất cả đều là các thư viện chính trong hệ sinh thái Khoa học dữ liệu Python.</p>"
  },
  {
    id: "ady201m_115",
    status: "verified",
    question: "What is the minimum possible value of Pearson's Correlation? (Giá trị nhỏ nhất có thể của Tương quan Pearson là gì?)",
    options: [
      "A. 1",
      "B. 100",
      "C. -1",
      "D. MIN"
    ],
    answer: 2,
    explanation: "<p>Hệ số tương quan Pearson r nằm trong khoảng từ -1 (tương quan âm hoàn hảo) đến +1 (tương quan dương hoàn hảo).</p>"
  },
  {
    id: "ady201m_116",
    status: "verified",
    question: "What are three important reasons that data scientists should maintain continuous communication with business sponsors...? (Ba lý do quan trọng mà nhà KH Dữ liệu nên duy trì liên lạc liên tục với các nhà tài trợ nghiệp vụ...?)",
    options: [
      "A. So that business sponsors can ensure the work remains on track to generate the intended... (Để nhà tài trợ có thể đảm bảo công việc đi đúng hướng...)",
      "B. So that business sponsors can provide domain expertise. (Để nhà tài trợ có thể cung cấp chuyên môn lĩnh vực.)",
      "C. So that business sponsors can review intermediate findings. (Để nhà tài trợ có thể xem xét các kết quả trung gian.)",
      "D. All of the answers. (Tất cả các câu trả lời.)"
    ],
    answer: 3,
    explanation: ""
  },
  {
    id: "ady201m_117",
    status: "verified",
    question: "According to the reading, the output of a data-mining exercise largely depends on: (Theo bài đọc, kết quả của một bài tập khai thác dữ liệu phụ thuộc phần lớn vào:)",
    options: [
      "A. The data scientist (Nhà khoa học dữ liệu)",
      "B. The quality of the data (Chất lượng của dữ liệu)",
      "C. The scope of the project (Phạm vi của dự án)",
      "D. The programming language used (Ngôn ngữ lập trình được sử dụng)"
    ],
    answer: 1,
    explanation: "<p>Nguyên tắc \"Rác vào, Rác ra\" (Garbage In, Garbage Out) - chất lượng của kết quả phụ thuộc vào chất lượng của dữ liệu đầu vào.</p>"
  },
  {
    id: "ady201m_118",
    status: "verified",
    question: "How do you cast the list 'A' to the set 'a'? (Làm thế nào để bạn ép kiểu list 'A' thành set 'a'?)",
    options: [
      "A. a.set()",
      "B. a=A.append()",
      "C. a=A.dict()",
      "D. a=set(A)"
    ],
    answer: 3,
    explanation: "<p>Hàm `set()` là hàm tích hợp sẵn của Python để tạo một set từ một đối tượng có thể lặp (iterable) như list.</p>"
  },
  {
    id: "ady201m_119",
    status: "verified",
    question: "In Python, if you executed `var = \"01234567\"`, what would be the result of `print(var[::2])`? (Nếu var = \"01234567\", kết quả của print(var[::2]) là gì?)",
    options: [
      "A. 0246",
      "B. 1357",
      "C. 1234567",
      "D. 8903"
    ],
    answer: 0,
    explanation: "<p><strong>Giải thích:</strong> Cú pháp cắt lát là `[start:stop:step]`. `::2` có nghĩa là: Bắt đầu từ đầu, đi đến cuối, với bước nhảy là 2. Nó sẽ lấy: '0' (chỉ mục 0), '2' (chỉ mục 2), '4' (chỉ mục 4), '6' (chỉ mục 6).</p>"
  },
  {
    id: "ady201m_120",
    status: "verified",
    question: "Concatenate the following lists: A=[1, 'a'] and B=[2, 1, 'd']. (Nối các list sau: A=[1, 'a'] và B=[2, 1, 'd'].)",
    options: [
      "A. A+B",
      "B. A-B",
      "C. A*B",
      "D. A/B"
    ],
    answer: 0,
    explanation: "<p>Toán tử `+` được sử dụng để nối (concatenate) hai list trong Python.</p>"
  },
  {
    id: "ady201m_121",
    status: "verified",
    question: "Given `import numpy as np; matrix=np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])`. How to get element 7 from the matrix? (Làm thế nào để lấy phần tử 7 từ ma trận?)",
    options: [
      "A. matrix[1,0]",
      "B. matrix[2,0]",
      "C. matrix[3,1]",
      "D. matrix[2,1]"
    ],
    answer: 1,
    explanation: "<p>Để lấy số 7 (nằm ở hàng thứ 3, cột 1), cú pháp đúng là `matrix[2, 0]` (vì chỉ mục bắt đầu từ 0).</p>"
  },
  {
    id: "ady201m_122",
    status: "verified",
    question: "What is the correct use of the `train_test_split` function such that 10% of the data samples are used for the test set, and the `random_state` is set to zero? (Sử dụng hàm `train_test_split` thế nào cho đúng để 10% dữ liệu được dùng cho tập test, và `random_state`=0?)",
    options: [
      "A. train_test_split(x_data, y_data, test_size=0.1, random_state=0)",
      "B. train_test_split(x_data, y_data, train_size=0.1, random_state=0)",
      "C. train_test_split(x_data, y_data, test_size=0.9, random_state=0)",
      "D. train_test_split(x_data, y_data, test_size=1, random_state=0)"
    ],
    answer: 0,
    explanation: "<p>`test_size=0.1` chỉ định rằng 10% dữ liệu sẽ được dùng cho tập kiểm tra.</p>"
  },
  {
    id: "ady201m_123",
    status: "verified",
    question: "In statistics, a type 1 error is a __________. (Trong thống kê, sai lầm loại 1 là __________.)",
    options: [
      "A. False-positive error (Lỗi dương tính giả)",
      "B. False-alarm error (Lỗi báo động giả)",
      "C. Hypothesis error (Lỗi giả thuyết)",
      "D. False-negative error (Lỗi âm tính giả)"
    ],
    answer: 0,
    explanation: "<p>Sai lầm loại I, hay α, là khi chúng ta bác bỏ giả thuyết H0 (không có gì) trong khi H0 thực sự đúng. Ví dụ: kết luận thuốc có hiệu quả, trong khi thực tế nó không.</p>"
  },
  {
    id: "ady201m_124",
    status: "verified",
    question: "Which of the following languages can NOT be used for data science? (Ngôn ngữ nào sau đây KHÔNG thể được sử dụng cho khoa học dữ liệu?)",
    options: [
      "A. Julia",
      "B. Visual Basic",
      "C. SQL",
      "D. None of the above (Không có đáp án nào đúng)"
    ],
    answer: 3,
    explanation: "<p>Về mặt lý thuyết, bất kỳ ngôn ngữ nào cũng có thể dùng. Tuy nhiên, Visual Basic (B) rất hiếm khi và không phù hợp cho KH Dữ liệu. Julia (A) và SQL (C) thì được sử dụng rộng rãi. Do đó, tất cả đều có thể được sử dụng, làm cho D là câu trả lời đúng nhất.</p>"
  },
  {
    id: "ady201m_125",
    status: "verified",
    question: "What is the result of applying the following method `head()`, to the dataframe df? (Kết quả của việc áp dụng phương thức head() cho dataframe df là gì?)",
    options: [
      "A. prints the first row of the dataframe (in ra hàng đầu tiên...)",
      "B. prints the first column of the dataframe (in ra cột đầu tiên...)",
      "C. prints the first 5 rows of the dataframe (in ra 5 hàng đầu tiên...)",
      "D. prints the dataframe out (in ra dataframe)"
    ],
    answer: 2,
    explanation: "<p>Theo mặc định, `df.head()` hiển thị 5 hàng đầu tiên.</p>"
  },
  {
    id: "ady201m_126",
    status: "verified",
    question: "Select the correct statement about the Data Preparation stage. (Chọn phát biểu đúng về giai đoạn Chuẩn bị dữ liệu.)",
    options: [
      "A. The Data Preparation stage involves addressing the speed of collect data. (Giai đoạn... liên quan đến tốc độ thu thập dữ liệu.)",
      "B. The Data Preparation stage involves removing duplicate data. (Giai đoạn... bao gồm việc loại bỏ dữ liệu trùng lặp.)",
      "C. The Data Preparation stage involves properly configuration the data. (Giai đoạn... liên quan đến cấu hình dữ liệu.)",
      "D. All of the above statements are correct."
    ],
    answer: 1,
    explanation: "<p>Làm sạch dữ liệu, bao gồm loại bỏ trùng lặp và xử lý giá trị thiếu, là một phần cốt lõi của \"Chuẩn bị dữ liệu\".</p>"
  },
  {
    id: "ady201m_127",
    status: "verified",
    question: "Which of the following jobs was called by the Harvard Business Review the sexiest job of the [21st century]? (Công việc nào sau đây được Harvard Business Review gọi là công việc hấp dẫn nhất [thế kỷ 21]?)",
    options: [
      "A. Data Science (Khoa học dữ liệu)",
      "B. Math and Statistics (Toán và Thống kê)",
      "C. Renewable Energy Engineering (Kỹ thuật Năng lượng tái tạo)",
      "D. Coal Mining (Khai thác than)"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_128",
    status: "verified",
    question: "What is the Pearson Correlation between variables X and Y, if X=Y? (Tương quan Pearson giữa X và Y là gì, nếu X=Y?)",
    options: [
      "A. -1",
      "B. 1",
      "C. 0",
      "D. 100"
    ],
    answer: 1,
    explanation: "<p>Nếu X = Y, chúng có một mối tương quan tuyến tính dương hoàn hảo.</p>"
  },
  {
    id: "ady201m_129",
    status: "verified",
    question: "Scikit-learn is used for? (Scikit-learn được dùng để?)",
    options: [
      "A. Statistical modelling including regression and classification. (Mô hình hóa thống kê bao gồm hồi quy và phân loại.)",
      "B. Fast array processing. (Xử lý mảng nhanh - đây là NumPy.)",
      "C. Its is library for visualization data (Là thư viện để trực quan hóa dữ liệu - đây là Matplotlib/Seaborn.)",
      "D. None of others"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_130",
    status: "verified",
    question: "Consider the dataframe `df`, what method provides the summary statistics? (Xem dataframe df, phương thức nào cung cấp các thống kê tóm tắt?)",
    options: [
      "A. describe()",
      "B. head()",
      "C. tail()",
      "D. summary()"
    ],
    answer: 0,
    explanation: "<p>Phương thức chính xác là `df.describe()`.</p>"
  },
  {
    id: "ady201m_131",
    status: "verified",
    question: "Which of the following statements about a database is/are correct? (Câu nào sau đây về cơ sở dữ liệu là đúng?)",
    options: [
      "A. A database is a logically coherent collection of data with some inherent meaning (CSDL là một bộ sưu tập dữ liệu mạch lạc logic với một ý nghĩa vốn có.)",
      "B. Data can only be added and queried from a database but not modified (Dữ liệu chỉ có thể được thêm và truy vấn... nhưng không thể sửa đổi.)",
      "C. Only SQL can be used to query data in a database (Chỉ SQL mới có thể...)",
      "D. All of the above"
    ],
    answer: 0,
    explanation: ""
  },
  {
    id: "ady201m_132",
    status: "verified",
    question: "In Simple linear regression - SLR, `y = b0 + b1x`. What is b0? (Trong hồi quy tuyến tính đơn, y = b0 + b1x. b0 là gì?)",
    options: [
      "A. The predictor (Biến dự đoán - là x)",
      "B. The intercept (Hệ số chặn / Giao điểm trục tung)",
      "C. The slope (Hệ số góc / Độ dốc - là b1)",
      "D. The target (Biến mục tiêu - là y)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_133",
    status: "verified",
    question: "Which of the following statements are correct about Data scientists? (Câu nào sau đây đúng về các Nhà khoa học dữ liệu?)",
    options: [
      "A. Data scientists determine how to write the data. (Nhà KH Dữ liệu xác định cách ghi dữ liệu.)",
      "B. Data scientists identify the data that is required for data modeling. (Nhà KH Dữ liệu xác định dữ liệu cần thiết cho mô hình hóa.)",
      "C. Data scientists ask customers how to prepare the data. (Nhà KH Dữ liệu hỏi khách hàng cách chuẩn bị dữ liệu.)",
      "D. Data scientists must demonstrate their skills before do data science. (Nhà KH Dữ liệu phải chứng minh kỹ năng...)"
    ],
    answer: 1,
    explanation: ""
  },
  {
    id: "ady201m_134",
    status: "verified",
    question: "What is the function of a WHERE clause in an UPDATE statement? (Chức năng của mệnh đề WHERE trong câu lệnh UPDATE là gì?)",
    options: [
      "A. A WHERE clause enables you to specify which rows will be updated. (Mệnh đề WHERE cho phép bạn chỉ định hàng nào sẽ được cập nhật.)",
      "B. A WHERE clause enables you to list the column and data to be updated. (Mệnh đề WHERE cho phép... - đây là mệnh đề SET.)",
      "C. A WHERE clause enables you to specify a new table... (Mệnh đề WHERE cho phép...)",
      "D. A WHERE clause is never used with an UPDATE statement. (Mệnh đề WHERE không bao giờ được dùng...)"
    ],
    answer: 0,
    explanation: "<p>Nếu không có mệnh đề WHERE, tất cả các hàng trong bảng sẽ bị cập nhật.</p>"
  },
  {
    id: "ady201m_135",
    status: "verified",
    question: "The SELECT statement is called a query, and the output we get from executing the query is: (Câu lệnh SELECT được gọi là một truy vấn, và kết quả chúng ta nhận được là:)",
    options: [
      "A. The index (Chỉ mục)",
      "B. The table (Cái bảng)",
      "C. A results set (Một tập kết quả)",
      "D. The database (Cơ sở dữ liệu)"
    ],
    answer: 2,
    explanation: ""
  },
  {
    id: "ady201m_136",
    status: "verified",
    question: "Which of the following is used to make Artificial intelligence and Machine Learning possible? (Cái nào sau đây được sử dụng để khiến Trí tuệ nhân tạo và Học máy trở nên khả thi?)",
    options: [
      "A. Excel",
      "B. PyTorch",
      "C. LogPro",
      "D. All of the above"
    ],
    answer: 1,
    explanation: "<p>PyTorch là một thư viện học sâu (Deep Learning) chính, là nền tảng cho AI/ML hiện đại.</p>"
  },
  {
    id: "ady201m_137",
    status: "verified",
    question: "You want to retrieve Salary information for an employee called Ed... Which clause should [you use to] filter the number of rows returned? (Bạn muốn lấy thông tin Lương cho nhân viên tên Ed... Bạn nên dùng mệnh đề nào để lọc số hàng trả về?)",
    options: [
      "A. ORDER BY Firstname;",
      "B. GROUP BY Firstname = 'Ed';",
      "C. WHERE Employees = 'Ed';",
      "D. WHERE Firstname = 'Ed';"
    ],
    answer: 3,
    explanation: ""
  },
  {
    id: "ady201m_138",
    status: "verified",
    question: "What is the correct acronym for missing data? (Từ viết tắt chính xác cho dữ liệu bị thiếu là gì?)",
    options: [
      "A. NaN",
      "B. no-data",
      "C. null",
      "D. empty"
    ],
    answer: 0,
    explanation: "<p>Viết tắt cho <strong>N</strong>ot <strong>a</strong> <strong>N</strong>umber, thường được sử dụng trong tính toán (ví dụ: NumPy, Pandas) để đại diện cho các giá trị số bị thiếu hoặc không xác định. 'null' (C) cũng được dùng, nhưng chủ yếu trong SQL.</p>"
  },
  {
    id: "ady201m_139",
    status: "verified",
    question: "How would you replace the missing values in the column \"normalized-losses\" with the mean? (Bạn sẽ thay thế các giá trị bị thiếu trong cột \"normalized-losses\" bằng giá trị trung bình như thế nào?)",
    options: [
      "A. `mean = df[\"normalized-losses\"].mean()`",
      "B. `df[\"normalized-losses\"].replace(np.nan, min)`",
      "C. `df.dropna(subset=[\"price\"], axis=0, inplace = True)`",
      "D. `mean = df['normalized-losses'].mean(); df['normalized-losses'].fillna(mean, inplace=True)`"
    ],
    answer: 3,
    explanation: "<p>Thao tác này bao gồm hai bước: tính giá trị trung bình và sau đó sử dụng `fillna()` để điền vào các giá trị thiếu.</p>"
  },
  {
    id: "ady201m_140",
    status: "verified",
    question: "Which statement about JupyterLab is correct? (Phát biểu nào về JupyterLab là đúng?)",
    options: [
      "A. JupyterLab can run Python code only.",
      "B. JupyterLab can run R code only.",
      "C. JupyterLab can run R and Python code only.",
      "D. JupyterLab can run R and Python code in addition to other programming languages. (JupyterLab có thể chạy code R và Python ngoài các ngôn ngữ lập trình khác.)"
    ],
    answer: 3,
    explanation: "<p>JupyterLab, thông qua hệ thống \"kernel\", có thể hỗ trợ hàng chục ngôn ngữ, bao gồm Python, R, Julia, SQL, v.v.</p>"
  }
];