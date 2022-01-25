//ul for player's guessed letters
const guessedLettersList = document.querySelector(".guessed-letters");
//"Guess!" button
const guessBtn = document.querySelector(".guess");;
//text input for player to guess a letter
const letter = document.querySelector(".letter");
//empty p for word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//remaining guesses
const remaining = document.querySelector(".remaining");
//span inside p for remaining guesses
const remainingSpan = document.querySelector(".remaining span");
//message when player guesses a letter
const message = document.querySelector(".message");
//play again button
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
let guessedLetters = [];

//hide word
const updateText = function(word) {
    const hiddenWord =[];
    for(let letter of word) {
        hiddenWord.push("●");
    };
    wordInProgress.innerText = hiddenWord.join('');
};
updateText(word);

//submit user guess -- GUESS BUTTON
guessBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const userInput = letter.value;
    clearInput(letter);

    message.innerText = "";
    const isValid = checkInput(userInput);
    makeGuess(isValid);
});

const clearInput = function(input) {
    input.value = "";
};

//validate player's input
const checkInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input === "") {
        message.innerText = "Please guess a letter";
    } else if (input.length > 1) {
        message.innerText = "Guess only 1 letter at a time";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter A-Z";
    } else {
        return input;
    }
};

//capture input
const makeGuess = function(letter) {
    const guess = letter.toUpperCase();
    if(guessedLetters.includes(guess) === true) {
        message.innerText = "You've already guessed that letter. Try again!";
    } else {
        guessedLetters.push(guess);
        updateLettersList();
        updateWord(guessedLetters);
    }
    console.log(guessedLetters);
};

//display guessed letters
const updateLettersList = function() {
    guessedLettersList.innerHTML = "";
    for(let letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    };
};

//update word in progress
const updateWord = function(guessedLettersArray) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    let inProgress = [];

    for(let letter of wordArray) {
        if(guessedLetters.includes(letter)) {
            inProgress.push(letter);
        } else {
            inProgress.push("●");
        }
    }
    wordInProgress.innerText = inProgress.join('');
    checkWin();
};


//check if player won
const checkWin = function() {
    if(word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = "<p class='highlight'>You guessed correct the word! Congrats!</p>";
    }
};