function startGame() {
  document.getElementById("start").disabled = true;

  //increment the counter adding 1 each iteration
  let counter = 0;
  while (counter < 9) {
    for (let cell of allCells) {
      let playerX = "X";
      let playerO = "O";
      let currentPlayer = " ";
      if (counter % 2 === 0) {
        currentPlayer = playerX;
      } else {
        currentPlayer = playerO;
      }
      cell.addEventListener("click", function (theEvent) {
        console.log({ theEvent });
        counter++;
        return (theEvent.target.textContent = currentPlayer);
      });
    }
  }
}

function canMoveTo() {
  if (allCells === "X" || allCells === "O") {
    return false;
  }
  return true;
}
let allCells = document.querySelectorAll(".cell");
console.log({ allCells });

function makeMove(mark, cell, allCells) {
  if (canMoveTo(cell)) {
    //make the move, then return a status and board with changes applied
    allCells = mark;
    return {
      status: "success",
      newBoard: allCells,
    };
  }
  return {
    status: "failure",
    newBoard: allCells,
  };
}
