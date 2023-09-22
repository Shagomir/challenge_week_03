

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function writeSimplePassword() {
  var password = shuffle(generateCharacters(8, [true, true, true, true], ["abcdefghijkmnopqrstuvwxyz", "ABCDEFGHJKLMNPRSTUVWXYZ", "23456789", ":=?@!#%+"]));
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function writeComplexPassword() {
  var password = shuffle(generateCharacters(128, [true, true, true, true], ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"] ));
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



function getLength() {
  // ask until they provide a value between 8 and 128
  var l = 0
  while (l < 8 || l > 128) {
   l = prompt("Please enter the length of the password required, between 8 and 128 characters", 8)
  };
  return l
}

function getParams() {
  //get character options for password. Will repeat until at least one is selected. 
  var l, u, n, s;
  while (!l && !u && !n && !s) {
    alert("Please choose which characters to include in your password. Note that you must make at least one selection to proceed.");
    l = confirm("Would you like to use lowercase letters in your password?\nPress 'Cancel' to generate a password without lowercase letters.");
    u = confirm("Would you like to use uppercase letters in your password?\nPress 'Cancel' to generate a password without uppercase letters.");
    n = confirm("Would you like to use numbers in your password?\nPress 'Cancel' to generate a password without numbers.");
    s = confirm("Would you like to use symbols in your password?\nPress 'Cancel' to generate a password without symbols.");
  }
  return [l, u, n, s]
}

function getCharSet() {
  //confirm set of characters to use
  if (confirm("Would you like to remove commonly confused characters?\nPress 'Cancel' to generate a password using the full set of characters and symbols.")) {
    return ["abcdefghijkmnopqrstuvwxyz", "ABCDEFGHJKLMNPRSTUVWXYZ", "23456789", ":=?@!#%+"]    //  a simplified set of characters for easier to type passwords. less secure! 
  }
  return ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]  // larger set of allowed characters for more secure passwords. 
}

function generateCharacters(pwdLength, param, charSet) {
  //generates a set of characters for the password which will include all of the types that are required. 
  //The index of the arrays should be the same and correspond to each other. 
  //This also builds a set of all characters for the next step.
  var allChars = "";
  var result = "";
  for (var i = 0; i < param.length; i++) {
    if (param[i]) {
      result += charSet[i].charAt(Math.floor(Math.random() * charSet[i].length))
      allChars += charSet[i]
    }
  }
  //pad out the password length with additional random characters from the set.
  var req = result.length
  for (var i = 0; i < (pwdLength - req); i++) {
    result += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return result
}

function shuffle(s) {
  // Shuffle result using Fisher-Yates shuffle to ensure special symbols are not at the beginning and return the finished password.
  // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
  var a = s.split("")

  for (var i = 0; i < a.length; i++) {
    var j = Math.floor(Math.random() * s.length)
    var k = a[i]
    a[i] = a[j]
    a[j] = k
  }
  return a.join("")
}

function generatePassword() {
  var length = getLength()
  var params = getParams()
  var charSet = getCharSet()
  var generated = generateCharacters(length, params, charSet)
  return shuffle(generated)
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var simpleBtn = document.querySelector("#genSimple");
var complexBtn = document.querySelector("#genComplex");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
simpleBtn.addEventListener("click", writeSimplePassword);
complexBtn.addEventListener("click", writeComplexPassword);