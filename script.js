// Selectors

const gameboard = document.querySelector(".gameboard");
const grid = document.querySelector(".grid");

// Modules

const gameBoard = () => {
  const board = [];
  for (i = 0; i < 9; i++) {
    board.push("");
  }

  // display grid
  board.forEach((item, index) => {
    const square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
  });

  // add squares
};

// Factories

const createPlayer = (name, symbol) => ({ name, symbol });

// flowCtrl obj

// displayController mod obj
