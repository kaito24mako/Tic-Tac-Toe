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
            const cellTarget = e.target;
            
            if (cellTarget.textContent === "") {
                // display move
                cellTarget.textContent = currentPlayer.marker;
                // change turn 
                currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
            } else {
                // if clicked on filled cell
                cellTarget.style.backgroundColor = "orangeRed";
                setTimeout(() => {
                    cellTarget.style.backgroundColor = "";
                }, 500);
            };
        });
    });

};

playRound();


