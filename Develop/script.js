// Assignment code here

var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberArray = [0,1,2,3,4,5,6,7,8,9];
var specialArray = ["!","@","#","$","%","^","&","*","?"]; 


 var generatePassword = function() {
  var promptLength = prompt("How many characters do you want in your password? Enter a number between 8 and 128, inclusive.");
    // validate prompt answer 
  var upperSelection = confirm("Would you like to use uppercase characters? Click 'okay' for yes, and 'cancel' for no.");
  var lowerSelection = confirm("Would you like to use lowercase characters? Click 'okay' for yes, and 'cancel' for no.");
  var specialSelection = confirm("Would you like to use special characters? Click 'okay' for yes, and 'cancel' for no.");
 }

    // validate prompt answer

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

// 


























