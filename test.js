/* Create players */

function getPlayerNames() {
    const dialog = document.querySelector("dialog");
    const form = document.querySelector("#form-container");

    const player1Name = document.querySelector("#player1Name");
    const player2Name = document.querySelector("#player2Name");

    const player1NameInput = form.elements["player1"];
    const player2NameInput = form.elements["player2"];

    // player constructor
    function Player(name, marker, score) {
        this.name = name;
        this.marker = marker;
        this.score = score;
    };

    // create players
    function addPlayer1(name, marker, score) {
        player1 = new Player(name, marker, score);
        player1Name.textContent = player1.name;
    };

    function addPlayer2(name, marker, score) {
        player2 = new Player(name, marker, score);
        player2Name.textContent = player2.name;
    };

    // show form on load
    window.addEventListener("load", () => {
        dialog.showModal();
    });

    // submit players
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        addPlayer1(player1NameInput.value, "X", 0);
        addPlayer2(player2NameInput.value, "O", 0);

        dialog.close();
    });
};

getPlayerNames();

/* Round logic */

function playRound() {
    const cell = document.querySelectorAll(".cell");
    const playBtn = document.querySelector("#playBtn");
    const player1Score = document.querySelector("#player1Score");
    const player2Score = document.querySelector("#player2Score");
    const gameboard = Array.from(cell);
    let currentPlayer = player1;
    let stopGame = true; 

    // Show initial scores
    player1Score.textContent = 0;
    player2Score.textContent = 0;

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
                        player1Score.textContent = `${currentPlayer.score}`
                        : player2Score.textContent = `${currentPlayer.score}`;
                    
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

    // Buttons
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
// INPUT NAMES
// DRAW CONDITION 
// RESTART GAME BUTTON 

