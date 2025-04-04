// Import dice roll for random number logic
const {diceRoll} = require("../DiceRoll/diceRoll")
const {readline, rl, askQuestion} = require("../utilities/helper")

// Main async function
const main = async () => {
    readline;
    rl;
    
    console.log(`Guess the number`);

    let roll = diceRoll(10)
    let guessCounter = 0;

    let guessInput = await askQuestion(`Guess a number between 1 and 10:  `); // Pause for user input
    
    while (guessInput != roll) { 
        while (guessCounter < 10) {
            if (guessInput > roll) {
                console.log("Sorry, wrong guess. Try a lower number!\n")
            } else if (guessInput < roll) {
                console.log("Sorry, wrong guess. Try a higher number!\n");
            } else {
                break
            }
            guessInput = await askQuestion('Please guess again:  ') // Pause for user input
            guessCounter++;
        }
    }

    if (guessInput == roll) {
        console.log(`You guessed the correct number in ${guessCounter} guesses!\n`);
    } else {
        console.log(`Sorry you ran out of guesses! The number was ${roll}\n`);
    }
    rl.close();
}
// Call the main async function
main();