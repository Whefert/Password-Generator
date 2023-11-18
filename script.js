
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
  let passwordLength = 0
  //continues to prompt user to enter password length if it is not between 8 and 128;
  do{
    passwordLength = parseInt(prompt("Select a password length between 8 and 128"));
  }while(passwordLength < 8 || passwordLength > 128);
  let includeNum = confirm("Include numeric characters");
  let includeLower = confirm("Include lower characters");
  let includeUpper = confirm("Include upper case characters");
  return {passwordLength, includeNum, includeLower, includeUpper}
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  let password = "";

  // Loop to determine how many times the get random function should be fired
  for (let i = 0; i < options.passwordLength; i) {
    //TODO: Make this into a loop
    if(options.includeNum && i < options.passwordLength){
        password = password.concat(getRandom(numericCharacters))
        i++;
      }
      if(options.includeLower && i < options.passwordLength){
        password = password.concat(getRandom(lowerCasedCharacters))
        i++;
      }
      if(options.includeUpper && i < options.passwordLength){
        password = password.concat(getRandom(upperCasedCharacters))
        i++;
      }
    }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//Prompt user for password criteria
writePassword();