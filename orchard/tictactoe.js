const findWinner = (board) => {
  let xCount = 0
  let oCount = 0
  for (let x = 0; x < board.length; x++) {
    let row = board[x]
    let xFiltered = filter(row, "X")
    let oFiltered = filter(row, "O")
    console.log(xFiltered);

    if (xFiltered.length === 3) {
      return "X wins!"
    } else if (oFiltered.length === 3) {
      return "O wins!"
    }
  }
}

const checkBoard = (board) => {
  let xCount = 0
  let oCount = 0
  for (let x = 0; x < board.length; x++) {
    let row = board[x]
    getWinner(row)
  }
}

const filter = (row, player) => {
  return row.filter(i => i === player)
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function getWinner(row) {
  let winner = null;
  winningCombos.forEach((combo, index) => {
    if (row[combo[0]] && row[combo[0]] === row[combo[1]] && row[combo[0]] === row[combo[2]]) {
      console.log("hit");
      winner = row[combo[0]];
      console.log(winner);
      return winner
    }
  });
  // new code below
  return winner
};


// for (let y = 0; y < board.length; y++) {
//
//   // console.log(board[x][y+1]);
//   // if (board[x][y] === "X" && board[x+1][y] === "X4") {
//   //   console.log("hit");
//   //   // console.log(board[x][y+1]);
//   //   xCount++
//   // } else if (board[x][y] === "Y") {
//   //   yCount++
//   // }
// }


let board = [
              ["X", "O", "X"],
              ["O", "X", "O"],
              ["X", "O", "O"]
            ]
//
// let board = [
//               ["X", "X", "O"],
//               ["X", "O", "O"],
//               ["X", "O", "X"]
//             ]
console.log(checkBoard(board)); //"X wins!"
