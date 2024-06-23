document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(":root");
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

    const player1 = {
      marker: "x",
    };

    const player2 = {
      marker: "o",
    };

    let currentPlayer = player1;

    function displayPlayerMarker(index) {
      if (board[index] === "x" || board[index] === "o") {
        return;
      } else {
        if (currentPlayer === player1) {
          board[index] = "x";
          currentPlayer = player2;
          gameSquare[index].classList.add("player-x");
          console.log(board);
        } else {
          board[index] = "o";
          currentPlayer = player1;
          gameSquare[index].classList.add("player-o");
          console.log(board);
        }
      }
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

      currentPlayer = player1;
      board = ["", "", "", "", "", "", "", "", ""];

      gameSquare.forEach((square) => {
        square.classList.remove("player-x");
        square.classList.remove("player-o");
      });
    }

    return {
      getBoard,
      setBoard,
      displayPlayerMarker,
      showGameBoard,
      showModal,
      resetGame,
    };
  })();

  playGame.addEventListener("click", gameDisplayBoard.showGameBoard);
  gameSquare.forEach((square, index) => {
    square.addEventListener("click", () => {
      gameDisplayBoard.displayPlayerMarker(index);
    });
  });

  restartGame.addEventListener("click", gameDisplayBoard.showModal);
  playAgain.addEventListener("click", gameDisplayBoard.resetGame);
});
