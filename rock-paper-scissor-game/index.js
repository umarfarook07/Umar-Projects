let score = {
    wins: 0,
    loses: 0,
    ties: 0
};

function computerMove() {
    let computerMove = '';
    let randomNumber = Math.random();

    if (randomNumber > 0 && randomNumber <= 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function playGame(playerMove) {
    let computerPickedMove = computerMove();

    let result = '';

    if (playerMove === 'rock') {
        if (computerPickedMove === 'rock') {
            result = 'tie';
        } else if (computerPickedMove === 'paper') {
            result = 'you lose';
        } else if (computerPickedMove === 'scissors') {
            result = 'you win';
        }
    } else if (playerMove === 'paper') {
        if (computerPickedMove === 'rock') {
            result = 'you win';
        } else if (computerPickedMove === 'paper') {
            result = 'tie';
        } else if (computerPickedMove === 'scissors') {
            result = 'you lose';
        }
    } else if (playerMove === 'scissors') {
        if (computerPickedMove === 'rock') {
            result = 'you lose';
        } else if (computerPickedMove === 'paper') {
            result = 'you win';
        } else if (computerPickedMove === 'scissors') {
            result = 'tie';
        }
    }

    if (result === 'you win') {
        score.wins++;
    } else if (result === 'you lose') {
        score.loses++;
    } else if (result === 'tie') {
        score.ties++;
    }
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `you <img class="move-img" src="/Umar-Projects/rock-paper-scissor-game/images/${playerMove}-emoji.png" alt=""><img class="move-img" src="/Umar-Projects/rock-paper-scissor-game/images/${computerPickedMove}-emoji.png" alt="">Computer`;
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins} loses:${score.loses} Ties: ${score.ties}`;
}
