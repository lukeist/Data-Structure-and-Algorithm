// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  // your code here ..

  const left = "(";
  const right = ")";
  //   const strOfLeft = parens.replaceAll(right, "");
  //   const strOfRight = parens.replaceAll(left, "");
  const strOfLeft = parens.replace(/\(/g, "");
  const strOfRight = parens.replace(/\)/g, "");

  const numberOfLeftInParens = strOfLeft.length;
  const numberOfRightInParens = strOfRight.length;

  if (parens.charAt(0) === right || parens.charAt(parens.length - 1) === left) {
    return false;
  } else {
    if (numberOfLeftInParens !== numberOfRightInParens) {
      // if (parens.length % 2 !== 0) {
      return false;
    } else {
      let num = 0;
      for (let i = 0; i < parens.length; i++) {
        if (parens[i] === left) {
          num = num + 1;
        }
        if (parens[i] === right) {
          num = num - 1;
        }
        if (num === -1) {
          return false;
        }
      }
      return true;
    }
  }
}

/// better solution:

function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
