/* alert ("How many characers?")
var howMany= prompt ("How many characters would you like?")
alert (howMany)


alert ("would you like special characters?")
var special=confirm
if (true ('yes'));

console.log(special)
alert ("would you like lower case letters?")
var lowerCase=confirm
if (true ('sorry'));
console.log(lowerCase)
 */
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
prompt ("Would you like special characters?")
if (specialCharacters!= null){

}
//else(console.log ("Ok "))


// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
prompt("Would you like to include numbers?")
if (numericCharacters != null){

}

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
prompt ("Would you like any lowercase letters?")
if(lowerCasedCharacters)

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

prompt ("would you like any upper case letters?")
if(upperCasedCharacters)


// Function to prompt user for password options
function getPasswordOptions() {
var passwordLength= prompt("Please enter desired password lenght between 8-128 characters")
console.log(passwordLength)
if (passwordLength <8 || passwordLength > 128){
  alert ("your password does not meet the critera");
}
if (upperCasedCharacters === false && lowerCasedCharacters === false && specialCharacters === false && numericCharacters === false) {
  return "Your passwords does not meet the password critia";
  };}

// Function for getting a random element from an array
function getRandom(arr) {

}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// Function to generate password with user input
function generatePassword() {
return "test password"
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

const resultEl = document.getElementbyId('result')
const lengthEl = document.getElementbyId('length')
const uppercaseEl = document.getElementbyId('uppercase')
const lowercaseEl = document.getElementbyId('lowercase')
const numberEl = document.getElementbyId('number')
const symbolEl = document.getElementbyId('symbol')
const generateEl = document.getElementbyId('generate')
const clipboardEl = document.getElementbyId('clipboard')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// Set default password length 20 max on load 
document.addEventListener("DOMContentLoaded", () => {
  passLength.value = 20;
  passLengthResult.innerText = "20";
  let onLoadLength = passLength.value;
  let onLoadNumbers = includeNumbers.checked;
  let onLoadSymbols = includeSymbols.checked;
  result.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadLength);
});
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

generateBtn.addEventListener("click", () => {
  const length = passLength.value;
  const numbers = includeNumbers.checked;
  const symbols = includeSymbols.checked;
  result.value = generatePassword(numbers, symbols, length);
});
function generatePassword(number, symbol, length) {
  let generatedPassword = "";
  let variationsCount = [number, symbol].length;
  for (let i = 0; i < length; i += variationsCount) {
    if (number) {
      generatedPassword += getRandomNumber();
    }
    if (symbol) {
      generatedPassword += getRandomSymbol();
    }
    generatedPassword += getRandomLower();
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}






//DOM elements


const randomFunc ={
lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol
};

generateEl.addEventListener('click', ()=>{
  const length= lengthEl.value
  console.log (typeof length)
})