/* Variables */

/* Create players */

function Player(name, marker, score) {
    this.name = name;
    this.marker = marker;
    this.score = score;
};

const player1 = new Player("Kaito", "X", 0);
const player2 = new Player("Bey", "O", 0);
let currentPlayer = player1;

/* Round logic */

function playRound() {
    const cell = document.querySelectorAll(".cell");
    const playBtn = document.querySelector("#nextRound");
    const player1Score = document.querySelector("#player1Score");
    const player2Score = document.querySelector("#player2Score");
    const gameboard = Array.from(cell);
    let stopGame = true; 

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
            if (stopGame === true) return;

            // check for empty cell 
            if (cellTarget.textContent === "") {

                // display move
                cellTarget.textContent = currentPlayer.marker;

                // check for win 
                if (getWin(currentPlayer.marker)) {
                    console.log(`${currentPlayer.name} won the round!`);

                    // display new scores
                    currentPlayer.score++;
                    currentPlayer === player1 ? 
                        player1Score.textContent = `${currentPlayer.name}: ${currentPlayer.score} point`
                        : player2Score.textContent = `${currentPlayer.name}: ${currentPlayer.score} point`;
                    
                    // stop round 
                    stopGame = true;
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

    // Play / Next round button 
    cell.forEach(cell => {
        let playBtnClicked = false;
        playBtn.textContent = "Play";

        // initial play button 
        playBtn.addEventListener("click", () => {
            stopGame = false; 
            playBtnClicked = true;
            playBtn.textContent = "Next Round";
        });

        // following next round button 
        if (playBtnClicked = true) {
            playBtn.addEventListener("click", () => {
                stopGame = false;
                cell.textContent = "";
                currentPlayer = player1;
            });
        };
    });
};

playRound();


// ADD:
// DRAW CONDITION 
// PLAY BUTTON 
// INPUT NAMES


