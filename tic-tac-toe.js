let squareValues = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "x"
let gameStatus = "";
let giveUpButton = document.getElementById("give-up");
const saveGame = () => {
    //Current player
    //Game status (array)
    localStorage.setItem("player", currentPlayer);
    localStorage.setItem("game-status", JSON.stringify(squareValues));
}
const reloadGame = () => {
    //Set current player from local storage
    //Deserialize game status
    //Set squareValues to equal deserialized game status
    //Itterate through squareValues to set squares
    currentPlayer = localStorage.getItem("player")
    squareValues = JSON.parse(localStorage.getItem("game-status"));
    squareValues.forEach((square, i) => {
        if (square !== "") {
            
        }
    });
}

let gameStatusCheck = () => {

    if (squareValues[0] === squareValues[1] && squareValues[1] === squareValues[2] && squareValues[2] !== '') {
        // do something because a player won on the first row!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[3] === squareValues[4] && squareValues[4] === squareValues[5] && squareValues[5] !== '') {
        // do something because a player won on the second row!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[6] === squareValues[7] && squareValues[7] === squareValues[8] && squareValues[8] !== '') {
        // do something because a player won on the third row!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[0] === squareValues[3] && squareValues[3] === squareValues[6] && squareValues[6] !== '') {
        // do something because a player won on the first column!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[1] === squareValues[4] && squareValues[4] === squareValues[7] && squareValues[7] !== '') {
        // do something because a player won on the second column!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[2] === squareValues[5] && squareValues[5] === squareValues[8] && squareValues[8] !== '') {
        // do something because a player won on the third column!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[0] === squareValues[4] && squareValues[4] === squareValues[8] && squareValues[8] !== '') {
        // do something because a player won on the left-right diagonal!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    if (squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6] && squareValues[6] !== '') {
        // do something because a player won on the right-left diagonal!
        gameStatus = `${currentPlayer} is the Winner!!!`
    }
    let boardFull = true;
    for (let i = 0; i < squareValues.length; i++) {
        if(squareValues[i] === "") {
            boardFull = false;
        }
    }



    if (boardFull && gameStatus === "") {
        gameStatus = `Draw Game!!`
    }

    document.getElementById("game-status").innerHTML = gameStatus;

    if(gameStatus !== "") {
        document
            .getElementById("new-game")
            .disabled = false;
            giveUpButton.disabled = true;
    }
}
window.addEventListener("DOMContentLoaded", () => {
    reloadGame();
    document
        .getElementById("tic-tac-toe-board")
        .addEventListener("click", (event) => {
            document.getElementById("give-up").disabled = false;

            if (gameStatus !== "") return;
            let squareID = event.target.id;

            if (!squareID.startsWith('square-')) return;

            const squareIndex = Number.parseInt(squareID[squareID.length - 1]);

            if(squareValues[squareIndex] !== "") return;

            let image = document.createElement("img") ;
            image.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayer}.svg`;

            event.target.appendChild(image);

            squareValues[squareIndex] = currentPlayer;
            console.log(squareValues);

            gameStatusCheck();

            if(currentPlayer === "x") {
                currentPlayer = "o";
            } else {
                currentPlayer = "x";
            }
            saveGame();
    });

    let newGameButton = document.getElementById("new-game");

    newGameButton.addEventListener("click", (event) => {
        if (gameStatus === "") return;
        gameStatus = "";
        document.getElementById("game-status").innerHTML = gameStatus;
        squareValues = ["", "", "", "", "", "", "", "", ""];
        for (let i = 0; i < 9; i++) {
            document.getElementById(`square-${i}`).innerHTML = "";
        }
        currentPlayer = "x";
        newGameButton.disabled = true;
        saveGame();
    })






    giveUpButton.addEventListener("click", e => {
        if(currentPlayer === "x") {
            currentPlayer = "o";
        } else {
            currentPlayer = "x";
        }
        gameStatus = `${currentPlayer} is the Winner!!!`

        document
          .getElementById("game-status")
          .innerHTML = gameStatus;

         newGameButton.disabled = false;
         giveUpButton.disabled = true;
        saveGame();
    })

});

