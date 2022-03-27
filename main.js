function computerPlay(){
    const play = Math.floor(Math.random()*3) + 1;
    if(play === 1)
    {
        return "ROCK";
    }
    else if(play === 2)
    {
        return "PAPER";
    }
    return "SCISSORS";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection === computerSelection)
    {
        return "Draw";
    }
    else if((playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
            (playerSelection === "PAPER" && computerSelection === "ROCK") || 
            (playerSelection === "SCISSORS" && computerSelection === "PAPER"))
    {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function updateGame(){
    playerScoreUI.textContent = `Player Score: ${playerScore}`;
    computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    if(playerScore >= 5)
    {
        resultsText.textContent = 'You won!';
        finishGame();
    }
    else if(computerScore >= 5)
    {
        resultsText.textContent = 'Computer won';
        finishGame();
    }
}

function finishGame(){
    buttonsContainer.removeChild(rockButton);
    buttonsContainer.removeChild(paperButton);
    buttonsContainer.removeChild(scissorsButton);
    buttonsContainer.appendChild(newGameButton);
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    buttonsContainer.removeChild(newGameButton);
    buttonsContainer.appendChild(rockButton);
    buttonsContainer.appendChild(paperButton);
    buttonsContainer.appendChild(scissorsButton);
    resultsText.textContent = '';
    updateGame();
}

let playerScore = 0;
let computerScore = 0;

const buttonsContainer = document.querySelector('#buttons-container');
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const resultsText = document.querySelector('#results-text');
const playerScoreUI = document.querySelector('#player-score');
const computerScoreUI = document.querySelector('#computer-score');
const newGameButton = document.createElement('button');
newGameButton.textContent = 'NEW GAME';

rockButton.addEventListener('click', () => {
    resultsText.textContent = playRound("ROCK", computerPlay());
    updateGame();
});

paperButton.addEventListener('click', () => {
    resultsText.textContent = playRound('PAPER', computerPlay());
    updateGame();
});

scissorsButton.addEventListener('click', () => {
    resultsText.textContent = playRound('SCISSORS', computerPlay());
    updateGame();
});

newGameButton.addEventListener('click', resetGame);

finishGame();