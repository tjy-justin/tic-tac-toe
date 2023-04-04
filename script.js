// Selectors

const grid = document.querySelector(".grid");
// Player

// gameBoard

// Modules needed: gameBoard, displayController, flowController
// Factories needed: players

// What does a displayCtrl actually do?
// 1. reduce gridslots 2. msg changes 3. reset button
// 4. declare winner msg 5. add gridslots

const createPlayer = (name, sign) => ({ name, sign });

const gameBoard = (() => {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push("");
  }

  board.forEach((item, index) => {
    const square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
  });

  displayCtrl(board);

  return { board };
})();

function displayCtrl(board) {
  Array.from(grid.children).forEach((square, index) => {
    square.addEventListener("click", () => {
      square.classList.add(flowCtrl.activePlayer.sign);
      square.setAttribute("data", flowCtrl.activePlayer.sign);
      board[index] = flowCtrl.activePlayer.sign;
      square.style.pointerEvents = "none";
      flowCtrl.gridSlots -= 1;

      flowCtrl.checkWinner();
      if (flowCtrl.winner === false) {
        if (flowCtrl.gridSlots > 0) {
          flowCtrl.alertPlayer();
          flowCtrl.nextPlayer();
        } else if (flowCtrl.gridSlots === 0) {
          flowCtrl.declareTie();
        }
      }
    });
  });
}

const flowCtrl = (() => {
  const playerOne = createPlayer("Player 1", "xmark");
  const playerTwo = createPlayer("Player 2", "circle");

  // Game start
  const activePlayer = playerOne;
  const winner = false;
  const gridSlots = 9;

  const msg = document.querySelector(".msg");
  const playerName = document.querySelector(".playerName");

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

  function checkWinner() {
    winConditions.forEach((item, index) => {
      if (
        gameBoard.board[item[0]] === this.activePlayer.sign &&
        gameBoard.board[item[1]] === this.activePlayer.sign &&
        gameBoard.board[item[2]] === this.activePlayer.sign
      ) {
        console.log("We have a winner!");
        msg.textContent = `${this.activePlayer.name} wins!`;
        this.winner = true;
      }
    });
  }

  function alertPlayer() {
    this.activePlayer === playerOne
      ? (playerName.textContent = "Player 2")
      : (playerName.textContent = "Player 1");
  }

  function nextPlayer() {
    this.activePlayer === playerOne
      ? (this.activePlayer = playerTwo)
      : (this.activePlayer = playerOne);
    console.log("It's the next player's turn");
    console.log(`active player: ${activePlayer.name}`);
  }

  function declareTie() {
    msg.textContent = "It's a tie!";
  }

  return {
    activePlayer,
    gridSlots,
    checkWinner,
    alertPlayer,
    nextPlayer,
    declareTie,
    winner,
  };
})();
