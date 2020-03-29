function validate(password){
  const errorDisplay = document.querySelector(".errorDisplay") //is an unordered list
  let errors = []
  const tests = [
    {regex: /.{8,}/, message: "The password is not at least 8 characters."},
    {regex: /[A-Za-z]/, message: "The password does not contain at least one letter."},
    {regex: /[0-9]/, message: "The password does not contain at least one number."},
    {regex: /[%]/, message: "The password does not contain the % symbol."},
  ]

  tests.forEach(test => {
    if (test.regex.test(password) === false)
      errors.push(test.message)
  })

  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      errorDisplay.innerHTML += `<li> ${errors[i]} </li>`
    }
    errorDisplay.innerHTML += "<li> Please enter a new password. </li>"
  }
}
