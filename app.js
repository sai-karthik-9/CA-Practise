var scores = [0, 0, 0, 0];
var currentPlayer = 0;
var roundsPlayed = 0;
var maxRounds = 5;

function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    var playerScore = scores[currentPlayer] + dice;
    document.getElementById('score-' + (currentPlayer + 1)).textContent = playerScore;
    playDiceSound();

    if (playerScore >= 100) {
        gameOver();
    } else {
        currentPlayer = (currentPlayer + 1) % 4; // Rotate to next player
        if (currentPlayer === 0) {
            roundsPlayed++;
            if (roundsPlayed >= maxRounds) {
                endGame();
            }
        }
    }
}

function gameOver() {
    var winner = scores.indexOf(Math.max(...scores)) + 1;
    document.getElementById('game-over-text').textContent = 'Player ' + winner + ' wins!';
    document.getElementById('game-over-screen').classList.remove('hidden');
    pauseBackgroundMusic();
}

function endGame() {
    var winner = scores.indexOf(Math.max(...scores)) + 1;
    document.getElementById('game-over-text').textContent = 'Player ' + winner + ' wins!';
    document.getElementById('game-over-screen').classList.remove('hidden');
    pauseBackgroundMusic();
}

function playDiceSound() {
    var diceSound = document.getElementById('dice-sound');
    diceSound.currentTime = 0;
    diceSound.play();
}

function pauseBackgroundMusic() {
    var backgroundMusic = document.getElementById('background-music');
    backgroundMusic.pause();
}

function showInstructions() {
    document.getElementById('instructions-screen').classList.remove('hidden');
    pauseBackgroundMusic();
}

function hideInstructions() {
    document.getElementById('instructions-screen').classList.add('hidden');
}
