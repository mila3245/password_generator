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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

// Function to prompt user for password options
function getPasswordOptions() {
 
}

var passwordLength= prompt ("Please enter desired password lenght between 8-128 characters");
 if (passwordLength <8 || passwordLength > 128){
  alert ("your password does not meet the critera");
}
if (upperCasedCharacters === false && lowerCasedCharacters === false && specialCharacters === false && numericCharacters === false) {
  alert ("Your passwords does not meet the password critia")
  };

  var upperCasedLetter=prompt("Would you like uppercase character?")
  if (upperCasedCharacters != false, alert("your password should have an uppercase letter")
  );
 // else (prompt ("would you like numbers?"));

  var numericCharacters=prompt("Would you like numbers?")
  if (numericCharacters != false, alert("your password should have a number")
  );
 
  var specialCharacters= prompt ("Would you like to include special character?")


// Function for getting a random element from an array
function getRandom() {
  const min = 8;
  const max = 128;
  const randomPass = Math.floor(Math.random() * max) - min;
  //return Math.random();
}
getRandom();
// Function to generate password with user input
function generatePassword() {
return "test password"
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//reurn password
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);