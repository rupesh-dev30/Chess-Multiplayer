const socket = io();
const chess = new Chess();
const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let sourceSquare = null;
let platerRole = null;

function renderBoard() {
  const board = chess.board();
  boardElement.innerHTML = "";
  board.forEach((row, rowIndex) => {
    row.forEach((square, squareIndex) => {
      console.log(square);
      const squareElement = document.createElement("div");
      squareElement.classList.add(
        "square",
        (rowIndex + squareIndex) % 2 === 0 ? "light" : dark
      );

      squareElement.dataset.row = rowIndex;
      squareElement.dataset.col = squareIndex;

      if(square){
        const pieceElement = document.createElement("div");
        pieceElement.classList.add(
          "piece", square.color === 'w' ? "white" : "black"
        )
  
        pieceElement.innerText = "";
        pieceElement.draggable = playerRole === square.color;

        pieceElement.addEventListner("dragstart", (event)=>{
          if(pieceElement.draggable){
            draggedPiece = pieceElement;
            sourceSquare = row: rowIndex, col: squareIndex;
            event.dataTransfer.setData("text/plain", "");
          }
        });

        pieceElement.addEventListner("dragend", (event)=>{
          draggedPiece = null;
          sourceSquare = null;
        });

        squareElement.appendChild(pieceElement);
      }

        squareElement.addEventListener("dragover", (e) => {
          e.preventDefault();
        });

        squareElement.addEventListener("drop", (e) => {
          e.preventDefault();
          if(draggedPiece){
            const targetSource = {
              row: sparseInt(squareElement.dataset.row);
              col: parseInt(squareElement.dataset.col);
            }
          }
        })
    });
  });
};

function handleMove() {}

function getPieceUnicode() {}

renderBoard();
