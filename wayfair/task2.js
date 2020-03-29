function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = S.split("")
    let balloon = ["B", "A", "L", "L", "O", "O", "N"]
    let oCount = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      if (balloon.includes(arr[i]) && arr[i] !== "O") {
        count++
      } else if (arr[i] === "O") {
        oCount++
      }
    }
    if (oCount % 2 === 1) {
      count -= 1
    }
    return Math.floor((oCount + count) / 7)
}

console.log(solution("BAONXXOLL"));
console.log(solution("BAOOLLNNOLOLGBAX"));
console.log(solution("QAWABAWONL"));
console.log(solution("ONLABLABLOON"));
