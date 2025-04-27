function getRandomRgbColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function drawBoard(numberOfSquares, style) {

    const drawingBoard = document.querySelector(".drawing-board");
    const BOARDWIDTH = 760;
    let squareDimensions = BOARDWIDTH / numberOfSquares;
    
    for (i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.setAttribute("class", "square");
        newSquare.style.width = squareDimensions + 'px';
        newSquare.style.height = squareDimensions + 'px';
        drawingBoard.appendChild(newSquare);
    }
    
    hoverAndColor(style);
    addOpacity();
    
    return console.log(`A drawing board of ${numberOfSquares} x ${numberOfSquares} squares has been created.`)
}

function hoverAndColor (style) {

    const nodeListSquares = document.querySelectorAll(".square");
    nodeListSquares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {

            switch (style) {
                case "color-random":
                event.target.style.backgroundColor = getRandomRgbColor();
                break;
                case "color-grey":
                event.target.style.backgroundColor = "gray";
                break;
            }
        })
    })

    return;
}

function addOpacity() {

    const nodeListSquares = document.querySelectorAll(".square");
    nodeListSquares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {

            event.target.style.opacity = +event.target.style.opacity + 0.1;

        })
    })

    return;
}

function deleteOldBoard () {

    const oldDrawingBoard = document.querySelectorAll('.square');
    oldDrawingBoard.forEach((square) => {
        square.remove();
    })

    return;
}

function changeColorPaint () {

    const colorBtn = document.querySelector(".painting-choice");
    const currentColorBoard = document.querySelector(".drawing-board");

    colorBtn.addEventListener("click", (event) => {
        if (event.target.classList.contains("color-grey")) {

            event.target.classList.remove('color-grey');
            event.target.classList.add('color-random');
            currentColorBoard.classList.remove('color-random');
            currentColorBoard.classList.add('color-grey');

            event.target.textContent = "Change to Random Colors";
            deleteOldBoard();
            drawBoard(15, "color-grey");

            return;

        } else {

            event.target.classList.remove('color-random');
            event.target.classList.add('color-grey');
            currentColorBoard.classList.remove('color-grey');
            currentColorBoard.classList.add('color-random');

            event.target.textContent = "Change to Grey Color";
            deleteOldBoard();
            drawBoard(15, "color-random");

            return;
        }
    })

}

const askHowManySquaresToPlayerBtn = document.querySelector('.squares-prompt');
askHowManySquaresToPlayerBtn.addEventListener("click", () => {
    const numberOfSquares = +prompt("How many squares per side would you like on the new board? Please write an integer from 1 to 100");
    const styleOfNewBoard = document.querySelector(".drawing-board").classList[1];

    if (typeof numberOfSquares != 'number' ||
        !Number.isInteger(numberOfSquares) ||
        numberOfSquares <= 0 ||
        numberOfSquares > 100) {

            alert("Value not acceptable!\n Please write an integer between 1 and 100");

            return;

        } else {

            deleteOldBoard();
            drawBoard(numberOfSquares, styleOfNewBoard);
            
            return;
            }
})

changeColorPaint();
drawBoard(15, "color-random");
