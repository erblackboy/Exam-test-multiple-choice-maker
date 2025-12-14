var mai391_theory_questions = [
    {
        id: "mai391_md_006",
        status: "verified",
        question: "Let $U$ denote a subspace of $R^n$; and let $v \\in R^n$. Which of the following is TRUE?<br>(i) If $dim U = n$ then $U^\\perp = \\{0\\}$<br>(ii) If $v \\in U^\\perp$ and $v \\in U$ then $v$ is zero vector<br>(iii) If $dim U = 0$ then $U^\\perp = R^n$",
        options: [
          "a. Only (ii)",
          "b. Only (i)",
          "c. Only (iii)",
          "d. All of (i), (ii), (iii)",
          "e. None of the other choices is correct"
        ],
        answer: 3, // d. All of (i), (ii), (iii)
        explanation: "<p>All three statements are fundamental properties of orthogonal complements in linear algebra.</p>"
    },
    {
        id: "mai391_md_008",
        status: "verified",
        question: "Select the correct answer(s):<br>1. $Trace(AB) = Trace(A) Trace(B)$ for all square matrices A, B.<br>2. $Trace(CAC^{-1}) = Trace(A)$ for all invertible square matrices C,A.<br>3. $Trace(A^{-1}) = \\frac{1}{Trace(A)}$ for all invertible square matrices A.",
        options: [
          "a. 1 and 2",
          "b. 1, 2 and 3",
          "c. 3 only",
          "d. 2 only"
        ],
        answer: 3, // d. 2 only
        explanation: "<p>1 is false. 2 is true (Trace is similarity invariant). 3 is false (consider the identity matrix).</p>"
    },
    {
        id: "mai391_md_006",
        status: "verified",
        question: "Let $U$ denote a subspace of $R^n$; and let $v \\in R^n$. Which of the following is TRUE?<br>(i) If $dim U = n$ then $U^\\perp = \\{0\\}$<br>(ii) If $v \\in U^\\perp$ and $v \\in U$ then $v$ is zero vector<br>(iii) If $dim U = 0$ then $U^\\perp = R^n$",
        options: [
          "a. Only (ii)",
          "b. Only (i)",
          "c. Only (iii)",
          "d. All of (i), (ii), (iii)",
          "e. None of the other choices is correct"
        ],
        answer: 3, // d. All of (i), (ii), (iii)
        explanation: "<p>All three statements are fundamental properties of orthogonal complements in linear algebra.</p>"
    },
    {
        id: "mai391_md_012",
        status: "verified",
        question: "Which of the following statements is true?<br>(i) Every diagonalizable matrix is invertible.<br>(ii) Every invertible matrix is diagonalizable.",
        options: [
          "a. Only (i)",
          "b. Only (ii)",
          "c. Both (i) and (ii)",
          "d. Neither (i) nor (ii)"
        ],
        answer: 3, // d. Neither (i) nor (ii)
        explanation: `
            <p><b>(i) is False:</b> The zero matrix is diagonalizable but not invertible.</p>
            <p><b>(ii) is False:</b> The matrix $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ is invertible but not diagonalizable.</p>
        `
    },
    {
        id: "mai391_md_015",
        status: "verified",
        question: "What is the rank of a matrix A in terms of its singular values?",
        options: [
          "a. The rank is the number of nonzero singular values.",
          "b. The rank is the number of singular values.",
          "c. The rank is the sum of all singular values.",
          "d. The rank is the largest singular value."
        ],
        answer: 0, // a. The rank is the number of nonzero singular values.
        explanation: "<p>This is a fundamental theorem of Singular Value Decomposition (SVD).</p>"
    },
    {
        id: "mai391_pdf_006",
        status: "verified",
        question: "Determine whether the following sets are convex: \n(I) $S = \\{(x,y) : x^2 + y^2 > 11\\}$ \n(II) $\\{(x,y) : y^2 \\ge x\\}$",
        options: ["a. (II) only", "b. (I) only", "c. Both (I) and (II)", "d. Neither (I) nor (II)"],
        answer: 0, // a. (II) only
        explanation: `
            <p><strong>Định nghĩa:</strong> Một tập hợp là <strong>lồi (convex)</strong> nếu đoạn thẳng nối hai điểm bất kỳ trong tập hợp cũng nằm hoàn toàn trong tập hợp đó.</p>
            <p><strong>Xét (I) $S = \\{(x,y) : x^2 + y^2 > 11\\}$:</strong></p>
            <ul>
                <li>Đây là tập hợp tất cả các điểm nằm <em>bên ngoài</em> hình tròn tâm (0,0) bán kính $\\sqrt{11}$.</li>
                <li>Tập này <strong>không lồi</strong>. Lấy ví dụ 2 điểm $A = (4, 0)$ và $B = (-4, 0)$. Cả A và B đều thuộc S (vì $4^2 = 16 > 11$).</li>
                <li>Tuy nhiên, trung điểm của A và B là $M = (0, 0)$. Điểm M không thuộc S (vì $0^2 + 0^2 = 0 \\ngtr 11$).</li>
            </ul>
            <p><strong>Xét (II) $\\{(x,y) : y^2 \\ge x\\}$:</strong></p>
            <ul>
                <li>Tập hợp này có thể viết lại là $x \\le y^2$. Đây là tập hợp các điểm nằm bên trái (hoặc trên) đường parabola $x = y^2$ (một parabola mở sang bên phải).</li>
                <li>Tập này <strong>là lồi</strong>. Hàm $g(x,y) = x - y^2$ là một hàm lõm (concave). Tập dưới mức (sublevel set) $g(x,y) \\le c$ của một hàm lõm không nhất thiết là lồi. Tuy nhiên, tập trên mức (superlevel set) $g(x,y) \\ge c$ của hàm lõm thì lồi. Cách dễ hơn là nhận thấy đây là vùng không gian được định nghĩa bởi một bất đẳng thức của hàm lồi $h(x,y) = x - y^2$ (Hessian của $h$ là $\\begin{bmatrix} 0 & 0 \\\\ 0 & -2 \\end{bmatrix}$ không phải lồi). Cách đơn giản nhất là vẽ hình, ta thấy vùng $x \\le y^2$ là một vùng lồi.</li>
            </ul>
            <p><strong>Kết luận:</strong> Chỉ có (II) là lồi.</p>`
    },
    {
        id: "mai391_pdf_021",
        status: "verified",
        question: "Determine whether the following functions are convex: \n(I) $f(x,y,z) = 2x - 5y + 10z - 11$ \n(II) $f(x,y) = 2x^2 - 5y - 11$",
        options: ["a. (I) only", "b. Neither (I) nor (II)", "c. Both (I) and (II)", "d. (II) only"],
        answer: 2, // c. Both (I) and (II)
        explanation: `
            <p><strong>Định nghĩa:</strong> Một hàm $f$ là lồi (convex) nếu ma trận Hessian của nó (ma trận các đạo hàm riêng cấp 2) là nửa xác định dương (positive semidefinite) trên toàn bộ miền xác định.</p>
            <p><strong>Xét (I) $f(x,y,z) = 2x - 5y + 10z - 11$:</strong></p>
            <ul>
                <li>Đây là một hàm tuyến tính (hay chính xác hơn là affine).</li>
                <li>Bất kỳ hàm affine nào (có dạng $f(x) = a^T x + b$) đều vừa lồi vừa lõm (concave) trên toàn bộ miền $\\mathbb{R}^n$. Do đó, (I) <strong>là lồi</strong>.</li>
            </ul>
            <p><strong>Xét (II) $f(x,y) = 2x^2 - 5y - 11$:</strong></p>
            <ul>
                <li>Ma trận Hessian $H = \\begin{bmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{bmatrix} = \\begin{bmatrix} 4 & 0 \\\\ 0 & 0 \\end{bmatrix}$.</li>
                <li>Các giá trị riêng (eigenvalues) của $H$ là 4 và 0. Vì tất cả các giá trị riêng đều $\\ge 0$, ma trận $H$ là nửa xác định dương. Do đó, (II) <strong>là lồi</strong>.</li>
            </ul>
            <p><strong>Kết luận:</strong> Cả (I) và (II) đều là hàm lồi.</p>`
    },
    {
        id: "mai391_pdf_031",
        status: "verified",
        question: "Let A be an orthogonal matrix. Choose the correct statement: \n(i) The angle between two vectors is not changed when transforming it using matrix A \n(ii) The distance of two vectors is not changed when transforming it using matrix A",
        options: ["a. Both (i) and (ii)", "b. Neither (i) nor (ii)", "c. (i) only", "d. (ii) only"],
        answer: 0, // a. Both (i) and (ii)
        explanation: `
            <p><strong>Định nghĩa:</strong> Ma trận trực giao (orthogonal matrix) $A$ là ma trận bảo toàn tích vô hướng, độ dài (norm), và góc.</p>
            <ul>
                <li><strong>Bảo toàn khoảng cách (Distance):</strong> Khoảng cách $d(x,y) = ||x-y||$. Khoảng cách sau khi biến đổi: $d(Ax, Ay) = ||Ax - Ay|| = ||A(x-y)||$. Vì $A$ trực giao ($A^T A = I$), $||A(x-y)||^2 = (x-y)^T A^T A (x-y) = ||x-y||^2$. Do đó $d(Ax, Ay) = d(x,y)$. Mệnh đề (ii) <strong>đúng</strong>.</li>
                <li><strong>Bảo toàn góc (Angle):</strong> Góc $\\theta$ được định nghĩa bởi $\\cos(\\theta) = \\frac{\\langle x, y \\rangle}{||x|| \\cdot ||y||}$. Tích vô hướng sau khi biến đổi: $\\langle Ax, Ay \\rangle = (Ax)^T (Ay) = x^T A^T A y = x^T I y = \\langle x, y \\rangle$. Vì độ dài cũng được bảo toàn, $\\cos(\\theta_{\\text{mới}}) = \\frac{\\langle Ax, Ay \\rangle}{||Ax|| \\cdot ||Ay||} = \\frac{\\langle x, y \\rangle}{||x|| \\cdot ||y||} = \\cos(\\theta_{\\text{cũ}})$. Mệnh đề (i) <strong>đúng</strong>.</li>
            </ul>
            <p><strong>Kết luận:</strong> Cả (i) và (ii) đều đúng.</p>`
    }
];