function solution(ranks) {
  let count = {}
  for (let i = 0; i < ranks.length; i++) {
    if (count[ranks[i]]) {
      count[ranks[i]] += 1
    } else {
      count[ranks[i]] = 1
    }
  }

  let unique = ranks.filter((item, i, ar) => ar.indexOf(item) === i);
  let superiorCount = 0

  for (let i = 0; i < unique.length; i++) {
    if (count[unique[i]-1]) {
      superiorCount += count[unique[i]-1]
    }
  }
  return superiorCount
}

console.log(solution([3,4,3,0,2,2,3,0,0]));
console.log(solution([4,2,0]));
console.log(solution([4,4,3,3,1,0]));
