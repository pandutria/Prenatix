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

// Consultation Start
import { consultation } from "./../js/data/consultation.js";

window.addEventListener("DOMContentLoaded", () => {
  const consultationContainer = document.getElementById("consultationContainer");
   if (!consultationContainer) {
    console.error("Element #consultationContainer not found!");
    return;
  }

  let consultationHTML = '';

  consultation.forEach((data) => {
    consultationHTML += `
      <div class="flex flex-col rounded-[10px] px-3 py-4 overflow-hidden items-center shadow-[0_0_4px_1px_rgba(0,0,0,0.40)]">
        <img src="${data.image}" class="lg:w-70 w-full h-55 object-cover rounded-[10px]" alt="">
        <h1 class="font-semibold text-fourth lg:text-[26px] text-[20px] pt-3">${data.name}</h1>
        <p class="font-medium text-gray lg:text-[16px] text-[14px]">${data.category}</p>
        <a href="detail_doctor.html?id=${data.id}" class="font-semibold text-white px-9 py-2 rounded-[5px] text-[16px] bg-gradient-to-r from-[#AD40FF] to-[#4E0089] mt-4">Pesan Sekarang</a>
      </div>
    `;
  });

  consultationContainer.innerHTML = consultationHTML;
});
// Consultation End

// Detail Doctor Start
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const doctorId = parseInt(params.get("id"));
  const doctor = consultation.find((i) => i.id === doctorId);
  const reviewPage = document.getElementById("reviewDoctor");
  const reviewDoctorData = doctor.review;

  if (doctor) { 
    const name = document.getElementById("doctorName");
    name.textContent = doctor.name;

    const category = document.getElementById("doctorCategory");
    category.textContent = doctor.category;

    const price = document.getElementById("doctorPrice");
    price.textContent = doctor.price;

    const image = document.getElementById("doctorImg");
    image.src = doctor.image;

    reviewDoctorData.forEach((item) => {
      reviewPage.innerHTML += `
        <div class="flex flex-col gap-4 px-5 py-5 mt-2 rounded-[5px] shadow-[0_0_2px_1px_rgba(0,0,0,0.20)]">
          <div class="flex flex-row gap-6">
            <img src="${item.img}" class="lg:w-20 w-14 lg:h-20 h-14 object-cover" alt="">
            <div class="flex flex-col">
              <h1 class="font-medium lg:text-[24px] text-[18px]">${item.name}</h1>
              <img src="./assets/image/icon/five_star.png" class="lg:w-30 w-18 h-auto object-contain mt-1" alt="">
            </div>
          </div>
          <p class="font-medium text-gray-secondary lg:text-[16px] text-[12px] lg:w-150 w-full text-justify">${item.desc}</p>
        </div>
      `;
    })
  }
})
// Detail Doctor End
