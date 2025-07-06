// Navbar Start
const listBtn = document.getElementById('listBtn');
const listBtnTop = document.getElementById('listBtnTop');
const listBtnCenter = document.getElementById('listBtnCenter');
const listBtnBottom = document.getElementById('listBtnBottom');
const navbarMenu = document.querySelector('.navbar-active');

listBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    listBtnTop.classList.toggle('active');
    listBtnCenter.classList.toggle('active');
    listBtnBottom.classList.toggle('active');
});
// Navbar End

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

// Diagnoses Start
import { diagnosesData } from "./data/diagnoses.js";
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const question = document.getElementById('question');
const userInput = document.getElementById('userForm');
const progressCount = document.getElementById('progressCount');
const progressBar = document.getElementById('progressBar');
let currentIndex = 0;
const userAnswers = new Array(diagnosesData.length).fill(""); 

function loadQuestion() {
    const data = diagnosesData[currentIndex];
    question.innerHTML = `${currentIndex + 1}. ${data.ask}`;
    progressCount.innerHTML = `${data.progress}%`;
    progressBar.style.width = `${data.progress}%`;
    userInput.value = userAnswers[currentIndex];
}

nextBtn.addEventListener('click', () => {
    userAnswers[currentIndex] = userInput.value.trim();
    if (userInput.value === "") {
        alert("Masukkan Jawaban Anda!");
        return;
    }

    if (currentIndex < diagnosesData.length - 1) {
        currentIndex++;
        loadQuestion();
    }
});

prevBtn.addEventListener('click', () => {
    userAnswers[currentIndex] = userInput.value.trim();
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
});

loadQuestion();
// Diagnoses End