let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

let options = [rock, paper, scissors];

function computerPlay() {
    let choice= Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(playerSelection) {
    let playerChoice = playerSelection;
    let computerChoice = computerPlay();

    let tie = `It is a tie, you both selected ${computerChoice}.`;
    let win = `You Win! ${playerChoice} beats ${computerChoice}.`;
    let lose = `You Lose! ${computerChoice} beats ${playerChoice}.`;
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
    let display_text = `Let's play ${numberOfGames} rounds of Rock, Paper, Scissors and see who wins!`;
    display_text = display_text.concat("  Do you select Rock, Paper, or Scissors?");
    let score = 0;
    let round = 0;
    
    let result_text = document.getElementById('results');
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection = button.id.charAt(0).toUpperCase() + button.id.slice(1);
            let result = playRound(playerSelection);

            display_text = result;
            
            if(result.search("Win") >= 0) {
                score += 1;
                round += 1;
            } else if(result.search("Lose") >= 0) {
                round += 1;
            }
            
            if(round == numberOfGames) {
                display_text = display_text.concat(`  That concludes our game.  You managed to win ${score} out of ${numberOfGames}.`);
                if(score / numberOfGames >= .5) {
                    display_text = display_text.concat("  You win!  Nice work!");
                } else {
                    display_text = display_text.concat("  You lose!  Better luck next time!");
                }
            } else {
                display_text = display_text.concat(`  The score is currently ${score} to ${round - score}.`);
            }
            result_text.textContent = display_text;
        });
    });
    result_text.textContent = display_text;

}

window.onload = game(5);