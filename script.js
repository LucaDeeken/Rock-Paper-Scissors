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

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissor = document.querySelector("#Scissor");

let choicePaper = "";
let choiceRock = "";
let choiceScissor = "";

rock.addEventListener("click", () => {
    choiceRock = "rock";
    return choiceRock;
});

paper.addEventListener("click", () => {
    choicePaper = "paper";
    return choicePaper;
});

scissor.addEventListener("click", () => {
    choiceScissor = "scissor";
    return choiceScissor;
});



function getHumanChoice () {
    if (choiceRock === "rock") {
        console.log("You: Rock");
        return "Rock";
    } else if (choiceScissor === "scissor") {
        console.log ("You: Scissor");
        return "Scissor";
    } else if (choicePaper === "paper") {
        console. log ("You: Paper");
        return "Paper";
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
//playGame();
console.log("Computer: "+computerScore + " --- Your Score: "+humanScore);
}

if (humanScore > computerScore) {
    console.log("You WIN!");
    alert("You win!");
} else if (humanScore < computerScore) {
    console.log("You LOSE!");
    alert("You lose!")
} else { 
    console.log("It's a tie!");
    alert("It's a tie!");
}


//Wenn auf Button geklickt wird Funktion humanChoice
// gethumanChoice muss in drei aufgespalten werden