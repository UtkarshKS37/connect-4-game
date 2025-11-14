// script.js

const rows = 6;
const cols = 7;
const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'player1';
let gameBoard = Array(rows).fill().map(() => Array(cols).fill(null));

// Initialize the board with clickable cells
function initBoard() {
  board.innerHTML = ''; // Clear the board HTML
  gameBoard = Array(rows).fill().map(() => Array(cols).fill(null)); // Reset the game board array
  currentPlayer = 'player1';

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', handleMove);
      board.appendChild(cell);
    }
  }
}

// Handle a player's move
function handleMove(event) {
  const col = parseInt(event.target.dataset.col);

  // Find the first empty row in the selected column
  let row = rows - 1;
  while (row >= 0 && gameBoard[row][col] !== null) {
    row--;
  }

  if (row < 0) return; // Column is full

  gameBoard[row][col] = currentPlayer;
  const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  cell.classList.add(currentPlayer);

  if (checkWin(row, col)) {
    setTimeout(() => alert(`${currentPlayer === 'player1' ? 'Red' : 'Yellow'} wins!`), 10);
    board.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', handleMove));
    return;
  }

  currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
}

// Check for a win
function checkWin(row, col) {
  const directions = [
    { dr: 0, dc: 1 },   // Horizontal
    { dr: 1, dc: 0 },   // Vertical
    { dr: 1, dc: 1 },   // Diagonal \
    { dr: 1, dc: -1 },  // Diagonal /
  ];

  for (const { dr, dc } of directions) {
    let count = 1;

    for (let i = 1; i < 4; i++) {
      const r = row + dr * i;
      const c = col + dc * i;
      if (r >= 0 && r < rows && c >= 0 && c < cols && gameBoard[r][c] === currentPlayer) {
        count++;
      } else break;
    }

    for (let i = 1; i < 4; i++) {
      const r = row - dr * i;
      const c = col - dc * i;
      if (r >= 0 && r < rows && c >= 0 && c < cols && gameBoard[r][c] === currentPlayer) {
        count++;
      } else break;
    }

    if (count >= 4) return true;
  }

  return false;
}

// Reset the game
resetButton.addEventListener('click', initBoard);

initBoard();
