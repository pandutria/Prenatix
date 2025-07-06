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
const formPage = document.getElementById('formPage');
const resultPage = document.getElementById('resultPage');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');
const question = document.getElementById('question');
const userInput = document.getElementById('userForm');
const progressBar = document.getElementById('progressBar');
const progressCount = document.getElementById('progressCount');
let currentIndex = 0;
const userAnswers = new Array(diagnosesData.length).fill(""); 
const scoreCount = document.getElementById('scoreCount');
const scoreBar = document.getElementById('scoreBar');
let score = 0;
const healthLevel = document.getElementById('healthLevel');
const urgentLevel = document.getElementById('urgentLevel');
const condition = document.getElementById('condition');
const recommendation = document.getElementById("recommendation");

formPage.style.display = 'block';
resultPage.style.display = 'none';
submitBtn.style.display = 'none';

function loadQuestion() {
    const data = diagnosesData[currentIndex];
    question.innerHTML = `${currentIndex + 1}. ${data.ask}`;
    progressCount.innerHTML = `${data.progress}%`;
    progressBar.style.width = `${data.progress}%`;
    userInput.value = userAnswers[currentIndex];
}

submitBtn.addEventListener('click', () => {
    formPage.style.display = 'none';
    resultPage.style.display = 'flex';
    const health = checkHealthy(userAnswers);
    const urgentResult = userUrgent(health);

    if (urgentResult.text === "Sangat Tinggi") {
        condition.innerHTML += `
            <p class="text-[16px] font-medium">1. Pingsan atau kehilangan kesadaran</p>
            <p class="text-[16px] font-medium">2. Perdarahan hebat atau darah mengalir terus-menerus</p>
            <p class="text-[16px] font-medium">3. Kejang-kejang</p>
            <p class="text-[16px] font-medium">4. Air ketuban pecah sebelum waktunya</p>
        `;

        recommendation.innerHTML += `
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Segera panggil bantuan medis darurat</p>
            </div>
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Jika memungkinkan, segera menuju IGD atau rumah sakit terdekat</p>
            </div>
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Hindari bergerak sendiri, pastikan ada yang mendampingi</p>
            </div>
        `;
    } else if (urgentResult.text === "Tinggi") {
        condition.innerHTML += `
            <p class="text-[16px] font-medium">1. Perdarahan ringan hingga sedang</p>
            <p class="text-[16px] font-medium">2. Pusing berat disertai rasa ingin jatuh</p>
            <p class="text-[16px] font-medium">3. Nyeri hebat di bagian perut</p>
            <p class="text-[16px] font-medium">4. Tubuh terasa sangat lemas</p>
        `;

        recommendation.innerHTML += `
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Segera hentikan seluruh aktivitas dan cari posisi aman</p>
            </div>
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Minum air putih dan usahakan tetap tenang</p>
            </div>
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Segera hubungi bidan, dokter, atau fasilitas kesehatan terdekat</p>
            </div>
        `;
    } else if (urgentResult.text === "Sedang") {
        condition.innerHTML += `
            <p class="text-[16px] font-medium">1. Nyeri perut bagian bawah sedang</p>
            <p class="text-[16px] font-medium">2. Mual terus-menerus</p>
            <p class="text-[16px] font-medium">3. Sakit punggung hebat</p>
            <p class="text-[16px] font-medium">4. Pandangan kabur sebentar</p>
        `;

        recommendation.innerHTML += `
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Segera kurangi aktivitas berat dan perbanyak istirahat</p>
            </div>
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Konsumsi makanan bergizi seimbang untuk meningkatkan daya tahan tubuh</p>
            </div>
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Jika keluhan tidak membaik dalam 1-2 hari, segera periksakan diri ke fasilitas kesehatan</p>
            </div>
        `;
    } else {
        condition.innerHTML += `
            <p class="text-[16px] font-medium">1. Perut terasa nyeri ringan</p>
            <p class="text-[16px] font-medium">2. Kram ringan pada bagian bawah perut</p>
        `;

        recommendation.innerHTML += `
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Cobalah untuk beristirahat sejenak dan perbanyak minum air putih</p>
            </div>
            <div class="flex items-center justify-start gap-2">
                <img src="./assets/image/icon/arrow_right.png" alt="" class="w-[18px] h-auto">
                <p class="text-[16px] font-medium">Jika gejala terus berlanjut, segera konsultasikan ke tenaga medis</p>
            </div>
        `;
    }

    healthLevel.innerText = formatText(health);
    urgentLevel.innerText = urgentResult.text;
    scoreCount.innerHTML = `${urgentResult.score}%`;
    scoreBar.style.width = `${urgentResult.score}%`;
});

nextBtn.addEventListener('click', () => {
    userAnswers[currentIndex] = userInput.value.trim();
    if (userInput.value === "") {
        alert("Masukkan Jawaban Anda!");
        return;
    }

    if (currentIndex > 2) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
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

function checkHealthy(userAnswers) {
    const level = ["ringan", "sedang", "tinggi", "sangatTinggi"];
    let highestLevel = "ringan";

    userAnswers.forEach((answer, index) => {
        const lowerLevel = answer.toLowerCase();
        const keywords = diagnosesData[index].riskKeywords;

        if (keywords) {
            if (keywords.sangatTinggi.some((k) => lowerLevel.includes(k)) && level.indexOf(highestLevel) < 3) {
                highestLevel = "sangatTinggi";
            } else if (keywords.tinggi.some((k) => lowerLevel.includes(k)) && level.indexOf(highestLevel) < 3) {
                highestLevel = "tinggi"
            } else if (keywords.sedang.some((k) => lowerLevel.includes(k)) && level.indexOf(highestLevel) < 3) {
                highestLevel = "sedang";
            }
        }
    });

    return highestLevel;
}

function userUrgent(level) {
    score = 90;
    let text = "Rendah";

    switch (level) {
        case "sangatTinggi":
            score = 25;
            text = "Sangat Tinggi";
            break;
        case "tinggi":
            score = 50;
            text = "Tinggi";
            break;
        case "sedang":
            score = 75;
            text = "Sedang";
            break;
    }

    return { text, score };
}

function formatText(text) {
    const formatText = text.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase());
    return formatText;
}

loadQuestion();
// Diagnoses End