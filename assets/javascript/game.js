// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var userwonText = document.getElementById("userwon-text");
var userlostText = document.getElementById("userlost-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var gueesedLetters = [];
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function resetcolors() {
    document.getElementById("a").style.color = "#fff";
    document.getElementById("b").style.color = "#fff";
    document.getElementById("c").style.color = "#fff";
    document.getElementById("d").style.color = "#fff";
    document.getElementById("e").style.color = "#fff";
    document.getElementById("f").style.color = "#fff";
    document.getElementById("g").style.color = "#fff";
    document.getElementById("h").style.color = "#fff";
    document.getElementById("i").style.color = "#fff";
    document.getElementById("j").style.color = "#fff";
    document.getElementById("k").style.color = "#fff";
    document.getElementById("l").style.color = "#fff";
    document.getElementById("m").style.color = "#fff";
    document.getElementById("n").style.color = "#fff";
    document.getElementById("o").style.color = "#fff";
    document.getElementById("p").style.color = "#fff";
    document.getElementById("q").style.color = "#fff";
    document.getElementById("r").style.color = "#fff";
    document.getElementById("s").style.color = "#fff";
    document.getElementById("t").style.color = "#fff";
    document.getElementById("u").style.color = "#fff";
    document.getElementById("v").style.color = "#fff";
    document.getElementById("w").style.color = "#fff";
    document.getElementById("x").style.color = "#fff";
    document.getElementById("y").style.color = "#fff";
    document.getElementById("z").style.color = "#fff";
    gueesedLetters.length = 0;

}
// This function is run whenever the user presses a key.


document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userwonText.textContent = " ";


    // This logic determines the outcome of the game (win/loss/guesses left)
    if (userGuess === computerGuess) {
        wins++;
        userwonText.textContent = "Congrats you guessed the letter: " + computerGuess;
        guesses = 10;
        computerGuess = randomizeGuess();
        resetcolors();
    } else if ((gueesedLetters.includes(userGuess) === false)) {
        guesses--;
        document.getElementById(event.key).style.color = "#222";
    }
    if (guesses === 0) {
        losses++
        guesses = 10;
        computerGuess = randomizeGuess();
        resetcolors();
        document.getElementById(event.key).style.color = "#fff";
        userwonText.textContent = " ";
    }

    // Function randomizes comouterGuess
    function randomizeGuess(computerGuess) {
        return computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    // Adds letters to array, and filter duplicates.
    if (gueesedLetters.includes(userGuess) === false) gueesedLetters.push(userGuess);

    userChoiceText.textContent = "You chose: " + userGuess;
    // computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesText.textContent = guesses;
};
