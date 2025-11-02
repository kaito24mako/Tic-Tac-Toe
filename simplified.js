/* Variables */

/* Create players */

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
};

const player1 = new Player("Kaito", "X");
const player2 = new Player("Bey", "O");
let currentPlayer = player1;

/* Round logic */

function playRound() {
    const cell = document.querySelectorAll(".cell");
    const gameboard = Array.from(cell);
    let gameOver = false; 

    // Win condition 
    function getWin(marker) {
        const wins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        // if any of these inner arrays have all the same marker, return true
        return wins.some(combo => 
            combo.every(i => gameboard[i].textContent === marker)
        );
    };

    // Click handler
    cell.forEach(cell => {
        cell.addEventListener("click", (e) => {
            const cellTarget = e.target;
            if (gameOver === true) return;

            // check for empty cell 
            if (cellTarget.textContent === "") {

                // display move
                cellTarget.textContent = currentPlayer.marker;

                // check for win 
                if (getWin(currentPlayer.marker)) {
                    console.log(`${currentPlayer.name} won the round!`);
                    gameOver = true;
                };

                // change turn 
                currentPlayer = currentPlayer === player1 ? player2 : player1;

            // check for filled cell 
            } else {
                cellTarget.style.backgroundColor = "orangeRed";
                setTimeout(() => {
                    cellTarget.style.backgroundColor = "";
                }, 500);
            };
        });
    });
};

playRound();


