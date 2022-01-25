//ul for player's guessed letters
const guessedLettersList = document.querySelector(".guessed-letters");
//"Guess!" button
const guessBtn = document.querySelector(".guess");;
//text input for player to guess a letter
const letter = document.querySelector(".letter");
//empty p for word  in progress
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
        return message.innerText = "Please guess a letter";
    } else if (input.length > 1) {
        return message.innerText = "Guess only 1 letter at a time";
    } else if (!input.match(acceptedLetter)) {
        return message.innerText = "Please enter a letter A-Z";
    } else {
        return input;
    }
};

//capture input
const makeGuess = function(letter) {
    const guess = letter.toUpperCase();
    if(guessedLetters.includes(guess) === true) {
        return message.innerText = "You've already guessed that letter. Try again!";
    } else {
        guessedLetters.push(guess);
    }
    console.log(guessedLetters);
};