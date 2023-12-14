/**
 * @param {string} s
 * @return {boolean}
 */

// p: string
// r: boolean
// e: s = "()[]{}" => true
// ))

// ([{}])
// [}
// []

// ()
// [(
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let c of s) {
    if (c in map) {
      stack.push(map[c]);
    } else {
      const lastI = stack.length - 1;
      if (stack[lastI] === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
