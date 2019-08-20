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
    possibleWords: ["Aaron Stack", "Abomination", "Absorbing Man", "Abyss", "Adam Destine", "Adam Warlock", "Aegis", "Agent Brand", "Agent X", "Agent Zero", "Agents of Atlas", "Aginar","Ajak", "Ajaxis", "Akemi", "Alain", "Albert Cleary", "Albion", "Alex Power", "Alex Wilder", "Alexa Mendez", "Alexander Pierce", "Alice", "Alicia Masters", "Alpha Flight", "Alvin Maker", "Amadeus Cho", "Amanda Sefton", "Amazoness", "American Eagle", "Amiko", "Amora", "Amphibian", "Amun", "Ancient One", "Angel", "Angela", "Anita Blake", "Anne Marie Hoag", "Annihilus", "Anole", "Anthem", "Apocalypse", "Aqueduct", "Arachne", "Araٌa", "Arcade", "Arcana", "Archangel", "Arclight", "Ares", "Argent", "Armadillo", "Armor", "Armory", "Arnim Zola", "Arsenic", "Artiee", "Asgardian", "Asylum", "Atlas", "Aurora", "Avalanche", "Avengers", "Azazel", "Banshee", "Baron Strucker", "Baron Zemo", "Baroness S'Bak", "Barracuda", "Bart Rozum", "Bastion", "Batroc the Leaper", "Battering Ram", "Beak", "Beast", "Becatron", "Bedlam", "Beef", "Beetle", "Ben Grimm", "Ben Parker", "Ben Reilly", "Ben Urich", "Bengal", "Beta-Ray Bill", "Betty Brant", "Betty Ross", "Beyonder","Big Bertha", "Big Wheel", "Bill Hollister", "Bishop", "Black Bird", "Black Bolt", "Black Cat", "Black Crow", "Black Knight", "Black Panther", "Black Queen", "Black Tarantula", "Black Tom", "Black Widow", "Black Widow/Natasha Romanoff", "Blackheart", "Blacklash", "Blackout", "Blade", "Blastaar", "Blazing Skull", "Blindfold", "Blink", "Blizzard", "Blob", "Blockbuster", "Blok", "Bloke", "Blonde Phantom", "Bloodaxe", "Bloodscream", "Bloodstorm", "Bloodstrike", "Blue Blade", "Blue Marvel", "Blue Shield", "Blur", "Bob, Agent of Hydra", "Boom Boom", "Boomer", "Boomerang", "Box", "Bride of Nine Spiders", "Bromley", "Brood", "Brother Voodoo", "Brotherhood of Evil Mutants", "Brotherhood of Mutants", "Bruce Banner", "Brute", "Bucky", "Bug", "Bulldozer", "Bullseye", "Bushwacker", "Butterfly", "Cable", "Calamity", "Caliban", "Callisto", "Calypso", "Cammi", "Cannonball", "Cap'n Oz", "Captain America", "Captain Britain", "Captain Cross", "Captain Flint", "Captain Marvel", "Captain Midlands", "Captain Stacy", "Captain Universe", "Cardiac", "Caretaker", "Cargill", "Carlie Cooper", "Carmella Unuscione", "Carnage", "Carol Danvers", "Carol Hines", "Cassandra Nova", "Catseye", "Cecilia Reyes", "Celestials", "Centennial", "Centurions", "Cerebro", "Cerise", "Ch'od", "Chamber", "Chameleon", "Champions", "Changeling", "Charles Xavier", "Charlie Campion", "Chase Stein", "Chat", "Chimera", "Chores MacGillicudy", "Christian Walker", "Chronomancer", "ClanDestine", "Clea", "Clint Barton", "Cloak", "Cloud 9", "Cobalt Man", "Colleen Wing", "Colonel America", "Colossus", "Confederates of the Curious", "Constrictor", "Contessa", "Controller", "Cornelius", "Corsair", "Cosmo", "Cottonmouth", "Count Nefaria", "Countess", "Crimson Crusader", "Crimson Dynamo", "Crimson King", "Crossbones", "Crule", "Crusher Hogan", "Crystal", "Cuckoo", "Curt Conners", "Cuthbert", "Cyber", "Cyclops", "Cypher", "D'Ken Neramani", "Dagger", "Daily Bugle", "Daimon Hellstrom", "Daken", "Dakota North", "Damage Control", "Dani Moonstar", "Danny Rand", "Daredevil", "Dargo Ktor", "Dark Avengers", "Dark Beast", "Dark Phoenix", "Darkhawk", "Darkstar", "Darwin", "Dazzler", "Deacon Frost", "Dead Girl", "Deadpool", "Death", "Deathbird", "Deathcry", "Deathlok", "Deathstrike", "Debra Whitman", "Debrii", "Deena Pilgrim", "Defenders", "Demogoblin", "Destiny", "Detective Soap", "Deviants", "Devil Dinosaur", "Devos", "Dexter Bennett", "Diablo", "Diamondback", "Dinah Soar", "Dirk Anger", "Doc Samson", "Doctor Doom", "Doctor Faustus", "Doctor Octopus", "Doctor Spectrum", "Doctor Strange", "Dog Brother #1", "Domino", "Donald Blake", "Doomsday Man", "Doop", "Doorman", "Dorian Gray", "Dormammu", "Dr. Strange", "Dracula", "Dragon Lord", "Dragon Man", "Drax", "Dreadnoughts", "Dreaming Celestial", "Druig", "Dum Dum Dugan", "Dust", "Earthquake", "Echo", "Eddie Brock", "Eddie Lau", "Ego", "Electro", "Elektra", "Elite", "Elixir", "Emma Frost", "Empath", "Emplate", "Enchantress", "Ender Wiggin", "Energizer", "Epoch", "Erik the Red", "Eternals", "Eternity", "Excalibur", "Exiles", "Exodus", "Expediter", "Ezekiel", "Ezekiel Stane", "Fabian Cortez", "Falcon", "Falcon/Sam Wilson", "Fallen One", "Famine", "Fantastic Four", "Fantastick Four", "Fantomex", "Fat Cobra", "Felicia Hardy", "Fenris", "Feral", "Fin Fang Foom", "Firebird", "Firebrand", "Firedrake", "Firelord", "Firestar", "Fixer", "Flatman", "Flying Dutchman", "Foggy Nelson", "Force Works", "Forearm", "Forge", "Forgotten One", "Frank Castle", "Frankenstein's Monster", "Franklin Richards", "Franklin Storm", "Freak", "Frightful Four", "Frog Thor","Gabe Jones", "Galactus", "Galia", "Gambit", "Gamma Corps", "Gamora", "Gargoyle", "Garia", "Garrison Kane", "Gateway", "Gauntlet", "Geiger", "Gene Sailors", "Generation X", "Genesis", "George Stacy", "Gertrude Yorkes", "Ghost Rider", "Giant Girl"],

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
                document.getElementById(event.key).style.color = "#222";
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
                document.getElementById(event.key).style.color = "#222";
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
        game.resetColors()
    },
    updateDisplay: function () {
        document.getElementById("Wins").innerText = game.wins
        document.getElementById("currentWord").innerText = game.guessingWord.join(" ")
        document.getElementById("remainingGuesses").innerText = numGuess
        document.getElementById("guessedLetters").innerText = game.guessedLetters.join(" ")

    },
    // Functions Outside of onkeup
    resetColors: function () {
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