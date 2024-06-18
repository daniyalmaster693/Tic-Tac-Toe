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

    return { getBoard };
  })();

  const player1 = {
    marker: "x",
  };

  const player2 = {
    marker: "o",
  };

  function showGameBoard() {
    gameBoard.classList.add("visible");
    startMenu.style.display = "none";
  }

  function showModal() {
    modal.classList.add("visible");
    modalOverlay.classList.remove("hidden");
  }

  function hideModal() {
    modal.classList.remove("visible");
    modalOverlay.classList.add("hidden");
  }

  playGame.addEventListener("click", showGameBoard);
  gameSquare.forEach((square) => {
    square.addEventListener("click", () => {});
  });
  playAgain.addEventListener("click", hideModal);
});
