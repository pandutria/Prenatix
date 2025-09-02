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

// Game Start
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const background = document.getElementById("background");
const player = document.getElementById("player");
const scoreBar = document.getElementById("scoreBar");
const scorePage = document.getElementById("scorePage");
const playBtn = document.getElementById("playBtn");
const playPage = document.getElementById("playPage");
const resultPage = document.getElementById("resultPage");
const resultCount = document.getElementById("resultCount");
const playAgainBtn = document.getElementById("playAgainBtn");
const backBtn = document.getElementById("backBtn");
const countdownPage = document.getElementById("countdownPage");
const countdown = document.getElementById("countdown");
const analog = document.getElementById("analog");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const rotatePage = document.getElementById("rotatePage");

// Food List
const food1 = document.getElementById("food1");
const food2 = document.getElementById("food2");
const food3 = document.getElementById("food3");
const food4 = document.getElementById("food4");
const food5 = document.getElementById("food5");
const food6 = document.getElementById("food6");
const food7 = document.getElementById("food7");
const food8 = document.getElementById("food8");
const food9 = document.getElementById("food9");
const food10 = document.getElementById("food10");
const food11 = document.getElementById("food11");
const food12 = document.getElementById("food12");
const food13 = document.getElementById("food13");
const food14 = document.getElementById("food14");
const junkFood1 = document.getElementById("junkFood1");
const junkFood2 = document.getElementById("junkFood2");
const junkFood3 = document.getElementById("junkFood3");
const junkFood4 = document.getElementById("junkFood4");

// Audio
const backsoundAudio = document.getElementById("backsoundAudio");
const cointAudio = document.getElementById("cointAudio");
const successAudio = document.getElementById("successAudio");
const countdownAudio = document.getElementById("countdownAudio");

// Global States
let currentFood = 0;
let scoreCount = 0; 
let gameOver = true;
let countdownCount = 5;
scorePage.style.display = "none";
resultPage.style.display = "none";
countdownPage.style.display = "none";
analog.style.display = "none";
rotatePage.style.display = "none";

// Play Game
function goFullscreen() {
    const elem = document.documentElement; 
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
}

playBtn.addEventListener("click", () => {
    goFullscreen();
    resizeCanvas();
    scorePage.style.display = "flex";
    playPage.style.display = "none";
    countdownPage.style.display = "flex";
    countDownInterval();
});

playAgainBtn.addEventListener("click", () => {
    window.location.reload();
});

backBtn.addEventListener("click", () => {
    window.location.href = "./pilih.html";
});

function countDownInterval() {
    const countdownInterval = setInterval(() => {
        countdownCount -= 1;
        countdownAudio.play();
        countdown.textContent = countdownCount;

        if (countdownCount == 0) {
            clearInterval(countdownInterval);
            countdownPage.style.display = "none";
            backsoundAudio.play();
            gameOver = false;
        }
    }, 1000);
}

// Data
const foodData = [
    { id: 1, img: food1, type: "oke" },
    { id: 2, img: junkFood4, type: "no" },
    { id: 3, img: food2, type: "oke" },
    { id: 4, img: food3, type: "oke" },
    { id: 5, img: food4, type: "oke" },
    { id: 6, img: food5, type: "oke" },
    { id: 7, img: junkFood2, type: "no" },
    { id: 8, img: food6, type: "oke" },
    { id: 9, img: food7, type: "oke" },
    { id: 10, img: food8, type: "oke" },
    { id: 11, img: food9, type: "oke" },
    { id: 12, img: food10, type: "oke" },
    { id: 13, img: junkFood3, type: "no" },
    { id: 14, img: food11, type: "oke" },
    { id: 15, img: food12, type: "oke" },
    { id: 16, img: food13, type: "oke" },
    { id: 17, img: food14, type: "oke" },
    { id: 18, img: junkFood1, type: "no" },
];

// Props
const playerProp = {
    x: (canvas.width - 160) / 2,
    y: canvas.height - 320,
    sizeX: 160,
    sizeY: 320,
    speed: 6,
}

const keys = {
    a: false,
    d: false,
    arrowLeft: false,
    arrowRight: false
}

