// Assignment Code
var generateBtn = document.querySelector("#generate");
// global announcing what characters I want to allow for the password generation. 
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var emptyPool = ""


function generatePassword() {
let pwLength = prompt("Enter password length. 8(min) to 128(max).")

if (pwLength < 8 || pwLength > 128) {
alert("Please enter a password length that is 8(min) to 128(max)!")
}

let lowercaseConfirm = confirm("Confirm to innclude lowercase letters?")
let uppercaseConfirm = confirm("Confirm to include uppercase letters?")
let numberConfirm = confirm("Confirm to include numbers?")
let specialConfirm = confirm("Confirm to include special characters.")

// Alerts if you select none of the confirm options.
if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm){
  alert("You need to select at least one character type!")
}

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

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
