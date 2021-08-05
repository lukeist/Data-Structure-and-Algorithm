// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// p: str
// r: str
// e:
//alphabetPosition("The sunset sets at twelve o' clock.")
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  text = text.toLowerCase();
  // create alphabet str
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arr = [];

  // loop through / map every char of text
  // conditional:  // check if alphabet includes character of text => index of char / if not: ignore
  for (char of text) {
    alphabet.includes(char) && arr.push(alphabet.indexOf(char) + 1);
  }

  // push index to an array
  // join all elements in array and return it

  return arr.join(" ");
}
