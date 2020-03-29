// multiplication with 12 by 12
// print to console
// 1*1 - 1*12
// 2


const mutliplationTable = () => {
  let length = 12
  for (let i = 1; i < length+1; i++) {
    for (let x = 1; x < length+1; x++) {
      console.log(i * x);
    }
  }
}

console.log(mutliplationTable());
