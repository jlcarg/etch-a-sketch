function drawBoard(numberOfSquares) {
    const drawingBoard = document.querySelector(".drawing-board");
    const BOARDWIDTH = 960;
    let squareDimensions = BOARDWIDTH / numberOfSquares;
    console.log(typeof squareDimensions);
    console.log(squareDimensions);

    for (i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.setAttribute("class", "square");
        newSquare.style.width = squareDimensions + 'px';
        newSquare.style.height = squareDimensions + 'px';
        drawingBoard.appendChild(newSquare);
    }

    return console.log(`A drawing board of ${numberOfSquares} x ${numberOfSquares} squares has been created.`)
}

drawBoard(16);
