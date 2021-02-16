// Assignment code here
 var passLength = prompt("How many characters do you want in your password? Enter a number between 8 and 128, inclusive.");
 var charType = prompt("Which type(s) of characters do you want? Please choose at least one: uppercase, lowercase, numeric, or special.")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
