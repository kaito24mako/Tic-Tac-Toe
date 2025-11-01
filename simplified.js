/* Variables */

/* Create players */

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
};

const player1 = new Player("Kaito", "X");
const player2 = new Player("Bey", "O");

/* Handler for player's move */
let currentPlayer = player1;

function displayMove() {
    const cell = document.querySelectorAll(".cell");

    cell.forEach(cell => {
        if (currentPlayer === player1) {
            cell.addEventListener("click", (e) => {
                e.target.textContent = "X";
            });
        } else {
            cell.addEventListener("click", (e) => {
                e.target.textContent = "O";
            });
        };
    });
};

displayMove();


