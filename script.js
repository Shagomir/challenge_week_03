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

function getLength() {
  // ask user for length. 
  var l = prompt("Please enter the length of the password required, between 8 and 128 characters", 8)
  // ask again until they provide a value between 8 and 128
  while (l < 8 || l > 128) {
    l = prompt("The length must be between 8 and 128 characters, please enter a valid value", 8)
  };
  return l
}

function getParams() {
  //get character options for password. We assume we always want lowercase.
  return [true, 
    confirm("Would you like to use uppercase letters in your password?\nPress 'Cancel' to generate a password without Uppercase letters."),
    confirm("Would you like to use numbers in your password?\nPress 'Cancel' to generate a password without numbers."),
    confirm("Would you like to use symbols in your password?\nPress 'Cancel' to generate a password without symbols.")]
}

function getSet() {
  //confirm set of characters to use
  if (confirm("Would you like to remove commonly confused characters?\nPress 'Cancel' to generate a password using the full set of characters and symbols.")) {
    return ["abcdefghijkmnopqrstuvwxyz", "ABCDEFGHJKLMNPRSTUVWXYZ", "23456789", ":=?@!#%+"]    //  a simplified set of characters for easier to type passwords. less secure! 
  }
  return ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]  // larger set of allowed characters for more secure passwords. 
}

function generateCharacters(pl, par, set) {
  //generates as set of characters for the password which will include all of the types that are required
  var chars = "";
  var result = "";
  for (var i = 0; i < par.length; i++) {
    if (par[i]) {
      result += set[i].charAt(Math.floor(Math.random() * set[i].length))
      chars += set[i]
    }
  }
  //pad out the password length with additional random characters from the set.
  var req = result.length
  for (var i = 0; i < (pl - req); i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result
}

function shuffle(string) {
  // Shuffle result using Fisher-Yates shuffle to ensure special symbols are not at the beginning and return the finished password.
  // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
  for(var i = 0; i < string.length; i++){
      var j = Math.floor(Math.random()*string.length)
      var k = string[j] 
      string[j] = string[i]
      string[i] = k
  }
  return string
}

function generatePassword() {
  return shuffle(generateCharacters(getLength(), getParams(), getSet()))
}
