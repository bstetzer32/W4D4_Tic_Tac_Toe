let boardState = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "x"
window.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("tic-tac-toe-board");
        .addEventListener("click", (event) => {
            let squareID = event.target.id;

            if (!squareID.startsWith('square-')) return;

            const sqareIndex = parseInt(squareID[squareID.length - 1]);

            
    });

});