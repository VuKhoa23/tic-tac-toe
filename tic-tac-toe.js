const cells = document.querySelectorAll('.cell');
const statusField = document.querySelector('#statusField');
const resetButton = document.querySelector('#resetButton');

let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

let turn = '';
let endGame = false;

initialize();

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        cellClicked(index);
    });
});

resetButton.addEventListener('click', resetGame);

function initialize() {
    cells.forEach(cell => cell.textContent = '');
    turn = 'X';
    displayTurn();
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    turn = 'X';
    displayTurn();
    endGame = false;
}

function displayTurn() {
    statusField.textContent = turn + ' turn';
}

function checkWinner() {
    for (let i = 0; i < winCondition.length; i++) {
        let cnt = 0;
        for (let j = 0; j < winCondition[i].length - 1; j++) {
            if (cells[winCondition[i][j]].textContent === cells[winCondition[i][j + 1]].textContent && cells[winCondition[i][j]].textContent !== '') {
                cnt++;
            }
        }
        if (cnt == 2) {
            return true
        }
    }
    return false;
}

function cellClicked(index) {
    if (!endGame && cells[index].textContent == '') {
        cells[index].textContent = turn;
        if (checkWinner()) {
            statusField.textContent = turn + ' WINS';
            endGame = true;
        } else {
            switchTurn();
            displayTurn();
        }
    }
}

function switchTurn() {
    if (turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
}