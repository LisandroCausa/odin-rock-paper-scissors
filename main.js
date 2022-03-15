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

function playerPlay(){
    const input = prompt("Choose Rock, Paper or Scissors: ");
    return input;
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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function printResults(player = 0, computer = 0){
    console.log("----------------------------");
    console.log(`Player Score: ${player}`);
    console.log(`Computer Score: ${computer}`);
    if(player > computer)
    {
        console.log("Player wins!");
    }
    else if(player < computer)
    {
        console.log("Computer wins :(");
    }
    else
    {
        console.log("Draw");
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        const result = playRound(playerPlay(), computerPlay());
        console.log(result);
        alert(result);
        if(result.toUpperCase().includes("WIN"))
        {
            playerScore++;
        }
        else if(result.toUpperCase().includes("LOSE"))
        {
            computerScore++;
        }
    }
    printResults(playerScore, computerScore);
}

game();