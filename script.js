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
var lowNr;

// Function to prompt user for password options for length
function getPasswordOptions1() {
      length=prompt("How long would you like the length of your password to be?");    
     if (length > minLength && length < maxLength){
      return;
     }
     //Checking length if its too short or too long or input something else 
     else if (length < minLength){
                 alert ("Your secure password should be at least 8character!");
                 getPasswordOptions1();
      } else if(length > maxLength){
                 alert ("Your secure password should be no more than 128character!");
                 getPasswordOptions1();
          }
      else{
            alert("Please input a number between 8 and 128!");
            getPasswordOptions1();
           }
}

// Function to prompt user for password options for lower cased characters
  function getPasswordOptions2() {         
           // then we can step ahead to see lower cased letters
       var wantLowerChar=prompt("Do you have any preferences for lower cased characters in your password? If yes, please input how many lower cased character would you like.");
           //if we have got an ideal number for lower cased Characters we ask to input 1 by 1 
           if(wantLowerChar<length-3 && wantLowerChar>=0){
              for (lowNr=0; lowNr <wantLowerChar; lowNr++){
                  lowerChar[lowNr] = prompt("Please input the "+ (lowNr+1) +". lower cased character.");
                  if(!password.lowerCasedCharacters.includes(lowerChar[lowNr])){
                     alert("Please try again with lower cased character");
                     getPasswordOptions2();
                  }
              }
            }
             // if user doesnt want to input any lower case we have got false value, then we pick randomly from the lowerCasedCharacters property of password object
            //make sure with length-3 we have room for the other 3options
            else if (!wantLowerChar){
              for ( lowNr=0 ; lowNr<Math.random()*(length-3); lowNr++){
              lowerChar[lowNr]=getRandom(password.lowerCasedCharacters);
             }
             }
            else  {
              alert("Please type a number between 1 and "+ (length-3));
              getPasswordOptions2();
              }
            
                 
        }  


getPasswordOptions1();
getPasswordOptions2();
// Function for getting a random element from an array

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
         }


         console.log(lowerChar);
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

