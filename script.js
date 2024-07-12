let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let decimalRandomNumber = Math.random ();
    let randomNumber = decimalRandomNumber * 1000;
    if (randomNumber <= 333) {
        console.log("Computer: Rock");
        return "Rock";
    } else if (randomNumber <= 666) {
        console.log("Computer: Scissor");
        return "Scissor";
    } else if (randomNumber <= 1000) {
        console.log ("Computer: Paper");
        return "Paper";
    }
}




function getHumanChoice () {
    let humanChoice = prompt("Enter your Choice!");
    if (humanChoice === "Rock" ||humanChoice === "ROCK" ||humanChoice === "rock") {
        console.log("You: Rock");
        return "Rock";
    } else if (humanChoice === "Scissor" ||humanChoice === "SCISSOR" ||humanChoice === "scissor") {
        console.log ("You: Scissor");
        return "Scissor";
    } else if (humanChoice === "Paper" ||humanChoice === "PAPER" ||humanChoice === "paper") {
        console. log ("You: Paper");
        return "Paper";
    } else {
        console.log("Wrong input!"); 
        alert("That choice isn't part of the game! :( Do you want to try again? Press F5!");
        // getHumanChoice ();
    }
}



function playGame() {
    function playRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        console.log("Paper beats Rock!");
        } else if (humanSelection === "Rock" && computerSelection === "Scissor") {
        humanScore++;
        console.log("Rock beats Scissor!");
        } else if (humanSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a tie! No points for anyone!")
        } else if (humanSelection === "Paper" && computerSelection === "Scissor") {
        computerScore++;
        console.log("Scissor beats Paper!");
        } else if (humanSelection === "Paper" && computerSelection === "Rock") {
        humanScore++;
        console.log("Paper beats Rock!");
        } else if (humanSelection === "Paper" && computerSelection === "Paper") {
        console.log("It's a tie! No points for anyone!");
        } else if (humanSelection === "Scissor" && computerSelection === "Rock") {
        computerScore++;
        console.log("Rock beats Scissor!");
        } else if (humanSelection === "Scissor" && computerSelection === "Paper") {
        humanScore++;
        console.log("Scissor beats Paper!");
        } else if (humanSelection === "Scissor" && computerSelection === "Paper") {
        console.log("It's a tie! No points for anyone!");
        }
    }
    playRound();
}



for (let i = 0; i < 5; i++) {
playGame();
console.log("Computerscore: "+computerScore);
console.log("Humanscore: "+humanScore);
}

if (humanScore > computerScore) {
    console.log("You win!");
    alert("You win!");
} else if (humanScore < computerScore) {
    console.log("You lose!");
    alert("You lose!")
} else { 
    console.log("It's a tie!");
    alert("It's a tie!");
}

//playRound(humanSelection, computerSelection);
  

//Ganzer Prozess in einer Funktion
//Speichern des Ergebnisses
//Funktion wird 5x wiederholt
//Summieren des Ergebnisses
//Erklärung des Gewinners