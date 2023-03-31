//assigning variable for lenth, and different types for password
var passwordText = document.querySelector("#password");
let pswrd = "";

//assigning the different types of options for password including uppercase, lowercase, numbers, and characters
const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const char = ["!", "@", "#", "$", "%", "^", "&", "*"]
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//query selector for the button to trigger passwork generation
var generateBtn = document.querySelector("#generate");



function writePassword() { 

//user prompts to get requirements for password
  var pLength = prompt("How many cahracters would you like your password to be?", "It must be greater than 8 or less than 128");
// makes sure password length is between 8 and 128
  if (pLength > 128 || pLength < 8) {
    alert("please enter a number greater than 8 or less than 128");
    return;
  }  else {
  var pNum = confirm("Would you like your password to include numbers press ok for yes and cancel for no" );
 var pUpper = confirm("Would you like your password to include uppercase letters?");
 var pLower = confirm("Would you like your password to include lowercase letters?");
 var pChar = confirm("Would you like your password to include characters?");
}

  
// makes sure user inputs a valid number plus selects categories for passwords.
 if (pLength === null && pNum === false && pUpper === false && pLower === false && pChar === false) {
  alert("you did not enter anything. Please click generate passwork and add the length of the password you would like as well as if you would like to have characters, numbers, uppercase letter, or lowercase numbers");
  return;
 }  

 if (pLength < 128 && pLength > 8 && pNum === false && pUpper === false && pLower === false && pChar === false) {
  alert("you have to select a character, number, uppercase letter or lowercase letter in order for a password to generate");
  return;
 }

let pswdArray = []

// concats the passwords arrays depending on the selection of the user
if (pNum) {
  pswdArray = pswdArray.concat(num);
  
} 
if (pChar) {
  pswdArray = pswdArray.concat(char);
}  

if (pLower) {
  pswdArray = pswdArray.concat(lower);
} 

if (pUpper) {
  pswdArray = pswdArray.concat(upper);
}
//loops to randomly create the password based on the user's asked length and available types
for (let index = 0; index < pLength; index++) {
  pswrd += pswdArray[Math.floor(Math.random() * pswdArray.length)];
} 
console.log(pswrd);

passwordText.value = pswrd;


}

generateBtn.addEventListener("click", writePassword);
