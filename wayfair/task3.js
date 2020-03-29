let dubs = []
let singles = []

function solution(A, B, C) {
  let str = ""
  dubs = []
  singles = []
  let leftovers = []
  let strArr = []
  let total = A + B + C

  let counts = {"a": A, "b": B, "c": C}
  // avoids edge cases where multiple dubs can be added at the end of the string
  let sortedCounts = Object.keys(counts).sort((a,b) => counts[b] - counts[a])

  for (let letter in sortedCounts) {
    placeLetters(counts[sortedCounts[letter]], sortedCounts[letter])
  }
  // placeLetters(A, "a")
  // placeLetters(B, "b")
  // placeLetters(C, "c")

  // str and strArr are used because it's easier for me to keep track of what's
  // valid and invalid in a string vs. an arr
  for (let i = 0; i < total; i++) {
    // keeps track of dubs that are valid to be in str
    if (dubs.length > 0 && dubs[0] !== str.slice(-2)) {
      str += dubs[0]
      strArr.push(dubs[0])
      dubs.shift()
    // pushes invalid dubs into leftovers
    } else if (dubs[0] === str.slice(-2)){
      leftovers.push(dubs[0])
      dubs.shift()
    }
    // pushes valid single letters into strArr
    if (singles.length > 0 && singles[0] !== str.slice(-1)) {
      str += singles[0]
      strArr.push(singles[0])
      singles.shift()
    }
  }

  // places leftover dubs into strArr in valid places
  if (leftovers.length > 0) {
    for (let i = 1; i < strArr.length+1; i++) {
      if (strArr[i-1] !== leftovers[0] && leftovers.length > 0) {
        strArr.splice(i, 0, leftovers[0])
        leftovers.shift()
      }
    }
  }

  str = strArr.join("")
  return str
}

function placeLetters(count, letter) {
  if (count === 0) {
    return
  }
  // handles even numbers
  if (count/2 > 1 || count === 2) {
    for(let i = 0; i < Math.floor(count/2); i++){
      dubs.push(letter + letter)
    }
    // handles 1 letter if there are even numbers existing
    if (count % 2 > 0) {
      singles.push(letter)
    }
    // handles odd numbers if there are no even numbers
  } else {
    singles.push(letter)
  }
}

console.log(solution(6, 1, 1));// aabaacaa
console.log(solution(1, 6, 1));// bbabbcbb
console.log(solution(1, 1, 6));// ccaccbcc
console.log(solution(6, 2, 2));// aabbaaccaa
console.log(solution(2, 4, 2));// bbaabbcc
console.log(solution(2, 3, 2));// bbaabcc
console.log(solution(1, 3, 6));// ccbccaccbb
console.log(solution(3, 4, 3));// bbabbcaacc
console.log(solution(1, 1, 2));// ccab
console.log(solution(0, 0, 2));// cc
