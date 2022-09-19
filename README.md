# game

Connect 4 
This is a two player strategic game where each player has a color and successively drops the chip in a column to strategically get four chips in a line to win. The players have an opportunity to win the four chip alignment in three different ways, horizontally, vertically, and diagonally.

1.	I’m going to initialize the DOM elements
a.	the all the cells on the board.  Const aCells
b.	the top cells of the game board.     Const tCells
c.	the reset button. Const resetBtn
d.	the status of the game.  Const statSpan
2.	Initialize the Columns
3.	Initialize the Rows
4.	Initialize the variables
a.	gameOn- Displays when the game is on.
b.	purpleIsNext- displays when it’s turn to play.  Purple is supposed to go first.
5.	Create functions
a.	getClassListArray
b.	classList (is an array)
c.	rowClass
d.	rowIndex
e.	colIndex
f.	rowNumber
i.	const rowNumber = parseInt(rowIndex, 10);
1.	(coverts row number into a base 10 number)
g.	colNumber
h.	CellLocation ( get’s coordinates of cell)
i.	getOpCellForColumn
j.	clearColorFromTop
k.	getColorofCell
CHECK WINNER FUNCTIONS
i.	checkWinningCells
ii.	checkStatusOfGame
iii.	rowCheck
iv.	colCheck
v.	isWinningCombo

l.	EVENT HANDLERS
i.	handleCellMouseOver
ii.	handleCellMouseOut
iii.	handleCellClick

6.	ADD EVENT LISTENERS
a.	EVENT HANDLERS
i.	handleCellMouseOver
ii.	handleCellMouseOut
iii.	handleCellClick
7.	
a.	(Displays the chip when hovering over the cells with the cursor pointer.)
Const handleCellMouseOver = (e) => {
If (!gameOn) return;
Const cell = e.target;
Const [rowIndex, colIndex] = getCellLocation (cell);

Const tCell = tCells[colIndex];
tCell.classList.add(purpleIsNext ? ‘ purple’ :  ‘greenyellow’);

};

![Connect4Screen](https://user-images.githubusercontent.com/110206975/191031589-68266db3-491b-4f80-abd3-ee6bdc0b6a31.jpg)
