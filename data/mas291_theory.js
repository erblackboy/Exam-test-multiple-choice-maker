var mas291_theory_questions = [
    {
        id: "mas291_theory_001", // Giữ nguyên
        question: "The federal government requires manufacturers to monitor the amount of radiation emitted through the closed door of a microwave oven. One manufacturer measured the radiation emitted by 42 microwave ovens and recorded the values. What is the population?",
        options: [
            "A. The set of microwave ovens produced by the manufacturer.",
            "B. The subset of 42 microwave ovens whose emission were measured.",
            "C. The set of microwave ovens produced by all manufacturers."
        ],
        answer: 0,
        explanation: "Trong thống kê, population (tổng thể) là tập hợp toàn bộ các đối tượng mà ta quan tâm nghiên cứu. Ở trường hợp này, nhà sản xuất muốn kiểm tra chất lượng sản phẩm của chính họ, nên tổng thể là toàn bộ lò vi sóng do họ sản xuất. 42 chiếc lò được đo chỉ là sample (mẫu)."
    },
    {
        id: "mas291_theory_002", // Giữ nguyên
        question: "A method of gathering data while the subjects of interest are in their natural environment, often unaware they are being watched, is known as ________",
        options: [
            "A. observation.",
            "B. experiments.",
            "C. retrospective",
            "D. None of the other choices is correct"
        ],
        answer: 0,
        explanation: "Phương pháp thu thập dữ liệu bằng cách xem xét đối tượng trong môi trường tự nhiên mà không can thiệp (và thường không để đối tượng biết để tránh thay đổi hành vi) được gọi là phương pháp quan sát (observation)."
    },
    {
        id: "mas291_theory_003", // Giữ nguyên
        question: "In probability, what is a sample space defined as?",
        options: [
            "A. a repeatable process, or activity, with a number of possible outcomes",
            "B. a collection of one or more possible outcomes from an activity, which can be described as having certain characteristics",
            "C. the set of all possible outcomes of an activity or experiment"
        ],
        answer: 2,
        explanation: "Không gian mẫu (sample space) trong xác suất được định nghĩa chính xác là tập hợp chứa tất cả các kết quả có thể xảy ra (all possible outcomes) của một phép thử hoặc thí nghiệm."
    },
    {
        id: "mas291_theory_004",
        question: "Which is NOT an example of continuous random variable?",
        options: [
            "A. The weight of high school students.",
            "B. The number of students are absent from school each day.",
            "C. The height of trees at a nursery.",
            "D. The volume of water in a swimming pool each day."
        ],
        answer: 1,
        explanation: "Biến ngẫu nhiên liên tục (continuous) là biến có thể nhận vô số giá trị trong một khoảng (thường liên quan đến đo lường như cân nặng, chiều cao, thể tích). Biến ngẫu nhiên rời rạc (discrete) là biến có thể đếm được (countable). Số lượng học sinh (Number of students) là đếm được (1, 2, 3...) không thể là số thập phân, nên nó là biến rời rạc."
    },
    {
        id: "mas291_theory_005",
        question: "A batch of 500 machined parts contains 15 that do not conform to customer requirements. The random variable is the number of parts in a sample of ten parts that do not conform to customer requirements. What is the range of the random variable?",
        options: [
            "A. Integers from 0 to 10",
            "B. Integers from 0 to 15",
            "C. Integers from 10 to 500",
            "D. Real numbers from 0 to 10",
            "E. Real numbers from 0 to 15"
        ],
        answer: 0,
        explanation: "Bạn lấy mẫu thử gồm 10 sản phẩm. Trường hợp tốt nhất: Không có sản phẩm lỗi nào (x=0). Trường hợp xấu nhất: Cả 10 sản phẩm lấy ra đều bị lỗi (x=10). Vì số lượng sản phẩm phải là số nguyên, nên miền giá trị (range) là các số nguyên từ 0 đến 10."
    },
    {
        id: "mas291_theory_006",
        question: "Which of the following statements is FALSE about the probability density function f(x) of a continuous random variable?",
        options: [
            "A. (i) f(x) is nonnegative function for all value of x",
            "B. (ii) f(x) = P(X = x)",
            "C. (iii) P(a < X < b) = \\int_a^b f(x) dx",
            "D. (iv) \\int_{-\\infty}^{\\infty} f(x) dx = 1",
            "E. None of the other choice is correct"
        ],
        answer: 1,
        explanation: "(i), (iii), và (iv) là các tính chất đúng của hàm mật độ xác suất (PDF). (ii) là SAI. Đối với biến ngẫu nhiên liên tục, xác suất tại một điểm cụ thể luôn bằng 0, tức là P(X=x) = 0. Giá trị f(x) chỉ biểu thị mật độ, không phải là xác suất."
    },
    {
        id: "mas291_theory_007",
        question: "The probability density function of the time customers arrive at a terminal (in minutes after 9:00 A.M.) is given by $f(x) = \\frac{1}{9}e^{-x/9}, x > 0$. Determine the cumulative distribution function F(x).",
        options: [
            "A. (i) $1 - e^{-x/9}, x > 0$",
            "B. (ii) $1 - (1/9)e^{-x/9}, x > 0$",
            "C. (iii) $e^{-x/9}, x > 0$",
            "D. (iv) $(1/9)e^{-x/9}, x > 0$"
        ],
        answer: 0,
        explanation: "Hàm f(x) cho thấy đây là phân phối mũ với $\\lambda = 1/9$. Công thức hàm phân phối tích lũy (CDF) của phân phối mũ là $F(x) = 1 - e^{-\\lambda x}$. Thay $\\lambda = 1/9$ vào, ta được $F(x) = 1 - e^{-x/9}$."
    },
    {
        id: "mas291_theory_008",
        question: "It is desired to estimate the average total compensation of CEOs in the Service industry. Data were randomly collected from 18 CEOs and the 97% confidence interval was calculated to be (2,181,260; 5,836,180). Based on the interval above, do you believe the average total compensation of CEOs in the Service industry is more than 3,000,000?",
        options: [
            "A. I am 97% confident that the average compensation is 3,000,000.",
            "B. Yes, and I am 97% confident of it.",
            "C. Yes, and I am 78% confident of it.",
            "D. I cannot conclude that the average exceeds 3,000,000 at the 97% confidence level."
        ],
        answer: 3,
        explanation: "Khoảng tin cậy 97% là từ khoảng 2.18 triệu đến 5.83 triệu. Giá trị 3,000,000 nằm bên trong khoảng này. Điều này có nghĩa là trung bình thực sự có thể bằng 3 triệu, có thể lớn hơn, nhưng cũng hoàn toàn có thể nhỏ hơn 3 triệu. Do cận dưới của khoảng tin cậy nhỏ hơn 3,000,000, nên ta không thể kết luận khẳng định rằng mức trung bình lớn hơn 3 triệu."
    },
    {
        id: "mas291_theory_009",
        question: "An entomologist writes an article... claims that fewer than 12 in ten thousand male fireflies are unable to produce light... Express the null hypothesis $H_0$ and the alternative hypothesis $H_1$.",
        options: [
            "A. (i) $H_0: p < 0.0012, H_1: p \\ge 0.0012$",
            "B. (ii) $H_0: p = 0.0012, H_1: p > 0.0012$",
            "C. (iii) $H_0: p > 0.0012, H_1: p \\le 0.0012$",
            "D. (iv) $H_0: p = 0.0012, H_1: p < 0.0012$"
        ],
        answer: 3,
        explanation: "Tuyên bố (Claim) là 'fewer than' (ít hơn), tức là dấu <. Tuyên bố này thường được đặt làm giả thuyết đối ($H_1$). Vậy $H_1: p < 0.0012$. Giả thuyết không ($H_0$) luôn chứa dấu bằng. Cặp giả thuyết đúng là (iv)."
    },
    {
        id: "mas291_theory_010",
        question: "A solar panel company claims that the installation of their product will increase energy output by at least 20 kilowatt-hours per day... A technician... found average increase was only 19... What are the appropriate null and alternative hypotheses?",
        options: [
            "A. (i) $H_0: \\mu = 20$ and $H_1: \\mu \\neq 20$",
            "B. (ii) $H_0: \\mu = 20$ and $H_1: \\mu < 20$",
            "C. (iii) $H_0: \\mu \\neq 20$ and $H_1: \\mu > 20$",
            "D. (iv) $H_0: \\mu = 22$ and $H_1: \\mu \\neq 20$"
        ],
        answer: 1,
        explanation: "Tuyên bố của công ty là 'tăng ít nhất 20' ($\\mu \\ge 20$). Người kỹ thuật viên muốn kiểm tra xem tuyên bố này có đúng không, cụ thể là liệu mức tăng có thực sự thấp hơn 20 hay không. Do đó, giả thuyết đối (điều cần chứng minh) là $H_1: \\mu < 20$. Giả thuyết không (phần còn lại, chứa dấu bằng) là $H_0: \\mu \\ge 20$. Trong thực hành kiểm định, ta thường viết $H_0: \\mu = 20$ để xác định giá trị trung tâm cho phân phối kiểm định. Vì vậy, cặp giả thuyết phù hợp nhất là $H_0: \\mu = 20$ và $H_1: \\mu < 20$."
    },
    {
        id: "mas291_theory_011",
        question: "A retail store executive wants to know whether the store’s average Internet sales exceed its average mail-order sales. Let $\\mu_1$ be the true mean Internet sale amount and $\\mu_2$ be the true mean mail-order sale amount. State the null and alternative hypotheses for the hypothesis test.",
        options: [
            "A. (i) $H_0: \\mu_1 = \\mu_2; H_1: \\mu_1 \\ge \\mu_2$",
            "B. (ii) $H_0: \\mu_1 < \\mu_2; H_1: \\mu_1 \\ge \\mu_2$",
            "C. (iii) $H_0: \\mu_1 = \\mu_2; H_1: \\mu_1 > \\mu_2$",
            "D. (iv) $H_0: \\mu_1 > \\mu_2; H_1: \\mu_1 \\le \\mu_2$"
        ],
        answer: 2,
        explanation: "<ul><li><strong>Từ khóa quan trọng:</strong> \"Exceed\" (vượt quá/lớn hơn). Điều này cho biết người quản lý muốn kiểm định xem doanh số Internet ($\\mu_1$) có <strong>lớn hơn</strong> doanh số đặt hàng qua thư ($\\mu_2$) hay không.</li><li>Điều cần chứng minh/nghi ngờ luôn được đặt vào <strong>Giả thuyết đối ($H_1$)</strong>. Do đó: $H_1: \\mu_1 > \\mu_2$.</li><li><strong>Giả thuyết không ($H_0$)</strong> luôn chứa dấu bằng (=) hoặc ngược lại với $H_1$. Dạng chuẩn thường dùng là: $H_0: \\mu_1 = \\mu_2$.</li><li>Vậy cặp giả thuyết đúng là: <strong>$H_0: \\mu_1 = \\mu_2$ và $H_1: \\mu_1 > \\mu_2$</strong>. (Tương ứng với lựa chọn iii).</li></ul>"
    },
    {
        id: "mas291_theory_012",
        question: "The correlation between two variables is given by r = 1.0. What does this mean?",
        options: [
            "A. The best straight line through the data is horizontal.",
            "B. There is a perfect positive relationship between the two variables.",
            "C. There is a perfect negative relationship between the two variables.",
            "D. None of the other choices is correct."
        ],
        answer: 1,
        explanation: "Hệ số tương quan $r = 1.0$ biểu thị mối quan hệ tuyến tính dương hoàn hảo (perfect positive linear relationship). Tất cả các điểm dữ liệu nằm chính xác trên một đường thẳng có độ dốc dương."
    },
    {
        id: "mas291_theory_013",
        question: "A test is conducted for $H_0: \\mu = 9.0$ vs. $H_1: \\mu < 9.0$, and assume $\\sigma$ is known. The test statistic is $-1.44$. What are the conclusions at the significance levels of 5% and of 10%? Let $z_{0.05} = 1.64, z_{0.1} = 1.28$.",
        options: [
            "A. (i) Reject $H_0$ at both $\\alpha = 0.05$ and $\\alpha = 0.10$",
            "B. (ii) Reject $H_0$ at $\\alpha = 0.05$ but do not reject at $\\alpha = 0.10$",
            "C. (iii) Reject $H_0$ at $\\alpha = 0.10$ but do not reject at $\\alpha = 0.05$"
        ],
        answer: 2,
        explanation: "Kiểm định một phía (trái). Tại $\\alpha=0.05$, giá trị tới hạn là -1.64. Vì $-1.44 > -1.64$, không bác bỏ $H_0$. Tại $\\alpha=0.10$, giá trị tới hạn là -1.28. Vì $-1.44 < -1.28$, bác bỏ $H_0$. Kết luận: Bác bỏ tại 10% nhưng không bác bỏ tại 5%."
    },
    {
        id: "mas291_theory_014",
        question: "Jared was working on a project to look at global warming and accessed an Internet site where he captured average global surface temperatures from 1866. Which of the four methods of data collection was he using?",
        options: [
            "A. Surveying",
            "B. Experimentation",
            "C. Observation",
            "D. Retrospective study"
        ],
        answer: 3,
        explanation: "Retrospective study (Nghiên cứu hồi cứu) là phương pháp nghiên cứu sử dụng dữ liệu đã được thu thập trong quá khứ hoặc nhìn lại các sự kiện đã xảy ra. Jared đang truy cập dữ liệu lịch sử có sẵn."
    },
    {
        id: "mas291_theory_015",
        question: "Which of the following is not a random variable?",
        options: [
            "A. The heights of randomly-selected students in FPT University.",
            "B. The suit of a card randomly-selected from a 52-card deck.",
            "C. The number of children in randomly-selected kindergartens in Hanoi.",
            "D. The number of stocks in the Dow Jones Industrial Average that have share price increases on a given day."
        ],
        answer: 1,
        explanation: "Biến ngẫu nhiên thường là một hàm gán một giá trị số thực cho mỗi kết quả. 'Chất' của lá bài (Cơ, Rô, Chuồn, Bích) là dữ liệu định tính (categorical), không phải là số."
    },
    {
        id: "mas291_theory_016",
        question: "The number of parents who attended parent teacher conferences at a local elementary school is an example of what type of variable?",
        options: [
            "A. discrete-quantitative variable",
            "B. qualitative variable",
            "C. continuous-quantitative variable",
            "D. None of the other choices is true"
        ],
        answer: 0,
        explanation: "Số lượng phụ huynh là một biến định lượng (quantitative) và là biến rời rạc (discrete) vì ta chỉ có thể đếm được các giá trị nguyên (1, 2, 3...)."
    },
    {
        id: "mas291_theory_017",
        question: "Which of the following statements is true regarding the effect of changing the true value of the population mean on the probability of Type II error?",
        options: [
            "A. If the true mean moves further from the center of the acceptance region, the probability of Type II error will decrease.",
            "B. If the true mean moves further from the center of the acceptance region, the probability of Type II error will increase.",
            "C. The probability of Type II error will be smallest when the true mean is exactly at the center of the acceptance region.",
            "D. The probability of Type II error is unaffected by changes in the true value of the population mean."
        ],
        answer: 0,
        explanation: "Sai lầm loại II (β) là xác suất không bác bỏ H0 khi H0 sai. Nếu giá trị thực càng xa giá trị giả định, sự khác biệt càng dễ phát hiện, do đó xác suất mắc sai lầm loại II sẽ giảm đi."
    },
    {
        id: "mas291_theory_018",
        question: "The formula for the equation describing a straight line is $\\hat{y} = \\hat{\\beta}_1x + \\hat{\\beta}_0$. The value for $\\hat{\\beta}_0$ in this equation represents the ________.",
        options: [
            "A. y-intercept of the straight line.",
            "B. slope of the straight line.",
            "C. predicted value of y given a value of x.",
            "D. None of the other choices is true"
        ],
        answer: 0,
        explanation: "Trong phương trình hồi quy tuyến tính, $\\hat{\\beta}_0$ là hệ số chặn (y-intercept), tức là giá trị của y khi x = 0."
    },
    {
        id: "mas291_theory_019",
        question: "Bottles of water have a label stating that the volume is 12 oz... A Type I error in this situation would mean ________",
        options: [
            "A. The consumer group concludes the bottles have less than 12 oz when the mean actually is 12 oz.",
            "B. The consumer group does not conclude the bottles have less than 12 oz when the mean actually is less than 12 oz.",
            "C. The consumer group has evidence that the label is incorrect.",
            "D. None of the other choices is true"
        ],
        answer: 0,
        explanation: "Sai lầm loại I xảy ra khi ta bác bỏ giả thuyết H0 (chai đủ 12 oz) trong khi H0 đúng. Tức là, kết luận chai bị đong thiếu trong khi thực tế nó đủ."
    },
    {
        id: "mas291_theory_020",
        question: "Which of the following is true about the sampling distribution of the sample mean?",
        options: [
            "A. (i) The mean of the sampling distribution is always $\\mu$",
            "B. (ii) The standard deviation... is always $\\sigma$",
            "C. (iii) The shape... is always approximately normal.",
            "D. All of them are true."
        ],
        answer: 0,
        explanation: "(i) Đúng. Trung bình của phân phối mẫu luôn bằng trung bình tổng thể. (ii) Sai. Độ lệch chuẩn của phân phối mẫu là $\\sigma/\\sqrt{n}$. (iii) Sai. Phân phối mẫu chỉ xấp xỉ chuẩn khi n đủ lớn hoặc tổng thể gốc đã là phân phối chuẩn."
    },
    {
        id: "mas291_theory_021",
        question: "Which of the following statement is INCORRECT ? 1. $Trace(A + B) = Trace(A) + Trace(B)$ for all square matrices A, B. 2. $Trace(CAC^{-1}) = Trace(A)$ for all invertible square matrices A, C. 3. $Trace(A^{-1}) = 1 / Trace(A)$ for all invertible square matrices A.",
        options: [
            "A. 3", 
            "B. 1", 
            "C. 2", 
            "D. 1 and 2"],
        answer: 0,
        explanation: "1. Đúng (tính chất tuyến tính). 2. Đúng (tính chất bất biến cyclic). 3. Sai. Phản ví dụ: $A = \\text{diag}(2, 2)$, $Trace(A)=4$, $A^{-1}=\\text{diag}(1/2, 1/2)$, $Trace(A^{-1})=1$. Rõ ràng $1 \\neq 1/4$."
    },
    {
        id: "mas291_theory_022",
        question: "Which of the following statements is true? (i) Every diagonalizable matrix is invertible. (ii) Every invertible matrix is diagonalizable.",
        options: [
            "A. (i) only",
            "B. (ii) only",
            "C. Both (i) and (ii)",
            "D. Neither (i) nor (ii)"
        ],
        answer: 3,
        explanation: `
            <p>Cả hai mệnh đề đều <strong>SAI</strong>.</p>
            <ol>
                <li><strong>Phân tích mệnh đề (i):</strong> "Mọi ma trận chéo hóa được đều khả nghịch".
                    <ul>
                        <li><strong>Lý do sai:</strong> Chéo hóa được không liên quan đến việc định thức khác 0. Một ma trận có thể chéo hóa được nhưng có định thức bằng 0.</li>
                        <li><strong>Phản ví dụ:</strong> Ma trận $A = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$ là ma trận đường chéo (hiển nhiên chéo hóa được), nhưng không khả nghịch vì $\\det(A) = 0$.</li>
                    </ul>
                </li>
                <li><strong>Phân tích mệnh đề (ii):</strong> "Mọi ma trận khả nghịch đều chéo hóa được".
                    <ul>
                        <li><strong>Lý do sai:</strong> Khả nghịch chỉ yêu cầu định thức khác 0. Chéo hóa được yêu cầu ma trận phải có đủ số lượng vector riêng độc lập tuyến tính.</li>
                        <li><strong>Phản ví dụ:</strong> Ma trận $B = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. Ma trận này khả nghịch ($\\det(B) = 1$) nhưng không chéo hóa được vì nó chỉ có một vector riêng độc lập tuyến tính.</li>
                    </ul>
                </li>
            </ol>`
    }
];