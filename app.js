const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const scoreElement = document.getElementById('score-value');
const gameOverText = document.getElementById('game-over-text');

const backgroundMusic = document.getElementById('background-music');
const catchSound = document.getElementById('catch-sound');

const basket = document.getElementById('basket');
const fallingFruit = document.getElementById('falling-fruit');

let score = 0;
let gameIsOver = false;

// Game logic
function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    backgroundMusic.play();
    spawnFallingFruit();
}

function gameOver() {
    gameIsOver = true;
    gameScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    backgroundMusic.pause();
    gameOverText.innerText = 'Game Over! Your score: ' + score;
}

function restartGame() {
    gameIsOver = false;
    score = 0;
    scoreElement.innerText = score;
    gameOverScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    backgroundMusic.play();
    spawnFallingFruit();
}

function showStartScreen() {
    instructionsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

function spawnFallingFruit() {
    const randomX = Math.random() * (window.innerWidth - 30);
    fallingFruit.style.left = randomX + 'px';
    fallingFruit.style.top = 0;
    moveFallingFruit();
}

function moveFallingFruit() {
    const speed = 5;
    const interval = setInterval(() => {
        if (!gameIsOver) {
            const currentTop = parseInt(fallingFruit.style.top);
            fallingFruit.style.top = currentTop + speed + 'px';

            if (currentTop > window.innerHeight - 50) {
                if (parseInt(fallingFruit.style.left) > parseInt(basket.style.left) &&
                    parseInt(fallingFruit.style.left) < parseInt(basket.style.left) + 80) {
                    score++;
                    scoreElement.innerText = score;
                    catchSound.play();
                } else {
                    clearInterval(interval);
                    gameOver();
                }
            }
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// Start the game
showStartScreen();
