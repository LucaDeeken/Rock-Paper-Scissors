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
    if (humanChoice === "Rock" ||humanChoice === "ROCK" ||humanChoice === "rock") {
        console.log("Rock")
    } else if (humanChoice === "Scissor" ||humanChoice === "SCISSOR" ||humanChoice === "scissor") {
        console.log ("Scissor");
    } else if (humanChoice === "Paper" ||humanChoice === "PAPER" ||humanChoice === "paper") {
        console. log ("Paper");
    } else {
        console.log("Wrong input!"); 
        alert("That choice isn't part of the game! :( Do you want to try again?");
        getHumanChoice ();
    }
}

getHumanChoice ();