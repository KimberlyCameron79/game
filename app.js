
 // players
const playerOne ='greenyellow';
const playerTwo = 'purple';

// DOM Elements
const aCells = document.querySelectorAll('.cell:not(.row-top)');
const tCells = document.querySelectorAll('.cell.row-top');
const resetBtn = document.querySelector('.reset');
const statSpan = document.querySelector('.status');

// columns
const column0 = [aCells[35], aCells[28], aCells[21], aCells[14], aCells[7], aCells[0], tCells[0]];
const column1 = [aCells[36], aCells[29], aCells[22], aCells[15], aCells[8], aCells[1], tCells[1]];
const column2 = [aCells[37], aCells[30], aCells[23], aCells[16], aCells[9], aCells[2], tCells[2]];
const column3 = [aCells[38], aCells[31], aCells[24], aCells[17], aCells[10], aCells[3], tCells[3]];
const column4 = [aCells[39], aCells[32], aCells[25], aCells[18], aCells[11], aCells[4], tCells[4]];
const column5 = [aCells[40], aCells[33], aCells[26], aCells[19], aCells[12], aCells[5], tCells[5]];
const column6 = [aCells[41], aCells[34], aCells[27], aCells[20], aCells[13], aCells[6], tCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];


// rows
const topRow = [tCells[0], tCells[1], tCells[2], tCells[3], tCells[4], tCells[5], tCells[6]];
const row0 = [aCells[0], aCells[1], aCells[2], aCells[3], aCells[4], aCells[5], aCells[6]];
const row1 = [aCells[7], aCells[8], aCells[9], aCells[10], aCells[11], aCells[12], aCells[13]];
const row2 = [aCells[14], aCells[15], aCells[16], aCells[17], aCells[18], aCells[19], aCells[20]];
const row3 = [aCells[21], aCells[22], aCells[23], aCells[24], aCells[25], aCells[26], aCells[27]];
const row4 = [aCells[28], aCells[29], aCells[30], aCells[31], aCells[32], aCells[33], aCells[34]];
const row5 = [aCells[35], aCells[36], aCells[37], aCells[38], aCells[39], aCells[40], aCells[41]];
const rows = [row0, row1, row2, row3, row4, row5, topRow];


// variables
let gameOn = true;
let purpIsNext = true;


// Functions
const classListArray = (cell) => {
  const classList = cell.classList;
  return [...classList];
};

const cellLocation = (cell) => {
  const classList = classListArray(cell);

  const rowClass = classList.find(className => className.includes('row'));
  const colClass = classList.find(className => className.includes('col'));
  const rowIndex = rowClass[4];
  const colIndex = colClass[4];
  const rowNumber = parseInt(rowIndex, 10);
  const colNumber = parseInt(colIndex, 10);

  return [rowNumber, colNumber];
};

const getOpCellForColumn = (colIndex) => {
  const column = columns[colIndex];
  const colWoTop = column.slice(0, 6);

  for (const cell of colWoTop) {     //colWoTop = column without top
    const classList = classListArray(cell);
    if (!classList.includes('purple') && !classList.includes('greenyellow')) {
      return cell;
    }
  }

  return null;
};

const clrColorFrTop = (colIndex) => {       //Clear Color From Top
  const tCell = tCells[colIndex];
  tCell.classList.remove('purple');
  tCell.classList.remove('greenyellow');
};

const colorOfCell = (cell) => {
  const classList = classListArray(cell);
  if (classList.includes('purple')) return 'purple';
  if (classList.includes('greenyellow')) return 'greenyellow';
  return null;
};

const checkWinningCells = (cells) => {
  if (cells.length < 4) return false;

  gameOn = false;
  for (const cell of cells) {
    cell.classList.add('win');
  }
  statSpan.textContent = `${purpIsNext ? 'purple' : 'greenyellow'} has won!`
  return true;
};

