// shortest substring
// s = "dabbcabcd"
// 2 substrings contain dabbc abcd
// shortest substr containing all 4 letters is abcd

function shortestSubstring(s) {
  if (s.length === 1) return s
  let words = []
  let stringCopy = s
  let length = stringCopy.length
  let arr = s.split("")
  let uniqueLetters = arr.filter((item, i, ar) => ar.indexOf(item) === i);
  while (length > 0) {
    let word = findStr(stringCopy, uniqueLetters)
    words.push(word)
    length -= word.length
    //removes substring from stringCopy
    stringCopy = s.replace(word, '')
  }
  // console.log(words);
  let noShortWords = words.filter(word => !word.includes("*"))
  let shortestSubstring = noShortWords.reduce((a, b) => a.length <= b.length ? a : b)
  return shortestSubstring
}

function findStr(s, uniqueLetters) {
  let count = 0
  let indexes = []
  for (let x = 0; x < uniqueLetters.length; x++) {
    // checks for repeated characters at the end and makes sortedIndexes length smaller
    if (s.indexOf(uniqueLetters[x]) !== -1) {
      indexes.push(s.indexOf(uniqueLetters[x]))
    }
  }
  let sortedIndexes = indexes.sort( (a,b) => a - b)
  let last = sortedIndexes.length
  let substring = s.slice(sortedIndexes[0], sortedIndexes[last-1]+1)
  // invalid word check
  if (sortedIndexes.length < uniqueLetters.length) {
    substring += "*"
  }
  // console.log("sorted Indexes length: " + sortedIndexes.length);
  // console.log("uniqueLetters length: " + uniqueLetters.length);
  // console.log(sortedIndexes);
  return substring
}

console.log(shortestSubstring("dabbcabcd"));
console.log(shortestSubstring("dabbbbbbcabc"));
console.log(shortestSubstring("d"));
console.log(shortestSubstring("dds"));
console.log(shortestSubstring("dd"));
console.log(shortestSubstring("ddadaxxxx"));
console.log(shortestSubstring("xxcxxddadaxxxcx"));