const foodProp = {
    size: 90,
    x: (canvas.width - 60) /2,
    y: 0,
    speed: 3
}

// Draw
function drawBackground() {
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
    context.drawImage(player, playerProp.x, playerProp.y, playerProp.sizeX, playerProp.sizeY);
    
    if (!gameOver) {
        updatePlayerMove();
    }
}

function drawFood() {
    context.drawImage(foodData[currentFood].img, foodProp.x, foodProp.y, foodProp.size, foodProp.size);
    updateFoodMove();
}

// Argument
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    playerProp.x = (canvas.width - playerProp.sizeX) / 2;
    playerProp.y = canvas.height - playerProp.sizeY;

    if (window.innerWidth < 700) {
        rotatePage.style.display = "flex";
    }

    if (canvas.width < 1300) {
        playerProp.sizeX = 80;
        playerProp.sizeY = 150;
        playerProp.x = (canvas.width - playerProp.sizeX) / 2;
        playerProp.y = canvas.height - playerProp.sizeY;

        foodProp.x = (canvas.width - 60) /2;
        foodProp.size = 50;
        foodProp.speed = 2;
        
        analog.style.display = "flex";
    }
}

window.addEventListener("keydown", (e) => {
    if (e.key.toLocaleLowerCase() == "a") return keys.a = true;
    if (e.key.toLocaleLowerCase() == "d") return keys.d = true;
    if (e.key == "ArrowLeft") return keys.arrowLeft = true;
    if (e.key == "ArrowRight") return keys.arrowRight = true;
});

window.addEventListener("keyup", (e) => {
    if (e.key.toLocaleLowerCase() == "a") return keys.a = false;
    if (e.key.toLocaleLowerCase() == "d") return keys.d = false;
    if (e.key == "ArrowLeft") return keys.arrowLeft = false;
    if (e.key == "ArrowRight") return keys.arrowRight = false;
});

rightBtn.addEventListener("touchstart", () => {
    keys.d = true;
});

leftBtn.addEventListener("touchstart", () => {
    keys.a = true;
});

rightBtn.addEventListener("touchend", () => {
    keys.d = false;
});

leftBtn.addEventListener("touchend", () => {
    keys.a = false;
});

function updatePlayerMove() {
    if (keys.a || keys.arrowLeft) {
        playerProp.x = playerProp.x -= playerProp.speed;
    } else if (keys.d || keys.arrowRight) {
        playerProp.x = playerProp.x += playerProp.speed;
    }

    if (playerProp.x + playerProp.sizeX < 0) {
        playerProp.x = canvas.width;
    } else if (playerProp.x > canvas.width) {
        playerProp.x = -playerProp.sizeX;
    }
}

function updateFoodMove() {
    foodProp.y += foodProp.speed;
}

function gameCollision(a, b) {
    return (
        a.x < b.x + b.size &&
        a.x + a.sizeX > b.x &&
        a.y < b.y + b.size &&
        a.y + a.sizeY > b.y 
    );
}

function updateGameOver() {
    gameOver = true;
    analog.style.display = "none";
    backsoundAudio.pause();
    successAudio.play();
    canvas.style.display = "none";
    scorePage.style.display = "none"
    resultPage.style.display = "flex";
    resultCount.textContent = scoreCount;
}

// Score Check
function checkScoreCollision() {
    if (gameCollision(playerProp, foodProp)) {
        if (foodData[currentFood].type == "oke") {
            cointAudio.play();
            scoreCount += 10;
            scoreBar.textContent = `Skor: ${scoreCount}`;
        } else {
            updateGameOver();
        }

        currentFood = Math.floor(Math.random() * Number(foodData.length));
        foodProp.x = Math.floor(Math.random() * (canvas.width - foodProp.size));
        foodProp.y = 0;
    } else if (foodProp.y >= canvas.height) {
        currentFood = Math.floor(Math.random() * Number(foodData.length));
        foodProp.x = Math.floor(Math.random() * (canvas.width - foodProp.size));
        foodProp.y = 0;
    }
}


// Gameloop
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawPlayer();
    
    if (!gameOver) {
        drawFood();
        checkScoreCollision();
    }
    requestAnimationFrame(gameLoop);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
gameLoop();
// Game End