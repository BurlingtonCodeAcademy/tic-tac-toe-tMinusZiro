let allCells = document.querySelectorAll(".cell");
console.log({ allCells });
let playerX = "X";
let playerO = "O";
let currentPlayer = " ";
let count = 0;
let boardCount = document.getElementById("board");
boardCount.onclick = function () {
  count++;
  document.getElementById("statusBox").innerHTML = "Turn: " + count;
};

function startGame() {
  document.getElementById("start").disabled = true;

  if (count % 2 === 0) {
    currentPlayer = playerX;
  } else {
    currentPlayer = playerO;
  }
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
    alert(`Congratulations! Player wins`);
    let currentPlayer = document.getElementById("playerStatus").textContent;
    return currentPlayer;
  }

  for (let cell of allCells) {
    cell.addEventListener("click", function (theEvent) {
      console.log({ theEvent });
      return (theEvent.target.textContent = currentPlayer);
    });
  }
}

/*
if (
  (allCells[1] && allCells[2] && allCells[3] === "X") ||
  (allCells[4] && allCells[5] && allCells[6] === "X") ||
  (allCells[7] && allCells[8] && allCells[9] === "X") ||
  (allCells[1] && allCells[4] && allCells[7] === "X") ||
  (allCells[2] && allCells[5] && allCells[8] === "X") ||
  (allCells[3] && allCells[6] && allCells[9] === "X") ||
  (allCells[1] && allCells[5] && allCells[9] === "X") ||
  (allCells[3] && allCells[5] && allCells[7] === "X")
) {
  */

/*
 (document.getElementsById("cellone") &&
 document.getElementsById("celltwo") &&
 document.getElementsById("cellthree") === "X") ||
(document.getElementsById("cellfour") &&
 document.getElementsById("cellfive") &&
 document.getElementsById("celsix") == "X") ||
(document.getElementsById("cellseven") &&
 document.getElementsById("celleight") &&
 document.getElementsById("cellnine") === "X") ||
(document.getElementsById("cellone") &&
 document.getElementsById("cellfour") &&
 document.getElementsById("cellseven") === "X") ||
(document.getElementsById("celltwo") &&
 document.getElementsById("cellfive") &&
 document.getElementsById("celleight") === "X") ||
(document.getElementsById("cellthree") &&
 document.getElementsById("cellsix") &&
 document.getElementsById("cellnine") === "X") ||
(document.getElementsById("cellone") &&
 document.getElementsById("cellfive") &&
 document.getElementsById("cellnine") === "X") ||
(document.getElementsById("cellthree") &&
 document.getElementsById("cellfive") &&
 document.getElementsById("cellseven") === "X")
 window.location.reload
 */
