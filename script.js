// Assignment code here

// Arrays //
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var passwordText = document.querySelector("#password");

// Generate Password Function //
var generatePassword = function () {
  var promptLength = prompt("How many characters do you want in your password? Enter a number between 8 and 128, inclusive.");
  // Validation of Input 
  if (isNaN(promptLength)) {
    return ("Please provide the input as a number. Click the red button to try again.");
  }
  if (promptLength % 1 != 0)
    return ("Please provide the input as a whole number. Click the red button to try again.");
  if (promptLength < 8)
    return ("Please provide the input as a number between 8 and 128. Click the red button to try again.");
  if (promptLength > 128)
    return ("Please provide the input as a number between 8 and 128. Click the red button to try again.");

  var upperSelection = confirm("Would you like to use uppercase characters? Click 'okay' for yes, and 'cancel' for no.");
  var lowerSelection = confirm("Would you like to use lowercase characters? Click 'okay' for yes, and 'cancel' for no.");
  var specialSelection = confirm("Would you like to use special characters? Click 'okay' for yes, and 'cancel' for no.");
  var numberSelection = confirm("Would you like to use numbers? Click 'okay' for yes, and 'cancel' for no.");
  if (upperSelection + lowerSelection + specialSelection + numberSelection == 0)
    return ("Please select at least one option. Click the red button to try again.");

  // Merge user selections 

  var selectionArray = []
  if (upperSelection) {
    selectionArray = selectionArray.concat(upperArray);
  }
  if (lowerSelection) {
    selectionArray = selectionArray.concat(lowerArray);
  }

  if (specialSelection) {
    selectionArray = selectionArray.concat(specialArray);
  }

  if (numberSelection) {
    selectionArray = selectionArray.concat(numberArray);
  }

  // Display password 
  let password = "";
  for (let i = 0; i < promptLength; i++) {

    let rng = Math.floor(Math.random() * selectionArray.length);

    password = password + selectionArray[rng]


  }

  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordText.value = "";
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




























