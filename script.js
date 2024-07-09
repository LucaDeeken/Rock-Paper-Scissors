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