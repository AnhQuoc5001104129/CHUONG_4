let board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

let currentPlayer = 'X';

function showBoard() {
    document.getElementById('board').style.display = 'grid';
}

function hideBoard() {
    document.getElementById('board').style.display = 'none';
}

function toggleBoard() {
    let boardElement = document.getElementById('board');
    if (boardElement.style.display === 'none' || boardElement.style.display === '') {
        boardElement.style.display = 'grid';
    } else {
        boardElement.style.display = 'none';
    }
}

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.querySelectorAll('.row')[row].children[col].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
