// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

function generatePassword() {
  var passLength = prompt("Please enter the length of the password required, between 8 and 128 characters", 8)
  while(passLength < 8 || passLength >128){
  passLength = prompt("Please enter a length value between 8 and 128 characters.", 8)
  };
  var useUppercase = confirm("Would you like to use uppercase letters in your password?\nPress 'Cancel' to generate a password without Uppercase letters.")
  var useNumbers = confirm("Would you like to use numbers in your password?\nPress 'Cancel' to generate a password without numbers.")
var useSymbols = confirm("Would you like to use symbols in your password?\nPress 'Cancel' to generate a password without symbols.")
var simplifyPassword = confirm("Would you like to remove commonly confused characters?\nPress 'Cancel' to generate a password using the full set of characters and symbols.")

 var result = "";
  //  a simplified set of characters for easier to type passwords. less secure! 
  if (simplifyPassword) {
    var lowercase = "abcdefghijkmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHJKLMNPRSTUVWXYZ";
    var numbers = "23456789";
    var symbols = ":=?@!#%+";
  } else {
    // larger set of allowed characters for more secure passwords. 
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  // gurantee characters, including special characters if required.
  result += lowercase.charAt(Math.floor(Math.random() * lowercase.length))
  if (useUppercase) {result += uppercase.charAt(Math.floor(Math.random() * uppercase.length))}
  if (useNumbers) { result += numbers.charAt(Math.floor(Math.random() * numbers.length))}
  if (useSymbols) { result += symbols.charAt(Math.floor(Math.random() * symbols.length))}
  // use global variables to add special characters to list of available random characters. 
  var characters = lowercase;
  if (useUppercase) { characters += uppercase };
  if (useNumbers) { characters += numbers };
  if (useSymbols) { characters += symbols };

  // calculate length of password and randomly generate remaining characters 
  var currentPassLength = result.length
  for (var i = 0; i < (passLength - currentPassLength); i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  };

  // now shuffle result using Fisher-Yates shuffle to ensure special symbols are not at the beginning and return
  // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript

  return result.split("").map(v => [v, Math.random()]).sort((a, b) => a[1] - b[1]).map(v => v[0]).join("")

}
