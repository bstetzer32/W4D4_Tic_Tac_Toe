let squareValues = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "x"

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

            if(currentPlayer === "x") {
                currentPlayer = "o";
            } else {
                currentPlayer = "x";
            }

    });

});
