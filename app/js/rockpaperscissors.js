////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move != null) {
        return move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {
    if (move != null) {
        return move;
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins != 5 && computerWins != 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        console.log("You chose " + playerMove);
        console.log("The computer chose " + computerMove);

        if (winner === 'player') {
            playerWins += 1;
            console.log("You won!! Your current score is " + playerWins + ". The computer's score is " + computerWins + ".");
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log("The computer won! Your current score is " + playerWins + ". The computer's score is " + computerWins + ".");
        } else {
            console.log("The result is a tie. Let's play again.");
        }
    }
    return [playerWins, computerWins];
}


function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins != x && computerWins != x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        console.log("You chose " + playerMove);
        console.log("The computer chose " + computerMove);

        if (winner === 'player') {
            playerWins += 1;
            console.log("You won! Your current score is " + playerWins + ". The computer's score is " + computerWins + ".");
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log("The computer wins. Your current score is " + playerWins + ". The computer's score is " + computerWins + ".");
        } else {
            console.log("It's a draw! Let's play again!");
        }
    }
}
