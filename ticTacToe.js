let allCells = document.querySelectorAll(".cell");
console.log({ allCells });
let gameBoard = document.getElementById("board").textContent;
let currentPlayer = " ";
/*
let count = 0;
let boardCount = document.getElementById("board");
boardCount.onclick = function () {
  count++;
  document.getElementById("turn-count").innerHTML = "Turn: " + count;
};
*/

//let board = document.getElementById("board");
//board.addEventListener("click", () => {
//when cell is clicked flip player unless cell is already full

//document.getElementById("totalCount").textContent = count;
//});

class Player {
  constructor(defaultState = " ", possibleStates = ["X", "O"]) {
    this.state = possibleStates[0];
    this.possibleStates = possibleStates;
    this.defaultState = defaultState;
  }

  rules() {
    if (gameBoard != "X" && gameBoard != "O") {
      return this.flip();
    } else {
      console.log(alert("Please select an empty cell"));
      return false;
    }
  }

  flip() {
    //switch players
    if (
      gameBoard != this.possibleStates[0] &&
      gameBoard != this.possibleStates[1]
    ) {
      if (this.state === this.possibleStates[0]) {
        this.state = this.possibleStates[1];
      } else {
        this.state = this.possibleStates[0];
      }
      console.log(alert("player flips"));
      return this.state;
    }
    console.log(alert("Please select an empty cell"));
    return false;
  }
}

const player = new Player();
//when user clicks on a cell that already has an X or O
//then nothing happens and an alert pops up that asks the user
//to please select an empty cell
//after the user selects an empty cell it switches to the other user until
//three Xs or Os are linked and then the games ends with a winner
function startGame() {
  document.getElementById("start").disabled = true;
  /*
  if (
    (document.getElementById("cellone").textContent &&
      document.getElementById("celltwo").textContent &&
      document.getElementById("cellthree").textContent === "X") ||
    (document.getElementById("cellfour").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("cellsix").textContent === "X") ||
    (document.getElementById("cellseven").textContent &&
      document.getElementById("celleight").textContent &&
      document.getElementById("cellnine").textContent === "X") ||
    (document.getElementById("cellone").textContent &&
      document.getElementById("cellfour").textContent &&
      document.getElementById("cellseven").textContent === "X") ||
    (document.getElementById("celltwo").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("celleight").textContent === "X") ||
    (document.getElementById("cellthree").textContent &&
      document.getElementById("cellsix").textContent &&
      document.getElementById("cellnine").textContent === "X") ||
    (document.getElementById("cellone").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("cellnine").textContent === "X") ||
    (document.getElementById("cellthree").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("cellseven").textContent === "X")
  ) {
    console.log("winner");
    alert(`Congratulations! Player X wins`);
  } else if (
    (document.getElementById("cellone").textContent &&
      document.getElementById("celltwo").textContent &&
      document.getElementById("cellthree").textContent === "O") ||
    (document.getElementById("cellfour").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("cellsix").textContent === "O") ||
    (document.getElementById("cellseven").textContent &&
      document.getElementById("celleight").textContent &&
      document.getElementById("cellnine").textContent === "O") ||
    (document.getElementById("cellone").textContent &&
      document.getElementById("cellfour").textContent &&
      document.getElementById("cellseven").textContent === "O") ||
    (document.getElementById("celltwo").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("celleight").textContent === "O") ||
    (document.getElementById("cellthree").textContent &&
      document.getElementById("cellsix").textContent &&
      document.getElementById("cellnine").textContent === "O") ||
    (document.getElementById("cellone").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("cellnine").textContent === "O") ||
    (document.getElementById("cellthree").textContent &&
      document.getElementById("cellfive").textContent &&
      document.getElementById("cellseven").textContent === "O")
  ) {
    console.log("winner");
    alert(`Congratulations! Player O wins`);
  }
*/
  for (let cell of allCells) {
    cell.addEventListener("click", function (theEvent) {
      console.log({ theEvent });
      return (theEvent.target.textContent = player.flip());
    });
  }
}
