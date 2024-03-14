var scores, roundScore, activePlayer, gamePlaying, currentPlayerTurn, currentPlayerTurns;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying && currentPlayerTurns < 5) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        document.getElementById('dice-' + activePlayer).style.display = 'block';
        document.getElementById('dice-' + activePlayer).src = 'dice-' + dice + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // Check if player won the game
        if (currentPlayerTurns === 5) {
            if (activePlayer === 0) {
                currentPlayerTurn = 1;
                currentPlayerTurns = 0;
                nextPlayer();
            } else {
                if (scores[0] > scores[1]) {
                    document.getElementById('name-0').textContent = 'Winner!';
                    document.querySelector('.player-0-panel').classList.add('winner');
                    document.querySelector('.player-1-panel').classList.remove('active');
                } else if (scores[0] < scores[1]) {
                    document.getElementById('name-1').textContent = 'Winner!';
                    document.querySelector('.player-1-panel').classList.add('winner');
                    document.querySelector('.player-0-panel').classList.remove('active');
                } else {
                    // Draw
                    document.getElementById('name-0').textContent = 'Draw!';
                    document.getElementById('name-1').textContent = 'Draw!';
                }
                gamePlaying = false;
            }
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    currentPlayerTurns++;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    currentPlayerTurn = 0;
    currentPlayerTurns = 0;

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
