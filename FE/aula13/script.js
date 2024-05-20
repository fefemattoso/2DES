import questions from './questions.js';

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const resultsContainer = document.querySelector(".finish .results");

let currentIndex = 0;
let questionsCorrect = 0;
let userAnswers = [];

btnRestart.onclick = () => {
    content.classList.add("active");
    contentFinish.classList.remove("active");
    resultsContainer.innerHTML = "";

    currentIndex = 0;
    questionsCorrect = 0;
    userAnswers = [];
    loadQuestion();
};

function nextQuestion(e) {
    const isCorrect = e.target.getAttribute("data-correct") === "true";
    userAnswers.push({ question: questions[currentIndex].question, correct: isCorrect, selected: e.target.innerText });

    if (isCorrect) {
        questionsCorrect++;
    }
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} questões`;
    content.classList.remove("active");
    contentFinish.classList.add("active");

    userAnswers.forEach(answer => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        div.innerHTML = `<strong>${answer.question}</strong><br>Sua resposta: ${answer.selected} - ${answer.correct ? "Correto" : "Incorreto"}`;
        resultsContainer.appendChild(div);
    });
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");
        div.innerHTML = `<button class="answer" data-correct="${answer.correct}">
        ${answer.option}</button>`;
        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();