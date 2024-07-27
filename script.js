let humanScore = 0;
let computerScore = 0;

const scoresText = document.getElementById("scoresText");

const resultsComputer = document.createElement("span");
scoresText.appendChild(resultsComputer);

const resultsHuman = document.createElement("span");
scoresText.appendChild(resultsHuman);

const whoWins = document.getElementById("winner");

const results = document.createElement("span");
whoWins.appendChild(results);

const scores = document.getElementById("scores");

const pointsResults = document.createElement("span");
scores.appendChild(pointsResults);

const finalWinnerText = document.getElementById("finalWinnerText");
const winnerText = document.createElement("span");
finalWinnerText.appendChild(winnerText);

resultsHuman.classList.add("new");
resultsComputer.classList.add("new");
results.classList.add("new");
pointsResults.classList.add("new");
winnerText.classList.add("new");

function getComputerChoice () {
    let decimalRandomNumber = Math.random ();
    let randomNumber = decimalRandomNumber * 1000;
    if (randomNumber <= 333) {
        resultsComputer.textContent = "Computer: Rock ---";
        return "Rock";
    } else if (randomNumber <= 666) {
        resultsComputer.textContent = "Computer: Scissor ---";
        return "Scissor";
    } else if (randomNumber <= 1000) {
        resultsComputer.textContent = "Computer: Paper ---";
        return "Paper";
    }
}

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissor = document.querySelector("#Scissor");
const reset = document.querySelector("#Reset");

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


function resetClick () {
    humanScore = 0;
    computerScore = 0;
    pointsResults.textContent = "Computer: "+computerScore + " --- Your Score: "+humanScore;
    winnerText.textContent = "";
    rock.addEventListener ("click", rockClick);
    paper.addEventListener("click", paperClick);
    scissor.addEventListener("click", scissorClick);
}
reset.addEventListener("click", resetClick);




function getHumanChoice () {
    if (choicePaper === "rock") {
        resultsHuman.textContent = " You: Rock";
        return "Rock";
    } else if (choicePaper === "scissor") {
        resultsHuman.textContent = " You: Scissor";
        return "Scissor";
    } else if (choicePaper === "paper") {
        resultsHuman.textContent = " You: Paper";
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
        pointsResults.textContent = "Computer: "+computerScore + " --- Your Score: "+humanScore;
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