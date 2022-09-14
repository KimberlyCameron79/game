const playerOne ="G";
const playerTwo ="P";
const playingNow = playerOne;

let playing = false;
let startGame;

let gameOver = false;
let board;

let rows = 6;
let columns = 7;
// let curColumns = [];   //keeps track of which column theyre currently at.

window.onload = function() {
    startGame();
}

function startGame (){
    board = [];
    // curColumns = [5, 5, 5, 5, 5, 5];

    for (let r =0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');

            let cell= document.createElement("div");
            cell.id =r.toString() + "-" + c.toString();
            cell.classList.add("cell");
            cell.addEventListener("click", setChip);
            document.getElementById("board").append(cell);
            //next line is the function to click on cell to set the color chip.
        }
        board.push(row);
    }
}
    //Defining the setChip function
function setChip() {
    if (gameOver) {   //if gameover, do nothing.
        return;
    }
        //locates the coordinates of clicked cell.
    let target = this.id.split("-"); //locate the coordinate and split's the cell id into coordinates. Turns the delimiter into to string values.
    
    let r = parseInt(target[0]);  //converts the string into a number.
    let c = parseInt(target[1]);

    board[r][c] = playingNow;  //updates the board 
    let cell = this;  //updates in html
    if (playingNow == playerOne) {
        cell.classList.add("player-one");   //when this player is playing it will place this color chip in that cell.
        playingNow = playerTwo;
    }
    else {
        cell.classList.add("player-two");
        playingNow = playerOne;
    }

}