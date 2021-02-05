let squareValues = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "x"
let gameStatus = "";

let gameStatusCheck = () => {
    if (squareValues[0] === squareValues[1] && squareValues[1] === squareValues[2] && squareValues[2] !== '') {
        // do something because a player won on the first row!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[3] === squareValues[4] && squareValues[4] === squareValues[5] && squareValues[5] !== '') {
        // do something because a player won on the second row!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[6] === squareValues[7] && squareValues[7] === squareValues[8] && squareValues[8] !== '') {
        // do something because a player won on the third row!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[0] === squareValues[3] && squareValues[3] === squareValues[6] && squareValues[6] !== '') {
        // do something because a player won on the first column!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[1] === squareValues[4] && squareValues[4] === squareValues[7] && squareValues[7] !== '') {
        // do something because a player won on the second column!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[2] === squareValues[5] && squareValues[5] === squareValues[8] && squareValues[8] !== '') {
        // do something because a player won on the third column!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[0] === squareValues[4] && squareValues[4] === squareValues[8] && squareValues[8] !== '') {
        // do something because a player won on the left-right diagonal!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6] && squareValues[6] !== '') {
        // do something because a player won on the right-left diagonal!
        document.getElementById("game-status").innerHTML = `${currentPlayer} is the Winner!!!`
    }
}
window.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("tic-tac-toe-board")
        .addEventListener("click", (event) => {
            let squareID = event.target.id;

            if (!squareID.startsWith('square-')) return;

            const squareIndex = Number.parseInt(squareID[squareID.length - 1]);

            if(squareValues[squareIndex] !== "") return;

            let image = document.createElement("img") ;
            image.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayer}.svg`;

            event.target.appendChild(image);

            squareValues[squareIndex] = currentPlayer;
            console.log(squareValues);

            //after each click check to see if it's a win
            //
            

            gameStatusCheck();
            if(currentPlayer === "x") {
                currentPlayer = "o";
            } else {
                currentPlayer = "x";
            }
         
    });


});
