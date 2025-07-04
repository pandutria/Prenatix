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

// Testimoni Start
import { testimoniData1, testimoniData2 } from "./data/testimoni.js";
const stars = '../assets/image/pic/testimoni/stars.png';
const comment = '../assets/image/pic/testimoni/comment.png';
const wrapper1 = document.getElementById('scrollWrapper1');
const testimoniPage1 = document.getElementById('testimoniId1');
const wrapper2 = document.getElementById('scrollWrapper2');
const testimoniPage2 = document.getElementById('testimoniId2');
let testimoniPage1Html = '';
let testimoniPage2Html = '';
let scrollSpeed = 1;

testimoniData1.forEach((data) => {
    testimoniPage1Html += `
        <div class="flex flex-col gap-6 rounded-lg p-6  w-[400px] border-primary">
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-4">
                <img src="${data.image}" class="w-[70px] h-auto rounded-full" alt="">
                <div class="flex flex-col gap-2">
                  <h1 class="text-black font-semibold text-[20px]">${data.name}</h1>
                  <img src="${stars}" class="w-[100px] h-auto" alt="">
                </div>
              </div>
              <img src="${comment}" class="w-[40px] h-auto" alt="">
            </div>
            <div class="w-full">
              <p class="font-medium text-gray text-[14px] text-justify">${data.text}</p>
            </div>
        </div>
    `
});

testimoniPage1.innerHTML = testimoniPage1Html;
wrapper1.addEventListener('scroll', () => {
  const maxScroll = testimoniPage1.scrollWidth - wrapper1.clientWidth;
  
  if (wrapper1.scrollLeft >= maxScroll - 100) { 
    testimoniPage1.innerHTML += testimoniPage1Html;
  }
});

testimoniData2.forEach((data) => {
    testimoniPage2Html += `
        <div class="flex flex-col gap-6 rounded-lg p-6  w-[400px] border-primary">
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-4">
                <img src="${data.image}" class="w-[70px] h-auto rounded-full" alt="">
                <div class="flex flex-col gap-2">
                  <h1 class="text-black font-semibold text-[20px]">${data.name}</h1>
                  <img src="${stars}" class="w-[100px] h-auto" alt="">
                </div>
              </div>
              <img src="${comment}" class="w-[40px] h-auto" alt="">
            </div>
            <div class="w-full">
              <p class="font-medium text-gray text-[14px] text-justify">${data.text}</p>
            </div>
        </div>
    `
});

testimoniPage2.innerHTML += testimoniPage2Html;
wrapper2.scrollLeft = testimoniPage2.scrollWidth / 2;

function autoScroll() {
    wrapper1.scrollLeft += scrollSpeed;
    wrapper2.scrollLeft -= scrollSpeed;

    if (wrapper1.scrollLeft >= testimoniPage1.scrollWidth / 2) {
        wrapper1.scrollLeft = 0;
    }

    if (wrapper2.scrollLeft <= 0) {
        wrapper2.scrollLeft = testimoniPage2.scrollWidth / 2;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();
// Testimoni End