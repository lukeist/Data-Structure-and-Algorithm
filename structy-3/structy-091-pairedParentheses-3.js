const pairedParentheses = (str) => {
  const stack = [];

  for (let c of str) {
    if (c === "(") stack.push(")");
    if (c === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
};

// const pairedParentheses = (s) => {
//   let count = 0;
//   for (let c of s) {
//     if (count === -1) return false;
//     if (c === '(') {
//       count++;
//     } else if (c === ')') {
//       count--;
//     }
//   }
//   return count === 0;
// }
