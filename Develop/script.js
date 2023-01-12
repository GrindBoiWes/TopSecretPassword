// Variables for randomized password. The generator will use these as selected in the prompts given //
var characterLength = 8;
var choiceArr = [];
var specialCharacter = ['!', '@', '#', "$", '%', "^", "&", '*', "/", "<" , ">"];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);

// This section generates the password itself // 

function writePassword() {
  var truePrompt = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (truePrompt) {
    var genPassword = generatePassword();
    passwordText.value = genPassword;
    } else {
      passwordText.value = "";
    }
 }
//  This section will generate a loop for randomizing the password based on answered prompts  //
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// This section will give prompts for each question about how you would like your password to be finalized.
// You can mix and match which one's you would like, for instance no lowercase or symbols only uppercase and numbers. If entering "five", you will get hit with an error to resubmit your number //

function getPrompts() {

  choiceArr = [];

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
  if (confirm("Would you like numbers in your secure password?")) {
    choiceArr = choiceArr.concat(number);
  }
  return true;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  