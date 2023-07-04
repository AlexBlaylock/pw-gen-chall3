// Assignment Code
var generateBtn = document.querySelector("#generate");
// announcing what characters I want to allow for the password generation. 
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var emptyPool = ""


function generatePassword() {
let pwLength = prompt("Enter password length. 8(min) to 128(max).")

if (pwLength < 8 || pwLength > 128) {
alert("Please enter a password length that is 8(min) to 128(max)!")
return ""; 
}
// confirm prompts for what character sets to include.
let lowercaseConfirm = confirm("Confirm to innclude lowercase letters?")
let uppercaseConfirm = confirm("Confirm to include uppercase letters?")
let numberConfirm = confirm("Confirm to include numbers?")
let specialConfirm = confirm("Confirm to include special characters.")

// Alerts if you select none of the confirm options.
if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm){
  alert("You need to select at least one character type!")
  return "";
}
// These add the character sets to Pool for math function later.
if (lowercaseConfirm) {
  emptyPool += lowercaseChars
}

if (uppercaseConfirm) {
  emptyPool += uppercaseChars
}

if (numberConfirm) {
  emptyPool += numberChars
}

if (specialConfirm) {
  emptyPool += specialChars
}

let emptyPw = "" ;

for (var i = 0; i < pwLength; i++) {
  let randomIndex = Math.floor(Math.random() * emptyPool.length)
  emptyPw += emptyPool.charAt(randomIndex);
}

return emptyPw; 
// After trial and error I found that having a return at the end fixed my password coming as undefined.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
