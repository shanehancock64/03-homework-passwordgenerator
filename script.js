// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var special = "!@#$%^&*()_+-=[]{}/?.>,<`~";
var choice = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";
  // Pop-up prompt asking how many characters do you want
  var length = prompt(
    "How many characters do you want? Must be at least 8 and less then 128"
  );
  // If nothing is entered alert: enter a number will pop-up.
  if (length === "") {
    alert("Enter a number!!");
  } 
  // makes sure number selected is between 8-128
  if (length < 8 || length > 128) {
    alert("You must select number between 8 and 128!");
  }
  // if number selected is between 8-128 moves to next step
  if (length > 8 && length < 128) {
    var hasUpper = confirm("Do you want to include uppercase letters?");
    //if yes selects uppercase letters to be added
    if (hasUpper) {
      choice += upper;
    } else {
      // DO NOTHING 
    }
    var hasLower = confirm("Do you want to include lowercase letters?");
    //if yes selects lowercase letters to be added
    if (hasLower) {
      choice += lower;
    } else {
      // DO NOTHING 
    }
    var hasNum = confirm("Do you want to include numbers?");
    //if yes selects numbers to be added
    if (hasNum) {
      choice += num;
    } else {
    // DO NOTHING
    }
    var hasSymb = confirm("Do you want to incude special characters?");
    //if yes selects symbols to be added
    if (hasSymb) {
      choice += special;
    } else {
      // DO NOTHING 
    }

    // creates loop to randomize selected characters to make password
    for (let i = 0; i < length; i++) {
      result += choice[Math.floor(Math.random() * choice.length)];
    }
    return result;
  }
}
