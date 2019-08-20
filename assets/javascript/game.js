
// Globabl Variables
var numGuess
var wordToMatch

// Game Object
var game = {
    wins: 0,
    maxGuess: 10,
    pauseGame: false,
    guessedLetters: [],
    gussingWord: [],
    possibleWords: ["florence", "paris", "madrid", "rome", "singapore", "dubai", "new york city",
        "shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
        "johannesburg", "istanbul", "warsaw", "jakarta", "kuala lumpur", "mexico city",
        "hong kong", "chicago", "seoul", "los angeles", "mumbai"
    ],
    // Checks if the letter pressis is A-Z
    isLetter: function (ch) {
        return /^[A-Z]$/i.test(ch);
    },
    // This is the next method to check if the letter is in the word
    letterCheck: function (letter) {
        var foundLetter = false
        var correctSound = document.createElement("audio")
        var incorrectSound = document.createElement("audio")
        correctSound.setAttribute("src", "assets/sounds/stairs.mp3")
        incorrectSound.setAttribute("src", "assets/sounds/croak.mp3")

        // Search string for letter
        for (var i = 0, j = wordToMatch.length; i < j; i++) {
            if (letter === wordToMatch[i]) {
                game.guessingWord[i] = letter
                foundLetter = true
                correctSound.play()
                // logic for word guesssed to match wordToMatch
                if (game.guessingWord.join("") === wordToMatch) {
                    // Increment # of wins
                    game.wins++
                    game.pauseGame = true
                    game.updateDisplay()
                    setTimeout(game.resetGame, 5000)
                }
            }
        }

        if (!foundLetter) {
            incorrectSound.play()
            // Checks the array for duplicates
            if (!game.guessedLetters.includes(letter)) {
                game.guessedLetters.push(letter)
                numGuess--
            }
            if (numGuess === 0) {
                // Updates the display when the game is over showing the word
                game.guessingWord = wordToMatch.split()
                game.pauseGame = true
                setTimeout(game.resetGame, 5000)
            }
        }

        game.updateDisplay()

    },
    resetGame: function () {
        numGuess = game.maxGuess
        game.pauseGame = false

        // Get a new word
        wordToMatch = game.possibleWords[Math.floor(Math.random() * game.possibleWords.length)].toUpperCase()
        console.log(wordToMatch)

        // Array reset
        game.guessedLetters = []
        game.guessingWord = []

        // Reset guessingword
        for (var i = 0, j = wordToMatch.length; i < j; i++) {
            // Put a space instead of an underscore between multi word "words"
            if (wordToMatch[i] === " ") {
                game.guessingWord.push(" ")
            } else {
                game.guessingWord.push("_")
            }
        }
        game.updateDisplay()
    },
    updateDisplay: function () {
        document.getElementById("totalWins").innerText = game.wins
        document.getElementById("currentWord").innerText = game.guessingWord.join(" ")
        document.getElementById("remainingGuesses").innerText = numGuess
        document.getElementById("guessedLetters").innerText = game.guessedLetters.join(" ")
    }
}

$(document).ready(function () {
game.resetGame();
// Wait for key press
document.onkeypress = function (event) {
    // Make sure key pressed is an alpha character
    if (game.isLetter(event.key) && !game.pauseGame) {
        game.letterCheck(event.key.toUpperCase())
    }
}
})