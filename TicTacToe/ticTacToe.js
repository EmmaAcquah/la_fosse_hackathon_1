const {readline, rl, askQuestion} = require("../utilities/helper")

let lastInput = 'O'

console.log(`___|___|___`);
console.log(`___|_${lastInput}_|___`);
console.log(`___|___|___`);


// Main async function
const main = async () => {
    readline;
    rl;
    // let hello = await askQuestion("Can you say hello?")
    // console.log(hello);

    // input counter = 0
    let gameBoard = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    }

    
    let turn = -1;

    // no winning states
    while (!winningState) {
        console.log(object);
        
        let userInput = await askQuestion("Enter a number to represent your move")

        // display gameBoard - ?
        // add number position on the grid - into the object
        // userInput 

        // check user input is valid - i.e. if the position's value is 0
        // let valid = 
        
        // if (!Object.values(gameBoard).indexOf(userInput)){
            
        // }

        
        while (!Object.values(gameBoard).indexOf(userInput)) {//'do below'};
            switch(userInput) {
                case 1:
                    gameBoard[userInput] = turn;
                    break;
                case 2:
                    gameBoard[userInput] = turn;
                    break;
                case 3:
                    gameBoard[userInput] = turn;
                    break;
                case 4:
                    gameBoard[userInput] = turn;
                    break;
                case 5:
                    gameBoard[userInput] = turn;
                    break;
                case 6:
                    gameBoard[userInput] = turn;
                    break;
                case 7:
                    gameBoard[userInput] = turn;
                    break;
                case 8:
                    gameBoard[userInput] = turn;
                    break;
                case 9:
                    gameBoard[userInput] = turn;
                    break;
                default:
                // code block
                // Error handling or end of turns ?
            }
        }
        updateTurn(turn); // Check - ?
    }

    rl.close();
}

function checkPosition() {

}

main();

function updateTurn(turn) {
    if (turn === +1) {
        turn = -1;
    } else if (turn === -1) {
        turn = +1;
    } else {
        throw 'Invalid turn value';
    }
}