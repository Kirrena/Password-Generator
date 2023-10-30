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
var lowNr=0;
var upperChar=[];
var uppNr=0;
var numChar=[];
var numNr=0;
var specChar=[];
var specNr=0;

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
      return;
          }


// Function to prompt user for password options for lower cased characters
  function getPasswordOptions2() {         
           //user picks if he wants to customize lower cased characters or randomly get generated
       var wantLowerChar=prompt("Do you have any preferences for lower cased characters in your password? If yes, please input how many lower cased character would you like.");
           //if we have got an ideal number for lower cased Characters we ask to input 1 by 1 
           if(wantLowerChar<=length-3 && wantLowerChar>0){
              for (lowNr=0; lowNr <wantLowerChar; lowNr++){
                  lowerChar[lowNr] = prompt("Please input the "+ (lowNr+1) +". lower cased character.");
                  if(!password.lowerCasedCharacters.includes(lowerChar[lowNr])){
                     alert("Please try again with lower cased character");
                     getPasswordOptions2();
                  }
              }
            }
             // if user doesnt want to input any lower case we have got false value, then we pick randomly from the lowerCasedCharacters property of password object
            //make sure with length-2 we have room for the other 3options
            else if (!wantLowerChar){
              for ( lowNr=0 ; lowNr<Math.floor(Math.random()*(length-2)+1); lowNr++){
              lowerChar[lowNr]=getRandom(password.lowerCasedCharacters);
             }
             }
            else  {
              alert("Please type a number between 1 and "+ (length-3));
              getPasswordOptions2();
              }    
            return;
            }


 // Function to prompt user for password options for upper cased characters
 function getPasswordOptions3() { 
   //user picks if he wants to customize upper cased characters or randomly get generated
  var wantUpperChar=prompt("Do you have any preferences for upper cased characters in your password? If yes, please input how many upper cased character would you like. You have maximum of " + (length-lowNr-2) + "space for it");
  //if we have got an ideal number for upper cased Characters we ask to input 1 by 1 
  if(wantUpperChar<=length-lowNr-2 && wantUpperChar>0){
     for (uppNr=0; uppNr <wantUpperChar; uppNr++){
         upperChar[uppNr] = prompt("Please input the "+ (uppNr+1) +". upper cased character.");
         if(!password.upperCasedCharacters.includes(upperChar[uppNr])){
            alert("Please try again with upper cased character");
            getPasswordOptions3();
         }
     }
   }
    // if user doesnt want to input any upper cased we have got false value, then we pick randomly from the upperCasedCharacters property of password object
   //make sure with length-lowNr-1 we have room for the other 2options=spec char and numeric
   else if (!wantUpperChar){
     for ( uppNr=0 ; uppNr<Math.floor(Math.random()*(length-lowNr-1)+1); uppNr++){
     upperChar[uppNr]=getRandom(password.upperCasedCharacters);
    }
    }
   else  {
     alert("Please type a number between 1 and "+ (length-lowNr-2));
     getPasswordOptions3();
     }    
    return;
    }         

// Function to prompt user for password options for numeric characters
function getPasswordOptions4() { 
  //user picks if he wants to customize numeric characters or randomly get generated
 var wantNumChar=prompt("Do you have any preferences for numeric characters in your password? If yes, please input how many numeric character would you like. You have maximum of " + (length-lowNr-uppNr-1) + "space for it");
 //if we have got an ideal number for numeric Characters we ask to input 1 by 1 
 if(wantNumChar<=length-lowNr-uppNr-1 && wantNumChar>0){
    for (numNr=0; numNr <wantNumChar; numNr++){
        numChar[numNr] = prompt("Please input the "+ (numNr+1) +". numeric character.");
        if(!password.numericCharacters.includes(numChar[numNr])){
           alert("Please try again with numeric character");
           getPasswordOptions4();
        }
    }
  }
   // if user doesnt want to input any numeric we have got false value, then we pick randomly from the numericCharacters property of password object
 
  else if (!wantNumChar){
    for ( numNr=0 ; numNr<Math.floor(Math.random()*(length-lowNr-uppNr)+1); numNr++){
    numChar[numNr]=getRandom(password.numericCharacters);
   }
   }
  else  {
    alert("Please type a number between 1 and "+ (length-lowNr-uppNr-1));
    getPasswordOptions4();
    }    
  return;
  }


// Function to prompt user for password options for special characters
function getPasswordOptions5() { 
  //user picks if he wants to customize special characters or randomly get generated
  var wantSpecChar=confirm("Do you have any preferences for special characters in your password? If yes, please input "+ (length-lowNr-uppNr-numNr) + "special character.");
  //if user doesnt want to pick certain spec characters we fill up the rest of the spaces with spaecial characters
  if (!wantSpecChar){
  for ( specNr=0 ; specNr<length-lowNr-uppNr-numNr; specNr++){
  specChar[specNr]=getRandom(password.specialCharacters);
 }
 }
// else we let the user the fill up the rest of the room with special characters
 else  {
  for (specNr=0; specNr <length-lowNr-uppNr-numNr; specNr++){
        specChar[specNr] = prompt("Please input the "+ (specNr+1) +". special character.");
        if(!password.specialCharacters.includes(specChar[specNr])){
           alert("Please try again with special character");
           getPasswordOptions5();
        }
    }
  }
 return;
}  

/*For testing
console.log(lowNr);
console.log(lowerChar);
console.log(uppNr);
console.log(upperChar);
console.log(numNr);
console.log(numChar);
console.log(specNr);
console.log(specChar);
*/

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
         }



// Function to generate password with user input
function generatePassword() {
    var combined=[];
    combined = shuffle(lowerChar.concat(upperChar, numChar,specChar));
    console.log(combined);
    //use join method to display with space between characters
    return combined.join(' ');
    
}
//Code from w3schools to shuffle the elements in an array using Fisher-Yates algorithm
function shuffle(arr) {
  for (let i = arr.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  }
 return arr;
}; 
  


getPasswordOptions1();
getPasswordOptions2();
getPasswordOptions3();
getPasswordOptions4();
getPasswordOptions5();
generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordResult = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

