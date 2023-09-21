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


function generatePassword() {
  // ask user for parameters. 
  var passLength = prompt("Please enter the length of the password required, between 8 and 128 characters", 8)
  // ask again until they provide a value between 8 and 128
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please enter a length value between 8 and 128 characters.", 8)
  };
  var useUppercase = confirm("Would you like to use uppercase letters in your password?\nPress 'Cancel' to generate a password without Uppercase letters.")
  var useNumbers = confirm("Would you like to use numbers in your password?\nPress 'Cancel' to generate a password without numbers.")
  var useSymbols = confirm("Would you like to use symbols in your password?\nPress 'Cancel' to generate a password without symbols.")
  var simplifyPassword = confirm("Would you like to remove commonly confused characters?\nPress 'Cancel' to generate a password using the full set of characters and symbols.")

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
  // adding at least one of each type of character to result, depending on prompts.
  var result = lowercase.charAt(Math.floor(Math.random() * lowercase.length))
  if (useUppercase) { result += uppercase.charAt(Math.floor(Math.random() * uppercase.length)) }
  if (useNumbers) { result += numbers.charAt(Math.floor(Math.random() * numbers.length)) }
  if (useSymbols) { result += symbols.charAt(Math.floor(Math.random() * symbols.length)) }
  // use the prompts to create a set of charaters for randomly generating the remaining characters. 
  var characters = lowercase;
  if (useUppercase) { characters += uppercase };
  if (useNumbers) { characters += numbers };
  if (useSymbols) { characters += symbols };

  // calculate length of password and randomly generate remaining characters. 
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  var currentPassLength = result.length
  for (var i = 0; i < (passLength - currentPassLength); i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  };

  // now shuffle result using Fisher-Yates shuffle to ensure special symbols are not at the beginning and return the finished password.
  // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript

  return result.split("").map(v => [v, Math.random()]).sort((a, b) => a[1] - b[1]).map(v => v[0]).join("")

}
