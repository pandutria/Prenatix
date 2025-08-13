// Consultation Start
import consultation from "./../js/data/consultation.js";

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
        <h1 class="font-bold text-fourth text-[28px] pt-3">${data.name}</h1>
        <p class="font-semibold text-gray text-[16px]">${data.category}</p>
        <a href="detail_doctor.html?id=${data.id}" class="font-semibold text-white px-9 py-2 rounded-[5px] text-[19px] bg-gradient-to-r from-[#AD40FF] to-[#4E0089] mt-4">Pesan Sekarang</a>
      </div>
    `;
  });

  consultationContainer.innerHTML = consultationHTML;
});
// Consultation End

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const doctorId = parseInt(params.get("id"));
  const doctor = consultation.find((i) => i.id === doctorId);

  if (doctor) { 
    const name = document.getElementById("doctorName");
    name.textContent = doctor.name;

    const category = document.getElementById("doctorCategory");
    category.textContent = doctor.category;

    const price = document.getElementById("doctorPrice");
    price.textContent = doctor.price;

    const image = document.getElementById("doctorImg");
    image.src = doctor.image;

  }
})

