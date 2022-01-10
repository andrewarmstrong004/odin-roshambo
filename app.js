let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let options = [rock, paper, scissors];

function computerPlay() {
    let choice= Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    let playerWin = false;
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    let tie = `It is a tie, you both selected ${computerChoice}.`;
    let win = `You Win! ${playerChoice} beats ${computerChoice}`;
    let lose = `You Lose! ${computerChoice} beats ${playerChoice}`;
    let again = `You didn't make an appropriate choice.  please type either ${rock}, ${paper}, or ${scissors}.`;

    if(playerChoice === computerChoice) {
        return tie;
    } else if(playerChoice === rock) {
        if(computerChoice === paper) {
            return lose;
        } else {
            return win;
        }
    } else if(playerChoice === paper) {
        if(computerChoice === scissors) {
            return lose;
        } else {
            return win;
        }
    } else if(playerChoice === scissors) {
        if(computerChoice === rock) {
            return lose;
        } else {
            return win;
        }
    } else {
        return again;
    }
}

function game(numberOfGames = 5) {
    console.log(`Let's play ${numberOfGames} rounds of Rock, Paper, Scissors and see who wins?`);
    let score = 0;
    let round = 0;
    while(round < numberOfGames) {
        let playerSelection = prompt("Do you select Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if(result.search("Win") >= 0) {
            score += 1;
            round += 1;
        } else if(result.search("Lose") >= 0) {
            round += 1;
        }
    }
    console.log(`That concludes our game.  You managed to win ${score} out of ${numberOfGames}.`);
    if(score / numberOfGames >= .5) {
        console.log("You win!  Nice work!");
    } else {
        console.log("You lose!  Better luck next time!")
    }
}

game(5);