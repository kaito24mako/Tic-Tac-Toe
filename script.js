// 3x3 gameboard
const gameboard = {
    gameboard: ["", "", "", "", "", "", "", "", ""]
};

// Create players
function createPlayer(name, mark) {
    // store into an object
    return {name, mark};
};
const player1 = createPlayer("Kaito", "X");
const player2 = createPlayer("Bey", "O");


