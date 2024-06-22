document.addEventListener("DOMContentLoaded", () => {
  const startMenu = document.querySelector(".start-menu");
  const playGame = document.querySelector(".play-game");
  const gameBoard = document.querySelector(".game-board");
  const gameSquare = document.querySelectorAll(".square");
  const restartGame = document.querySelector(".restart");
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const results = document.querySelector(".results");
  const playAgain = document.querySelector(".play-again");

  const gameDisplayBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    function getBoard() {
      return { board };
    }

    function setBoard(squareIndex, value) {
      board[squareIndex] = value;
    }

    function showGameBoard() {
      gameBoard.classList.add("visible");
      startMenu.style.display = "none";
    }

    function showModal() {
      modal.classList.add("visible");
      modalOverlay.classList.add("visible");
    }

    function resetGame() {
      modal.classList.remove("visible");
      modalOverlay.classList.remove("visible");

      gameSquare.forEach((square) => {
        square.classList.remove("clicked");
      });
      board = ["", "", "", "", "", "", "", "", ""];
    }

    return { getBoard, setBoard, showGameBoard, showModal, resetGame };
  })();

  const player1 = {
    marker: "x",
  };

  const player2 = {
    marker: "o",
  };

  function displayPlayerMarker(index) {
    gameSquare[index].classList.add("clicked");
    console.log(index);
  }

  function currentTurn(player) {}

  playGame.addEventListener("click", gameDisplayBoard.showGameBoard);
  gameSquare.forEach((square, index) => {
    square.addEventListener("click", () => {
      displayPlayerMarker(index);
    });
  });

  restartGame.addEventListener("click", gameDisplayBoard.showModal);
  playAgain.addEventListener("click", gameDisplayBoard.resetGame);
});
