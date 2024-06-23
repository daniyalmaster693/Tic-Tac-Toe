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

    const player1 = {
      marker: "x",
      placements: [],
    };

    const player2 = {
      marker: "o",
      placements: [],
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
          player1.placements.push(index);
        } else {
          board[index] = "o";
          currentPlayer = player1;
          gameSquare[index].classList.add("player-o");
          player2.placements.push(index);
        }
      }
    }

    function determineWinner() {
      const winningCombinations = {
        "Combo 1": [0, 1, 2],
        "Combo 2": [3, 4, 5],
        "Combo 3": [6, 7, 8],
        "Combo 4": [0, 3, 6],
        "Combo 5": [1, 4, 7],
        "Combo 6": [2, 5, 8],
        "Combo 7": [0, 4, 8],
        "Combo 8": [2, 4, 6],
      };
    }

    function showGameBoard() {
      gameBoard.classList.add("visible");
      startMenu.style.display = "none";
    }

    function showModal() {
      modal.classList.add("visible");
      modalOverlay.classList.add("visible");
    }

    function hideModal() {
      modal.classList.remove("visible");
      modalOverlay.classList.remove("visible");
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
      determineWinner,
      showGameBoard,
      showModal,
      hideModal,
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
  modalOverlay.addEventListener("click", gameDisplayBoard.hideModal);
  playAgain.addEventListener("click", gameDisplayBoard.resetGame);
});
