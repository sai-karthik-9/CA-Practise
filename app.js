const playerNamesElement = document.getElementById("player-names");
const player1Box = document.querySelectorAll(".player")[0];
const player2Box = document.querySelectorAll(".player")[1];
const player1RollButton = document.getElementById("player1-roll");
const player2RollButton = document.getElementById("player2-roll");
const player1ScoreText = document.querySelector(".player1-score");
const player2ScoreText = document.querySelector(".player2-score");
const replayBox = document.querySelector(".replay");

let round = 0;
let player1Points = 0;
let player2Points = 0;

player1RollButton.addEventListener("click", () => rollDice(1));
player2RollButton.addEventListener("click", () => rollDice(2));

function rollDice(playerNumber) {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const playerHandImg = (playerNumber === 1) ? player1HandImg : player2HandImg;
    const playerScoreText = (playerNumber === 1) ? player1ScoreText : player2ScoreText;

    playerHandImg.src = `assets/dice${rollResult}.png`;

    if (playerNumber === 1) {
        player1Points += rollResult;
        playerScoreText.textContent = player1Points;
    } else {
        player2Points += rollResult;
        playerScoreText.textContent = player2Points;
    }

    round++;
    if (round === 5) {
        endGame();
    }
}

function endGame() {
    player1RollButton.disabled = true;
    player2RollButton.disabled = true;
    if (player1Points > player2Points) {
        playerNamesElement.textContent = "Player 1 Wins!";
    } else if (player2Points > player1Points) {
        playerNamesElement.textContent = "Player 2 Wins!";
    } else {
        playerNamesElement.textContent = "It's a Tie!";
    }
    replayBox.style.visibility = "visible";
}

const playAgainBtn = document.querySelector(".play-again-box");
playAgainBtn.onclick = () => {
    window.location.reload();
};
