// assign the generate button to a variable
var generateBtn = document.querySelector("#generate");

// user prompt to pick a password length
var passwordLength = prompt("Pick a password length between 8 and 128 characters.");

// while loop to validate password length and re-initiate the prompt if not valid
while (passwordLength < 8 || passwordLength > 128) {
	alert ('Error: Password length entered is not between 8 and 128 characters.');
  passwordLength = window.prompt("Pick a password length between 8 and 128 characters.")};

// the rest of the user inputs
var isLowercase = window.confirm("Do you want lowercase characters in your password?");
var isUppercase = window.confirm("Do you want uppercase characters in your password?");
var isNumbers = window.confirm("Do you want numbers in your password?");
var isSpecialCharacters = window.confirm("Do you want special characters in your password?");

// arrays containing each of the valid characters by type
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCharcters = [];

// "space" was removed from special character list
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];

// create array to hold user selected valid characters
var validCharacterList = []

// for loop to change populate upperCharacters array from lowerCharacters array
for (var i = 0; i < lowerCharacters.length; i++) {
  upperCharcters[i] = lowerCharacters[i].toUpperCase();
}

// function to use user selections to concat character lists into the valid list
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

// call function
passwordList(isLowercase,isUppercase,isNumbers,isSpecialCharacters);

// create string variable to hold the password
var password = ""

// function to get random array index
function getRandomItem(array) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * array.length);

  // get random item
  const item = array[randomIndex];
  
  // return random index value
  return item;
}

// create function that uses random index value to generate a random password from validCharacterList which uses user provided password length
var generatePassword = function() {
  for (i = 0; i < passwordLength; i++) {
  password = password.concat(getRandomItem(validCharacterList));
}}

// function which clears password value so user can click button more than onoce
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
