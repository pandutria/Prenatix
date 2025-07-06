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

// Chatbot Start
import { chatbotData } from "./data/chatbot.js";
const pageWelcome = document.getElementById('pageWelcome');
const pageChat = document.getElementById('pageChat');
const pageChatScroll = document.getElementById('pageChatScroll');
const inputChat = document.getElementById('inputChatbot');
const submitBtn = document.getElementById('sendBtn');
const logo = '../assets/image/logo/logo_reverse.svg';
const ask1Btn = document.getElementById('ask1Btn');
const ask2Btn = document.getElementById('ask2Btn');
const ask3Btn = document.getElementById('ask3Btn');
const voiceBtn = document.getElementById('voiceBtn');
const speakPage = document.getElementById('speakPage');
const voiceEffect = document.getElementById("voiceEffect");
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

pageWelcome.style.display = 'flex';
pageChat.style.display = 'none';
speakPage.style.display = 'none';

inputChat.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});

recognition.lang = 'id-ID'; 
recognition.interimResults = false;
recognition.maxAlternatives = 1;

voiceBtn.addEventListener('click', () => {
    speakPage.style.display = 'flex';
    voiceEffect.play();
    recognition.start();
});

recognition.onstart = () => {
    console.log("mendengarkan");
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    inputChat.value = transcript;
    submitBtn.click(); 
};

recognition.onerror = (event) => {
    console.error('Error:', event.error);
};

recognition.onend = () => {
    console.log('Selesai dengar');
    speakPage.style.display = 'none';
};

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
    }, 2000);

    inputChat.value = '';
    pageWelcome.style.display = 'none';
    pageChat.style.display = 'flex';
});

ask1Btn.addEventListener('click', () => {
    const userChat = "Buatkan panduan makanan sehat untuk trimester pertama";
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
    }, 2000);

    inputChat.value = '';
    pageWelcome.style.display = 'none';
    pageChat.style.display = 'flex';
});

ask2Btn.addEventListener('click', () => {
    const userChat = "Tentukan jadwal kontrol sesuai usia kandungan bunda";
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
    }, 2000);

    inputChat.value = '';
    pageWelcome.style.display = 'none';
    pageChat.style.display = 'flex';
});

ask3Btn.addEventListener('click', () => {
    const userChat = "Berikan tips agar tidur menjadi nyenyak saat hamil besar";
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
    }, 2000);

    inputChat.value = '';
    pageWelcome.style.display = 'none';
    pageChat.style.display = 'flex';
});

function dataChat(sender, message) {
    if (sender === "Saya") {
        pageChat.innerHTML += `
            <div class="flex flex-col justify-center items-end gap-3">
                <h1 class="lg:text-[22px] text-[16px] font-medium text-primary">${sender}</h1>
                <p class="lg:max-w-[500px] max-w-[280px] shadow-lg text-justify px-4 lg:py-6 py-4 bg-[#A52DFF] text-white rounded-lg font-regular text-[12px] lg:text-[14px]">${message}</p>
            </div>
        `;
    } else {
        const uniqueId = Date.now();

        pageChat.innerHTML += `
            <div class="flex flex-col justify-center items-start gap-3">
                <h1 class="lg:text-[22px] text-[16px] font-medium text-primary">${sender}</h1>
                <p id="typing-${uniqueId}" class="lg:max-w-[500px] max-w-[280px] shadow-lg text-justify px-4 lg:py-6 py-4 bg-[#A52DFF] text-white rounded-lg font-regular text-[12px] lg:text-[14px]"></p>
            </div>
        `;

        const typingElem = document.getElementById(`typing-${uniqueId}`);
        let i = 0;

        const typingInterval = setInterval(() => {
            typingElem.innerHTML += message.charAt(i);
            i++;
            if (i >= message.length) {
                clearInterval(typingInterval);
                pageChatScroll.scrollTop = pageChatScroll.scrollHeight;
            }
        }, 10);
    }

    pageChatScroll.scrollTop = pageChatScroll.scrollHeight;
}

function skeletonChat(uniqueId) {
    pageChat.innerHTML += `
        <div class="flex flex-col justify-center items-start gap-3" id="skeleton-${uniqueId}">
            <h1 class="lg:text-[22px] text-[16px] font-medium text-primary">Prenatix Bot</h1>
            <div class="lg:max-w-[500px] max-w-[200px] animate-pulse px-4 py-6 bg-[#A52DFF] flex flex-col justify-center items-center rounded-lg gap-2">
                <img src="${logo}" class="w-[20px] h-[20px] opacity-80" />
                <div class="w-full bg-[#C273FF] h-[6px] rounded-full overflow-hidden">
                    <div class="h-full bg-[#E3B9FF] animate-loadingBar"></div>
                </div>
            </div>
        </div>
    `;
}
// Chatbot End