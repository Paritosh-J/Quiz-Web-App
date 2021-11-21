const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const uScore = document.getElementById("userScore");
const tScore = document.getElementById("totalScore");
const questionText = document.getElementById("qText");

let currentQues = 0, score = 0, questions = [
    {
        question: "Bachendri Pal was the first Indian woman to climb Mt. Everest.", // Q1
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ]
    },
    {
        question: "Rakesh Sharma was the first Indian man to go to space.", // Q2
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ]
    },
    {
        question: "Anandibai Gopalrao Joshi became the first Indian female physician in the year 1887.", // Q3
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ]
    },
];

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit)


function beginQuiz() {
    currentQues = 0;
    tScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQues].answers[0].answer) {
            if (score < 3) score += 1;
        }
        uScore.innerHTML = score;
        if (currentQues < 2) next();
    }

    falseBtn.innerHTML = questions[currentQues].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQues].answers[1].answer) {
            if (score < 3) score += 1;
        }
        uScore.innerHTML = score;
        if (currentQues < 2) next();
    }
    prevBtn.classList.add("hide");
}


beginQuiz();


function restart() {
    currentQues = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    uScore.innerHTML = score;
    beginQuiz();
}


function next() {
    currentQues += 1;
    if (currentQues >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questionText[currentQues].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQues].answers[0].answer) {
            if (score < 3) score += 1;
        }
        uScore.innerHTML = score;
        if (currentQues < 2) next();
    }

    falseBtn.innerHTML = questions[currentQues].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQues].answers[1].answer) {
            if (score < 3) score += 1;
        }
        uScore.innerHTML = score;
        if (currentQues < 2) next();
    }
    prevBtn.classList.remove("hide");
}


function prev() {
    currentQues -= 1;
    if (currentQues <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }

    questionText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQues].answers[0].answer) {
            if (score < 3) score += 1;
        }
        uScore.innerHTML = score;
        if (currentQues < 2) next();
    }

    falseBtn.innerHTML = questions[customElements].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQues].answers[1].answer) {
            if (score < 3) score += 1;
        }
        uScore.innerHTML = score;
        if (currentQues < 2) next();
    }
    nextBtn.classList.remove("hide");
}


function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
    questionText.innerHTML = "Quiz Submitteed Successfully!"
}
