// Assignment Code

var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Pick a password length between 8 and 128 characters.");

while (passwordLength < 8 || passwordLength > 128) {
	alert ('Error: Password length entered is not between 8 and 128 characters.');
  passwordLength = window.prompt("Pick a password length between 8 and 128 characters.")};


// var passwordLength = window.prompt("Please enter the length of your desired password with a minimum length of 8 characters and a maximum length of 128 characters.");
var isLowercase = window.confirm("Do you want lowercase characters in your password?");
var isUppercase = window.confirm("Do you want uppercase characters in your password?");
var isNumbers = window.confirm("Do you want numbers in your password?");
var isSpecialCharacters = window.confirm("Do you want special characters in your password?");

var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCharcters = [];
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
var validCharacterList = []

for (var i = 0; i < lowerCharacters.length; i++) {
  upperCharcters[i] = lowerCharacters[i].toUpperCase();
}

var passwordList = function(w,x,y,z){
  if (w == true) {
    validCharacterList = lowerCharacters
  }
  else {
    validCharacterList = []
  }

  if (x == true){
    validCharacterList = validCharacterList.concat(upperCharcters)
  }
  else{
    validCharacterList = validCharacterList
  }

  if (y == true){
    validCharacterList = validCharacterList.concat(numbers)
  }
  else {
    validCharacterList = validCharacterList
  }
  
  if (z == true){
    validCharacterList = validCharacterList.concat(specialCharacters)
  }
  else {
    validCharacterList = validCharacterList
  }
}

passwordList(isLowercase,isUppercase,isNumbers,isSpecialCharacters);
var password = ""

function getRandomItem(array) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * array.length);

  // get random item
  const item = array[randomIndex];

  return item;
}

var generatePassword = function() {
  for (i = 0; i < passwordLength; i++) {
  password = password.concat(getRandomItem(validCharacterList));
}}


var wipePassword = function() {
  password = ""
}

// Write password to the #password input
function writePassword() {
  generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  wipePassword()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
