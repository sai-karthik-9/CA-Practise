let player1Score = 0;
let player2Score = 0;
let player1Rounds = 0;
let player2Rounds = 0;

// Add background music
const backgroundMusic = new Audio('Main Theme.mp3');
backgroundMusic.loop = true;
backgroundMusic.play();

document.getElementById('player1Button').addEventListener('click', rollDice.bind(null, 'player1'));
document.getElementById('player2Button').addEventListener('click', rollDice.bind(null, 'player2'));

function rollDice(playerId) {
  if (playerId === 'player1' && player1Rounds >= 5) return;
  if (playerId === 'player2' && player2Rounds >= 5) return;

  const result = Math.floor(Math.random() * 6) + 1;
  const diceElement = document.getElementById(playerId === 'player1' ? 'player1Dice' : 'player2Dice');
  const scoreElement = document.getElementById(playerId === 'player1' ? 'player1Score' : 'player2Score');

  diceElement.src = "dice" + result + ".png";
  scoreElement.innerText = Number(scoreElement.innerText) + result;

  document.getElementById('diceSound').play();

  if (playerId === 'player1') {
    player1Score += result;
    player1Rounds++;
  } else {
    player2Score += result;
    player2Rounds++;
  }

  if (player1Rounds === 5 && player2Rounds === 5) {
    if (player1Score > player2Score) {
      document.getElementById("roundResult").innerText = "Player 1 wins!";
    } else if (player2Score > player1Score) {
      document.getElementById("roundResult").innerText = "Player 2 wins!";
    } else {
      document.getElementById("roundResult").innerText = "It's a tie!";
    }
    document.querySelectorAll('.rollButton').forEach(button => button.disabled = true);
  }
}
const playAgainBtn = document.querySelector(".play-again-box");
playAgainBtn.onclick = () => {
    window.location.reload();
};
function editNames() {
    player1 = prompt("Change Player1 Name")
    player2 = prompt("Change Player2 Name")



    if (player1.length < 1 || player2.length < 1) {
        alert('please enter valid name');
        return;
    }
    document.querySelector("p.Player1")
        .innerHTML = player1;



    document.querySelector("p.Player2")
        .innerHTML = player2;
}
