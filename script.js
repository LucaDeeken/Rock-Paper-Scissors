let decimalRandomNumber = Math.random ();


function getComputerChoice () {
    let randomNumber = decimalRandomNumber * 100;
    if (randomNumber <= 33) {
        console.log("Rock");
    } else if (randomNumber <= 66) {
        console.log("Scissor");
    } else if (randomNumber <= 100) {
        console.log ("Paper");
    }
}

getComputerChoice ();


function getHumanChoice () {
    let humanChoice = prompt("Enter your Choice!");
    if (humanChoice === "Rock" || "ROCK" || "rock") {
        console.log("Rock")
    } else if (humanChoice === "Scissor" || "SCISSOR" || "scissor") {
        console.log ("Scissor");
    } else if (humanChoice === "Paper" || "PAPER" || "paper") {
        console. log ("Paper");
    } else {
        console.log("I didnt understand you"); getHumanChoice ();
    }
}

getHumanChoice ();