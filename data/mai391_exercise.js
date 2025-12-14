var mai391_exercise_questions = [
    {
        id: "mai391_md_001",
        status: "verified",
        question: "Let $\\mathbf{x} = \\begin{bmatrix} -2 \\\\ 1 \\\\ 2 \\end{bmatrix}$ and $\\mathbf{y} = \\begin{bmatrix} -1 \\\\ 3 \\\\ 2 \\end{bmatrix}$ be vectors in $\\mathbb{R}^3$. Find the Manhattan norm of $2\\mathbf{x} + \\mathbf{y}$.",
        options: [
          "a. 16",
          "b. 86",
          "c. 4",
          "d. $\\sqrt{86}$"
        ],
        answer: 0, // a. 16
        explanation: `
            <p><strong>1. Calculate 2x:</strong></p>
            <p>$$2\\mathbf{x} = 2 \\times \\begin{bmatrix} -2 \\\\ 1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} -4 \\\\ 2 \\\\ 4 \\end{bmatrix}$$</p>
            <p><strong>2. Calculate 2x + y:</strong></p>
            <p>$$2\\mathbf{x} + \\mathbf{y} = \\begin{bmatrix} -4 \\\\ 2 \\\\ 4 \\end{bmatrix} + \\begin{bmatrix} -1 \\\\ 3 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} -5 \\\\ 5 \\\\ 6 \\end{bmatrix}$$</p>
            <p><strong>3. Calculate Manhattan norm (L1 norm):</strong></p>
            <p>$$\\|2\\mathbf{x} + \\mathbf{y}\\|_1 = |-5| + |5| + |6| = 5 + 5 + 6 = 16$$</p>
        `
    },
    {
        id: "mai391_md_002",
        status: "verified",
        question: "Let $u, v$ be vectors in an inner product space such that $\\langle u, v \\rangle = -1$, $\\|u\\| = 2$, and $\\|v\\| = 1$. Compute $\\|2u - v\\|^2$.",
        options: [
          "a. 21",
          "b. 13",
          "c. 12",
          "d. 5",
          "e. 9"
        ],
        answer: 0, // a. 21
        explanation: `
            <p>Using the properties of inner products:</p>
            <p>$$\\|2u - v\\|^2 = \\langle 2u - v, 2u - v \\rangle$$</p>
            <p>$$= \\langle 2u, 2u \\rangle - \\langle 2u, v \\rangle - \\langle v, 2u \\rangle + \\langle v, v \\rangle$$</p>
            <p>$$= 4\\langle u, u \\rangle - 4\\langle u, v \\rangle + \\langle v, v \\rangle$$</p>
            <p>$$= 4\\|u\\|^2 - 4\\langle u, v \\rangle + \\|v\\|^2$$</p>
            <p>Substitute the given values:</p>
            <p>$$= 4(2^2) - 4(-1) + 1^2 = 16 + 4 + 1 = 21$$</p>
        `
    },
    {
        id: "mai391_md_003",
        status: "verified",
        question: "Let $\\mathbf{x} = [x_1, x_2]^T, \\mathbf{y} = [y_1, y_2]^T$ in $\\mathbb{R}^2$. The length of the vector $[-2, 1]^T$ using the inner product $\\langle \\mathbf{x}, \\mathbf{y} \\rangle = x_1y_1 + x_1y_2 + x_2y_1 + 3x_2y_2$ is:",
        options: [
          "a. 3",
          "b. $\\sqrt{3}$",
          "c. $\\sqrt{11}$",
          "d. 11"
        ],
        answer: 1, // b. sqrt(3)
        explanation: `
            <p>The length (norm) of a vector $\\mathbf{v}$ is $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.</p>
            <p>Let $\\mathbf{v} = [-2, 1]^T$. We compute $\\langle \\mathbf{v}, \\mathbf{v} \\rangle$:</p>
            <p>$$\\langle \\mathbf{v}, \\mathbf{v} \\rangle = (-2)(-2) + (-2)(1) + (1)(-2) + 3(1)(1)$$</p>
            <p>$$= 4 - 2 - 2 + 3 = 3$$</p>
            <p>The length is $\\sqrt{3}$.</p>
        `
    },
    {
        id: "mai391_md_004",
        status: "verified",
        question: "Let $\\mathbf{x} = [x_1, x_2]^T, \\mathbf{y} = [y_1, y_2]^T$ in $\\mathbb{R}^2$. The cosine of the angle between vectors $[1, -1]^T$ and $[1, 1]^T$ by using the inner product $\\langle \\mathbf{x}, \\mathbf{y} \\rangle = x_1y_1 + 3x_2y_2$ is:",
        options: [
          "a. 1",
          "b. -1",
          "c. 0.5",
          "d. -0.5"
        ],
        answer: 3, // d. -0.5
        explanation: `
            <p>Let $\\mathbf{u} = [1, -1]^T$ and $\\mathbf{v} = [1, 1]^T$.</p>
            <p>$$\\cos(\\theta) = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$$</p>
            <p>1. $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = (1)(1) + 3(-1)(1) = 1 - 3 = -2$.</p>
            <p>2. $\\|\\mathbf{u}\\|^2 = \\langle \\mathbf{u}, \\mathbf{u} \\rangle = (1)(1) + 3(-1)(-1) = 1 + 3 = 4 \\implies \\|\\mathbf{u}\\| = 2$.</p>
            <p>3. $\\|\\mathbf{v}\\|^2 = \\langle \\mathbf{v}, \\mathbf{v} \\rangle = (1)(1) + 3(1)(1) = 1 + 3 = 4 \\implies \\|\\mathbf{v}\\| = 2$.</p>
            <p>4. $\\cos(\\theta) = \\frac{-2}{2 \\times 2} = -0.5$.</p>
        `
    },
    {
        id: "mai391_md_005",
        status: "verified",
        question: "Using Gram-schmidt process to convert the basis $\\mathbf{b}_1 = [1, 2, 1]^T, \\mathbf{b}_2 = [0, -1, 3]^T$ into an orthogonal basis $\\{\\mathbf{c}_1, \\mathbf{c}_2\\}$. Find the vector $\\mathbf{c}_2$.",
        options: [
          "a. $(1/6)[1, 8, 17]^T$",
          "b. $(1/6)[1, 8, -17]^T$",
          "c. $(1/6)[-1, -8, 17]^T$",
          "d. $(1/6)[-1, -8, -17]^T$"
        ],
        answer: 2, // c. (1/6)[-1, -8, 17]^T
        explanation: `
            <p>1. Set $\\mathbf{c}_1 = \\mathbf{b}_1 = [1, 2, 1]^T$.</p>
            <p>2. Compute $\\mathbf{c}_2 = \\mathbf{b}_2 - \\text{proj}_{\\mathbf{c}_1}(\\mathbf{b}_2) = \\mathbf{b}_2 - \\frac{\\mathbf{b}_2 \\cdot \\mathbf{c}_1}{\\mathbf{c}_1 \\cdot \\mathbf{c}_1} \\mathbf{c}_1$.</p>
            <p>   $\\mathbf{b}_2 \\cdot \\mathbf{c}_1 = (0)(1) + (-1)(2) + (3)(1) = 1$.</p>
            <p>   $\\mathbf{c}_1 \\cdot \\mathbf{c}_1 = 1^2 + 2^2 + 1^2 = 6$.</p>
            <p>   $\\mathbf{c}_2 = \\begin{bmatrix} 0 \\\\ -1 \\\\ 3 \\end{bmatrix} - \\frac{1}{6} \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1/6 \\\\ -1 - 2/6 \\\\ 3 - 1/6 \\end{bmatrix} = \\begin{bmatrix} -1/6 \\\\ -8/6 \\\\ 17/6 \\end{bmatrix} = \\frac{1}{6} \\begin{bmatrix} -1 \\\\ -8 \\\\ 17 \\end{bmatrix}$.</p>
        `
    },
    {
        id: "mai391_md_007",
        status: "verified",
        question: "Let $X = [1, 2, 3]^T$ and $U = \\text{span}\\{[1, 1, 1]^T, [-1, 1, 0]^T\\}$. Let $[a, b, c]^T$ be the projection of $X$ on $U$. Find $c$.",
        options: [
          "a. 3/2",
          "b. 5/2",
          "c. 2",
          "d. None of the other choices is correct"
        ],
        answer: 2, // c. 2
        explanation: `
            <p>The basis vectors $\\mathbf{u}_1=[1,1,1]^T$ and $\\mathbf{u}_2=[-1,1,0]^T$ are orthogonal since $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.</p>
            <p>The projection of $X$ onto $U$ is:</p>
            <p>$$\\text{proj}_U(X) = \\frac{X \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\mathbf{u}_1 + \\frac{X \\cdot \\mathbf{u}_2}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2}\\mathbf{u}_2$$</p>
            <p>$$= \\frac{6}{3}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} + \\frac{1}{2}\\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 2 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} -0.5 \\\\ 0.5 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1.5 \\\\ 2.5 \\\\ 2 \\end{bmatrix}$$</p>
            <p>The resulting vector is $[1.5, 2.5, 2]^T$, so $c=2$.</p>
        `
    },
    {
        id: "mai391_md_009",
        status: "verified",
        question: "Let $A \\in \\mathbb{R}^{4 \\times 4}$ with the trace 6. Consider the function $f(x) = \\text{trace}(xA)$. Find $f'(1)$.",
        options: [
          "a. 24",
          "b. 18",
          "c. 12",
          "d. 6",
          "e. 0"
        ],
        answer: 3, // d. 6
        explanation: `
            <p>The trace is a linear operator, so $\\text{trace}(xA) = x \\cdot \\text{trace}(A)$.</p>
            <p>Given $\\text{trace}(A) = 6$, we have $f(x) = 6x$.</p>
            <p>The derivative is $f'(x) = 6$.</p>
            <p>Therefore, $f'(1) = 6$.</p>
        `
    },
    {
        id: "mai391_md_010",
        status: "verified",
        question: "Given $A = \\begin{pmatrix} 5 & -3 & 1 \\\\ 3 & 0 & 4 \\\\ 2 & 1 & 5 \\end{pmatrix}$. Choose the correct statement.",
        options: [
          "a. 7 is an eigenvalue of A",
          "b. 3 is an eigenvalue of A",
          "c. Both 7 and 3 are eigenvalues of A",
          "d. None of the other choices is correct"
        ],
        answer: 3, // d. None of the other choices is correct
        explanation: `
            <p>We check if $\\det(A - \\lambda I) = 0$.</p>
            <p>For $\\lambda=7$: $\\det(A-7I) = \\det\\begin{pmatrix} -2 & -3 & 1 \\\\ 3 & -7 & 4 \\\\ 2 & 1 & -2 \\end{pmatrix} = -2(10) + 3(-14) + 1(17) = -20 - 42 + 17 \\neq 0$.</p>
            <p>For $\\lambda=3$: $\\det(A-3I) = \\det\\begin{pmatrix} 2 & -3 & 1 \\\\ 3 & -3 & 4 \\\\ 2 & 1 & 2 \\end{pmatrix} = 2(-10) + 3(-2) + 1(9) = -20 - 6 + 9 \\neq 0$.</p>
            <p>Neither are eigenvalues.</p>
        `
    },
    {
        id: "mai391_md_011",
        status: "verified",
        question: "Given $A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 0 & 5 \\\\ 2 & 1 & 6 \\end{bmatrix}$. Choose the correct statement.",
        options: [
          "a. 5 is an eigenvalue of A",
          "b. 6 is an eigenvalue of A",
          "c. Both 5 and 6 are eigenvalues of A",
          "d. None of the other choices is correct"
        ],
        answer: 1, // b. 6 is an eigenvalue of A
        explanation: `
            <p>Check $\\lambda=6$: $\\det(A-6I) = \\det\\begin{bmatrix} -1 & -2 & 1 \\\\ 3 & -6 & 5 \\\\ 2 & 1 & 0 \\end{bmatrix}$.</p>
            <p>$$= -1(0-5) - (-2)(0-10) + 1(3 - (-12)) = 5 - 20 + 15 = 0$$</p>
            <p>Since the determinant is 0, 6 is an eigenvalue.</p>
        `
    },
    {
        id: "mai391_md_013",
        status: "verified",
        question: "Given the eigendecomposition: $A = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ -1 & 1 \\end{bmatrix}$. Compute the (2, 1)-entry of the matrix $A^{2023}$.",
        options: [
          "a. $2^{2023} - 3^{2023}$",
          "b. $2^{2023}$",
          "c. $3^{2023}$",
          "d. $2^{2023} + 3^{2023}$",
          "e. 0"
        ],
        answer: 0, // a. 2^2023 - 3^2023
        explanation: `
            <p>$$A^{2023} = P D^{2023} P^{-1} = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} 2^{2023} & 0 \\\\ 0 & 3^{2023} \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ -1 & 1 \\end{bmatrix}$$</p>
            <p>$$= \\begin{bmatrix} 2^{2023} & 0 \\\\ 2^{2023} & 3^{2023} \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ -1 & 1 \\end{bmatrix} = \\begin{bmatrix} 2^{2023} & 0 \\\\ 2^{2023} - 3^{2023} & 3^{2023} \\end{bmatrix}$$</p>
            <p>The (2,1)-entry is $2^{2023} - 3^{2023}$.</p>
        `
    },
    {
        id: "mai391_md_014",
        status: "verified",
        question: "All nonzero singular values of $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ are:",
        options: [
          "a. 3 and 1",
          "b. $\\sqrt{3}$ and 1",
          "c. 2 and 1",
          "d. $\\sqrt{2}$ and 1"
        ],
        answer: 1, // b. sqrt(3) and 1
        explanation: `
            <p>Singular values are $\\sigma_i = \\sqrt{\\lambda_i}$ where $\\lambda_i$ are eigenvalues of $A^T A$.</p>
            <p>$$A^T A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 0 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\\\ 0 & -1 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$$</p>
            <p>Eigenvalues of $A^T A$ are $\\lambda=3, 1$.</p>
            <p>Singular values are $\\sqrt{3}$ and $\\sqrt{1}=1$.</p>
        `
    },
    {
        id: "mai391_pdf_001",
        status: "verified",
        question: "Find the largest singular value of the matrix $A = \\begin{bmatrix} -2 \\\\ 0 \\\\ -1 \\\\ 2 \\end{bmatrix}$.",
        options: ["a. 9", "b. 2", "c. 3", "d. 5"],
        answer: 2, // c. 3
        explanation: `
            <p><strong>Công thức:</strong> Giá trị suy biến (singular value) $\\sigma = \\sqrt{\\lambda}$, trong đó $\\lambda$ là giá trị riêng (eigenvalue) khác 0 của $A^T A$.</p>
            <ol>
                <li><strong>Tính $A^T A$:</strong><br>
                    $A^T = \\begin{bmatrix} -2 & 0 & -1 & 2 \\end{bmatrix}$<br>
                    $A^T A = \\begin{bmatrix} -2 & 0 & -1 & 2 \\end{bmatrix} \\begin{bmatrix} -2 \\\\ 0 \\\\ -1 \\\\ 2 \\end{bmatrix} = (-2)^2 + 0^2 + (-1)^2 + 2^2 = 4 + 0 + 1 + 4 = 9$.
                </li>
                <li><strong>Tìm giá trị riêng:</strong><br>
                    $A^T A$ là ma trận $1 \\times 1$ [9]. Giá trị riêng duy nhất của nó là $\\lambda_1 = 9$.
                </li>
                <li><strong>Tìm giá trị suy biến:</strong><br>
                    Giá trị suy biến lớn nhất (và duy nhất) là $\\sigma_1 = \\sqrt{\\lambda_1} = \\sqrt{9} = 3$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_002",
        status: "verified",
        question: "Consider the linear program: \n$\\min_{x \\in \\mathbb{R}^2} \\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}^T \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}$ s.t. $\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} \\le \\begin{bmatrix} 1 \\\\ 4 \\end{bmatrix}$. \nDerive the dual linear program using Lagrange duality.",
        options: ["a. $-\\lambda_1 - 4\\lambda_2$", "b. None of the others", "c. $\\lambda_1 + 4\\lambda_2$", "d. $-5\\lambda_1 - 3\\lambda_2$", "e. $5\\lambda_1 + 3\\lambda_2$"],
        answer: 0, // a. $-\lambda_1 - 4\lambda_2$
        explanation: `
            <p><strong>Công thức:</strong> Hàm Lagrangian $\\mathcal{L}(x, \\lambda) = f(x) + \\lambda^T g(x)$. Hàm mục tiêu đối ngẫu $D(\\lambda) = \\inf_x \\mathcal{L}(x, \\lambda)$.</p>
            <ol>
                <li><strong>Bài toán gốc (Primal):</strong> $\\min (5x_1 + 3x_2)$ với điều kiện:
                    <ul>
                        <li>$g_1(x) = x_1 + 3x_2 - 1 \\le 0$</li>
                        <li>$g_2(x) = 2x_1 + 4x_2 - 4 \\le 0$</li>
                    </ul>
                </li>
                <li><strong>Hàm Lagrangian:</strong> (với $\\lambda_1, \\lambda_2 \\ge 0$)<br>
                    $\\mathcal{L}(x_1, x_2, \\lambda_1, \\lambda_2) = (5x_1 + 3x_2) + \\lambda_1(x_1 + 3x_2 - 1) + \\lambda_2(2x_1 + 4x_2 - 4)$.
                </li>
                <li><strong>Sắp xếp lại theo $x$:</strong><br>
                    $\\mathcal{L} = (5 + \\lambda_1 + 2\\lambda_2)x_1 + (3 + 3\\lambda_1 + 4\\lambda_2)x_2 - \\lambda_1 - 4\\lambda_2$.
                </li>
                <li><strong>Tìm hàm đối ngẫu $D(\\lambda)$:</strong><br>
                    $D(\\lambda) = \\inf_{x_1, x_2} \\mathcal{L}$. Để $D(\\lambda)$ không phải là $-\\infty$ (vì $x_1, x_2$ không bị chặn), các hệ số của $x_1$ và $x_2$ phải bằng 0. Đây chính là các ràng buộc của bài toán đối ngẫu:<br>
                    (1) $5 + \\lambda_1 + 2\\lambda_2 = 0$<br>
                    (2) $3 + 3\\lambda_1 + 4\\lambda_2 = 0$
                </li>
                <li><strong>Hàm mục tiêu đối ngẫu:</strong><br>
                    Khi các ràng buộc trên được thỏa mãn, hàm $D(\\lambda)$ chính là phần còn lại: $D(\\lambda) = -\\lambda_1 - 4\\lambda_2$.<br>
                    Các lựa chọn chỉ hiển thị hàm mục tiêu, vì vậy đáp án là $-\\lambda_1 - 4\\lambda_2$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_003",
        status: "verified",
        question: "Find the first order Taylor polynomial of $f(x,y) = x^2 + y^3$ at the point $(1,1)$.",
        options: ["a. None of the others", "b. $x+y$", "c. $-3 + 2x + 3y$", "d. $3x + 2y - 3$", "e. $2x + y - 1$"],
        answer: 2, // c. $-3 + 2x + 3y$
        explanation: `
            <p>Công thức Taylor bậc 1 (đa thức tuyến tính) tại $(a,b)$ là:<br>
            $P_1(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$.</p>
            <ol>
                <li><strong>Điểm neo:</strong> $(a,b) = (1,1)$.</li>
                <li><strong>Tính giá trị hàm:</strong><br>
                    $f(1,1) = 1^2 + 1^3 = 2$.
                </li>
                <li><strong>Tính các đạo hàm riêng:</strong>
                    <ul>
                        <li>$f_x = \\frac{\\partial f}{\\partial x} = 2x$. Tại $(1,1)$, $f_x(1,1) = 2(1) = 2$.</li>
                        <li>$f_y = \\frac{\\partial f}{\\partial y} = 3y^2$. Tại $(1,1)$, $f_y(1,1) = 3(1)^2 = 3$.</li>
                    </ul>
                </li>
                <li><strong>Thay vào công thức:</strong><br>
                    $P_1(x,y) = 2 + 2(x-1) + 3(y-1)$.</li>
                <li><strong>Rút gọn:</strong><br>
                    $P_1(x,y) = 2 + 2x - 2 + 3y - 3 = 2x + 3y - 3$.</li>
            </ol>`
    },
    {
        id: "mai391_pdf_004",
        status: "verified",
        question: "Determine whether the following set is orthonormal: \n(i) $\\{ (\\frac{1}{\\sqrt{2}}, 0, \\frac{1}{\\sqrt{2}}), (-\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}) \\}$ \n(ii) $\\{ (-2, 0, 1), (1, 1, 2) \\}$",
        options: ["a. None of the others", "b. (i) only", "c. Both (i) and (ii)", "d. (ii) only"],
        answer: 1, // b. (i) only
        explanation: `
            <p><strong>Định nghĩa:</strong> Một tập hợp vector là <strong>trực chuẩn (orthonormal)</strong> nếu tất cả các vector trong tập hợp đều là vector đơn vị (có độ dài/norm bằng 1) VÀ chúng trực giao (vuông góc) với nhau (tích vô hướng/dot product bằng 0).</p>
            <p><strong>Xét (i):</strong> Đặt $v_1 = (1/\\sqrt{2}, 0, 1/\\sqrt{2})$ và $v_2 = (-1/\\sqrt{3}, 1/\\sqrt{3}, 1/\\sqrt{3})$.</p>
            <ol>
                <li><strong>Kiểm tra độ dài (Norm):</strong><br>
                    $||v_1|| = \\sqrt{(1/\\sqrt{2})^2 + 0^2 + (1/\\sqrt{2})^2} = \\sqrt{1/2 + 0 + 1/2} = \\sqrt{1} = 1$.<br>
                    $||v_2|| = \\sqrt{(-1/\\sqrt{3})^2 + (1/\\sqrt{3})^2 + (1/\\sqrt{3})^2} = \\sqrt{1/3 + 1/3 + 1/3} = \\sqrt{1} = 1$.<br>
                    (Cả hai đều là vector đơn vị)
                </li>
                <li><strong>Kiểm tra trực giao (Orthogonality):</strong><br>
                    $v_1 \\cdot v_2 = (1/\\sqrt{2})(-1/\\sqrt{3}) + (0)(1/\\sqrt{3}) + (1/\\sqrt{2})(1/\\sqrt{3}) = -1/\\sqrt{6} + 0 + 1/\\sqrt{6} = 0$.<br>
                    (Hai vector trực giao)<br>
                    => (i) là tập trực chuẩn.
                </li>
            </ol>
            <p><strong>Xét (ii):</strong> Đặt $v_3 = (-2, 0, 1)$ và $v_4 = (1, 1, 2)$.</p>
            <ol>
                <li><strong>Kiểm tra độ dài (Norm):</strong><br>
                    $||v_3|| = \\sqrt{(-2)^2 + 0^2 + 1^2} = \\sqrt{4 + 0 + 1} = \\sqrt{5}$.<br>
                    Vì $||v_3|| \\neq 1$, tập hợp này không thể là trực chuẩn.<br>
                    => (ii) không là tập trực chuẩn.
                </li>
            </ol>
            <p><strong>Kết luận:</strong> Chỉ có (i) là trực chuẩn.</p>`
    },
    {
        id: "mai391_pdf_005",
        status: "verified",
        question: "Find $\\min_{x,y \\in \\mathbb{R}} (2x+y)$ subject to $x^2 - y \\le 3$.",
        options: ["a. -6", "b. -3", "c. 2", "d. 0", "e. -4"],
        answer: 4, // e. -4
        explanation: `
            <p>Đây là bài toán tối ưu hóa có ràng buộc. Chúng ta có thể sử dụng phương pháp Nhân tử Lagrange (Lagrange Multipliers). Tại điểm tối ưu, ràng buộc sẽ là một đẳng thức.</p>
            <ol>
                <li><strong>Hàm mục tiêu:</strong> $f(x,y) = 2x+y$.</li>
                <li><strong>Hàm ràng buộc:</strong> $g(x,y) = x^2 - y - 3 = 0$.</li>
                <li><strong>Công thức Lagrange:</strong> $\\nabla f = \\lambda \\nabla g$.
                    <ul>
                        <li>Gradient của f: $\\nabla f = \\begin{bmatrix} \\partial f / \\partial x \\\\ \\partial f / \\partial y \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.</li>
                        <li>Gradient của g: $\\nabla g = \\begin{bmatrix} \\partial g / \\partial x \\\\ \\partial g / \\partial y \\end{bmatrix} = \\begin{bmatrix} 2x \\\\ -1 \\end{bmatrix}$.</li>
                    </ul>
                </li>
                <li><strong>Thiết lập hệ phương trình:</strong><br>
                    (1) $2 = \\lambda (2x)$<br>
                    (2) $1 = \\lambda (-1)$<br>
                    (3) $x^2 - y = 3$ (ràng buộc)
                </li>
                <li><strong>Giải hệ:</strong><br>
                    Từ (2), ta có $\\lambda = -1$.<br>
                    Thay $\\lambda = -1$ vào (1): $2 = (-1)(2x) \\implies 2 = -2x \\implies x = -1$.<br>
                    Thay $x = -1$ vào (3): $(-1)^2 - y = 3 \\implies 1 - y = 3 \\implies y = -2$.
                </li>
                <li><strong>Tìm giá trị nhỏ nhất:</strong><br>
                    Điểm cực trị xảy ra tại $(x, y) = (-1, -2)$.<br>
                    Giá trị của $f$ tại điểm này là: $f(-1, -2) = 2(-1) + (-2) = -2 - 2 = -4$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_007",
        status: "verified",
        question: "Let $f(x) = x^T x + x^T a + C$, where $x, a \\in \\mathbb{R}^D, C \\in \\mathbb{R}$. Find the gradient of f with respect to x.",
        options: ["a. $x^T + a^T$", "b. $x^T + a^T$", "c. $1 + 2x + a^T$", "d. $2x^T + a^T$"],
        answer: 3, // d. $2x^T + a^T$ (giả định gradient ở dạng hàng)
        explanation: `
            <p>Sử dụng công thức đạo hàm ma trận (matrix calculus) cho gradient (thường là vector cột):</p>
            <ul>
                <li>$\\nabla_x (x^T A x) = (A + A^T)x$. Trong trường hợp $f_1(x) = x^T x = x^T I x$, ta có $A=I$, nên $\\nabla_x (x^T x) = (I + I^T)x = 2Ix = 2x$.</li>
                <li>$\\nabla_x (x^T a) = a$.</li>
                <li>$\\nabla_x (C) = 0$.</li>
            </ul>
            <p><strong>Tính toán:</strong><br>
            Áp dụng các quy tắc trên, gradient của $f(x)$ là:<br>
            $\\nabla_x f(x) = \\nabla_x (x^T x) + \\nabla_x (x^T a) + \\nabla_x (C) = 2x + a + 0 = 2x + a$.</p>
            <p><strong>Lưu ý:</strong> Gradient $\\nabla_x f(x)$ theo quy ước là một vector cột. Tuy nhiên, tất cả các đáp án đều ở dạng vector hàng (chứa $x^T$ và $a^T$). Điều này có nghĩa là câu hỏi đang yêu cầu $(\\nabla_x f(x))^T$.<br>
            Chuyển vị kết quả của chúng ta: $(\\nabla_x f(x))^T = (2x + a)^T = (2x)^T + a^T = 2x^T + a^T$.</p>
            <p>Kết quả này khớp với đáp án d.</p>`
    },
    {
        id: "mai391_pdf_008",
        status: "verified",
        question: "Suppose that the joint density function of the random variables is: \n$f(x,y) = \\begin{cases} c(2x+y) & 0 \\le x \\le 1, 0 \\le y \\le 1 \\\\ 0, & \\text{elsewhere} \\end{cases}$. \nDetermine the value of c.",
        options: ["a. None of the others", "b. 3/2", "c. 2", "d. 1/2", "e. 2/3"],
        answer: 4, // e. 2/3
        explanation: `
            <p><strong>Nguyên tắc:</strong> Để $f(x,y)$ là một hàm mật độ xác suất (PDF) hợp lệ, tích phân của nó trên toàn bộ miền định nghĩa phải bằng 1.<br>
            $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f(x,y) \\, dx \\, dy = 1$.</p>
            <ol>
                <li><strong>Thiết lập tích phân:</strong><br>
                    $\\int_{0}^{1} \\int_{0}^{1} c(2x+y) \\, dx \\, dy = 1$.
                </li>
                <li><strong>Giải tích phân bên trong (theo $x$):</strong><br>
                    $c \\int_{0}^{1} (2x+y) \\, dx = c \\left[ x^2 + xy \\right]_{x=0}^{x=1} = c \\left( (1^2 + 1y) - (0^2 + 0y) \\right) = c(1+y)$.
                </li>
                <li><strong>Giải tích phân bên ngoài (theo $y$):</strong><br>
                    $\\int_{0}^{1} c(1+y) \\, dy = c \\left[ y + \\frac{y^2}{2} \\right]_{y=0}^{y=1} = c \\left( (1 + \\frac{1^2}{2}) - (0) \\right) = c (1 + \\frac{1}{2}) = c (\\frac{3}{2})$.
                </li>
                <li><strong>Tìm c:</strong><br>
                    Ta có $c (\\frac{3}{2}) = 1$, suy ra $c = \\frac{2}{3}$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_009",
        status: "flagged",
        question: "Suppose that the joint density function of the random variables is: \n$f(x,y) = \\begin{cases} x-y, & 1 \\le x \\le 2, 0 \\le y \\le 1 \\\\ 0, & \\text{elsewhere} \\end{cases}$. \nFind $\\text{cov}[X,Y]$.",
        options: ["a. 0", "b. 1/144", "c. 1", "d. 2/3", "e. 1/3"],
        answer: 1, // b. 1/144 (Lưu ý: Đáp án đúng theo tính toán là -37/144. Câu hỏi hoặc các đáp án có thể bị lỗi)
        explanation: `
            <p><strong>Công thức:</strong> $\\text{cov}(X,Y) = E[XY] - E[X]E[Y]$.</p>
            <ol>
                <li><strong>Kiểm tra PDF:</strong> $\\int_0^1 \\int_1^2 (x-y) \\, dx \\, dy = \\int_0^1 [\\frac{x^2}{2} - xy]_1^2 \\, dy = \\int_0^1 ( (2 - 2y) - (\\frac{1}{2} - y) ) \\, dy = \\int_0^1 (\\frac{3}{2} - y) \\, dy = [\\frac{3y}{2} - \\frac{y^2}{2}]_0^1 = \\frac{3}{2} - \\frac{1}{2} = 1$. PDF hợp lệ.</li>
                <li><strong>Tính $E[X]$:</strong><br>
                    $E[X] = \\int_0^1 \\int_1^2 x(x-y) \\, dx \\, dy = \\int_0^1 [\\frac{x^3}{3} - \\frac{x^2y}{2}]_1^2 \\, dy = \\int_0^1 ( (\\frac{8}{3} - 2y) - (\\frac{1}{3} - \\frac{y}{2}) ) \\, dy = \\int_0^1 (\\frac{7}{3} - \\frac{3y}{2}) \\, dy = [\\frac{7y}{3} - \\frac{3y^2}{4}]_0^1 = \\frac{7}{3} - \\frac{3}{4} = \\frac{28-9}{12} = \\frac{19}{12}$.
                </li>
                <li><strong>Tính $E[Y]$:</strong><br>
                    $E[Y] = \\int_0^1 \\int_1^2 y(x-y) \\, dx \\, dy = \\int_0^1 y [\\frac{x^2}{2} - xy]_1^2 \\, dy = \\int_0^1 y(\\frac{3}{2} - y) \\, dy = \\int_0^1 (\\frac{3y}{2} - y^2) \\, dy = [\\frac{3y^2}{4} - \\frac{y^3}{3}]_0^1 = \\frac{3}{4} - \\frac{1}{3} = \\frac{9-4}{12} = \\frac{5}{12}$.
                </li>
                <li><strong>Tính $E[XY]$:</strong><br>
                    $E[XY] = \\int_0^1 \\int_1^2 xy(x-y) \\, dx \\, dy = \\int_0^1 [\\frac{x^3y}{3} - \\frac{x^2y^2}{2}]_1^2 \\, dy = \\int_0^1 ( (\\frac{8y}{3} - 2y^2) - (\\frac{y}{3} - \\frac{y^2}{2}) ) \\, dy = \\int_0^1 (\\frac{7y}{3} - \\frac{3y^2}{2}) \\, dy = [\\frac{7y^2}{6} - \\frac{y^3}{2}]_0^1 = \\frac{7}{6} - \\frac{1}{2} = \\frac{4}{6} = \\frac{2}{3}$.
                </li>
                <li><strong>Tính $\\text{cov}(X,Y)$:</strong><br>
                    $\\text{cov}(X,Y) = E[XY] - E[X]E[Y] = \\frac{2}{3} - (\\frac{19}{12})(\\frac{5}{12}) = \\frac{2}{3} - \\frac{95}{144} = \\frac{96}{144} - \\frac{95}{144} = \\frac{1}{144}$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_010",
        status: "verified",
        question: "Consider the bivariate Gaussian distribution: \n$p(x_1, x_2) = N(\\mu, \\Sigma)$, where $\\mu = [5, 10]^T$, $\\Sigma = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix}$. \nFind $V[2X_1 - 3X_2]$.",
        options: ["a. -19", "b. None of the others", "c. 97", "d. 85", "e. -65"],
        answer: 3, // d. 85
        explanation: `
            <p><strong>Công thức:</strong> Phương sai của một tổ hợp tuyến tính các biến ngẫu nhiên $W = aX + bY$ là:<br>
            $V[W] = V[aX + bY] = a^2 V[X] + b^2 V[Y] + 2ab \\cdot \\text{cov}(X, Y)$.</p>
            <ol>
                <li><strong>Xác định các tham số từ $N(\\mu, \\Sigma)$:</strong>
                    <ul>
                        <li>Vector trung bình $\\mu = \\begin{bmatrix} E[X_1] \\\\ E[X_2] \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix}$.</li>
                        <li>Ma trận hiệp phương sai $\\Sigma = \\begin{bmatrix} V[X_1] & \\text{cov}(X_1, X_2) \\\\ \\text{cov}(X_2, X_1) & V[X_2] \\end{bmatrix} = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix}$.</li>
                        <li>Ta có: $V[X_1] = 4$, $V[X_2] = 9$, và $\\text{cov}(X_1, X_2) = 1$.</li>
                    </ul>
                </li>
                <li><strong>Xác định các hệ số:</strong><br>
                    Ta cần tìm $V[2X_1 - 3X_2]$. Vậy $a = 2$ và $b = -3$.
                </li>
                <li><strong>Áp dụng công thức:</strong><br>
                    $V[2X_1 - 3X_2] = (2)^2 V[X_1] + (-3)^2 V[X_2] + 2(2)(-3) \\text{cov}(X_1, X_2)$.<br>
                    $V = 4 \\cdot (4) + 9 \\cdot (9) + 2(2)(-3)(1)$.<br>
                    $V = 16 + 81 - 12 = 85$.
                </li>
            </ol>
            <p><em>(Lưu ý: Phương sai không bao giờ có thể là số âm, vì vậy các đáp án 'a' và 'e' có thể bị loại ngay lập tức).</em></p>`
    },
    {
        id: "mai391_pdf_011",
        status: "verified",
        question: "Compute $\\phi$, the angle between x and y, using $\\langle x, y \\rangle = x^T y$, where $x = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, y = \\begin{pmatrix} -1 \\\\ -1 \\\\ 0 \\end{pmatrix}$.",
        options: ["a. $5\\pi/6$", "b. None of the others", "c. $\\pi/6$", "d. $\\pi/3$", "e. $2\\pi/3$"],
        answer: 4, // e. $2\pi/3$
        explanation: `
            <p><strong>Công thức:</strong> Góc $\\phi$ giữa hai vector $x$ và $y$ được tính bởi:<br>
            $\\cos(\\phi) = \\frac{x \\cdot y}{||x|| \\cdot ||y||}$.</p>
            <ol>
                <li><strong>Tính tích vô hướng (dot product) $x \\cdot y$:</strong><br>
                    $x \\cdot y = (1)(-1) + (0)(-1) + (1)(0) = -1 + 0 + 0 = -1$.</li>
                <li><strong>Tính độ dài (norm) của $x$ và $y$:</strong><br>
                    $||x|| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{1 + 0 + 1} = \\sqrt{2}$.<br>
                    $||y|| = \\sqrt{(-1)^2 + (-1)^2 + 0^2} = \\sqrt{1 + 1 + 0} = \\sqrt{2}$.</li>
                <li><strong>Tính $\\cos(\\phi)$:</strong><br>
                    $\\cos(\\phi) = \\frac{-1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{-1}{2}$.</li>
                <li><strong>Tìm $\\phi$:</strong><br>
                    Góc có $\\cos$ bằng $-1/2$ là $\\phi = \\arccos(-1/2) = 2\\pi/3$.</li>
            </ol>`
    },
    {
        id: "mai391_pdf_012",
        status: "verified",
        question: "Let u and v be vectors in $\\mathbb{R}^3$ with $||u|| = 7$, $||v|| = 4$ and $u \\cdot v = -1$. Determine the value of $||u+v||$.",
        options: ["a. 10", "b. 64", "c. 11", "d. 8", "e. None of the others"],
        answer: 4, // e. None of the others
        explanation: `
            <p><strong>Công thức:</strong> Bình phương độ dài của tổng hai vector liên quan đến tích vô hướng:<br>
            $||u+v||^2 = \\langle u+v, u+v \\rangle = ||u||^2 + 2(u \\cdot v) + ||v||^2$.</p>
            <ol>
                <li><strong>Thay các giá trị đã cho vào công thức:</strong><br>
                    $||u+v||^2 = (7)^2 + 2(-1) + (4)^2$.</li>
                <li><strong>Tính toán:</strong><br>
                    $||u+v||^2 = 49 - 2 + 16 = 63$.</li>
                <li><strong>Tìm $||u+v||$:</strong><br>
                    $||u+v|| = \\sqrt{63}$.</li>
            </ol>
            <p>Vì $\\sqrt{63}$ không bằng bất kỳ giá trị nào trong các đáp án (10, 64, 11, 8), nên đáp án đúng là 'None of the others'.</p>`
    },
    {
        id: "mai391_pdf_013",
        status: "verified",
        question: "Determine the sum of square of the singular values of the matrix $\\begin{pmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{pmatrix}$.",
        options: ["a. 5", "b. None of the others", "c. 8", "d. 7", "e. 9"],
        answer: 1, // b. None of the others
        explanation: `
            <p><strong>Công thức:</strong> Tổng bình phương các giá trị suy biến (singular values) của ma trận $A$ (ký hiệu $\\sum \\sigma_i^2$) bằng bình phương chuẩn Frobenius (Frobenius norm) của $A$, $||A||_F^2$. Chuẩn Frobenius $||A||_F^2$ là tổng bình phương của tất cả các phần tử trong ma trận.<br>
            $||A||_F^2 = \\sum_{i,j} A_{ij}^2 = \\sum \\sigma_i^2$.</p>
            <ol>
                <li><strong>Xác định ma trận $A$:</strong><br>
                    $A = \\begin{pmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{pmatrix}$.</li>
                <li><strong>Tính tổng bình phương các phần tử:</strong><br>
                    $||A||_F^2 = (3)^2 + (2)^2 + (2)^2 + (2)^2 + (3)^2 + (-2)^2 = 9 + 4 + 4 + 4 + 9 + 4 = 34$.</li>
            </ol>
            <p><strong>Kết luận:</strong> Tổng bình phương các giá trị suy biến là 34. Giá trị này không xuất hiện trong các lựa chọn, vì vậy đáp án là 'None of the others'.</p>`
    },
    {
        id: "mai391_pdf_014",
        status: "verified",
        question: "The joint probability density function of discrete random variable X, Y is given by the table: \n$X=\\{0,1,2\\}$, $Y=\\{-1,2\\}$ \n$P(0,-1)=0.1$, $P(1,-1)=0.2$, $P(2,-1)=0.1$ \n$P(0,2)=0.2$, $P(1,2)=0.1$, $P(2,2)=0.3$ \nCalculate $\\text{cov}[X,Y]$.",
        options: ["a. 0.098", "b. 0.12", "c. 0.010", "d. 1", "e. None of the others"],
        answer: 1, // b. 0.12
        explanation: `
            <p><strong>Công thức:</strong> $\\text{cov}(X,Y) = E[XY] - E[X]E[Y]$.</p>
            <ol>
                <li><strong>Tính $E[X]$:</strong>
                    <ul>
                        <li>$P(X=0) = 0.1 + 0.2 = 0.3$</li>
                        <li>$P(X=1) = 0.2 + 0.1 = 0.3$</li>
                        <li>$P(X=2) = 0.1 + 0.3 = 0.4$</li>
                        <li>$E[X] = (0)(0.3) + (1)(0.3) + (2)(0.4) = 0 + 0.3 + 0.8 = 1.1$.</li>
                    </ul>
                </li>
                <li><strong>Tính $E[Y]$:</strong>
                    <ul>
                        <li>$P(Y=-1) = 0.1 + 0.2 + 0.1 = 0.4$</li>
                        <li>$P(Y=2) = 0.2 + 0.1 + 0.3 = 0.6$</li>
                        <li>$E[Y] = (-1)(0.4) + (2)(0.6) = -0.4 + 1.2 = 0.8$.</li>
                    </ul>
                </li>
                <li><strong>Tính $E[XY]$:</strong><br>
                    $E[XY] = \\sum_{x,y} (x \\cdot y \\cdot P(x,y))$<br>
                    $= (0)(-1)(0.1) + (1)(-1)(0.2) + (2)(-1)(0.1) + (0)(2)(0.2) + (1)(2)(0.1) + (2)(2)(0.3)$<br>
                    $= 0 - 0.2 - 0.2 + 0 + 0.2 + 1.2 = 1.0$.
                </li>
                <li><strong>Tính $\\text{cov}(X,Y)$:</strong><br>
                    $\\text{cov}(X,Y) = E[XY] - E[X]E[Y] = 1.0 - (1.1)(0.8) = 1.0 - 0.88 = 0.12$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_015",
        status: "verified",
        question: "Consider the bivariate Gaussian distribution: \n$p(x_1, x_2) = N(\\mu, \\Sigma)$, where $\\mu = [5, 10]^T$, $\\Sigma = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix}$. \nFind $\\text{corr}[X_1, X_2]$.",
        options: ["a. 1/6", "b. 2/3", "c. 1/36", "d. 4/9"],
        answer: 0, // a. 1/6
        explanation: `
            <p><strong>Công thức:</strong> Hệ số tương quan (correlation coefficient) $\\rho$ được tính từ ma trận hiệp phương sai $\\Sigma$.<br>
            $\\text{corr}(X_1, X_2) = \\rho = \\frac{\\Sigma_{12}}{\\sqrt{\\Sigma_{11} \\cdot \\Sigma_{22}}}$.</p>
            <ol>
                <li><strong>Xác định các thành phần từ $\\Sigma$:</strong><br>
                    $\\Sigma = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix} = \\begin{bmatrix} V[X_1] & \\text{cov}(X_1, X_2) \\\\ \\text{cov}(X_2, X_1) & V[X_2] \\end{bmatrix}$.<br>
                    Ta có: $\\Sigma_{11} = V[X_1] = 4$, $\\Sigma_{22} = V[X_2] = 9$, và $\\Sigma_{12} = \\text{cov}(X_1, X_2) = 1$.
                </li>
                <li><strong>Áp dụng công thức:</strong><br>
                    $\\text{corr}(X_1, X_2) = \\frac{1}{\\sqrt{4 \\cdot 9}} = \\frac{1}{\\sqrt{36}} = \\frac{1}{6}$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_016",
        status: "verified",
        question: "Suppose that the joint density function of the random variables is: \n$f(x,y) = \\begin{cases} x-y, & 1 \\le x \\le 2, 0 \\le y \\le 1 \\\\ 0, & \\text{elsewhere} \\end{cases}$. \nFind the expected value of Y.",
        options: ["a. 7/12", "b. None of the others", "c. 1/3", "d. 5/12", "e. 1/2"],
        answer: 3, // d. 5/12
        explanation: `
            <p><strong>Công thức:</strong> $E[Y] = \\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} y \\cdot f(x,y) \\, dx \\, dy$.</p>
            <ol>
                <li><strong>Thiết lập tích phân:</strong><br>
                    $E[Y] = \\int_{0}^{1} \\int_{1}^{2} y(x-y) \\, dx \\, dy = \\int_{0}^{1} \\int_{1}^{2} (xy - y^2) \\, dx \\, dy$.
                </li>
                <li><strong>Giải tích phân bên trong (theo $x$):</strong><br>
                    $\\int_{0}^{1} \\left[ \\frac{x^2 y}{2} - xy^2 \\right]_{x=1}^{x=2} \\, dy$.
                </li>
                <li><strong>Thay cận $x$ và rút gọn:</strong><br>
                    $\\int_{0}^{1} \\left( (\\frac{4y}{2} - 2y^2) - (\\frac{y}{2} - y^2) \\right) \\, dy = \\int_{0}^{1} (\\frac{3y}{2} - y^2) \\, dy$.
                </li>
                <li><strong>Giải tích phân bên ngoài (theo $y$):</strong><br>
                    $\\left[ \\frac{3y^2}{4} - \\frac{y^3}{3} \\right]_{y=0}^{y=1} = ( \\frac{3}{4} - \\frac{1}{3} ) - (0) = \\frac{9-4}{12} = \\frac{5}{12}$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_017",
        status: "verified",
        question: "Consider the bivariate Gaussian distribution: \n$p(x_1, x_2) = N(\\mu, \\Sigma)$, where $\\mu = [5, 10]^T$, $\\Sigma = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix}$. \nFind the variance of $X_1$ given $X_2 = 8$.",
        options: ["a. 4", "b. 36", "c. None of the others", "d. 35/4", "e. 35/9"],
        answer: 4, // e. 35/9
        explanation: `
            <p><strong>Công thức:</strong> Phương sai có điều kiện $V[X_1 | X_2=x_2]$ (hay $\\Sigma_{1|2}$) cho phân phối Gaussian đa biến được tính bởi:<br>
            $V[X_1 | X_2=x_2] = \\Sigma_{11} - \\Sigma_{12} \\Sigma_{22}^{-1} \\Sigma_{21}$.</p>
            <ol>
                <li><strong>Xác định các thành phần từ $\\Sigma$:</strong><br>
                    Cho $X_1$ là khối 1 và $X_2$ là khối 2, ma trận $\\Sigma = \\begin{bmatrix} \\Sigma_{11} & \\Sigma_{12} \\\\ \\Sigma_{21} & \\Sigma_{22} \\end{bmatrix} = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix}$.<br>
                    Ta có: $\\Sigma_{11} = 4$, $\\Sigma_{12} = 1$, $\\Sigma_{21} = 1$, $\\Sigma_{22} = 9$.
                </li>
                <li><strong>Tính $\\Sigma_{22}^{-1}$:</strong><br>
                    Vì $\\Sigma_{22}$ là vô hướng [9], nghịch đảo của nó là $\\Sigma_{22}^{-1} = 1/9$.
                </li>
                <li><strong>Thay vào công thức và tính toán:</strong><br>
                    $V[X_1 | X_2=8] = 4 - (1) (1/9) (1) = 4 - 1/9 = 36/9 - 1/9 = 35/9$.
                </li>
            </ol>
            <p><em>(Lưu ý: Giá trị cụ thể $X_2=8$ không ảnh hưởng đến phương sai có điều kiện, nó chỉ ảnh hưởng đến trung bình có điều kiện).</em></p>`
    },
    {
        id: "mai391_pdf_018",
        status: "verified",
        question: "A continuous random variable X that has a density function given by $f(x) = c(x+1)^2$ for $x \\in [-2, 1]$, where c is a constant. Calculate $P(X < 0)$.",
        options: ["a. 1/2", "b. None of the others", "c. 2/3", "d. 2/9", "e. 1/6"],
        answer: 3, // d. 2/9
        explanation: `
            <p>Bài toán này có 2 bước: 1. Tìm hằng số $c$. 2. Tính xác suất $P(X < 0)$.</p>
            <ol>
                <li><strong>Tìm $c$:</strong><br>
                    Tích phân của PDF trên toàn miền phải bằng 1: $\\int_{-2}^{1} c(x+1)^2 \\, dx = 1$.<br>
                    Đặt $u = x+1 \\implies du = dx$. Đổi cận: $x=-2 \\implies u=-1$; $x=1 \\implies u=2$.<br>
                    $c \\int_{-1}^{2} u^2 \\, du = c \\left[ \\frac{u^3}{3} \\right]_{-1}^{2} = c \\left( (\\frac{8}{3}) - (\\frac{-1}{3}) \\right) = c (\\frac{9}{3}) = 3c = 1$.<br>
                    Suy ra $c = 1/3$.
                </li>
                <li><strong>Tính $P(X < 0)$:</strong><br>
                    $P(X < 0) = \\int_{-2}^{0} f(x) \\, dx = \\int_{-2}^{0} \\frac{1}{3}(x+1)^2 \\, dx$.<br>
                    Sử dụng lại phép đặt $u=x+1$. Đổi cận: $x=-2 \\implies u=-1$; $x=0 \\implies u=1$.<br>
                    $P(X < 0) = \\frac{1}{3} \\int_{-1}^{1} u^2 \\, du = \\frac{1}{3} \\left[ \\frac{u^3}{3} \\right]_{-1}^{1} = \\frac{1}{3} \\left( (\\frac{1}{3}) - (\\frac{-1}{3}) \\right) = \\frac{1}{3} (\\frac{2}{3}) = \\frac{2}{9}$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_019",
        status: "verified",
        question: "Let $A \\in \\mathbb{R}^{3 \\times 4}$ and the vector-value function $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ is defined as $f(x) = Ax$. Find the Jacobian of f.",
        options: ["a. A", "b. Identity matrix", "c. Transpose of A", "d. Inverse of A"],
        answer: 0, // a. A
        explanation: `
            <p><strong>Định nghĩa:</strong> Ma trận Jacobian $J$ của một hàm vector $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ là ma trận $m \\times n$ với các phần tử $J_{ij} = \\frac{\\partial f_i}{\\partial x_j}$.</p>
            <ol>
                <li><strong>Xác định kích thước:</strong><br>
                    $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$, vì vậy $n=4$ và $m=3$. Ma trận Jacobian $J$ sẽ có kích thước $3 \\times 4$.
                </li>
                <li><strong>Xem xét hàm:</strong><br>
                    Hàm $f(x) = Ax$ là một phép biến đổi tuyến tính. Hàng thứ $i$ của $f$, $f_i(x)$, là tích vô hướng của hàng thứ $i$ của $A$ ($A_i$) với vector $x$:<br>
                    $f_i(x) = A_{i1}x_1 + A_{i2}x_2 + A_{i3}x_3 + A_{i4}x_4$.
                </li>
                <li><strong>Tính đạo hàm riêng:</strong><br>
                    Phần tử $(i, j)$ của Jacobian là $J_{ij} = \\frac{\\partial f_i}{\\partial x_j} = \\frac{\\partial}{\\partial x_j} (A_{i1}x_1 + ... + A_{ij}x_j + ... + A_{i4}x_4) = A_{ij}$.
                </li>
            </ol>
            <p><strong>Kết luận:</strong> Vì mọi phần tử $J_{ij}$ của ma trận Jacobian $J$ đều bằng phần tử $A_{ij}$ của ma trận $A$, nên $J = A$. Đạo hàm của một phép biến đổi tuyến tính chính là ma trận của phép biến đổi đó.</p>`
    },
    {
        id: "mai391_pdf_020",
        status: "verified",
        question: "Given a particular dataset $x_1, x_2, x_3, x_4 \\in \\mathbb{R}^2$ taken from a population as following: \n$X = \\begin{bmatrix} 1 & 5 \\\\ 2 & 6 \\\\ 3 & 7 \\\\ 4 & 0 \\end{bmatrix}$. \nDetermine (1,2)-entry of the empirical covariance matrix of X.",
        options: ["a. None of the others", "b. 1.25", "c. -1.75", "d. 7.25", "e. -7/3"],
        answer: 4, // e. -7/3
        explanation: `
            <p><strong>Công thức:</strong> Hiệp phương sai mẫu (entry 1,2) $S_{12}$ được tính bởi:<br>
            $S_{12} = \\frac{1}{N-1} \\sum_{i=1}^{N} (x_{i1} - \\bar{x}_1)(x_{i2} - \\bar{x}_2)$.</p>
            <ol>
                <li><strong>Tìm N và trung bình $\\bar{x}_1$, $\\bar{x}_2$:</strong><br>
                    $N = 4$ (số mẫu/hàng).<br>
                    Cột 1 ($x_1$): $\{1, 2, 3, 4\}$. $\\bar{x}_1 = \\frac{1+2+3+4}{4} = \\frac{10}{4} = 2.5$.<br>
                    Cột 2 ($x_2$): $\{5, 6, 7, 0\}$. $\\bar{x}_2 = \\frac{5+6+7+0}{4} = \\frac{18}{4} = 4.5$.
                </li>
                <li><strong>Tính tổng các tích của độ lệch:</strong>
                    <ul>
                        <li>$i=1$: $(1 - 2.5)(5 - 4.5) = (-1.5)(0.5) = -0.75$.</li>
                        <li>$i=2$: $(2 - 2.5)(6 - 4.5) = (-0.5)(1.5) = -0.75$.</li>
                        <li>$i=3$: $(3 - 2.5)(7 - 4.5) = (0.5)(2.5) = 1.25$.</li>
                        <li>$i=4$: $(4 - 2.5)(0 - 4.5) = (1.5)(-4.5) = -6.75$.</li>
                    </ul>
                    Tổng: $(-0.75) + (-0.75) + 1.25 + (-6.75) = -7.0$.
                </li>
                <li><strong>Chia cho $N-1$:</strong><br>
                    $S_{12} = \\frac{\\text{Tổng}}{N-1} = \\frac{-7.0}{4-1} = \\frac{-7}{3}$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_022",
        status: "verified",
        question: "Consider the bivariate Gaussian distribution: \n$p(x_1, x_2) = N(\\mu, \\Sigma)$, where $\\mu = [5, 10]^T$, $\\Sigma = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix}$. \nFind the mean of $X_1$ given $X_2 = 8$.",
        options: ["a. 47/9", "b. 23", "c. None of the others", "d. -13", "e. 43/9"],
        answer: 4, // e. 43/9
        explanation: `
            <p><strong>Công thức:</strong> Trung bình có điều kiện $E[X_1 | X_2=x_2]$ cho phân phối Gaussian đa biến được tính bởi:<br>
            $E[X_1 | X_2=x_2] = \\mu_1 + \\Sigma_{12} \\Sigma_{22}^{-1} (x_2 - \\mu_2)$.</p>
            <ol>
                <li><strong>Xác định các thành phần từ $\\mu$ và $\\Sigma$:</strong>
                    <ul>
                        <li>$\\mu = \\begin{bmatrix} \\mu_1 \\\\ \\mu_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix}$. Vậy $\\mu_1 = 5$, $\\mu_2 = 10$.</li>
                        <li>$\\Sigma = \\begin{bmatrix} \\Sigma_{11} & \\Sigma_{12} \\\\ \\Sigma_{21} & \\Sigma_{22} \\end{bmatrix} = \\begin{bmatrix} 4 & 1 \\\\ 1 & 9 \\end{bmatrix}$. Vậy $\\Sigma_{12} = 1$, $\\Sigma_{22} = 9$.</li>
                        <li>Giá trị điều kiện: $x_2 = 8$.</li>
                    </ul>
                </li>
                <li><strong>Tính $\\Sigma_{22}^{-1}$:</strong> Vì $\\Sigma_{22}$ là vô hướng [9], nghịch đảo của nó là $\\Sigma_{22}^{-1} = 1/9$.</li>
                <li><strong>Thay vào công thức và tính toán:</strong><br>
                    $E[X_1 | X_2=8] = 5 + (1) (1/9) (8 - 10) = 5 + (1/9)(-2) = 5 - 2/9 = 45/9 - 2/9 = 43/9$.</li>
            </ol>`
    },
    {
        id: "mai391_pdf_023",
        status: "verified",
        question: "Consider the linear program: \n$\\min_{x \\in \\mathbb{R}^2} \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}^T \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}$ s.t. $\\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} \\le \\begin{bmatrix} -1 \\\\ 2 \\\\ 4 \\end{bmatrix}$. \nDerive the dual linear program using Lagrange duality $D(\\lambda)$.",
        options: ["a. $\\lambda_1 - 2\\lambda_2 - 4\\lambda_3$", "b. None of the others", "c. $\\lambda_1 - 2\\lambda_2 - 4\\lambda_3$", "d. $\\lambda_1 - 2\\lambda_2$", "e. $-\\lambda_1 + 2\\lambda_2$"],
        answer: 0, // a. $\lambda_1 - 2\lambda_2 - 4\lambda_3$ (hoặc c)
        explanation: `
            <p><strong>Công thức:</strong> Hàm Lagrangian $\\mathcal{L}(x, \\lambda) = f(x) + \\lambda^T g(x)$. Hàm mục tiêu đối ngẫu $D(\\lambda) = \\inf_x \\mathcal{L}(x, \\lambda)$.</p>
            <ol>
                <li><strong>Bài toán gốc (Primal):</strong> $\\min f(x) = -x_1 + 2x_2$ với điều kiện:
                    <ul>
                        <li>$g_1(x) = x_1 + 4x_2 - (-1) \\le 0 \\implies x_1 + 4x_2 + 1 \\le 0$</li>
                        <li>$g_2(x) = 2x_1 + 5x_2 - 2 \\le 0$</li>
                        <li>$g_3(x) = 3x_1 + 6x_2 - 4 \\le 0$</li>
                    </ul>
                </li>
                <li><strong>Hàm Lagrangian:</strong> (với $\\lambda = [\\lambda_1, \\lambda_2, \\lambda_3]^T \\ge 0$)<br>
                    $\\mathcal{L}(x, \\lambda) = (-x_1 + 2x_2) + \\lambda_1(x_1 + 4x_2 + 1) + \\lambda_2(2x_1 + 5x_2 - 2) + \\lambda_3(3x_1 + 6x_2 - 4)$.
                </li>
                <li><strong>Sắp xếp lại theo $x$:</strong><br>
                    $\\mathcal{L} = (-1 + \\lambda_1 + 2\\lambda_2 + 3\\lambda_3)x_1 + (2 + 4\\lambda_1 + 5\\lambda_2 + 6\\lambda_3)x_2 + (\\lambda_1 - 2\\lambda_2 - 4\\lambda_3)$.
                </li>
                <li><strong>Tìm hàm đối ngẫu $D(\\lambda)$:</strong><br>
                    $D(\\lambda) = \\inf_{x_1, x_2} \\mathcal{L}$. Để $D(\\lambda)$ không phải là $-\\infty$, các hệ số của $x_1$ và $x_2$ phải bằng 0. Đây là các ràng buộc của bài toán đối ngẫu:<br>
                    $-1 + \\lambda_1 + 2\\lambda_2 + 3\\lambda_3 = 0$<br>
                    $2 + 4\\lambda_1 + 5\\lambda_2 + 6\\lambda_3 = 0$
                </li>
                <li><strong>Hàm mục tiêu đối ngẫu:</strong><br>
                    Khi các ràng buộc trên được thỏa mãn, hàm $D(\\lambda)$ chính là phần còn lại: $D(\\lambda) = \\lambda_1 - 2\\lambda_2 - 4\\lambda_3$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_024",
        status: "verified",
        question: "Determine whether the mapping is an inner product in $\\mathbb{R}^2$. \n(i) $\\langle x, y \\rangle := y^T \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix} x$ \n(ii) $\\langle x, y \\rangle := x^T \\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix} y$",
        options: ["a. None of the others", "b. Both (i) and (ii)", "c. (ii) only", "d. (i) only"],
        answer: 2, // c. (ii) only
        explanation: `
            <p><strong>Định nghĩa:</strong> Một ánh xạ $\\langle x, y \\rangle = x^T A y$ là <strong>tích vô hướng (inner product)</strong> khi và chỉ khi ma trận $A$ là đối xứng và xác định dương (positive definite).</p>
            <p><strong>Xét (i):</strong> $\\langle x, y \\rangle = y^T A x = (y^T A x)^T = x^T A^T y$. Vì $A$ đối xứng, $A=A^T$, nên $\\langle x, y \\rangle = x^T A y$. Ta chỉ cần kiểm tra $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$ có xác định dương không.</p>
            <ul>
                <li><strong>Kiểm tra (Sylvester's Criterion):</strong>
                    <ul>
                        <li>Định thức con chính $D_1 = 1 > 0$.</li>
                        <li>Định thức con chính $D_2 = \\det(A) = (1)(1) - (2)(2) = 1 - 4 = -3$.</li>
                    </ul>
                </li>
                <li>Vì $D_2 < 0$, $A$ không xác định dương. Do đó, (i) không phải là tích vô hướng.</li>
            </ul>
            <p><strong>Xét (ii):</strong> $\\langle x, y \\rangle = x^T B y$ với $B = \\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix}$.</p>
            <ul>
                <li>$B$ là ma trận đối xứng.</li>
                <li><strong>Kiểm tra (Sylvester's Criterion):</strong>
                    <ul>
                        <li>$D_1 = 1 > 0$.</li>
                        <li>$D_2 = \\det(B) = (1)(3) - (0)(0) = 3 > 0$.</li>
                    </ul>
                </li>
                <li>Vì tất cả định thức con chính đều dương, $B$ là xác định dương. Do đó, (ii) là một tích vô hướng.</li>
            </ul>
            <p><strong>Kết luận:</strong> Chỉ có (ii) là tích vô hướng.</p>`
    },
    {
        id: "mai391_pdf_025",
        status: "verified",
        question: "The joint probability density function of discrete random variable X, Y is given by the table: \n$X=\\{0,1,2\\}$, $Y=\\{-1,2\\}$ \n$P(0,-1)=0.1$, $P(1,-1)=0.2$, $P(2,-1)=0.1$ \n$P(0,2)=0.2$, $P(1,2)=0.2$, $P(2,2)=0.2$ \nCalculate $\\text{corr}[X,Y]$.",
        options: ["a. 0.12", "b. 0", "c. -0.12", "d. 0.25", "e. None of the others"],
        answer: 1, // b. 0
        explanation: `
            <p><strong>Công thức:</strong> $\\text{corr}(X,Y) = \\frac{\\text{cov}(X,Y)}{\\sigma_X \\sigma_Y} = \\frac{E[XY] - E[X]E[Y]}{\\sigma_X \\sigma_Y}$.<br>Nếu $\\text{cov}(X,Y) = 0$, thì $\\text{corr}(X,Y) = 0$.</p>
            <ol>
                <li><strong>Tính $E[X]$:</strong>
                    <ul>
                        <li>$P(X=0) = 0.1 + 0.2 = 0.3$</li>
                        <li>$P(X=1) = 0.2 + 0.2 = 0.4$</li>
                        <li>$P(X=2) = 0.1 + 0.2 = 0.3$</li>
                        <li>$E[X] = (0)(0.3) + (1)(0.4) + (2)(0.3) = 1.0$.</li>
                    </ul>
                </li>
                <li><strong>Tính $E[Y]$:</strong>
                    <ul>
                        <li>$P(Y=-1) = 0.1 + 0.2 + 0.1 = 0.4$</li>
                        <li>$P(Y=2) = 0.2 + 0.2 + 0.2 = 0.6$</li>
                        <li>$E[Y] = (-1)(0.4) + (2)(0.6) = -0.4 + 1.2 = 0.8$.</li>
                    </ul>
                </li>
                <li><strong>Tính $E[XY]$:</strong><br>
                    $E[XY] = \\sum_{x,y} (x \\cdot y \\cdot P(x,y))$<br>
                    $= (0)(-1)(0.1) + (1)(-1)(0.2) + (2)(-1)(0.1) + (0)(2)(0.2) + (1)(2)(0.2) + (2)(2)(0.2)$<br>
                    $= 0 - 0.2 - 0.2 + 0 + 0.4 + 0.8 = 0.8$.
                </li>
                <li><strong>Tính $\\text{cov}(X,Y)$:</strong><br>
                    $\\text{cov}(X,Y) = E[XY] - E[X]E[Y] = 0.8 - (1.0)(0.8) = 0$.
                </li>
                <li><strong>Tính $\\text{corr}(X,Y)$:</strong><br>
                    Vì $\\text{cov}(X,Y) = 0$, nên $\\text{corr}(X,Y) = 0$.
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_026",
        status: "verified",
        question: "Consider $\\mathbb{R}^2$ with the mapping $\\langle x, y \\rangle = 2x_1 y_1 + (x_1 y_2 + x_2 y_1) + 5x_2 y_2$. Compute the norm of the vector $u=(1,1)$ using this mapping if it is an inner product.",
        options: ["a. 4", "b. 9", "c. The mapping is not an inner product", "d. 3", "e. 2"],
        answer: 3, // d. 3
        explanation: `
            <ol>
                <li><strong>Kiểm tra tính hợp lệ (có phải Tích vô hướng không):</strong>
                    <ul>
                        <li>Ánh xạ này có thể viết dưới dạng $x^T A y = \\begin{bmatrix} x_1 & x_2 \\end{bmatrix} \\begin{pmatrix} 2 & 1 \\\\ 1 & 5 \\end{pmatrix} \\begin{bmatrix} y_1 \\\\ y_2 \\end{bmatrix}$.</li>
                        <li>Để là tích vô hướng, $A$ phải đối xứng và xác định dương.</li>
                        <li>$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 5 \\end{pmatrix}$ là đối xứng.</li>
                        <li>Kiểm tra xác định dương (Sylvester's Criterion): $D_1 = 2 > 0$ và $D_2 = \\det(A) = (2)(5) - (1)(1) = 9 > 0$.</li>
                        <li>Vì $A$ đối xứng và xác định dương, đây là một tích vô hướng hợp lệ.</li>
                    </ul>
                </li>
                <li><strong>Tính Norm:</strong>
                    <ul>
                        <li>Công thức: $||u|| = \\sqrt{\\langle u, u \\rangle}$.</li>
                        <li>$||u||^2 = \\langle u, u \\rangle = \\langle (1,1), (1,1) \\rangle = 2(1)(1) + (1 \\cdot 1 + 1 \\cdot 1) + 5(1)(1) = 2 + 2 + 5 = 9$.</li>
                        <li>$||u|| = \\sqrt{9} = 3$.</li>
                    </ul>
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_027",
        status: "verified",
        question: "Let H be the Hessian matrix of the function $f(x,y,z) = x^2 + y^2 - xyz$ when $x=1, y=0, z=1$. Find $\\text{tr}(H)$.",
        options: ["a. 0", "b. 3", "c. 4", "d. None of the others", "e. 2"],
        answer: 2, // c. 4
        explanation: `
            <p><strong>Công thức:</strong> $\\text{tr}(H)$ là tổng các phần tử trên đường chéo chính của ma trận Hessian: $\\text{tr}(H) = f_{xx} + f_{yy} + f_{zz}$.</p>
            <ol>
                <li><strong>Tính các đạo hàm riêng cấp 1:</strong><br>
                    $f_x = 2x - yz$, $f_y = 2y - xz$, $f_z = -xy$.
                </li>
                <li><strong>Tính các đạo hàm riêng cấp 2 trên đường chéo chính:</strong><br>
                    $f_{xx} = \\frac{\\partial}{\\partial x}(2x - yz) = 2$.<br>
                    $f_{yy} = \\frac{\\partial}{\\partial y}(2y - xz) = 2$.<br>
                    $f_{zz} = \\frac{\\partial}{\\partial z}(-xy) = 0$.
                </li>
                <li><strong>Tính Trace:</strong><br>
                    $\\text{tr}(H) = f_{xx} + f_{yy} + f_{zz} = 2 + 2 + 0 = 4$.<br>
                    <em>Lưu ý: Các đạo hàm riêng cấp 2 này là hằng số và không phụ thuộc vào điểm $(1, 0, 1)$.</em>
                </li>
            </ol>`
    },
    {
        id: "mai391_pdf_028",
        status: "verified",
        question: "Let $A = \\begin{bmatrix} -5 & -29 & 16 \\\\ 2 & 9 & -2 \\\\ 1 & 5 & -2 \\end{bmatrix}$. Find all eigenvalues of A.",
        options: ["a. -1, -1, -2", "b. -1, -1, 4", "c. -2, -2, 2", "d. -1, 1, 2"],
        answer: 3, // d. -1, 1, 2
        explanation: `
            <p>Cách nhanh nhất là sử dụng các tính chất của giá trị riêng (eigenvalue) $\\lambda$ thay vì giải $\\det(A - \\lambda I) = 0$.</p>
            <ol>
                <li><strong>Sử dụng Trace (Vết ma trận):</strong><br>
                    $\\sum \\lambda_i = \\text{tr}(A) = -5 + 9 + (-2) = 2$.<br>
                    Kiểm tra tổng các đáp án: (a) -4, (b) 2, (c) -2, (d) 2. Loại (a) và (c).
                </li>
                <li><strong>Sử dụng Determinant (Định thức):</strong><br>
                    $\\prod \\lambda_i = \\det(A)$.<br>
                    $\\det(A) = -5(9(-2) - 5(-2)) - (-29)(2(-2) - 1(-2)) + 16(2(5) - 1(9))$<br>
                    $= -5(-8) + 29(-2) + 16(1) = 40 - 58 + 16 = -2$.
                </li>
                <li><strong>Kiểm tra các đáp án còn lại:</strong><br>
                    (b) Tích: $(-1)(-1)(4) = 4 \\neq -2$ (Loại).<br>
                    (d) Tích: $(-1)(1)(2) = -2$ (Khớp).
                </li>
            </ol>
            <p><strong>Kết luận:</strong> Các giá trị riêng là -1, 1, 2.</p>`
    },
    {
        id: "mai391_pdf_029",
        status: "verified",
        question: "Find $\\arg \\min_{(x,y) \\in \\mathbb{R}^2} \\left( \\frac{1}{2} \\begin{bmatrix} x \\\\ y \\end{bmatrix}^T \\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} - \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}^T \\begin{bmatrix} x \\\\ y \\end{bmatrix} \\right)$",
        options: ["a. (1,4)", "b. None of the others", "c. (1,1)", "d. (2,2)", "e. (1/2, 2)"],
        answer: 2, // c. (1,1)
        explanation: `
            <p>Hàm mục tiêu là một hàm bậc hai lồi (quadratic convex function). Điểm tối ưu (argmin) là điểm có gradient bằng 0.</p>
            <ol>
                <li><strong>Viết lại hàm $f(x,y)$:</strong><br>
                    $f(x,y) = \\frac{1}{2} (2x^2 + y^2) - (2x + y) = x^2 + \\frac{1}{2}y^2 - 2x - y$.
                </li>
                <li><strong>Tìm Gradient $\\nabla f$:</strong><br>
                    $\\frac{\\partial f}{\\partial x} = 2x - 2$.<br>
                    $\\frac{\\partial f}{\\partial y} = y - 1$.
                </li>
                <li><strong>Đặt Gradient bằng 0:</strong><br>
                    $2x - 2 = 0 \\implies x = 1$.<br>
                    $y - 1 = 0 \\implies y = 1$.
                </li>
            </ol>
            <p><strong>Kết luận:</strong> Điểm tối ưu (argmin) là $(x,y) = (1,1)$.</p>`
    },
    {
        id: "mai391_pdf_030",
        status: "verified",
        question: "Let $A = \\begin{bmatrix} -5 & -29 & 16 \\\\ 2 & 9 & -2 \\\\ 1 & 5 & -2 \\end{bmatrix}$, $B = \\begin{bmatrix} -6 \\\\ 2 \\\\ 1 \\end{bmatrix}$, $C = \\begin{bmatrix} 1 \\\\ 1 \\\\ -1 \\end{bmatrix}$. Determine whether vector B or C or both is/are eigenvector(s) of A.",
        options: ["a. C only", "b. Neither B nor C", "c. B only", "d. Both B and C"],
        answer: 2, // c. B only
        explanation: `
            <p><strong>Định nghĩa:</strong> Vector $v$ là eigenvector của $A$ nếu $Av = \\lambda v$, nghĩa là $Av$ là một bội số của $v$.</p>
            <p><strong>1. Kiểm tra Vector B:</strong></p>
            $AB = \\begin{bmatrix} -5 & -29 & 16 \\\\ 2 & 9 & -2 \\\\ 1 & 5 & -2 \\end{bmatrix} \\begin{bmatrix} -6 \\\\ 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 30 - 58 + 16 \\\\ -12 + 18 - 2 \\\\ -6 + 10 - 2 \\end{bmatrix} = \\begin{bmatrix} -12 \\\\ 4 \\\\ 2 \\end{bmatrix}$.<br>
            <p>So sánh $AB$ với $B$: Ta thấy $\\begin{bmatrix} -12 \\\\ 4 \\\\ 2 \\end{bmatrix} = 2 \\cdot \\begin{bmatrix} -6 \\\\ 2 \\\\ 1 \\end{bmatrix} = 2B$.<br>
            Vì $AB = 2B$, B <strong>là</strong> một eigenvector (với $\\lambda = 2$).</p>
            <p><strong>2. Kiểm tra Vector C:</strong></p>
            $AC = \\begin{bmatrix} -5 & -29 & 16 \\\\ 2 & 9 & -2 \\\\ 1 & 5 & -2 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} -5 - 29 - 16 \\\\ 2 + 9 + 2 \\\\ 1 + 5 + 2 \\end{bmatrix} = \\begin{bmatrix} -50 \\\\ 13 \\\\ 8 \\end{bmatrix}$.<br>
            <p>So sánh $AC$ với $C$: Không có $\\lambda$ nào thỏa mãn $\\begin{bmatrix} -50 \\\\ 13 \\\\ 8 \\end{bmatrix} = \\lambda \\begin{bmatrix} 1 \\\\ 1 \\\\ -1 \\end{bmatrix}$.<br>
            C <strong>không phải</strong> là một eigenvector.</p>
            <p><strong>Kết luận:</strong> Chỉ có B là eigenvector.</p>`
    }
];