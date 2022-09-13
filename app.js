const playerOne ="G";
const playerTwo ="P";
const playingNow = playerOne;

const gameOver = false;
let grid;

let rows = 6;
let columns = 7;
let curColumns = [];   //keeps track of which column theyre currently at.

window.onload = function() {
    startGame();
}

function startGame (){
    grid = [];
    curColumns = [5, 5, 5, 5, 5, 5];

    for (let r =0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');

            let grid= document.createElement("div");
            grid.id =r.toString() + "-" + c.toString();
            grid.classList.add("tile");
            grid.addEventListener("click", setChip);
        }
        grid.push(row);
    }
}