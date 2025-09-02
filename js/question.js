// Animation Detect Start
const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  rootMargin: "0px 0px -100px 0px"
});

elements.forEach(el => observer.observe(el));
// Animation Detect End

// Question Start
import { Question, QuestionCorrectAnswer } from "./data/question.js";
const questionHome = document.getElementById("questionHome");
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
const answerValue = document.querySelectorAll("input[name='radio']");
const nextBtns = document.querySelectorAll("#nextBtnMobile, #nextBtnDesktop");
const prevBtns = document.querySelectorAll("#prevBtnMobile, #prevBtnDesktop");
const isMobile = window.innerWidth <= 758;
const loadingPage = document.getElementById("loadingPage");
const loadingPageText = document.getElementById("loadingPageText");
const navHome = document.getElementById("navHome");
const navResult = document.getElementById("navResult");
const resultPage = document.getElementById("resultPage");
const resultCount = document.getElementById("resultCount");
const playAgainBtn = document.getElementById("playAgainBtn");
const backBtn = document.getElementById("backBtn");

let progress = 0;
let selectedValue;
let currentIndex = 1;
let userAnswer = [];
let score = 0;

navHome.style.display = "flex";
navResult.style.display = "none";
resultPage.style.display = "none";

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
  Question.forEach((item) => {
    totalQuestion.innerHTML += `                
      <div onclick="goQuestion(${item.id})" class="${
        currentIndex == item.id && userAnswer.find(ans => ans?.id == item.id)
          ? 'bg-[#a52dff]'
          : currentIndex == item.id
          ? 'bg-[#a52dff]'
          : userAnswer.find(ans => ans?.id == item.id)
          ? 'bg-[#A3FF7C]'
          : 'bg-white'
      } duration-200 lg:w-full w-fit lg:rounded-lg rounded-full flex gap-3 lg:px-6 lg:py-4 px-4 py-2.5 items-center cursor-pointer">
        <img src="./assets/image/pic/game/quiz/done.png" class="w-8 h-auto ${
          userAnswer.find(ans => ans?.id == item.id) && !isMobile ? 'block' : 'hidden'
        }" alt="">
        <p class="text-black flex gap-2 font-semibold lg:text-[16px] text-[12px] ${
          currentIndex == item.id ? 'text-white' : 'text-black'
        }"><span class="display-hidden">Pertanyaan</span>${item.id}</p>
      </div>
    `;
  });
}

window.goQuestion = goQuestion;
function goQuestion(id) {
  if (selectedValue) updateProgress();
  currentIndex = id;

  updateNextBtnText();
  displayQuestion();
  listQuestion();
}

function handleNext() {
  if (selectedValue) updateProgress();

  if (currentIndex < Question.length) {
    currentIndex++;
    updateNextBtnText();
    displayQuestion();
    listQuestion();
  } else {
    if (userAnswer.length < Question.length) {
      alert("Pastikan Seluruh Pertanyaan Sudah Dijawab!");
    } else {
      submitForm();
    }
  }
}

function handlePrev() {
  if (selectedValue) updateProgress();
  if (currentIndex > 1) {
    currentIndex--;
    updateNextBtnText();
    displayQuestion();
    listQuestion();
  }
}

function updateNextBtnText() {
  nextBtns.forEach(btn => {
    btn.textContent = currentIndex === Question.length ? "Selesai" : "Selanjutnya";
  });
}

nextBtns.forEach(btn => btn.addEventListener("click", handleNext));
prevBtns.forEach(btn => btn.addEventListener("click", handlePrev));

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

async function submitForm() {
  loadingPageText.textContent = "Prenatix Memeriksa Jawabanmu";
  loadingPage.style.display = "flex";
  loadingPage.style.opacity = "100%";
  resultPage.style.display = "flex";
  resultPage.style.opacity = "0%";

  const checkAnswer = userAnswer.filter((user) => {
    const matched = QuestionCorrectAnswer.filter((correct) => {
        const data = user.id == correct.id && user.answer == correct.correct;
        return data;
    });

    return matched.length > 0;
  });

  score = checkAnswer.length;
  await new Promise(resolve => setTimeout(resolve, 3000));
  resultQuestion();
}

function resultQuestion() {
  resultCount.textContent = `${score} / ${Question.length}`;
  loadingPage.style.display = "none";
  navHome.style.display = "none";
  questionHome.style.display = "none";
  navResult.style.display = "flex";
  resultPage.style.opacity = "100%";
}

playAgainBtn.addEventListener("click", () => {
    window.location.reload();
});

backBtn.addEventListener("click", () => {
    window.location.href = "./pilih.html";
});

displayQuestion();
updateProgressBar();
listQuestion();
loading();
// Question End
