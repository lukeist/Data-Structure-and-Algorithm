// p: str
// r: boolean

// (){}[](())
//
const befittingBrackets = (str) => {
  if (str.length % 2 !== 0) return false;

  const stack = [];

  for (let c of str) {
    c === "(" && stack.push(")");
    c === "[" && stack.push("]");
    c === "{" && stack.push("}");

    let lastI = stack.length - 1;
    c === ")" && stack[lastI] === ")" && stack.pop();
    c === "]" && stack[lastI] === "]" && stack.pop();
    c === "}" && stack[lastI] === "}" && stack.pop();
  }

  return stack.length === 0;
};

// hash map O(str.length) O(6)
// const befittingBrackets = (str) => {
//   if (str.length % 2 !== 0) return false;

//   const map = {};
//   for (let c of str) {
//     // map[c] = (0 || map[c]) + 1;
//     c in map ? map[c]++ : (map[c] = 1);
//   }

//   console.log(map);
//   return (
//     map["("] === map[")"] && map["["] === map["]"] && map["{"] === map["}"]
//   );
// };

console.log(befittingBrackets("(){}[](())")); // -> true
// console.log(befittingBrackets("{[(}])")); // -> false
// }])
