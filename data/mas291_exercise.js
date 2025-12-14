var mas291_exercise_questions = [
    {
        id: "mas291_exercise_001",
        question: "A technical course has two exams: Math and Physics. Out of a total of 100 students: 70 students passed the Math exam. 60 students passed the Physics exam. 30 students passed both the Math and Physics exams. How many students passed at least one of the two subjects?",
        options: [
            "A. 30",
            "B. 70",
            "C. 90",
            "D. 100",
            "E. 130"
        ],
        answer: 3,
        explanation: "Sử dụng nguyên lý bao hàm - loại trừ (Inclusion-Exclusion Principle). Số học sinh đậu ít nhất một môn = (Đậu Toán) + (Đậu Lý) - (Đậu cả hai). Kết quả: $70 + 60 - 30 = 100$."
    },
    {
        id: "mas291_exercise_002",
        question: "An experiment involves tossing a pair of dice, 1 green and 1 red and recording the numbers that come up. Find the probability of event A that a number greater than 4 comes up on the green die.",
        options: [
            "A. 1/2",
            "B. 1/12",
            "C. 2/3",
            "D. 1/3",
            "E. None of the other choices is correct"
        ],
        answer: 3,
        explanation: "Chúng ta chỉ quan tâm đến xúc xắc màu xanh (green die). Một xúc xắc có 6 mặt {1, 2, 3, 4, 5, 6}. Sự kiện 'số lớn hơn 4' bao gồm các kết quả: {5, 6} (có 2 kết quả). Xác suất = 2/6 = 1/3."
    },
    {
        id: "mas291_exercise_003",
        question: "Suppose that 55% of all adults regularly consume coffee, 45% regularly consume carbonated soda and 70% regularly consume at least one of these two products. What is the probability that a randomly selected adult regularly consumes both coffee and soda?",
        options: [
            "A. 0.3",
            "B. 0.7",
            "C. 1",
            "D. 0.1",
            "E. None of the other choices is correct"
        ],
        answer: 0,
        explanation: "Áp dụng công thức cộng xác suất: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Ta có: $0.70 = 0.55 + 0.45 - P(\\text{Both})$. Suy ra $P(\\text{Both}) = 0.55 + 0.45 - 0.70 = 0.3$."
    },
    {
        id: "mas291_exercise_004",
        question: "According to a survey of American households, the probability that the residents own 2 cars if annual household income is over $25,000 is 80%. Of the households surveyed, 60% had incomes over $25,000 and 70% had 2 cars. The probability that annual household income is over $25,000 if the residents of a household own 2 cars is ________",
        options: [
            "A. 0.50",
            "B. 0.48",
            "C. 0.42",
            "D. 0.69",
            "E. None of the other choices is correct"
        ],
        answer: 3,
        explanation: "Gọi I là sự kiện thu nhập > 25k, C là sự kiện có 2 xe. Đề bài cho: $P(C | I) = 0.80$, $P(I) = 0.60$, $P(C) = 0.70$. Cần tìm $P(I | C)$. Áp dụng định lý Bayes: $P(I | C) = \\frac{P(C | I) \\times P(I)}{P(C)} = \\frac{0.80 \\times 0.60}{0.70} \\approx 0.6857$. Làm tròn được 0.69."
    },
    {
        id: "mas291_exercise_005",
        question: "The probability is 2% that an electrical connector that is kept dry fails during the warranty period of a portable computer. If the connector is ever wet, the probability of a failure during the warranty period is 10%. If 80% of the connectors are kept dry and 20% are wet, what proportion of connectors fail during the warranty period?",
        options: [
            "A. 0.6",
            "B. 0.08",
            "C. 0.036",
            "D. 0.014",
            "E. None of the other choices is correct"
        ],
        answer: 2,
        explanation: "Áp dụng công thức xác suất đầy đủ: $P(\\text{Fail}) = P(\\text{Fail}|\\text{Dry})P(\\text{Dry}) + P(\\text{Fail}|\\text{Wet})P(\\text{Wet}) = (0.02 \\times 0.80) + (0.10 \\times 0.20) = 0.016 + 0.020 = 0.036$."
    },
    {
        id: "mas291_exercise_006",
        question: "Let A and B be events with $P(A \\cap B) = 0.15$, $P(A \\cup B) = 0.65$. Assume that A and B are independent and $P(A) > P(B)$. Find $P(A)$ and $P(B)$.",
        options: [
            "A. $P(A) = 0.5$ and $P(B) = 0.3$",
            "B. $P(A) = 0.6$ and $P(B) = 0.2$",
            "C. $P(A) = 0.3$ and $P(B) = 0.5$",
            "D. $P(A) = 0.6$ and $P(B) = 0.25$"
        ],
        answer: 0,
        explanation: "Vì A, B độc lập, $P(A \\cap B) = P(A)P(B) = 0.15$. Từ $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, ta có $P(A) + P(B) = 0.8$. Ta cần tìm hai số có tổng 0.8 và tích 0.15, đó là 0.5 và 0.3. Vì $P(A) > P(B)$, nên $P(A)=0.5, P(B)=0.3$."
    },
    {
        id: "mas291_exercise_007",
        question: "A company has 2 machines that produce widgets. An older machine produces 23% defective widgets, while the new machine produces only 8% defective widgets. In addition, the new machine produces 3 times as many widgets as the older machine does. Given a randomly chosen widget was tested and found to be defective, what is the probability it was produced by the new machine?",
        options: [
            "A. 0.511",
            "B. 0.481",
            "C. 0.005",
            "D. 0.159",
            "E. None of the other choices is correct"
        ],
        answer: 0,
        explanation: "Gọi $M_1$ là máy cũ, $M_2$ là máy mới. $P(M_1)=0.25, P(M_2)=0.75$. $P(D|M_1)=0.23, P(D|M_2)=0.08$. Dùng Bayes: $P(M_2|D) = \\frac{P(D|M_2)P(M_2)}{P(D|M_1)P(M_1) + P(D|M_2)P(M_2)} = \\frac{0.08 \\times 0.75}{(0.23 \\times 0.25) + (0.08 \\times 0.75)} \\approx 0.5106$."
    },
    {
        id: "mas291_exercise_008",
        question: "Let the discrete random variable X with probability mass function is $f(x) = (2x+1)/25, \\quad x = 0, 1, 2, 3, 4$. Which of the following statements are TRUE? (i) $P(X=4) = 9/25$ (ii) $P(2 \\le X < 4) = 12/25$ (iii) $P(X \\le 1) = 4/25$",
        options: [
            "A. (i)",
            "B. (ii)",
            "C. All of them",
            "D. (iii)"
        ],
        answer: 2,
        explanation: "Tính xác suất cho từng giá trị: $P(0)=1/25, P(1)=3/25, P(2)=5/25, P(3)=7/25, P(4)=9/25$. (i) $P(X=4) = 9/25$ (Đúng). (ii) $P(2 \\le X < 4) = P(2)+P(3) = 5/25+7/25=12/25$ (Đúng). (iii) $P(X \\le 1) = P(0)+P(1) = 1/25+3/25=4/25$ (Đúng). Vậy tất cả đều đúng."
    },
    {
        id: "mas291_exercise_009",
        question: "Let $f(x)=(4/5)(1/5)^x$ be the probability mass function of some discrete random variable $X=\\{0, 1, 2, ...\\}$. Denote by F(x) the cumulative distribution function of X. Find F(1).",
        options: [
            "A. 0.96",
            "B. 0.86",
            "C. 0.76",
            "D. 0.66",
            "E. None of the other choices is correct"
        ],
        answer: 0,
        explanation: "$F(1) = P(X \\le 1) = P(X=0) + P(X=1)$. $f(0) = (4/5)(1/5)^0 = 0.8$. $f(1) = (4/5)(1/5)^1 = 0.16$. $F(1) = 0.8 + 0.16 = 0.96$."
    },
    {
        id: "mas291_exercise_010",
        question: "Find the standard deviation for the given probability distribution. (Table: X=[0,1,2,3,4], P(X)=[0.37, 0.05, 0.13, 0.25, 0.20])",
        options: [
            "A. 2.45",
            "B. 1.71",
            "C. 1.60",
            "D. 2.56",
            "E. None of the other choices is correct"
        ],
        answer: 2,
        explanation: "1. $E[X] = 0(0.37) + ... + 4(0.20) = 1.86$. 2. $E[X^2] = 0^2(0.37) + ... + 4^2(0.20) = 6.02$. 3. $Var(X) = E[X^2] - (E[X])^2 = 6.02 - 1.86^2 = 2.5604$. 4. $\\sigma = \\sqrt{Var(X)} \\approx 1.60$."
    },
    {
        id: "mas291_exercise_011",
        question: "Suppose that X has a discrete uniform distribution on the integers 1 to 15. Find 3V(X).",
        options: [
            "A. 56",
            "B. 18.67",
            "C. 16.25",
            "D. None of the other choices is correct"
        ],
        answer: 0,
        explanation: "Phương sai của phân phối đều rời rạc từ 1 đến n là $V(X) = \\frac{n^2 - 1}{12}$. Với n=15, $V(X) = \\frac{15^2 - 1}{12} = \\frac{224}{12} = \\frac{56}{3}$. Yêu cầu tìm $3V(X) = 3 \\times \\frac{56}{3} = 56$."
    },
    {
        id: "mas291_exercise_012",
        question: "The random variable X represents the number of girls in a family of three children. Assuming that boys and girls are equally likely, find the mean and standard deviation for the random variable X.",
        options: [
            "A. mean: 2.25; standard deviation: 0.87",
            "B. mean: 2.25; standard deviation: 0.76",
            "C. mean: 1.50; standard deviation: 0.87",
            "D. mean: 1.50; standard deviation: 0.76",
            "E. None of the other choices is correct"
        ],
        answer: 2,
        explanation: "Đây là phân phối nhị thức $B(n, p)$ với $n=3$ và $p=0.5$. Mean $\\mu = np = 3 \\times 0.5 = 1.5$. Variance $\\sigma^2 = np(1-p) = 3 \\times 0.5 \\times 0.5 = 0.75$. Standard deviation $\\sigma = \\sqrt{0.75} \\approx 0.866$. Kết quả làm tròn là Mean: 1.50 và SD: 0.87."
    },
    {
        id: "mas291_exercise_013",
        question: "Suppose that you interview job applicants in succession until you find a person that satisfies the job description. Suppose that, at each interview, the probability of finding the right person is 0.3. What is the probability that you appoint the third person that you interview?",
        options: [
            "A. 0.147",
            "B. 0.221",
            "C. 0.347",
            "D. 0.739",
            "E. None of the other choices is correct"
        ],
        answer: 0,
        explanation: "Đây là phân phối hình học. Để chọn người thứ 3, nghĩa là 2 người đầu phải trượt (P=0.7) và người thứ 3 đậu (P=0.3). $P(X=3) = 0.7 \\times 0.7 \\times 0.3 = 0.147$."
    },
    {
        id: "mas291_exercise_014",
        question: "A group of 10 individuals are used for a biological case study. The group contains 3 people with blood type O, 7 with blood type A. What is the probability that a random sample of 5 will contain 1 person with blood type O, 4 people with blood type A?",
        options: [
            "A. 0.51",
            "B. 0.45",
            "C. 0.42",
            "D. 0.48"
        ],
        answer: 2,
        explanation: "Sử dụng phân phối siêu bội: $P = \\frac{C(3,1) \\times C(7,4)}{C(10,5)} = \\frac{3 \\times 35}{252} \\approx 0.4166$. Làm tròn là 0.42."
    },
    {
        id: "mas291_exercise_015",
        question: "A naturalist leads whale watch trips every morning in March. The number of whales seen has a Poisson distribution with a mean of 4.3. Find the probability that on a randomly selected trip, the number of whales seen is 3.",
        options: [
            "A. 0.3057",
            "B. 0.1798",
            "C. 0.3596",
            "D. 0.5394",
            "E. None of the other choices is correct"
        ],
        answer: 1,
        explanation: "Công thức Poisson: $P(X=k) = \\frac{e^{-\\lambda} \\cdot \\lambda^k}{k!}$. Với $\\lambda = 4.3$ và $k = 3$: $P(X=3) = \\frac{e^{-4.3} \\cdot (4.3)^3}{3!} \\approx 0.1798$."
    },
    {
        id: "mas291_exercise_016",
        question: "Let X represent the amount of time it takes a student to park in the library parking lot at the university. If we know that the distribution of parking times can be modeled using an exponential distribution with a mean of 4 minutes, find the probability that it will take a randomly selected student between 2 and 12 minutes to park in the library lot.",
        options: [
            "A. 0.556744",
            "B. 0.049787",
            "C. 0.606531",
            "D. 0.656318",
            "E. None of the other choices is correct"
        ],
        answer: 0,
        explanation: "Phân phối mũ với trung bình $\\mu=4 \\Rightarrow \\lambda=0.25$. Xác suất cần tìm là $P(2 < X < 12) = F(12) - F(2) = (1 - e^{-0.25 \\times 12}) - (1 - e^{-0.25 \\times 2}) = e^{-0.5} - e^{-3} \\approx 0.606531 - 0.049787 = 0.556744$."
    },
    {
        id: "mas291_exercise_017",
        question: "Let X be a continuous random variable with $E(X) = 10$ and $E(X^2) = 100$. Find V(X).",
        options: [
            "A. 0",
            "B. 90",
            "C. 110",
            "D. 50",
            "E. None of the others"
        ],
        answer: 0,
        explanation: "Công thức tính phương sai: $V(X) = E(X^2) - [E(X)]^2$. Thay số: $V(X) = 100 - (10)^2 = 100 - 100 = 0$."
    },
    {
        id: "mas291_exercise_018",
        question: "Suppose X is a continuous uniform random variable over [10, 70]. Find the probability that a randomly selected observation is between 13 and 65.",
        options: [
            "A. 0.56",
            "B. 0.13",
            "C. 0.87",
            "D. 0.28",
            "E. None of the other choices is correct"
        ],
        answer: 2,
        explanation: "Phân phối đều trên đoạn [10, 70], độ dài khoảng là 60. Khoảng cần tính xác suất là [13, 65], độ dài là 52. Xác suất $P = \\frac{52}{60} \\approx 0.8667$. Làm tròn là 0.87."
    },
    {
        id: "mas291_exercise_019",
        question: "A normal distribution has mean $\\mu = 60$ and standard deviation $\\sigma = 6$, find the area under the curve to the right of 64. Let $P(Z < 0.67) = 0.7486$.",
        options: [
            "A. 0.2843",
            "B. 0.7486",
            "C. 0.7157",
            "D. 0.2514",
            "E. None of the other choices is correct"
        ],
        answer: 3,
        explanation: "Chuyển đổi về Z-score: $Z = \\frac{64 - 60}{6} \\approx 0.67$. Tìm diện tích bên phải: $P(X > 64) = P(Z > 0.67) = 1 - P(Z < 0.67) = 1 - 0.7486 = 0.2514$."
    },
    {
        id: "mas291_exercise_020",
        question: "An airline knows from experience that the distribution of the number of suitcases that get lost each week on a certain route is approximately normal with $\\mu = 15.5$ and $\\sigma = 3.6$. What is the probability that during a given week the airline will lose less than 20 suitcases? Let $P(Z < -1.25) = 0.1056$.",
        options: [
            "A. 0.3944",
            "B. 0.8944",
            "C. 0.1056",
            "D. 0.4040",
            "E. None of the other choices is correct"
        ],
        answer: 1,
        explanation: "Tính Z-score: $Z = \\frac{20 - 15.5}{3.6} = 1.25$. Cần tìm $P(Z < 1.25)$. Do tính đối xứng của phân phối chuẩn: $P(Z < 1.25) = 1 - P(Z < -1.25) = 1 - 0.1056 = 0.8944$."
    },
    {
        id: "mas291_exercise_021",
        question: "Suppose that X is a binomial random variable with n = 200 and p = 0.4. Use normal distribution to approximate the probability that X is less than or equal to 90. Let $P(Z < 1.52) = 0.936$.",
        options: [
            "A. 0.936",
            "B. 0.064",
            "C. 0.952",
            "D. 0.048"
        ],
        answer: 0,
        explanation: "Xấp xỉ bằng phân phối chuẩn: $\\mu = np = 80$, $\\sigma = \\sqrt{np(1-p)} \\approx 6.928$. Cần tìm $P(X \\le 90)$. Áp dụng hiệu chỉnh liên tục, ta tính $P(X \\le 90.5)$. $Z = \\frac{90.5 - 80}{6.928} \\approx 1.515$. Giá trị này gần nhất với 1.52, vậy $P(Z < 1.52) = 0.936$."
    },
    {
        id: "mas291_exercise_022",
        question: "The following data reflect the number of customers who test drove new cars each day for a sample of 20 days at the Redfield Ford Dealership. (Data table provided). What is the sample range?",
        options: [
            "A. Approximately 3.08",
            "B. 1",
            "C. 14",
            "D. 5.95",
            "E. None of the other choices is correct"
        ],
        answer: 2,
        explanation: "Range (Khoảng biến thiên) = Giá trị lớn nhất (Max) - Giá trị nhỏ nhất (Min). Dựa vào bảng số liệu: Max = 14, Min = 0. Range = 14 - 0 = 14."
    },
    {
        id: "mas291_exercise_023",
        question: "Consider the following sample data: 25 11 6 4 2 17 9 6. For these data the median is ______",
        options: [
            "A. 10",
            "B. 7.5",
            "C. 3.5",
            "D. None of the other choices is correct"
        ],
        answer: 1,
        explanation: "Sắp xếp dữ liệu: 2, 4, 6, 6, 9, 11, 17, 25. Số lượng phần tử n = 8 (chẵn). Trung vị là trung bình cộng của hai số ở giữa (vị trí thứ 4 và 5): (6 + 9) / 2 = 7.5."
    },
    {
        id: "mas291_exercise_024",
        question: "The number of books read in a year by 11 students are shown in a stem and leaf diagram: Stem | Leaf: 0 | 5 5 6; 1 | 1 4 6 2 3; 2 | 0 2 1. What is the third quartile Q3 for this data?",
        options: [ "A. 20", "B. 6", "C. 14", "D. 22", "E. 13", "F. 15" ],
        answer: 0,
        explanation: "Sắp xếp dãy số: 05, 05, 06, 11, 12, 13, 14, 16, 20, 21, 22. Q3 là trung vị của nửa dữ liệu phía sau: {14, 16, 20, 21, 22}. Số ở giữa là 20. Vậy Q3 = 20."
    },
    {
        id: "mas291_exercise_025",
        question: "Given a table of data (4x8 grid of numbers). Compare the frequency of interval $10 \\le x < 20$ to that of interval $60 \\le x < 70$.",
        options: [
            "A. (i) Both have the same frequency.",
            "B. (ii) Interval $10 \\le x < 20$ has higher frequency.",
            "C. (iii) Interval $60 \\le x < 70$ has higher frequency."
        ],
        answer: 0,
        explanation: "Đếm số lượng các số trong bảng: Khoảng $10 \\le x < 20$: Có các số 13, 12, 15 (Tần số = 3). Khoảng $60 \\le x < 70$: Có các số 63, 60, 64 (Tần số = 3). Tần số bằng nhau."
    },
    {
        id: "mas291_exercise_026",
        question: "Construct the boxplot for the given data set: 23, 46, 36, 46, 50, 36, 36, 45. Choose the best answer.",
        options: [ "A. (i)", "B. (ii)", "C. (iii)", "D. (iv)" ],
        answer: 0,
        explanation: "Sắp xếp dữ liệu: 23, 36, 36, 36, 45, 46, 46, 50. Min: 23, Max: 50, Median(Q2): (36+45)/2=40.5, Q1: (36+36)/2=36, Q3: (46+46)/2=46. Hình (i) khớp với các thông số này."
    },
    {
        id: "mas291_exercise_027",
        question: "Suppose that $\\mu = 16$ and $\\sigma^2 = 20$ for a population. In a sample where $n = 100$ is randomly taken, what is the standard deviation for the sample mean?",
        options: [ "A. 0.45", "B. 0.2", "C. 0.16", "D. 0.02", "E. None of the other choices is correct" ],
        answer: 0,
        explanation: "Độ lệch chuẩn tổng thể $\\sigma = \\sqrt{20} \\approx 4.472$. Độ lệch chuẩn của trung bình mẫu (Standard Error) là $\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{\\sqrt{20}}{\\sqrt{100}} = \\frac{4.472}{10} = 0.4472$. Làm tròn là 0.45."
    },
    {
        id: "mas291_exercise_028",
        question: "A normal population has mean 76 and variance 9. How large must be the random sample be if we want the standard error of the sample mean to be 1.1?",
        options: [ "A. 9", "B. 6", "C. 11", "D. 8" ],
        answer: 3,
        explanation: "Phương sai = 9 $\\Rightarrow$ độ lệch chuẩn $\\sigma = 3$. Công thức sai số chuẩn: $SE = \\frac{\\sigma}{\\sqrt{n}}$. Ta có: $1.1 = \\frac{3}{\\sqrt{n}} \\Rightarrow \\sqrt{n} = \\frac{3}{1.1} \\approx 2.727$. $n = (2.727)^2 \\approx 7.43$. Kích thước mẫu phải là số nguyên, làm tròn lên là 8."
    },
    {
        id: "mas291_exercise_029",
        question: "Let $\\bar{X}$ denote the sample mean of a random sample of size $n_1 = 16$ from $N(\\mu, 32)$, and $\\bar{Y}$ of size $n_2 = 25$ from $N(\\mu, 50)$. Compute $P(\\bar{X} - \\bar{Y} > 5)$. Let $P(Z > 2.5) = 0.006$.",
        options: [ "A. 0.990", "B. 0.999", "C. 0.006", "D. 0.010", "E. None of the other choices is correct" ],
        answer: 2,
        explanation: "Var($\\bar{X}$) = 32/16 = 2. Var($\\bar{Y}$) = 50/25 = 2. Gọi $W = \\bar{X} - \\bar{Y}$. $\\mu_W = 0$. Var(W) = 2+2=4. $\\sigma_W = 2$. Cần tìm $P(W > 5)$. Z-score: $Z = (5-0)/2 = 2.5$. Theo đề bài: $P(Z > 2.5) = 0.006$."
    },
    {
        id: "mas291_exercise_030",
        question: "The brightness of a television picture tube... A sample of 20 tubes results in $\\bar{x} = 517.2$ and $s = 17.7$. Find a 99% CI on mean current required. Let $t_{0.005,19} = 2.861$. Assume normal distribution.",
        options: [ "A. (505.88; 528.52)", "B. (507; 527)", "C. (512; 525)", "D. None of the others" ],
        answer: 0,
        explanation: "Dùng phân phối t-Student. $n=20 \\Rightarrow df=19$. Độ tin cậy 99% $\\Rightarrow \\alpha/2 = 0.005 \\Rightarrow t=2.861$. Biên độ lỗi: $E = t \\times \\frac{s}{\\sqrt{n}} = 2.861 \\times \\frac{17.7}{\\sqrt{20}} \\approx 11.32$. Khoảng tin cậy: $517.2 \\pm 11.32 \\Rightarrow (505.88, 528.52)$."
    },
    {
        id: "mas291_exercise_031",
        question: "A researcher... wishes to estimate the proportion... 99% confident that the sample proportion will not differ from the true proportion by more than 4%? Let $z_{0.005} = 2.575$.",
        options: [ "A. 1037", "B. 849", "C. 2073", "D. 17", "E. None of the other choices is correct" ],
        answer: 0,
        explanation: "Tìm kích thước mẫu n cho ước lượng tỷ lệ. Dùng $p=0.5$ để an toàn. Công thức: $n = \\frac{z^2 \\times p(1-p)}{E^2} = \\frac{2.575^2 \\times 0.25}{0.04^2} \\approx 1036.03$. Luôn làm tròn lên $\\Rightarrow n = 1037$."
    },
    {
        id: "mas291_exercise_032",
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
        id: "mas291_exercise_033",
        question: "Suppose that 500 parts are tested in manufacturing and 20 are rejected. Test the hypothesis $H_0: p = 0.03$ against $H_1: p < 0.03$ at $\\alpha = 0.05$. Let $z_{0.05} = 1.65$.",
        options: [ "A. Reject the null hypothesis", "B. Do not reject null hypothesis" ],
        answer: 1,
        explanation: "Tỷ lệ mẫu $\\hat{p} = 20/500 = 0.04$. Giả thuyết đối là $p < 0.03$. Tuy nhiên, tỷ lệ mẫu thực tế ($0.04$) lại lớn hơn giá trị cần kiểm định ($0.03$). Điều này ngược với hướng của miền bác bỏ. Do đó, không bác bỏ $H_0$."
    },
    {
        id: "mas291_exercise_034",
        question: "Find the test statistic, $t_0$, to test the claim that $\\mu_1 = \\mu_2$. Two samples... normal with the same variance. Data: $n_1 = 25, \\bar{x}_1 = 20, s_1 = 1.5$; $n_2 = 30, \\bar{x}_2 = 18, s_2 = 1.9$.",
        options: [ "A. 4.27", "B. -1.63", "C. -4.27", "D. 1.63" ],
        answer: 0,
        explanation: "Dùng pooled t-test. 1. Tính phương sai chung $s_p^2 = \\frac{(24)(1.5)^2 + (29)(1.9)^2}{53} \\approx 2.994 \\Rightarrow s_p \\approx 1.73$. 2. Tính t-statistic: $t = \\frac{20 - 18}{1.73 \\sqrt{1/25 + 1/30}} \\approx 4.268$. Làm tròn thành 4.27."
    },
    {
        id: "mas291_exercise_035",
        question: "Consider the hypothesis test $H_0: p_1 = p_2$ against $H_1: p_1 \\neq p_2$. Suppose sample sizes $n_1 = 1000, n_2 = 900$, and $X_1 = 900, X_2 = 720$. Compute the test statistic.",
        options: [ "A. 6.14", "B. 5.32", "C. -6.14", "D. -5.32" ],
        answer: 0,
        explanation: "$\\hat{p}_1 = 0.9, \\hat{p}_2 = 0.8$. Tỷ lệ chung $\\bar{p} = \\frac{900+720}{1000+900} \\approx 0.8526$. Sai số chuẩn $SE = \\sqrt{\\bar{p}(1-\\bar{p})(1/n_1 + 1/n_2)} \\approx 0.01628$. Test statistic: $z = \\frac{0.9 - 0.8}{0.01628} \\approx 6.14$."
    },
    {
        id: "mas291_exercise_036",
        question: "Regression methods... least squares estimates of the slope and intercept are 9.20836, -6.3355. What is the estimate of expected steam usage when the average temperature is 55 F?",
        options: [ "A. -339.244", "B. 500.124", "C. 512.44", "D. 547.38" ],
        answer: 1,
        explanation: "Phương trình hồi quy: $\\hat{y} = \\text{intercept} + \\text{slope} \\times x = -6.3355 + 9.20836(55) = -6.3355 + 506.4598 = 500.1243$."
    },
    {
        id: "mas291_exercise_037",
        question: "Suppose we have... $n=5, SSE=7.4, \\bar{x}=4, S_{xx}=20.8$. What is the value of the estimated standard error of the intercept, $se(\\hat{\\beta}_0)$?",
        options: [ "A. 1.55", "B. 2.23", "C. 1.96", "D. 4.02" ],
        answer: 0,
        explanation: "1. $s_e^2 = SSE / (n-2) = 7.4 / 3 \\approx 2.467 \\Rightarrow s_e \\approx 1.571$. 2. $se(\\hat{\\beta}_0) = s_e \\sqrt{\\frac{1}{n} + \\frac{\\bar{x}^2}{S_{xx}}} = 1.571 \\sqrt{\\frac{1}{5} + \\frac{4^2}{20.8}} \\approx 1.546$. Làm tròn thành 1.55."
    },
    {
        id: "mas291_exercise_038",
        question: "The following is SUMMARY OUTPUT... What is the test statistic for the test $H_1: \\beta_1 < 1$? (Table: Coefficient X1 = 0.61538, Standard Error = 0.30705)",
        options: [ "A. -1.25", "B. 2.00", "C. 2.67", "D. -0.81" ],
        answer: 0,
        explanation: "Kiểm định giả thuyết $\\beta_1 = 1$. Công thức: $t = \\frac{\\text{Coefficient} - \\text{Hypothesized Value}}{\\text{Standard Error}} = \\frac{0.61538 - 1}{0.30705} \\approx -1.25$."
    }
];