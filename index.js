import * as upperCase from 'upper-case'

function greet(name) {
  console.log(upperCase.localeUpperCase(`Hello, ${name}!`))
}

module.exports = greet;