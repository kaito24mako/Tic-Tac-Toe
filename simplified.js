/* Create players */

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
};

const player1 = new Player("Kaito", "X");
const player2 = new Player("Bey", "O");



const cell = document.querySelectorAll(".cell");
cell.forEach(cell => {
    cell.addEventListener("click", (e) => {
        e.target.textContent = "X";
    })
})

