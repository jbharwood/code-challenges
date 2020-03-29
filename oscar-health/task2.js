function solution(N) {
  let target = 0
  let min = -100
  let max = 100
  let arr = []

  for (let i = 1; i < N; i++) {
    arr.push(randomBetween(min, max-(i-1)))
  }

  let sumOfArr = arr.reduce((a, b) => a + b, 0)
  let lastElement = target - sumOfArr
  arr.push(lastElement)
  return arr

  // let max = 0
  // let r1 = randomBetween(1, max-3)
  // let r2 = randomBetween(1, max-2-r1)
  // let r3 = randomBetween(1, max-1-r1-r2)
  // let r4 = max - r1 - r2 - r3
  // return [r1,r2,r3,r4]
}

function randomBetween(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

console.log(solution(4));
console.log(solution(3));
console.log(solution(5));
