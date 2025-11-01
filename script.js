// Create players 
function createPlayer(name, mark) {
    // store into an object
    return {name, mark};
};
const player1 = createPlayer("Kaito", "X");
const player2 = createPlayer("Bey", "O");

// Game logic 
const gameLogic = (function () {

    // create 3x3 gameboard
    const gameboardObj = {
        gameboard: ["", "", "", "", "", "", "", "", ""]
    };

    // select player to go first
    //! if previous winner won, then they go first
    //! else other player goes first
    //! else if no winner, choose at random 

    // declare winner or draw 
    for (i = 0; i < gameboard.length; i++) {

    }
})
