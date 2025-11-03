/* Variables */
let player1;
let player2;

/* Create players */

function getPlayerNames() {
    const formDialog = document.querySelector(".form-dialog-container");
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
        formDialog.showModal();
    });

    // submit players and play game 
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        addPlayer1(player1NameInput.value, "X", 0);
        addPlayer2(player2NameInput.value, "O", 0);

        formDialog.close();
        playRound();
    });
};

getPlayerNames();

/* Round logic */

function playRound() {
    const cell = document.querySelectorAll(".cell");
    const player1Score = document.querySelector("#player1Score");
    const player2Score = document.querySelector("#player2Score");
    const playBtn = document.querySelector("#playBtn");
    
    const gameboard = Array.from(cell);
    let currentPlayer = player1;
    let stopGame = false;

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

        // find the first combo of inner arrays that has all matching markers
        const winningCombo = wins.find(combo => 
            combo.every(i => gameboard[i].textContent === marker)
        );

        // return winning array or null 
        return winningCombo || null;
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
                const winCombo = getWin(currentPlayer.marker);
                if (winCombo) {

                    // winning cells change in color 
                    winCombo.forEach(i => {
                        gameboard[i].style.backgroundColor = "lightgreen";
                        gameboard[i].style.transition = "background-color 0.5s";
                    });
        
                    // display new scores
                    currentPlayer.score++;
                    currentPlayer === player1 
                        ? player1Score.textContent = `${currentPlayer.score}`
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

    // Next Round button 
    playBtn.addEventListener("click", () => {
        stopGame = false;
        currentPlayer = player1;
        cell.forEach(c => c.textContent = "");
        cell.forEach(c => c.style.backgroundColor = "");
    });
};