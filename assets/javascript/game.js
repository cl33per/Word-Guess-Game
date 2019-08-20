$(document).ready(function (){

    var wordToMatch
    game.resetgame
    
var game = {
    possibleWords: ["florence", "paris", "madrid", "rome", "singapore", "dubai", "new york city",
        "shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
        "johannesburg", "istanbul", "warsaw", "jakarta", "kuala lumpur", "mexico city",
        "hong kong", "chicago", "seoul", "los angeles", "mumbai"
    ],
    guessedLetters: [],
    guessingWord: [],
    pausegame: false,
    numGuess: 10,
    wins: 0,
    maxGuess: 10,
    isAlpha: function (ch) {
        return /^[A-Z]$/i.test(ch);
    },
    updateDisplay: function () {
        document.getElementById("totalWins").innerText = this.wins
        document.getElementById("currentWord").innerText = this.guessingWord.join("")
        document.getElementById("remainingGuesses").innerText = this.numGuess
        document.getElementById("guessedLetters").innerText = this.guessedLetters.join(" ")
    },

    resetgame: function () {
        this.numGuess = 10
        this.pausegame = false

        // Get a new word
        wordToMatch = this.possibleWords[Math.floor(Math.random() * this.possibleWords.length)].toUpperCase()
        console.log(wordToMatch)

        // Reset word arrays
        this.guessedLetters = []
        this.guessingWord = []

        // Reset the guessed word
        for (var i = 0, j = wordToMatch.length; i < j; i++) {
            // Put a space instead of an underscore between multi word "words"
            if (wordToMatch[i] === " ") {
                this.guessingWord.push(" ")
            } else {
                this.guessingWord.push("_")
            }
        }

        // Update the Display
        this.dateDisplay()
    },
    checkForLetter: function (letter) {
        var foundLetter = false
        var correctSound = document.createElement("audio")
        var incorrectSound = document.createElement("audio")
        correctSound.setAttribute("src", "assets/sounds/stairs.mp3")
        incorrectSound.setAttribute("src", "assets/sounds/croak.mp3")

        // Search string for letter
        for (var i = 0, j = wordToMatch.length; i < j; i++) {
            if (letter === wordToMatch[i]) {
                this.guessingWord[i] = letter
                foundLetter = true
                correctSound.play()
                // If guessing word matches random word
                if (this.guessingWord.join("") === wordToMatch) {
                    // Increment # of wins
                    this.wins++
                    this.pausegame = true
                    this.updateDisplay()
                    setTimeout(this.resetgame, 5000)
                }
            }
        }

        if (!foundLetter) {
            incorrectSound.play()
            // Check if inccorrect guess is already on the list
            if (!this.guessedLetters.includes(letter)) {
                // Add incorrect letter to guessed letter list
                this.guessedLetters.push(letter)
                // Decrement the number of remaining guesses
                this.numGuess--
            }
            if (this.numGuess === 0) {
                // Display word before reseting game
                this.guessingWord = this.wordToMatch.split()
                this.pausegame = true
                setTimeout(this.resetgame, 5000)
            }
        }

        this.updateDisplay()

    }
}

// Wait for key press
document.onkeypress = function (event) {
    // Make sure key pressed is an alpha character
    if (game.isAlpha(event.key) && !game.pausegame) {
        game.checkForLetter(event.key.toUpperCase())
    }
}
});