// Create players 
function createPlayer(name, mark) {
    // store into an object
    return {name, mark};
};
const player1 = createPlayer("Kaito", "X");
const player2 = createPlayer("Bey", "O");

// Game logic 
const gameLogic = (function () {
     let currentPlayer = player1;

    // create 3x3 gameboard
    const gameboardObj = {
        gameboard: ["", "", "", "", "", "", "", "", ""]
    };

    // logic for every round 
    for (i = 0; i < gameboard.length; i++) {

        // player takes turn 
        currentPlayer // MOVES THIS TURN 
        
        // check for win/draw conditions after each move 

        // change player's turn 
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else (currentPlayer === player2) {
            currentPlayer = player1;
        };
    }

    // decide when the game ends 

    // play again or reset 
})();
