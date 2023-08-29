// p: string;
// r: boolean;
// e:
// pairedParentheses("(david)((abby))"); // -> true
// pairedParentheses(")("); // -> false
// [
// const pairedParentheses = (str) => {
//   const stack = [];

//   for (let c of str) {
//     if (c === '(') {
//       stack.push(')');
//     } else if (c === ')') {
//       if (c !== stack[stack.length - 1]) return false;
//       stack.pop();
//     } else continue;
//   }

//   return stack.length === 0;
// };

const pairedParentheses = (str) => {
  let count = 0;

  for (let c of str) {
    if (c === "(") {
      count++;
    } else if (c === ")") {
      if (count === 0) return false;
      count--;
    } else continue;
  }

  return count === 0;
};
