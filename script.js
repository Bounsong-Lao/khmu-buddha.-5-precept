document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ສີນຂໍ້ໃດໃນພາສາກຶມມຸທີ່ແປວ່າ 'ບໍ່ຂ້າສັດ'?",
            options: [
                "ອຳເລົ່າລາກ",
                "ອຳພານໂຕ",
                "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌",
                "ອຳເລີຈຂອງບຽງ"
            ],
            answer: "ອຳພານໂຕ",
            explanation: "ອຳພານໂຕ ໝາຍເຖິງ ບໍ່ຂ້າສັດ."
        },
        {
            question: "ຄຳວ່າ 'ອຳເລີຈຂອງບຽງ' ໃນພາສາກຶມມຸ ແປວ່າຫຍັງ?",
            options: [
                "ບໍ່ດື່ມສຸຣາ",
                "ບໍ່ລັກສັບຂອງຄົນອື່ນ",
                "ບໍ່ຫຼີ້ນຊູ້ຜົວເມຍຄົນອື່ນ",
                "ບໍ່ເວົ້າຕົວະ"
            ],
            answer: "ບໍ່ລັກສັບຂອງຄົນອື່ນ",
            explanation: "ອຳເລີຈຂອງບຽງ ໝາຍເຖິງ ບໍ່ລັກສັບຂອງຄົນອື່ນ."
        },
        {
            question: "ສີນຂໍ້ 'ບໍ່ຫຼີ້ນຊູ້ຜົວເມຍຄົນອື່ນ' ໃນພາສາກຶມມຸແມ່ນຂໍ້ໃດ?",
            options: [
                "ອຳພານໂຕ",
                "ອຳເລົ່າລາກ",
                "ອຳຫອຍເກຼະກຶມບຼາຂອງບຽງ",
                "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌"
            ],
            answer: "ອຳຫອຍເກຼະກຶມບຼາຂອງບຽງ",
            explanation: "ອຳຫອຍເກຼະກຶມບຼາຂອງບຽງ ໝາຍເຖິງ ບໍ່ຫຼີ້ນຊູ້ຜົວເມຍຄົນອື່ນ."
        },
        {
            question: "ຄຳວ່າ 'ບໍ່ເວົ້າຕົວະ' ໃນພາສາກຶມມຸແມ່ນຄຳໃດ?",
            options: [
                "ອຳພານໂຕ",
                "ອຳເລົ່າລາກ",
                "ອຳຫອຍເກຼະກຶມບຼາຂອງບຽງ",
                "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌"
            ],
            answer: "ອຳເລົ່າລາກ",
            explanation: "ອຳເລົ່າລາກ ໝາຍເຖິງ ບໍ່ເວົ້າຕົວະ."
        },
        {
            question: "ສີນຂໍ້ 'ບໍ່ດື່ມສຸຣາຫຼືຂອງມືນເມົາ' ໃນພາສາກຶມມຸແມ່ນຂໍ້ໃດ?",
            options: [
                "ອຳພານໂຕ",
                "ອຳເລົ່າລາກ",
                "ອຳຫອຍເກຼະກຶມບຼາຂອງບຽງ",
                "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌"
            ],
            answer: "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌",
            explanation: "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌ ໝາຍເຖິງ ບໍ່ດື່ມສຸຣາຫຼືຂອງມືນເມົາ."
        },
        {
            question: "ຄຳວ່າ 'ບຽງ' ທີ່ພົບໃນສີນ 5 ໝາຍເຖິງຫຍັງ?",
            options: [
                "ຕົນເອງ",
                "ຄົນອື່ນ",
                "ສິ່ງຂອງ",
                "ສັດ"
            ],
            answer: "ຄົນອື່ນ",
            explanation: "ບຽງ ໝາຍເຖິງ ຄົນອື່ນ."
        },
        {
            question: "ຄຳວ່າ 'ອຳ' ທີ່ພົບໃນທຸກຂໍ້ຂອງສີນ 5 ໝາຍເຖິງຫຍັງ?",
            options: [
                "ເຮັດ",
                "ມີ",
                "ບໍ່",
                "ໄດ້"
            ],
            answer: "ບໍ່",
            explanation: "ອຳ ເປັນຄຳປະຕິເສດ ໝາຍເຖິງ ບໍ່."
        },
        {
            question: "ຂໍ້ໃດກ່ຽວຂ້ອງກັບການກະທຳຕໍ່ສັບສິນ?",
            options: [
                "ອຳພານໂຕ",
                "ອຳເລີຈຂອງບຽງ",
                "ອຳເລົ່າລາກ",
                "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌"
            ],
            answer: "ອຳເລີຈຂອງບຽງ",
            explanation: "ອຳເລີຈຂອງບຽງ ໝາຍເຖິງ ບໍ່ລັກສັບຂອງຄົນອື່ນ, ເຊິ່ງກ່ຽວຂ້ອງກັບສັບສິນ."
        },
        {
            question: "ຂໍ້ໃດກ່ຽວຂ້ອງກັບການສື່ສານ?",
            options: [
                "ອຳພານໂຕ",
                "ອຳເລີຈຂອງບຽງ",
                "ອຳເລົ່າລາກ",
                "ອຳເອືອກບຸຈ໌ຫຼືຂອງບາຈ໌"
            ],
            answer: "ອຳເລົ່າລາກ",
            explanation: "ອຳເລົ່າລາກ ໝາຍເຖິງ ບໍ່ເວົ້າຕົວະ, ເຊິ່ງກ່ຽວຂ້ອງກັບການສື່ສານ."
        },
        {
            question: "ສີນ 5 ແມ່ນຫຍັງ?",
            options: [
                "ກົດໝາຍບ້ານເມືອງ",
                "ຫຼັກທຳທາງພະພຸດທະສາສະໜາ",
                "ກົດລະບຽບການສື່ສານ",
                "ວິທີການສ້າງເວັບໄຊທ໌"
            ],
            answer: "ຫຼັກທຳທາງພະພຸດທະສາສະໜາ",
            explanation: "ສີນ 5 ເປັນຫຼັກທຳພື້ນຖານໃນພະພຸດທະສາສະໜາສຳລັບການປະພຶດທີ່ດີ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
