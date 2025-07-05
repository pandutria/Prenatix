import { chatbotData } from "./data/chatbot.js";
const pageWelcome = document.getElementById('pageWelcome');
const pageChat = document.getElementById('pageChat');
const inputChat = document.getElementById('inputChatbot');
const submitBtn = document.getElementById('sendBtn');
const logo = '../assets/image/logo/logo_reverse.svg';

pageWelcome.style.display = 'flex';
pageChat.style.display = 'none';

submitBtn.addEventListener('click', () => {
    const userChat = inputChat.value.trim();
    if (!userChat) {
        alert("Pertanyaan harus diisi!");
        return;
    }

    dataChat("Saya", userChat);

    const cleanText = (text) => {
        return text.toLowerCase().replace(/[!?<>[\]()]/g, '').trim();
    };

    const findAnswer = chatbotData.find((item) => {
        const question = cleanText(item.question);
        const userInput = cleanText(userChat);

        if (question.includes(userInput) || userInput.includes(question)) {
            return true;
        }

        const userWords = userInput.split(' ');
        const questionWords = question.split(' ');

        const ignoreWords = ['saat', 'sering', 'hamil', 'kenapa', 'mengapa', 'apa', 'yang', 'untuk', 'dan', 'atau'];
        const filteredUserWords = userWords.filter(word => !ignoreWords.includes(word));
        const filteredQuestionWords = questionWords.filter(word => !ignoreWords.includes(word));

        const matchCount = filteredUserWords.filter(word => filteredQuestionWords.includes(word)).length;
        return matchCount >= 2;
    });

    const skeletonId = Date.now();
    skeletonChat(skeletonId);

    setTimeout(() => {
        const skeletonElem = document.getElementById(`skeleton-${skeletonId}`);
        if (skeletonElem) skeletonElem.remove();

        if (findAnswer) {
            dataChat("Prenatix Bot", findAnswer.answer);
        } else {
            dataChat("Prenatix Bot", "Maaf, saya belum mengerti pertanyaan itu. Coba gunakan kata kunci lain.");
        }
    }, 20000);

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

function skeletonChat(uniqueId) {
    pageChat.innerHTML += `
        <div class="flex flex-col justify-center items-start gap-3" id="skeleton-${uniqueId}">
            <h1 class="text-[22px] font-medium text-primary">Prenatix Bot</h1>
            <div class="max-w-[500px] animate-pulse px-4 py-6 bg-[#A52DFF] flex flex-col justify-center items-center rounded-lg gap-2">
                <img src="${logo}" class="w-[20px] h-[20px] opacity-80" />
                <div class="w-full bg-[#C273FF] h-[6px] rounded-full overflow-hidden">
                    <div class="h-full bg-[#E3B9FF] animate-loadingBar"></div>
                </div>
            </div>
        </div>
    `;
}