const statusOfGame = (cell) => {
  const color = colorOfCell(cell);
  if (!color) return;
  const [rowIndex, colIndex] = cellLocation(cell);

  // Check horizontally
 
//   let winningCells = [0, 1, 2, 3];
//                     [7, 8, 9, 10],
//                     [14, 15, 16, 17],
//                     [21, 22, 23, 24],
//                     [28, 29, 30, 31],
//                     [35, 36, 37, 38],
//                     [3, 4, 5, 6],
//                     [10, 11, 12, 13],
//                     [17, 18, 19, 20],
//                     [24, 25, 26, 27],
//                     [31, 32, 33, 34],
//                     [38, 39, 40, 41],
//                     [1, 2, 3, 4],
//                     [8, 9, 10, 11],
//                     [15, 16, 17, 18],
//                     [22, 23, 24, 25],
//                     [29, 30, 31, 32],
//                     [36, 37, 38, 39],
//                     [2, 3, 4, 5],
//                     [9, 10, 11, 12],
//                     [16, 17, 18, 19],
//                     [23, 24, 25, 26],
//                     [30, 31, 32, 33],
//                     [37, 38 ,39, 40],
//                     [3, 4, 5, 6],
//                     [10, 11, 12, 13],
//                     [17, 18, 19, 20],
//                     [24, 25, 26, 27],
//                     [31, 32, 33, 34],
//                     [38, 39, 40, 41]
//
  let winningCells = [cell];                     ;
  let rowCheck = rowIndex;  //checks the left side of the board of cells. 
  let colCheck = colIndex - 1;
  while (colCheck >= 0) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      colCheck--;
    } else {
      break;
    }
  }
    colCheck = colIndex + 1;  //checks the right side of board of cells.
  while (colCheck <= 6) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      colCheck++;
    } else {
      break;
    }
  }

  let isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;


  // Check vertically
  winningCells = [cell];                     ;
  rowCheck = rowIndex -1;  //checks the top side of the board of cells. 
  colCheck = colIndex;
  while (rowCheck >= 0) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      rowCheck--;
    } else {
      break;
    }
  }
    rowCheck = rowIndex + 1;  //checks the bottom side of board of cells.
  while (rowCheck <= 5) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      rowCheck++;
    } else {
      break;
    }
  }
  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;



  // Check diagonally /
  winningCells = [cell];
  rowCheck = rowIndex + 1;
  colCheck = colIndex - 1;
  while  (colCheck >= 0 && rowCheck <= 5) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      rowCheck++;
      colCheck--;
    } else {
      break;
    }
  }
  rowCheck = rowIndex - 1;
  colCheck = colIndex + 1;
  while  (colCheck <= 6 && rowCheck >= 0) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      rowCheck--;
      colCheck++;
    } else {
      break;
    }
  }
  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;


  // Check diagonally \
  winningCells = [cell];
  rowCheck = rowIndex - 1;
  colCheck = colIndex - 1;
  while (colCheck  >= 0 && rowCheck >= 0) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      rowCheck--;
      colCheck--;
    } else {
      break;
    }
  }
  rowCheck = rowIndex + 1;
  colCheck = colIndex + 1;
  while (colCheck <= 6 && rowCheck <= 5) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfCell(cellCheck) === color) {
      winningCells.push(cellCheck);
      rowCheck++;
      colCheck++;
    } else {
      break;
    }
  }
  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  // Check to see if we have a tie
  const rowsWoTop = rows.slice(0, 6);    //removed the last element of the array tCell rowsWoTop= rows without tops
  for (const row of rowsWoTop) {
    for (const cell of row) {
      const classList = classListArray(cell);
      if (!classList.includes('purple') && !classList.includes('greenyellow')) {
        return cell;
      }
    }
  }

  gameOn = false;
  statSpan.textContent = "Game is a tie!";
};



// Event Handlers
const handleCellMouseOver = (e) => {
  if (!gameOn) return;
  const cell = e.target;
  const [rowIndex, colIndex] = cellLocation(cell);

  const tCell = tCells[colIndex];
  if(purpIsNext){
    tCell.classList.add('purple');
  }else{
    tCell.classList.add('greenyellow');
  }
    
};

const handleCellMouseOut = (e) => {
  const cell = e.target;
  const [rowIndex, colIndex] = cellLocation(cell);
  clrColorFrTop(colIndex);
  
  const tCell = tCells[colIndex];
  tCell.classList.remove('purple');
  tCell.classList.remove('greenyellow');
};


const handleCellClick = (e) => {
  if (!gameOn) return;
  const cell = e.target;
  const [rowIndex, colIndex] = cellLocation(cell);

  const oCell = getOpCellForColumn(colIndex);
 

  if (!oCell) return;
    //after player drops chip in column the next player goes.
  oCell.classList.add(purpIsNext ? 'purple' : 'greenyellow');
 
  purpIsNext = !purpIsNext;
  clrColorFrTop(colIndex);
  const tCell = tCells[colIndex];
  tCell.classList.add(purpIsNext ? 'purple' : 'greenyellow');   
  
};
// statusOfGame(oCell);
  if (gameOn) {
    
   



  };




// Adding Event Listeners
for (const row of rows) {
  for (const cell of row) {
    cell.addEventListener('mouseover', handleCellMouseOver);
    cell.addEventListener('mouseout', handleCellMouseOut);
    cell.addEventListener('click', handleCellClick);
  }
  
}

resetBtn.addEventListener('click', () => {
  for (const row of rows) {
    for (const cell of row) {
      cell.classList.remove('greenyellow');
      cell.classList.remove('purple');
      cell.classList.remove('win');
    }
  }
  gameOn = true;
  purpIsNext = true;
  statSpan.textContent = '';
});