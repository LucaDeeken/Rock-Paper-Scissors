
let randomNumber = Math.random ();


function getComputerChoice () {
    let randomNumber2 = randomNumber * 100;
    if (randomNumber2 <= 33) {
        console.log("Rock");
    } else if (randomNumber2 <= 66) {
        console.log("Scissor");
    } else if (randomNumber2 <= 100) {
        console.log ("Paper");
    }
}

getComputerChoice ();
// Zufallszahl (a) 
// if number = =< 33.33, console.log("ROCK"); if number = =< 66.66, Scissor; if number =<100 Paper;