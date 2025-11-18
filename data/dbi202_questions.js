var dbi202_questions = [
    {
        id: "dbi202_001",
        question: "A database administrator is a person or persons responsible for the structure/schema of the database.",
        options: [
            "A. True",
            "B. False"
        ],
        answer: 0,
        explanation: "Đây là định nghĩa đúng về Quản trị viên cơ sở dữ liệu (DBA)."
    },
    {
        id: "dbi202_002",
        question: "What is the full form of DBMS?",
        options: [
            "A. Database Management System",
            "B. Data Base System",
            "C. Database Backup Service",
            "D. Data Backup Management System"
        ],
        answer: 0,
        explanation: "DBMS là viết tắt của Database Management System (Hệ quản trị Cơ sở dữ liệu)."
    },
    {
        id: "dbi202_003",
        question: "Which of the following is an appropriate characteristic of a database?",
        options: [
            "A. Because a detail is created out of the format of data, it cannot respond flexibly to data format",
            "B. The procedure for making backups is complicated, making control complex",
            "C. It is difficult to share data between operations due to exclusive control function",
            "D. It can be accessed by multiple users at the same time due to exclusive control function"
        ],
        answer: 3,
        explanation: "Một trong những đặc điểm chính của CSDL là cho phép nhiều người dùng truy cập đồng thời nhờ các cơ chế kiểm soát tập trung."
    },
    {
        id: "dbi202_004",
        question: "The ability to query data as well as insert, delete, and alter tuples is offered by:",
        options: [
            "A. TCL (Transaction Control Language)",
            "B. DCL (Data Control Language)",
            "C. DML (Data Manipulation Language)",
            "D. DDL (Data Definition Language)"
        ],
        answer: 2,
        explanation: "DML (Data Manipulation Language) là ngôn ngữ dùng để thao tác dữ liệu, bao gồm các lệnh SELECT, INSERT, UPDATE, DELETE."
    },
    {
        id: "dbi202_005",
        question: "According to the technology deployed by the database management system, which of the following is correct?",
        options: [
            "A. Locks are used to maintain transactional integrity and consistency",
            "B. Cursors are used to maintain transactional integrity and consistency",
            "C. Procedures are used to maintain transactional integrity and consistency",
            "D. Functions are used to maintain transactional integrity and consistency"
        ],
        answer: 0,
        explanation: "Khóa (Locks) là cơ chế được DBMS sử dụng để đảm bảo tính toàn vẹn và nhất quán của giao dịch khi có nhiều truy cập đồng thời."
    },
    {
        id: "dbi202_006",
        question: "What is a database?",
        options: [
            "A. Organized collection of data or information without organizing",
            "B. Organized collection of data or information that can be accessed, updated, and managed",
            "C. Organized collection of data or information that cannot be accessed, updated, and managed",
            "D. Collection of data that cannot be updated or managed"
        ],
        answer: 1,
        explanation: "Định nghĩa đầy đủ nhất của CSDL là một bộ sưu tập có tổ chức các thông tin có thể được truy cập, cập nhật và quản lý."
    },
    {
        id: "dbi202_007",
        question: "What does RDBMS consist of?",
        options: [
            "A. Collection of Tables",
            "B. Collection of Records",
            "C. Collection of Keys",
            "D. Collection of Fields"
        ],
        answer: 0,
        explanation: "RDBMS (Hệ quản trị CSDL quan hệ) bao gồm một tập hợp các bảng (tables), nơi dữ liệu được lưu trữ."
    },
    {
        id: "dbi202_008",
        question: "In the RDBMS, what is the difference between PRIMARY KEY and UNIQUE KEY?",
        options: [
            "A. UNIQUE KEY doesn't accept the NULL value but PRIMARY KEY does",
            "B. UNIQUE KEY and PRIMARY KEY are the same except that only one UNIQUE KEY",
            "C. A table can have more than one UNIQUE KEY but only one PRIMARY KEY",
            "D. Table can have more than one PRIMARY KEY but only one UNIQUE KEY"
        ],
        answer: 2,
        explanation: "Một bảng chỉ có thể có một khóa chính (PRIMARY KEY) nhưng có thể có nhiều khóa duy nhất (UNIQUE KEY). Khóa chính không chấp nhận giá trị NULL."
    },
    {
        id: "dbi202_009",
        question: "In a network data model, a child can be linked to multiple parent nodes. What is this relationship called?",
        options: [
            "A. Many-to-one",
            "B. One-to-many",
            "C. Many-to-many",
            "D. One-to-one"
        ],
        answer: 2,
        explanation: "Trong mô hình mạng, một 'con' có thể có nhiều 'cha' và một 'cha' có thể có nhiều 'con', tạo thành mối quan hệ nhiều-nhiều (Many-to-many)."
    },
    {
        id: "dbi202_010",
        question: "The operation that returns a relation containing all tuples that occur in either relation R or S is called:",
        options: [
            "A. Intersection",
            "B. Set difference",
            "C. Union",
            "D. Cross product"
        ],
        answer: 2,
        explanation: "Phép hợp (Union) kết hợp tất cả các bộ (tuple) từ hai quan hệ, loại bỏ các bộ trùng lặp."
    },
    {
        id: "dbi202_011",
        question: "The operation that allows the combining of two relations by pairing tuples, one from each relation:",
        options: [
            "A. Join",
            "B. Union",
            "C. Intersection",
            "D. Difference"
        ],
        answer: 0,
        explanation: "Phép kết (Join) cho phép kết hợp các bộ từ hai quan hệ dựa trên một điều kiện chung."
    },
    {
        id: "dbi202_012",
        question: "What is a Trivial Functional Dependency (FD)?",
        options: [
            "A. A dependency where the right side is a subset of the left side.",
            "B. A dependency where the left side is a subset of the right side.",
            "C. A dependency between two different keys.",
            "D. A dependency that leads to BCNF."
        ],
        answer: 0,
        explanation: "Phụ thuộc hàm tầm thường (Trivial FD) X -> Y xảy ra khi Y là một tập con của X."
    },
    {
        id: "dbi202_013",
        question: "What is a condition for a subset of a super key to be a candidate key?",
        options: [
            "A. No proper subset of it is a super key.",
            "B. All its subsets are super keys.",
            "C. It must contain all attributes of the relation.",
            "D. It must be a foreign key."
        ],
        answer: 0,
        explanation: "Một khóa dự tuyển (candidate key) là một siêu khóa (super key) tối thiểu, nghĩa là không có tập con thực sự nào của nó cũng là một siêu khóa."
    },
    {
        id: "dbi202_014",
        question: "If A determines both attributes B and C, which of the following is true?",
        options: [
            "A. (A → B) and (A → C)",
            "B. (B → A)",
            "C. (C → A)",
            "D. (B → C)"
        ],
        answer: 0,
        explanation: "Nếu A xác định B và C, điều đó có nghĩa là có các phụ thuộc hàm A → B và A → C."
    },
    {
        id: "dbi202_015",
        question: "If a relation is in BCNF, then it is also in:",
        options: [
            "A. 1NF",
            "B. 2NF",
            "C. 3NF",
            "D. All of the above"
        ],
        answer: 3,
        explanation: "Các dạng chuẩn có tính bao hàm: BCNF ⊂ 3NF ⊂ 2NF ⊂ 1NF. Nếu một quan hệ ở dạng BCNF, nó cũng thỏa mãn các điều kiện của 3NF, 2NF và 1NF."
    },
    {
        id: "dbi202_016",
        question: "Which normalization level ensures each non-key attribute is dependent only on the primary key?",
        options: [
            "A. First Normal Form (1NF)",
            "B. Second Normal Form (2NF)",
            "C. Third Normal Form (3NF)",
            "D. Boyce-Codd Normal Form (BCNF)"
        ],
        answer: 1,
        explanation: "Dạng chuẩn 2NF loại bỏ các phụ thuộc bộ phận (partial dependencies), đảm bảo mọi thuộc tính không phải khóa phụ thuộc hoàn toàn vào toàn bộ khóa chính."
    },
    {
        id: "dbi202_017",
        question: "Which normalization level ensures there are no repeating groups in tables?",
        options: [
            "A. First Normal Form (1NF)",
            "B. Second Normal Form (2NF)",
            "C. Third Normal Form (3NF)",
            "D. Boyce-Codd Normal Form (BCNF)"
        ],
        answer: 0,
        explanation: "Điều kiện cơ bản của Dạng chuẩn 1NF là mỗi ô trong bảng phải chứa một giá trị nguyên tố (atomic), và không có các nhóm lặp lại."
    },
    {
        id: "dbi202_018",
        question: "What is the purpose of data normalization in the context of database design?",
        options: [
            "A. Ensure data security",
            "B. Avoid data anomalies (insertion, update, deletion anomalies)",
            "C. Make sure data is stored",
            "D. Ensure better data storage"
        ],
        answer: 1,
        explanation: "Mục đích chính của chuẩn hóa là để giảm thiểu dư thừa dữ liệu và tránh các dị thường (anomalies) khi thêm, sửa, xóa dữ liệu."
    },
    {
        id: "dbi202_019",
        question: "In relational database design, which of the following is known as a set of entities of the same type that share the same properties or attributes?",
        options: [
            "A. Entity set model",
            "B. Field set model",
            "C. Record set model",
            "D. Entity set"
        ],
        answer: 3,
        explanation: "Một tập hợp các thực thể cùng loại, có chung các thuộc tính được gọi là một tập thực thể (Entity set)."
    },
    {
        id: "dbi202_020",
        question: "An ER diagram is a graphical representation of _____?",
        options: [
            "A. Attributes",
            "B. Entities",
            "C. Relationships",
            "D. All of the above"
        ],
        answer: 3,
        explanation: "Sơ đồ ER (Entity-Relationship) biểu diễn đồ họa cho cả Thực thể (Entities), Thuộc tính (Attributes) của chúng, và Mối quan hệ (Relationships) giữa các thực thể."
    },
    {
        id: "dbi202_021",
        question: "In an ERD, what is a real-world object, distinguishable from other objects?",
        options: [
            "A. Entity",
            "B. Diagram",
            "C. Primary entity",
            "D. Weak entity"
        ],
        answer: 0,
        explanation: "Một thực thể (Entity) đại diện cho một đối tượng trong thế giới thực có thể phân biệt được với các đối tượng khác."
    },
    {
        id: "dbi202_022",
        question: "What is a derived attribute in an ERD?",
        options: [
            "A. An attribute that is calculated from other attributes",
            "B. An attribute that cannot be calculated",
            "C. An attribute that is the primary key of an entity",
            "D. An attribute that represents a relationship"
        ],
        answer: 0,
        explanation: "Thuộc tính dẫn xuất (derived attribute) là thuộc tính có thể được tính toán hoặc suy ra từ các thuộc tính khác (ví dụ: tuổi có thể được suy ra từ ngày sinh)."
    },
    {
        id: "dbi202_023",
        question: "Which of the following statements is correct when converting from an ERD model to a relational model?",
        options: [
            "A. The order of columns is not important",
            "B. The order of both rows and columns is important",
            "C. The order of rows is important",
            "D. The order of columns is important"
        ],
        answer: 0,
        explanation: "Trong mô hình quan hệ, thứ tự của các cột (thuộc tính) và các hàng (bộ) trong một bảng là không quan trọng."
    },
    {
        id: "dbi202_024",
        question: "How are weak entity sets represented in an Entity Relationship Diagram (ERD)?",
        options: [
            "A. With a rectangle",
            "B. With a diamond shape",
            "C. With a double rectangle",
            "D. With a dashed oval"
        ],
        answer: 2,
        explanation: "Tập thực thể yếu (weak entity set) được biểu diễn bằng một hình chữ nhật có đường viền kép."
    },
    {
        id: "dbi202_025",
        question: "What does the attribute domain define in the relational model?",
        options: [
            "A. The primary key of the table",
            "B. The foreign key references",
            "C. The cardinality and range of values that an attribute can hold",
            "D. The data type and set of permissible values that an attribute can hold"
        ],
        answer: 3,
        explanation: "Miền giá trị (domain) của một thuộc tính xác định kiểu dữ liệu và tập hợp các giá trị hợp lệ mà thuộc tính đó có thể nhận."
    },
    {
        id: "dbi202_026",
        question: "To convert a 1:M relationship from an ER Diagram to a Relational Model, you should:",
        options: [
            "A. Put key attributes from both sides to the N-side",
            "B. Put the key attribute from the 'one' side to the 'many' (N) side as a foreign key",
            "C. Generate a new relation with Primary keys from both relations",
            "D. Build a table with columns for each participating entity's primary key"
        ],
        answer: 1,
        explanation: "Khi chuyển đổi mối quan hệ 1-N, khóa chính của bảng bên '1' được thêm vào bảng bên 'N' (nhiều) làm khóa ngoại."
    },
    {
        id: "dbi202_027",
        question: "Which statement is used to change the data type of a column named 'E' in table 'A'?",
        options: [
            "A. ALTER TABLE A MODIFY COLUMN E <new_datatype>;",
            "B. ALTER TABLE A ALTER COLUMN E <new_datatype>;",
            "C. ALTER TABLE A CHANGE E <new_datatype>;",
            "D. UPDATE TABLE A SET COLUMN E = <new_datatype>;"
        ],
        answer: 1,
        explanation: "Cú pháp chuẩn SQL để thay đổi kiểu dữ liệu của một cột là `ALTER TABLE table_name ALTER COLUMN column_name new_datatype;`. (Lưu ý: Một số hệ quản trị CSDL như MySQL dùng `MODIFY COLUMN`)."
    },
    {
        id: "dbi202_028",
        question: "The SQL ALTER statement can be used to:",
        options: [
            "A. delete rows from the table",
            "B. add rows to the table",
            "C. change the table data",
            "D. change table structure"
        ],
        answer: 3,
        explanation: "Lệnh `ALTER TABLE` được sử dụng để thay đổi cấu trúc của một bảng, chẳng hạn như thêm/xóa/sửa đổi cột hoặc ràng buộc."
    },
    {
        id: "dbi202_029",
        question: "NULL is _____ for a blank character.",
        options: [
            "A. Not a value",
            "B. The same as 0 for integer and blank for character",
            "C. The same as 0 for integer",
            "D. The same as a blank character"
        ],
        answer: 0,
        explanation: "NULL đại diện cho sự thiếu vắng một giá trị, nó không phải là một giá trị cụ thể như số 0 hay một chuỗi rỗng (blank character)."
    },
    {
        id: "dbi202_030",
        question: "With SQL, how do you select all the records from a table named 'Department' where the value of the 'DeptName' column starts with 'HR'?",
        options: [
            "A. SELECT * FROM Department WHERE DeptName = 'HR%'",
            "B. SELECT * FROM Department WHERE DeptName LIKE 'HR%'",
            "C. SELECT * FROM Department WHERE DeptName = 'HR_'",
            "D. SELECT * FROM Department WHERE DeptName LIKE 'HR_'"
        ],
        answer: 1,
        explanation: "Toán tử `LIKE` được sử dụng để so khớp mẫu chuỗi. Ký tự đại diện `%` khớp với bất kỳ chuỗi ký tự nào (bao gồm cả chuỗi rỗng)."
    },
    {
        id: "dbi202_031",
        question: "In an UPDATE statement, what is the purpose of the WHERE clause?",
        options: [
            "A. It specifies the columns to be updated.",
            "B. It specifies the new values for the columns.",
            "C. It specifies which rows to update.",
            "D. It specifies the table to update."
        ],
        answer: 2,
        explanation: "Mệnh đề `WHERE` trong câu lệnh `UPDATE` được dùng để lọc và chỉ định những hàng nào sẽ bị ảnh hưởng bởi việc cập nhật. Nếu không có mệnh đề WHERE, tất cả các hàng sẽ được cập nhật."
    },
    {
        id: "dbi202_032",
        question: "The SQL keyword BETWEEN is used:",
        options: [
            "A. for ranges",
            "B. as a wildcard",
            "C. to limit the columns displayed",
            "D. None of these"
        ],
        answer: 0,
        explanation: "Toán tử `BETWEEN` được sử dụng để chọn các giá trị trong một khoảng nhất định. Ví dụ: `WHERE price BETWEEN 100 AND 200`."
    },
    {
        id: "dbi202_033",
        question: "In the given query `INSERT INTO student (_____, 'Nira Bush', 'Female');`, what keyword is missing?",
        options: [
            "A. INTO",
            "B. SET",
            "C. WHERE",
            "D. VALUES"
        ],
        answer: 3,
        explanation: "Cú pháp của lệnh INSERT là `INSERT INTO table_name (column1, ...) VALUES (value1, ...);`. Từ khóa còn thiếu là `VALUES`."
    },
    {
        id: "dbi202_034",
        question: "Foreign key constraints are created using the _____ keyword to refer to the primary key of another table.",
        options: [
            "A. FOREIGN",
            "B. REFERENCES",
            "C. REFERENTIAL",
            "D. All of the above"
        ],
        answer: 1,
        explanation: "Khi tạo một ràng buộc khóa ngoại, từ khóa `REFERENCES` được sử dụng để chỉ định bảng và cột mà khóa ngoại đó tham chiếu đến."
    },
    {
        id: "dbi202_035",
        question: "Which transaction methods are used with the Connection object to save or cancel changes made to the data?",
        options: [
            "A. Begin Transaction, Rollback Transaction",
            "B. Begin Transaction, Commit Transaction",
            "C. Begin Transaction, Commit Transaction, Rollback Transaction",
            "D. Commit Transaction, Rollback Transaction"
        ],
        answer: 2,
        explanation: "`BEGIN TRANSACTION` để bắt đầu, `COMMIT TRANSACTION` để lưu các thay đổi, và `ROLLBACK TRANSACTION` để hủy bỏ các thay đổi."
    },
    {
        id: "dbi202_036",
        question: "In SQL, what does the ACID standard for transactions stand for?",
        options: [
            "A. Atomicity, Consistency, Isolation, Durability",
            "B. Atomicity, Consistency, Integrity, Database",
            "C. Aggregate, Cursor, Index, Delete",
            "D. All columns, Insertion, Selection, Deletion"
        ],
        answer: 0,
        explanation: "ACID là một tập hợp các thuộc tính đảm bảo các giao dịch CSDL được xử lý một cách đáng tin cậy: Atomicity (Tính nguyên tử), Consistency (Tính nhất quán), Isolation (Tính cô lập), Durability (Tính bền vững)."
    },
    {
        id: "dbi202_037",
        question: "What happens if an error occurs during a transaction and it is not explicitly handled or rolled back?",
        options: [
            "A. The transaction is automatically committed",
            "B. The transaction is automatically rolled back",
            "C. The database becomes read-only",
            "D. The transaction remains in a pending state"
        ],
        answer: 1,
        explanation: "Hầu hết các hệ quản trị CSDL sẽ tự động rollback (hủy bỏ) một giao dịch nếu có lỗi xảy ra để đảm bảo tính nhất quán của CSDL."
    },
    {
        id: "dbi202_038",
        question: "What is a view in SQL?",
        options: [
            "A. Just another table",
            "B. A virtual table based on the result-set of an SQL statement",
            "C. A physical copy of a table",
            "D. A temporary table for query results"
        ],
        answer: 1,
        explanation: "View là một bảng ảo, không lưu trữ dữ liệu vật lý mà được định nghĩa bởi một câu lệnh SELECT. Nó hoạt động như một cửa sổ để xem dữ liệu từ một hoặc nhiều bảng."
    },
    {
        id: "dbi202_039",
        question: "What is the difference between a view and a table in SQL?",
        options: [
            "A. Tables can be updated, while views cannot",
            "B. Views store data virtually, while tables store data physically",
            "C. Tables are created with CREATE TABLE, while views use CREATE VIEW",
            "D. Both B and C are correct"
        ],
        answer: 3,
        explanation: "Sự khác biệt cơ bản là bảng lưu trữ dữ liệu vật lý, trong khi view là một định nghĩa truy vấn ảo. Cả hai cũng được tạo bằng các câu lệnh khác nhau (`CREATE TABLE` và `CREATE VIEW`)."
    },
    {
        id: "dbi202_040",
        question: "In SQL, when does a BEFORE INSERT trigger fire?",
        options: [
            "A. After the execution of the INSERT statement",
            "B. Before the new record is inserted into the table",
            "C. After the transaction is committed",
            "D. Before a table is dropped"
        ],
        answer: 1,
        explanation: "Trigger `BEFORE INSERT` được kích hoạt ngay trước khi một hàng mới được chèn vào bảng, cho phép kiểm tra hoặc sửa đổi dữ liệu trước khi nó được lưu."
    },
    {
        id: "dbi202_041",
        question: "How can you execute a user-defined function (UDF) in a SQL query?",
        options: [
            "A. Using the EXECUTE statement",
            "B. Using the CALL statement",
            "C. Using it in a SELECT statement or WHERE clause like a built-in function",
            "D. Using the RUN statement"
        ],
        answer: 2,
        explanation: "Các hàm do người dùng định nghĩa (đặc biệt là các hàm vô hướng - scalar UDFs) có thể được gọi trực tiếp trong các câu lệnh `SELECT` hoặc `WHERE`, tương tự như các hàm tích hợp sẵn (ví dụ: `SELECT dbo.MyFunction(column_name) FROM MyTable;`)."
    },
    {
        id: "dbi202_042",
        question: "Which of the following best describes SQL cursors?",
        options: [
            "A. It allows you to traverse the result set of a query and process each row individually",
            "B. It is a collection of one or more statements that can be executed as a single unit",
            "C. A field with no relation to SQL",
            "D. A type of index for faster queries"
        ],
        answer: 0,
        explanation: "Con trỏ (cursor) là một cấu trúc điều khiển cho phép duyệt qua các bản ghi trong một tập kết quả, xử lý từng hàng một."
    },
    {
        id: "dbi202_043",
        question: "Which of the following is true about stored procedures in MS SQL?",
        options: [
            "A. They are a precompiled collection of one or more SQL statements",
            "B. They are stored in the Rules folder",
            "C. They do not have a unique name",
            "D. They are the same as a void function in programming"
        ],
        answer: 0,
        explanation: "Stored Procedure là một tập hợp các câu lệnh SQL đã được biên dịch sẵn và được lưu trữ trong CSDL, có thể được gọi và thực thi khi cần."
    },
    {
        id: "dbi202_044",
        question: "Which key does not accept null values?",
        options: [
            "A. Unique Key",
            "B. Primary Key",
            "C. Foreign Key",
            "D. Candidate Key"
        ],
        answer: 1,
        explanation: "Theo định nghĩa, khóa chính (Primary Key) không được phép chứa giá trị NULL. Khóa duy nhất (Unique Key) có thể cho phép một giá trị NULL (tùy hệ CSDL)."
    },
    {
        id: "dbi202_045",
        question: "We can use _____ with SQL to perform computations that cannot be done with a single SQL statement.",
        options: [
            "A. Trigger",
            "B. View",
            "C. Index",
            "D. Stored procedure"
        ],
        answer: 3,
        explanation: "Stored procedure cho phép kết hợp các câu lệnh SQL với logic thủ tục (vòng lặp, điều kiện), giúp thực hiện các tính toán và thao tác phức tạp không thể làm trong một câu lệnh SQL đơn lẻ."
    },
    {
        id: "dbi202_046",
        question: "The primary key is selected from:",
        options: [
            "A. Foreign keys",
            "B. Candidate keys",
            "C. Determinants",
            "D. Composite keys"
        ],
        answer: 1,
        explanation: "Một quan hệ có thể có nhiều khóa dự tuyển (candidate keys). Người thiết kế CSDL sẽ chọn một trong số các khóa dự tuyển này để làm khóa chính (primary key)."
    },
    {
        id: "dbi202_047",
        question: "What is Database Normalization?",
        options: [
            "A. A process where a limit is put on the number of fields a record can contain",
            "B. The process of ensuring that each table has a key",
            "C. The process of ensuring that a relational database has at least two tables in it",
            "D. A process of organizing columns and tables to minimize data redundancy"
        ],
        answer: 3,
        explanation: "Chuẩn hóa là quá trình tổ chức các cột và bảng trong một CSDL quan hệ để giảm thiểu sự dư thừa dữ liệu và cải thiện tính toàn vẹn dữ liệu."
    },
    {
        id: "dbi202_048",
        question: "In the context of a DBMS, what is meant by 'data integrity'?",
        options: [
            "A. The ability to perform multiple queries simultaneously",
            "B. Ensuring data is consistent, accurate, and reliable",
            "C. The ability to recover data after a failure",
            "D. Encrypting data to protect it from unauthorized access"
        ],
        answer: 1,
        explanation: "Tính toàn vẹn dữ liệu (Data Integrity) đề cập đến việc duy trì và đảm bảo tính chính xác, nhất quán và đáng tin cậy của dữ liệu trong suốt vòng đời của nó."
    },
    {
        id: "dbi202_049",
        question: "What data structure is represented in the hierarchical data model?",
        options: [
            "A. Array structure",
            "B. Table structure",
            "C. Tree structure",
            "D. Pointers structure"
        ],
        answer: 2,
        explanation: "Mô hình dữ liệu phân cấp (hierarchical data model) tổ chức dữ liệu theo một cấu trúc dạng cây (tree-like structure), với các mối quan hệ cha-con."
    },
    {
        id: "dbi202_050",
        question: "In the context of database concurrency control, what is the purpose of the two-phase locking protocol?",
        options: [
            "A. To ensure serializability of transactions",
            "B. To minimize deadlocks",
            "C. To allow unlimited concurrent access",
            "D. To handle data replication"
        ],
        answer: 0,
        explanation: "Giao thức khóa hai giai đoạn (Two-Phase Locking - 2PL) là một phương pháp kiểm soát tương tranh đảm bảo tính tuần tự hóa (serializability) của các giao dịch, giúp tránh các xung đột dữ liệu."
    },
    {
        id: "dbi202_052",
        question: "What is a deadlock in database systems?",
        options: [
            "A. A situation where two or more transactions are waiting indefinitely for each other to release locks",
            "B. A type of index that speeds up queries",
            "C. An error in SQL syntax",
            "D. A backup failure"
        ],
        answer: 0,
        explanation: "Deadlock (khóa chết) xảy ra khi hai hoặc nhiều giao dịch chờ đợi lẫn nhau để giải phóng tài nguyên (khóa), tạo thành một chu trình chờ đợi vô tận."
    },
    {
        id: "dbi202_053",
        question: "Which SQL clause is used to sort the result set?",
        options: [
            "A. GROUP BY",
            "B. HAVING",
            "C. ORDER BY",
            "D. WHERE"
        ],
        answer: 2,
        explanation: "Mệnh đề `ORDER BY` được sử dụng để sắp xếp tập kết quả theo thứ tự tăng dần (ASC) hoặc giảm dần (DESC)."
    },
    {
        id: "dbi202_054",
        question: "In ER modeling, what does cardinality refer to?",
        options: [
            "A. The number of attributes in an entity",
            "B. The number of instances of one entity that can be associated with instances of another entity",
            "C. The data type of a key",
            "D. The storage size of a table"
        ],
        answer: 1,
        explanation: "Bản số (cardinality) trong mô hình ER xác định số lượng thực thể trong một tập thực thể có thể liên kết với số lượng thực thể trong một tập thực thể khác thông qua một mối quan hệ (ví dụ: 1-1, 1-N, N-N)."
    },
    {
        id: "dbi202_055",
        question: "What is the main advantage of using indexes in a database?",
        options: [
            "A. They increase the storage space required",
            "B. They speed up data retrieval operations",
            "C. They enforce referential integrity",
            "D. They automatically normalize data"
        ],
        answer: 1,
        explanation: "Chỉ mục (index) tạo ra một cấu trúc dữ liệu giúp hệ quản trị CSDL tìm kiếm dữ liệu nhanh hơn nhiều, đặc biệt là trên các bảng lớn."
    },
    {
        id: "dbi202_057",
        question: "Which command is used to create a new database in SQL?",
        options: [
            "A. CREATE DATABASE",
            "B. NEW DATABASE",
            "C. MAKE DB",
            "D. ADD DATABASE"
        ],
        answer: 0,
        explanation: "Lệnh chuẩn SQL để tạo một cơ sở dữ liệu mới là `CREATE DATABASE database_name;`."
    },
    {
        id: "dbi202_058",
        question: "What does SQL stand for?",
        options: [
            "A. Structured Query Language",
            "B. Sequential Query Language",
            "C. Standard Query Logic",
            "D. System Query Language"
        ],
        answer: 0,
        explanation: "SQL là viết tắt của Structured Query Language (Ngôn ngữ truy vấn có cấu trúc)."
    },
    {
        id: "dbi202_059",
        question: "In a relational database, what is referential integrity?",
        options: [
            "A. Ensuring that foreign keys refer to valid primary keys in another table",
            "B. Making sure all data is encrypted",
            "C. Normalizing tables to 3NF",
            "D. Backing up data daily"
        ],
        answer: 0,
        explanation: "Toàn vẹn tham chiếu là một quy tắc đảm bảo rằng các mối quan hệ giữa các bảng luôn nhất quán. Cụ thể, một khóa ngoại phải tham chiếu đến một khóa chính thực sự tồn tại."
    },
    {
        id: "dbi202_060",
        question: "What is the difference between DELETE and DROP in SQL?",
        options: [
            "A. DELETE removes rows; DROP removes the table",
            "B. DELETE removes the table; DROP removes rows",
            "C. Both remove rows",
            "D. Both remove tables"
        ],
        answer: 0,
        explanation: "`DELETE` là một lệnh DML dùng để xóa các hàng (bản ghi) khỏi một bảng. `DROP` là một lệnh DDL dùng để xóa toàn bộ đối tượng CSDL, chẳng hạn như một bảng, view, hoặc index."
    },
    {
        id: "dbi202_062",
        question: "What is a composite key?",
        options: [
            "A. A key made up of more than one attribute",
            "B. A key that is not unique",
            "C. A foreign key reference",
            "D. A super key without uniqueness"
        ],
        answer: 0,
        explanation: "Khóa phức hợp (composite key) là một khóa chính được tạo thành từ sự kết hợp của hai hoặc nhiều cột để xác định duy nhất một hàng trong bảng."
    },
    {
        id: "dbi202_063",
        question: "In SQL, how do you count the number of rows in a table?",
        options: [
            "A. SELECT COUNT(*) FROM table",
            "B. SELECT SUM(*) FROM table",
            "C. SELECT ROWS FROM table",
            "D. SELECT LENGTH(*) FROM table"
        ],
        answer: 0,
        explanation: "Hàm tổng hợp `COUNT(*)` được sử dụng để đếm tổng số hàng trong một bảng hoặc trong một tập kết quả."
    },
    {
        id: "dbi202_064",
        question: "What is data redundancy?",
        options: [
            "A. Unnecessary duplication of data",
            "B. Data encryption",
            "C. Data compression",
            "D. Data validation"
        ],
        answer: 0,
        explanation: "Dư thừa dữ liệu (data redundancy) là tình trạng cùng một mẩu dữ liệu được lưu trữ ở nhiều nơi khác nhau, dẫn đến lãng phí không gian và có thể gây ra sự không nhất quán."
    },
    {
        id: "dbi202_065",
        question: "Which of the following is a NoSQL database type?",
        options: [
            "A. Document store",
            "B. Relational",
            "C. Hierarchical",
            "D. Network model"
        ],
        answer: 0,
        explanation: "CSDL NoSQL bao gồm nhiều loại, trong đó có CSDL tài liệu (document store) như MongoDB, CSDL cột rộng (wide-column) như Cassandra, CSDL khóa-giá trị (key-value) như Redis, và CSDL đồ thị (graph) như Neo4j."
    },
    {
        id: "dbi202_067",
        question: "________returns a relation instance containing all tuples that occur in both R and S.",
        options: [
            "Intersection",
            "Set-difference",
            "Union",
            "Cross-product"
        ],
        answer: 0,
        explanation: "Phép giao (Intersection) trong đại số quan hệ trả về một tập hợp các bộ (tuple) tồn tại trong cả hai quan hệ (bảng)."
    },
    {
        id: "dbi202_069",
        question: "Let E1 and E2 be two entities in an E-R diagram with simple single-valued attributes... What is the minimum number of tables required to represent this situation in the relational model?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1,
        explanation: "E1 (1 bảng), E2 (1 bảng). Mối quan hệ nhiều-nhiều (many-to-many) R2 yêu cầu một bảng trung gian riêng. Mối quan hệ một-nhiều (one-to-many) R1 có thể được tích hợp vào bảng bên 'nhiều'. Tổng cộng tối thiểu là 3 bảng."
    },
    {
        id: "dbi202_070",
        question: "What is the value of the query: SELECT 'Agnes' + NULL + 'Allison'",
        options: [
            "Agnes",
            "Allison",
            "NULL",
            "Agnes Allison"
        ],
        answer: 2,
        explanation: "Trong SQL, bất kỳ phép toán số học hoặc phép nối chuỗi nào có sự tham gia của giá trị NULL đều sẽ cho kết quả là NULL."
    },
    {
        id: "dbi202_072",
        question: "When does the Deleted temporary trigger table become populated?",
        options: [
            "With DELETE and INSERT triggers",
            "With DELETE triggers only",
            "With DELETE, UPDATE, and INSERT triggers",
            "With DELETE and UPDATE triggers"
        ],
        answer: 3,
        explanation: "Trong SQL Server, bảng tạm `Deleted` chứa các bản sao của các hàng bị ảnh hưởng bởi thao tác `DELETE` hoặc `UPDATE`. Với `UPDATE`, nó chứa dữ liệu *trước khi* cập nhật."
    },
    {
        id: "dbi202_074",
        question: "In query compiler, which unit transforms the initial query plan into the best available sequence of operations on the actual data?",
        options: [
            "A query parser",
            "A query preprocessor",
            "A query optimizer",
            "A query processor"
        ],
        answer: 2,
        explanation: "Bộ tối ưu hóa truy vấn (Query Optimizer) có nhiệm vụ phân tích nhiều kế hoạch thực thi khác nhau cho một truy vấn và chọn ra kế hoạch hiệu quả nhất (thường là nhanh nhất)."
    },
    {
        id: "dbi202_076",
        question: "Database data models usually have a way to go, describe limitations on what the data can be, is called",
        options: [
            "Constraints on the data",
            "Operations on the data",
            "Structure of the data",
            "definition of data"
        ],
        answer: 0,
        explanation: "Các ràng buộc (Constraints) là các quy tắc được định nghĩa trong mô hình dữ liệu để đảm bảo tính hợp lệ và toàn vẹn của dữ liệu được lưu trữ."
    },
    {
        id: "dbi202_078",
        question: "The result which operation contains all pairs of tuples from the two relations, regardless of whether their attribute values match.",
        options: [
            "Join",
            "Cartesian product",
            "Intersection",
            "Set difference"
        ],
        answer: 1,
        explanation: "Tích Đề-các (Cartesian product) tạo ra một quan hệ mới bằng cách kết hợp mỗi hàng của quan hệ thứ nhất với tất cả các hàng của quan hệ thứ hai."
    },
    {
        id: "dbi202_080",
        question: "Which of the following is expressed by an E-R diagram?",
        options: [
            "Relation between process and relationship",
            "Relation between entity and process",
            "Relation between processes",
            "Relation between entities"
        ],
        answer: 3,
        explanation: "Sơ đồ E-R (Entity-Relationship) được dùng để mô tả các thực thể và các mối quan hệ (Relation) giữa các thực thể đó."
    },
    {
        id: "dbi202_082",
        question: "What is the result of the below query: SELECT SUBSTRING('FPTUDNK', 1, 3) AS 'Substring'",
        options: [
            "FPT",
            "UDN",
            "T",
            "TUN"
        ],
        answer: 0,
        explanation: "Hàm SUBSTRING(string, start, length) trích xuất một chuỗi con. Ở đây, nó lấy 3 ký tự bắt đầu từ vị trí 1 của chuỗi 'FPTUDNK', kết quả là 'FPT'."
    },
    {
        id: "dbi202_084",
        question: "In order to undo the work of transaction after last commit which one should be used?",
        options: [
            "View",
            "Commit",
            "Rollback",
            "Flashback"
        ],
        answer: 2,
        explanation: "`ROLLBACK` là lệnh dùng để hủy bỏ các thay đổi của một giao dịch chưa được `COMMIT`."
    },
    {
        id: "dbi202_086",
        question: "What is information?",
        options: [
            "A collection of unprocessed data",
            "A collection of processed data",
            "A collection of processed information",
            "A collection of unprocessed information"
        ],
        answer: 1,
        explanation: "Thông tin (Information) là dữ liệu (data) đã được xử lý để trở nên có ý nghĩa và hữu ích."
    }
];