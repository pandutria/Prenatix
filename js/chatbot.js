import { chatbotData } from "./data/chatbot.js";
const pageWelcome = document.getElementById('pageWelcome');
const pageChat = document.getElementById('pageChat');
const inputChat = document.getElementById('inputChatbot');
const submitBtn = document.getElementById('sendBtn');

pageWelcome.style.display = 'flex';
pageChat.style.display = 'none';
submitBtn.addEventListener('click', () => {
    const userChat = inputChat.value.trim();
    if (!userChat) {
        alert("Pertanyaan harus diisi!");
        return;
    }

    dataChat("Saya", userChat);
    const findAnswer = chatbotData.find((item) => {
        const question = item.question.toLowerCase();
        const userInput = userChat.toLowerCase();

        if (question.includes(userInput) || userInput.includes(question)) {
            return true;
        }

        const userWords = userInput.split(' ');
        const questionWords = question.split(' ');
        const ignoreWords = ['ibu', 'hamil', 'boleh', 'ga', 'kah', 'apa', 'yang', 'untuk', 'dan', 'atau'];

        const filteredUserWords = userWords.filter(word => !ignoreWords.includes(word));
        const filteredQuestionWords = questionWords.filter(word => !ignoreWords.includes(word));

        const matchCount = filteredUserWords.filter(word => filteredQuestionWords.includes(word)).length;            
        return matchCount >= 2;
    });

    if (findAnswer) {
        dataChat("Prenatix Bot", findAnswer.answer);
    } else {
        dataChat("Prenatix Bot", "Maaf, saya belum mengerti pertanyaan itu. Coba gunakan kata kunci lain.");
    }

    inputChat.value = '';
    pageWelcome.style.display = 'none';
    pageChat.style.display = 'flex';
});

function dataChat(sender, message) {
    pageChat.innerHTML += `
        <div class="flex flex-col justify-center ${sender === "Saya" ? 'items-end' : 'items-start'} gap-3">
            <h1 class="text-[22px] font-medium text-primary">${sender}</h1>
            <p class="max-w-[500px] shadow-lg text-justify px-4 py-6 bg-[#A52DFF] text-white rounded-lg font-regular text-[14px]">${message}</p>
        </div>
    `;
}