let humanScore = 0;
let computerScore = 0;

const div = document.querySelector("div");

const resultsComputer = document.createElement("span");
div.appendChild(resultsComputer);

const resultsHuman = document.createElement("span");
div.appendChild(resultsHuman);

const results = document.createElement("span");
div.appendChild(results);

const pointsResults = document.createElement("span");
div.appendChild(pointsResults);

const winnerText = document.createElement("span");
div.appendChild(winnerText);

function getComputerChoice () {
    let decimalRandomNumber = Math.random ();
    let randomNumber = decimalRandomNumber * 1000;
    if (randomNumber <= 333) {
        resultsComputer.textContent = "Computer: Rock";
        return "Rock";
    } else if (randomNumber <= 666) {
        resultsComputer.textContent = "Computer: Scissor";
        return "Scissor";
    } else if (randomNumber <= 1000) {
        resultsComputer.textContent = "Computer: Paper";
        return "Paper";
    }
}

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissor = document.querySelector("#Scissor");

let choicePaper = "";



function rockClick () {
    choicePaper = "rock";
    playGame ();
}

rock.addEventListener ("click", rockClick);

function paperClick () {
    choicePaper = "paper";
    playGame ();
}

paper.addEventListener("click", paperClick);

function scissorClick () {
    choicePaper = "scissor";
    playGame ();
}

scissor.addEventListener("click", scissorClick);





function getHumanChoice () {
    if (choicePaper === "rock") {
        resultsHuman.textContent = "You: Rock";
        return "Rock";
    } else if (choicePaper === "scissor") {
        resultsHuman.textContent = "You: Scissor";
        return "Scissor";
    } else if (choicePaper === "paper") {
        resultsHuman.textContent = "You: Paper";
        return "Paper";
    } 
}



function playGame() {
    function playRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        results.textContent = "Paper beats Rock!";
        } else if (humanSelection === "Rock" && computerSelection === "Scissor") {
        humanScore++;
        results.textContent = "Rock beats Scissor!";
        } else if (humanSelection === "Rock" && computerSelection === "Rock") {
        results.textContent = "It's a tie! No points for anyone!";
        } else if (humanSelection === "Paper" && computerSelection === "Scissor") {
        computerScore++;
        results.textContent = "Scissor beats Paper!";
        } else if (humanSelection === "Paper" && computerSelection === "Rock") {
        humanScore++;
        results.textContent = "Paper beats Rock!";
        } else if (humanSelection === "Paper" && computerSelection === "Paper") {
        results.textContent = "It's a tie! No points for anyone!";
        } else if (humanSelection === "Scissor" && computerSelection === "Rock") {
        computerScore++;
        results.textContent = "Rock beats Scissor!";
        } else if (humanSelection === "Scissor" && computerSelection === "Paper") {
        humanScore++;
        results.textContent = "Scissor beats Paper!";
        } else if (humanSelection === "Scissor" && computerSelection === "Scissor") {
        results.textContent = "It's a tie! No points for anyone!";
        }
        pointsResults.textContent = "Computer: "+computerScore + " --- Your Score: "+humanScore
    }
    playRound();
    if (humanScore === 5) {
        winnerText.textContent = "You WIN!";
        rock.removeEventListener("click", rockClick);
        paper.removeEventListener("click", paperClick);
        scissor.removeEventListener("click", scissorClick);
    } else if (computerScore === 5) {
        winnerText.textContent = "You LOSE!";
        rock.removeEventListener("click", rockClick);
        paper.removeEventListener("click", paperClick);
        scissor.removeEventListener("click", scissorClick);
    }
}



if (humanScore === 5) {
    winnerText.textContent = "You WIN!";
} else if (computerScore === 5) {
    winnerText.textContent = "You LOSE!";
}


// function loop () {
//    for (let i = 0; i < 5; i++) {
//    playGame();
//    console.log("Computer: "+computerScore + " --- Your Score: "+humanScore);
//    }
//    if (humanScore > computerScore) {
//        console.log("You WIN!");
//        alert("You win!");
//    } else if (humanScore < computerScore) {
//        console.log("You LOSE!");
//        alert("You lose!")
//    } else { 
//        console.log("It's a tie!");
//        alert("It's a tie!");
//    }
//    }
//
// ursprüngliche Loop Funktion