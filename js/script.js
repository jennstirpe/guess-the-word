//ul for player's guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
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

const updateText = function(word) {
    const hiddenWord =[];
    for(let letter of word) {
        hiddenWord.push("●");
    };
    return hiddenWord.join('');
};

guessBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const userInput = letter.value;
    console.log(userInput);
    clearInput(letter);
});

const clearInput = function(input) {
    input.value = "";
}