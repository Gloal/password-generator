//Adding strict mode to ensure better coding practice
"use strict";

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Variables for password choices
let passLength;
let lowerCaseChoice;
let upperCaseChoice;
let numericChoice;
let specialCharactersChoice;

// this is the global scope

// Function to prompt user for password options
function getPasswordOptions() {
  function getLengthChoice() {
    //get length - must be number btwn 8 and 128 inclusive
    let isNotValidLength = true;

    while (isNotValidLength) {
      passLength = prompt("Enter password length (Must be between 8 and 128)");
      let validLength = parseInt(passLength, 10);
      console.log(
        "validLength is",
        validLength,
        "data type is",
        typeof validLength
      );

      if (isNaN(validLength)) {
        alert("You must enter an actual number between 8 and 128 inclusive");
      } else if (validLength > 128 || validLength < 8) {
        alert("Your password length must be between 8 and 128 inclusive");
      } else {
        passLength = parseInt(passLength);
        isNotValidLength = false;
      }
    }
  }

  function getCharacterChoices() {
    lowerCaseChoice = confirm("Do you want to include lowercase characters?");
    upperCaseChoice = confirm("Do you want to include uppercase characters?");
    numericChoice = confirm("Do you want to include numeric characters?");
    specialCharactersChoice = confirm(
      "Do you want to include special characters?");

    if (
      lowerCaseChoice === false &&
      upperCaseChoice === false &&
      numericChoice === false &&
      specialCharactersChoice === false
    ) {
      alert("You must choose at least one set of characters");
      getChoices();
    }
  }

  getLengthChoice();
  getCharacterChoices();
}

// Function for getting a random element from an array
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// another method to generating the random password
// is to generate a master array, which will comprise all of the characters
// that the user wants, depending on their selection for wanting upper, lower, numeric, or special
// so when you're randomly selecting characters, you're pooling from just one array, which has all of
// of the characters.
// const array 3 = array.concat(array2);
// array1 = [...array1, array2];
//let choices = [lowerCaseChoice, upperCaseChoice, numericChoice, specialCharactersChoice];

// Function to generate password with user input
function generatePassword() {
  let i = 1;
  let password = "";
  //loop through to get choices till the length
  while (i <= passLength) {
    let arrayToChoose = Math.floor(Math.random() * 4);

    switch (arrayToChoose) {
      case 0:
        if (lowerCaseChoice === true) {
          password += getRandom(lowerCasedCharacters);
          i++;
        }
        break;
      case 1:
        if (upperCaseChoice === true) {
          password += getRandom(upperCasedCharacters);
          i++;
        }
        break;
      case 2:
        if (numericChoice === true) {
          password = password + getRandom(numericCharacters);
          i++;
        }
        break;
      case 3:
        if (specialCharactersChoice === true) {
          password += getRandom(specialCharacters);
          i++;
        }
        break;
      default:
        console.log("No choices - No password");
    }
  }

  alert("Your password is: " + password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//call functions
getPasswordOptions();
generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
console.log("password " + password);
console.log("passLength " + passLength);
console.log("lowerCaseChoice " + lowerCaseChoice);
console.log("upperCaseChoice " + upperCaseChoice);
console.log("numericChoice " + numericChoice);
console.log("specialCharactersChoice " + specialCharactersChoice);
*/