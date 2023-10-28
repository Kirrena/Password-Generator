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

// Object to store password elements
var password={
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters
};

// Global variable to make sure to access other funtions
var minLength=8;
var maxLength=128;
var length;
var lowerChar=[];

// Function to prompt user for password options
function getPasswordOptions() {
         length=prompt("How long would you like the length of your password to be?");
         
         if (length >=minLength && length<+maxLength){
                        lowerChar=confirm("Do you have any preferences for lower cased characters in your password?");
                        if (!lowerChar){
                            for (var i=0 ; i<Math.random()*(length-3)){
                              
                            }
                        }
         }

          else if (length < minLength){
                 alert ("Your secure password should be at least 8character!");
                 getPasswordOptions();
          } else if(length > maxLength){
                 alert ("Your secure password should be no more than 128character!");
                 getPasswordOptions();
          }
            else{
            alert("Please input a number between 8 and 128!");
            getPasswordOptions();
           }


}
getPasswordOptions();
// Function for getting a random element from an array
function getRandom(arr) {
         
}

// Function to generate password with user input
function generatePassword() {
    return "me"
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

