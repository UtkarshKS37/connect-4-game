# connect-4-game
This is a simple browser-based Connect 4 game built using HTML, CSS, and JavaScript. Two players take turns dropping coloured discs into a 7×6 grid, and the first player to form a straight line of four discs—horizontally, vertically, or diagonally—wins.

🧩 Project Overview:
The project recreates the classic Connect-4 board and game mechanics using basic web technologies. The interface allows players to click on any column to drop a disc, after which the game automatically updates the board, switches turns, and checks if someone has won. Once a winner is found or the board is full, the game ends and can be restarted.

⚙️ How the Game Works:
1. When a player clicks a column, the game finds the lowest available slot in that column.
2. A disc for the current player is placed visually on the board.
3. After each move, the script checks four directions from the placed disc:
    Horizontal
    Vertical
    Diagonal (left-to-right)
    Diagonal (right-to-left)
4. If four matching discs line up, that player wins.
5. If the board fills up without a winning combination, it results in a draw.
6. A reset mechanism clears the board and starts a new match.

🏗️ Role of Each File / Technology:
HTML (index.html)
i. Builds the structure of the game board.
ii. Defines each cell, the grid layout, and placeholders where discs appear.
iii. Includes buttons or UI controls such as “Restart”.

CSS (style.css)
i. Handles the entire visual design of the game.
ii. Styles the board, colours the discs for both players, and maintains spacing and alignment.
iii. Makes the game responsive so it works well on different screen sizes.

JavaScript (game.js)
i. Implements all the game logic.
ii. Keeps track of the current player, board state, and available slots.
iii. Handles player interactions (clicks), disc placement, turn switching, and win/draw detection.
iv. Controls the reset functionality and updates the UI based on game events.
