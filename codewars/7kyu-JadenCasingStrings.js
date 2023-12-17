// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// prep
// parameters: str upper+lower case/ no num no no no
// return: str (capitalized) / no console log
// examples 'Hello world' => 'Hello World'

String.prototype.toJadenCase = function () {
  // split str into array
  // loop through array => uppercase first char
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase();
