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
    (document.getElementsByClassName(".cellone").innerHTML &&
      document.getElementsByClassName(".celltwo").innerHTML &&
      document.getElementsByClassName(".cellthree").innerHTML === "x") ||
    (document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML === "x") ||
    (document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML === "x") ||
    (document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML === "x") ||
    (document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML === "x") ||
    (document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML === "x") ||
    (document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML === "x") ||
    (document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML &&
      document.getElementsByClassName(".cell").innerHTML === "x")
  ) {
    alert("Winner");
    let currentPlayer = document.getElementById("playerStatus").innerHTML;
    return currentPlayer;
  }

  for (let cell of allCells) {
    cell.addEventListener("click", function (theEvent) {
      console.log({ theEvent });
      return (theEvent.target.textContent = currentPlayer);
    });
  }
}
