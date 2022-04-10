// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //   const strWithoutPunctuations = str.replace(/[\p{P}$+<=>^`|~]/gu, "");
  const regex = /[\p{P}$+<=>^`|~]/gu;
  // split all words into array
  const words = str.split(" ");
  let newStr = "";
  let resultStr;
  // separate punctuation from string
  if (regex.test(str)) {
    //edit words like assignment
    for (let i = 0; i < words.length - 1; i++) {
      // find first char of word
      // valueFirstChar = value.charAt(0);
      const valueFirstChar = words[i].charAt(0);
      //replace first char with nothing
      // valueWithoutFirstChar = value.replace(valueFirstChar, "");
      const valueWithoutFirstChar = words[i].replace(valueFirstChar, "");
      // add first char and ay to the end of word
      newValue = valueWithoutFirstChar + valueFirstChar + "ay";
      // add word back to new string
      newStr = newStr + " " + newValue;
    }
    resultStr = newStr.replace(" ", "") + " " + words[words.length - 1];
  } else {
    // edit words like assignment
    for (let value of words) {
      // find first char of word
      valueFirstChar = value.charAt(0);
      //replace first char with nothing
      valueWithoutFirstChar = value.replace(valueFirstChar, "");
      // add first char and ay to the end of word
      newValue = valueWithoutFirstChar + valueFirstChar + "ay";
      // add word back to new string
      newStr = newStr + " " + newValue;
    }
    resultStr = newStr.replace(" ", "");
  }

  //   const lastSpace = newStr.charAt(newStr.length - 1);
  return resultStr;
}

// better use map: (without punctuation)
function pigIt(str) {
  var arrayWord = str.split(" ");
  return arrayWord
    .map(function (word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + "ay";
    })
    .join(" ");
}

// best use regex:
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3"); // dont understand
}
