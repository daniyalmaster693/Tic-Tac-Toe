document.addEventListener("DOMContentLoaded", () => {
  const startMenu = document.querySelector(".start-menu");
  const playGame = document.querySelector(".play-game");
  const gameBoard = document.querySelector(".game-board");
  const gameSquare = document.querySelectorAll(".square");
  const playerScoreX = document.querySelector(".player-x-score-value");
  const playerScoreO = document.querySelector(".player-O-score-value");
  const drawScore = document.querySelector(".draw-score-value");
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

      determineWinner();
    }

    function gameSquareClick(index) {
      gameDisplayBoard.displayPlayerMarker(index);
    }

    let playerScore1 = 1;
    let playerScore2 = 1;
    let drawScore = 1;

    function determineWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      winningCombinations.forEach((combination) => {
        const checkForWin = combination.every((index) =>
          player1.placements.includes(index)
        );

        if (checkForWin === true) {
          results.textContent = "Player 1 Won!";
          playerScoreX.textContent = `${playerScore1}`;
          playerScore1++;
          showModal();

          gameSquare.forEach((square) => {
            square.classList.add("disabled");
          });

          return;
        } else {
          return;
        }
      });

      winningCombinations.forEach((combination) => {
        const checkForWin = combination.every((index) =>
          player2.placements.includes(index)
        );

        if (checkForWin === true) {
          results.textContent = "Player 2 Won!";
          playerScoreO.textContent = `${playerScore2}`;
          playerScore2++;
          showModal();

          gameSquare.forEach((square) => {
            square.classList.add("disabled");
          });

          return;
        } else {
          return;
        }
      });
    }

    function showGameBoard() {
      gameBoard.classList.add("visible");
      startMenu.style.display = "none";
    }

    function showModal() {
      modal.classList.add("visible");
      modalOverlay.classList.add("visible");

      document.addEventListener("keydown", keyboardCloseModal);
    }

    function hideModal() {
      modal.classList.remove("visible");
      modalOverlay.classList.remove("visible");

      document.removeEventListener("keydown", keyboardCloseModal);
    }

    function keyboardCloseModal() {
      const key = event.key;
      if (key === "Escape") {
        hideModal();
      }
    }

    function resetGame() {
      modal.classList.remove("visible");
      modalOverlay.classList.remove("visible");

      currentPlayer = player1;
      board = ["", "", "", "", "", "", "", "", ""];
      player1.placements = [""];
      player2.placements = [""];
      setTimeout(() => {
        results.textContent = "No Winner!";
      }, 300);

      gameSquare.forEach((square) => {
        square.classList.remove("player-x");
        square.classList.remove("player-o");
      });

      gameSquare.forEach((square) => {
        square.classList.remove("disabled");
      });
    }

    gameSquare.forEach((square, index) => {
      square.addEventListener("click", () => {
        gameSquareClick(index);
      });
    });

    return {
      getBoard,
      setBoard,
      displayPlayerMarker,
      gameSquareClick,
      determineWinner,
      showGameBoard,
      showModal,
      hideModal,
      resetGame,
    };
  })();

  playGame.addEventListener("click", gameDisplayBoard.showGameBoard);

  restartGame.addEventListener("click", gameDisplayBoard.showModal);
  modalOverlay.addEventListener("click", gameDisplayBoard.hideModal);
  playAgain.addEventListener("click", gameDisplayBoard.resetGame);
});
