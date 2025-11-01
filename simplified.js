/* Variables */

/* Create players */

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
};

const player1 = new Player("Kaito", "X");
const player2 = new Player("Bey", "O");

/* Round logic */
let currentPlayer = player1;

function playRound() {
    const cell = document.querySelectorAll(".cell");

    cell.forEach(cell => {
        cell.addEventListener("click", (e) => {
            if (e.target.textContent === "") {
                // display move
                e.target.textContent = currentPlayer.marker;
                // change turn 
                currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
            } else {
                alert("Select an empty cell!");
            }
        });
    });

};

playRound();


