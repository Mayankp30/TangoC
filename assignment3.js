// assignment 3 

function assignment3(str) {
  var h = 7;
  var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    var index = letters.indexOf(letter);
    h = (h * 37) + index;
  }
  return h;
}


// custom hash function - lets you have every combination of word and check with its value.

function implementHash () {
  var hexConversion = convertToHex(0);
  var getHexWord = getHexWord(hexConversion);

  while (assignment3(word) !== 667734139064) {
    getHexWord = incrementHexValue(getHexWord);
    getHexWord = getHexWord(hexConversion);
  }
  return word;
}

/**
 * function getHexWord takes a hex string and returns word associated with it
 **/
function getHexWord (hex) {
  var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
  var str = '';

  for (var i = 0; i < hexConversion.length; i++) {
    var index = toNum(hexConversion[i]);
    var letter = letters[index];

    str += letter;
  }
  return word;
}

/**
 * Increments a string in hex
 **/
function incrementHexValue (StringHex) {
  var num = convertToNum(StringHex);

  return convertToHex(num + 1);
}

/**
 * function convertToNum takes a hex string, and returns the base 10 number associated with that hex string.
 **/

function convertToNum (word) {
  return parseInt(word, 16);
}

/**
 * function convertToNum takes a number which we recieved from convertToNum i.e. base 10 number and returns the string associated with that number.
 **/
function convertToHex (number) {
  var pad = '0000000';
  var str = (number).toString(16);
  return pad.substring(0, pad.length - str.length) + str;
}

console.log(assignment3("warewolf"));
