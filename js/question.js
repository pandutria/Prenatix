// Question Start
import { Question, QuestionCorrectAnswer } from "./data/question.js";
const progressBar = document.getElementById("progressBar");
const progressCount = document.getElementById("progressCount");
const questionIndex = document.getElementById("questionIndex");
const questionText = document.getElementById("questionText");
const questionAnswer1 = document.getElementById("questionAnswer1");
const questionAnswer2 = document.getElementById("questionAnswer2");
const questionAnswer3 = document.getElementById("questionAnswer3");
const totalQuestion = document.getElementById("totalQuestion");
const alreadyAnswerCount = document.getElementById("alreadyAnswerCount");
const alreadyAnswer = document.getElementById("alreadyAnswer");
const answerValue = document.querySelectorAll("input[name='radio']");;
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const isMobile = window.innerWidth <= 758;
const loadingPage = document.getElementById("loadingPage");
const loadingPageText = document.getElementById("loadingPageText");
let progress = 0;
let selectedValue;
let currentIndex = 1;
let userAnswer = [];

async function loading() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    loadingPage.style.opacity = "0%";
    
    await new Promise(resolve => setTimeout(resolve, 100));
    loadingPage.style.display = "none";
}

function displayQuestion() {
    const selectedQuestion = Question.find((item) => item.id == currentIndex);
    progress = Math.floor((userAnswer.length / Question.length) * 100);

    questionIndex.textContent = `Pertanyaan ${selectedQuestion.id}`;
    questionText.textContent = selectedQuestion.question;
    questionAnswer1.textContent = selectedQuestion.answer[0].text;
    questionAnswer2.textContent = selectedQuestion.answer[1].text;
    questionAnswer3.textContent = selectedQuestion.answer[2].text;  
    alreadyAnswerCount.textContent = `${progress}%`;
    alreadyAnswer.textContent = `Ibu telah menjawab ${userAnswer.length} pertanyaan`;

    answerValue.forEach((input) => (input.checked = false));
    const saved = userAnswer.find((ans) => ans.id === currentIndex);

    if (saved) {
        const selectedInput = document.querySelector(
            `input[name="radio"][value="${saved.answer}"]`
        );
        if (selectedInput) selectedInput.checked = true;
        selectedValue = saved.answer;
    } else {
        selectedValue = null;
    }

    updateProgressBar();
}

function listQuestion() {
    totalQuestion.innerHTML = "";

    Question.forEach((item, index) => {
        totalQuestion.innerHTML += `                
            <div onclick="goQuestion(${item.id})" class="${currentIndex == item.id && userAnswer.find(ans => ans?.id == item.id) ? 'bg-[#a52dff]' : currentIndex == item.id ? 'bg-[#a52dff]' : userAnswer.find(ans => ans?.id == item.id) ? 'bg-[#A3FF7C]' : 'bg-white'} duration-200 lg:w-full w-fit lg:rounded-lg rounded-full flex gap-3 lg:px-6 lg:py-4 px-4 py-2.5 items-center cursor-pointer">
                <img src="./assets/image/pic/game/quiz/done.png" class="w-8 h-auto ${userAnswer.find(ans => ans?.id == item.id) && !isMobile ? 'block' : 'hidden'}" alt="">
                <p class="text-black flex gap-2 font-semibold lg:text-[16px] text-[12px] ${currentIndex == item.id ? 'text-white' : 'text-black'}"><span class="display-hidden">Pertanyaan</span>${item.id}</p>
            </div>
        `;  
    });
}

window.goQuestion = goQuestion;
function goQuestion(id) {
    if (selectedValue) {
        updateProgress();
    }

    currentIndex =  id;
    if (currentIndex == Question.length) {
        nextBtn.textContent = "Selesai";
    } else {
        nextBtn.textContent = "Selanjutnya";
    }

    displayQuestion();
    listQuestion();
}

nextBtn.addEventListener("click", () => {
    if (selectedValue) {
        updateProgress();
    }

    if (currentIndex == Question.length - 1) {
        nextBtn.textContent = "Selesai";
    } else {
        nextBtn.textContent = "Selanjutnya";
    }

    if (currentIndex < Question.length) {
        currentIndex += 1;
        displayQuestion();
        listQuestion();
    } else {
        if (userAnswer.length < Question.length) {
            alert("Pastikan Seluruh Pertanyaan Sudah Dijawab!");
        } else {
            submitForm();
        }
    }
});

prevBtn.addEventListener("click", () => {
    if (selectedValue) {
        updateProgress();
    }

    nextBtn.textContent = "Selanjutnya";

    if (currentIndex > 1) {
        currentIndex -= 1;
        displayQuestion();
        listQuestion();
    }
});

answerValue.forEach((item) => {
    item.addEventListener("change", () => {
        selectedValue = item.value;
    });
});

function updateProgress() {
    const existingIndex = userAnswer.findIndex(item => item.id === currentIndex);

    if (existingIndex !== -1) {
        userAnswer[existingIndex].answer = selectedValue;
    } else {
        userAnswer.splice(currentIndex - 1, 0, {
            id: currentIndex,
            answer: selectedValue
        });
    }

    console.log(userAnswer);
}

function updateProgressBar() {
    progressCount.textContent = `${progress}%`;
    progressBar.style.width = `${progress}%`;
}

function submitForm() {
    loadingPageText.textContent = "Prenatix Memeriksa Jawabanmu";
    loadingPage.style.opacity = "100%";
    loadingPage.style.display = "flex";
}

displayQuestion();
updateProgressBar();
listQuestion();
loading();
// Question End