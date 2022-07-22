// https://structy.net/problems/premium/paired-parentheses

// p: str
// r: boolean

const pairedParentheses = (str) => {
  if (str[0] === ")") return false;

  const stack = [];
  for (let char of str) {
    char === "(" && stack.push(char);
    char === ")" && stack.pop(char);
  }

  return stack.length === 0;
};

// console.log(pairedParentheses("(david)((abby))")); // -> true
// console.log(pairedParentheses("()rose(jeff")); // -> false
console.log(pairedParentheses("))()")); // -> false
