// Assignment Code
var characterLength = 8;
var choiceArr = [];
var specialCharacter = ['!', '@', '#', "$", '%', "^", "&", '*', "/", "<" , ">"];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompts();
  var passwordText = document.querySelector("#password");
 
  if (correctPrompt) {
    var genPassword = generatePassword();
    passwordText.value = genPassword;
    } else {
      passwordTest.value = "";
    }
 }
  
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters"));
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number between 8 - 128. Please re-enter now");
    return false; 
  }
  if (confirm("Would you like to have lowercase letters in your secure password?")) {
    choiceArr = choiceArr.concat(lowerCase);
  }
  if (confirm("Would you like to have uppercase letters in your secure password?")) {
    choiceArr = choiceArr.concat(upperCase);
  }
  if (confirm("Would you like to have special characters in your secure password?")) {
    choiceArr = choiceArr.concat(specialCharacter);
  }
  if (confirm("Would you like to numbers in your secure password?")) {
    choiceArr = choiceArr.concat(number);
  }
  return true;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  /// To Do List
  // 1) When I click the button to generate password..
  // 2) Then I am presented with a series of prompts for password criteria
  // 3) Then I select which criteria to include in password
  // 4) Then prompted for length of password (8-128)
  // 5) Then asked for character types
  // 6) Confirm wether to include lowercase, uppercase, numeric, and/or special characters
  // 7) Answer each prompt
  // 8) Then my input should be validated and at least one character type should be selected
  // 9) All prompts are answered
  // 10) Then a password is generated that matches selected criteria
  // 11) Password is generated
  // 12) Password is either displayed in an alert or writter to the page