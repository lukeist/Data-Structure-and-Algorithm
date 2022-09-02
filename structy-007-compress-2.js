// p: str
// r: str

// // O(s.length) O(s.length)
// 2 pointers:
const compress = (s) => {
  let i = 0;
  let j = 0;
  let result = "";

  while (i <= s.length) {
    if (s[i] === s[j]) {
      i++;
    } else {
      i - j === 1 ? (result += s[j]) : (result += i - j + s[j]);

      j = i;
      i++;
    }
  }

  return result;
};
//      i
// ccaaatsss
//   j

// // O(s.length) O(s.length)
// const compress = (s) => {
//   const stack = [s[0]];
//   let result = "";
//   let count = 1;

//   for (let i = 1; i <= s.length; i++) {
//     console.log(stack);

//     if (s[i] === s[i - 1]) {
//       count++;
//     } else {
//       count === 1 ? (result += stack.pop()) : (result += count + stack.pop());

//       count = 1;
//       stack.push(s[i]);
//     }
//   }

//   return result;
// };

console.log(compress("ccaaatsss")); // -> '2c3at3s'
