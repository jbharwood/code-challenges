/*
* Alice, Bob, Charlie, David09
* Al!ce, B%^$%^$%^$o$%@#@#%b, !!Charlie!!
* Al!ce => Al-ce
* B%^$%^$%^$o$%@#@#%b => B-o-b
* !!Charlie!! => -Charlie-
* David09 => David09
*
 */

/*
const usernameCleaner = (username) => {
  let ans = ""
  let arr = username.replace(/[^a-z0-9]/gi,'-').split("")
  const letterNumber = /^[0-9a-zA-Z]+$/;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-" && arr[i+1] !== "-") {
      ans += "-"
    } else if (arr[i].match(letterNumber))  {
     ans += arr[i]
    }
  }
  return ans
}


console.log(usernameCleaner("Alice"));
console.log(usernameCleaner("Al!ce"));
console.log(usernameCleaner("B%^$%^$%^$o$%@#@#%b"));
console.log(usernameCleaner("!!Charlie!!"));
console.log(usernameCleaner("David09"));
*/

let test_addresses = [
    "RoundPeg, LLC\n8121 Georgia Ave\nSuite 300\nSilver Spring, MD20910",
    "Athens County Treasurer\n1213 Prospect Avenue\nSuite 300\nCleveland, OH44115\nn0 !### Lil* CDBSDODDA 019/10/01 2611897 351.69 10001",
    "McMASTER-CARR\nP.O BOX 7690\nCHICAGO.IL 60680'\nL 3ll 'i:O55DaQOR",
    "The Real Payee\n1234 Main Street\nNew York, NY 10043",
    "Andrew Jones\nc/o Super Cool Company, LLC\n56856 Alabama Street\n San Francisco, CA 94109",
]

const extract = (input) => {
  const zipCheck = "\d{5}"
  const stateCheck = "[A-Z]{2}"
  for (let i = 0; i < input.length; i++) {
    const arr = input[i].split('\n')
    // console.log(arr)
    for (let x = 0; x < arr.length; x++) {
      console.log(arr[x])
      let cityStateCheck = arr[x].split(",")

      // console.log(cityStateCheck)
      if (cityStateCheck.length > 1) {
        let cs = cityStateCheck[1].split(" ")
        for (let y = 0; y < cs.length; y++) {
          // console.log(cs[y])
          // if (cs)
        }
      }
    }
  }
}

console.log(extract(test_addresses))

// \d{5}
// \w{2}
// [A-Z]{2}


// Extract:
/*
 MUST HAVE:
 City,
 State,
 Zip

 LIKE TO HAVE:
 Payee,
 Street Address
*/
