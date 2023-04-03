// Selectors

// Player

const createPlayer = (name, sign) => ({ name, sign });

// gameBoard

const flowCtrl = () => {
  const playerOne = createPlayer("Player 1", "X");
  const playerTwo = createPlayer("Player 2", "O");

  // Game start
  const activePlayer = playerOne;
  const winner = false;
  const gridSlots = 9;

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
};

// Modules needed: gameBoard, displayController, flowController
// Factories needed: players
