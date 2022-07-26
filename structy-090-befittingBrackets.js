// https://structy.net/problems/premium/befitting-brackets

// p: str
// r: boolean

// ( ) [ ] { }

const befittingBrackets = (str) => {
  if (str.length % 2 !== 0) return false;

  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };

  for (const char of str) {
    char in map && stack.push(map[char]);

    const lastI = stack.length - 1;
    char === stack[lastI] && stack.pop();
  }

  return stack.length === 0;
};

console.log(
  befittingBrackets("(){}[](())") // -> true
);

console.log(
  befittingBrackets("[][}") // -> false
);

// test_08
// console.log(
//   befittingBrackets("{[(}])") // -> false
// );

//  // this should be right with test_08
// const befittingBrackets = (str) => {
//   if (str.length % 2 !== 0) return false;

//   const stack = [];

//   const map = {};

//   for (const char of str) {

//     char === "(" && (map[char] = (map[char] || 0) + 1);
//     char === ")" && (map["("] = (map["("] || 0) - 1);

//     char === "{" && (map[char] = (map[char] || 0) + 1);
//     char === "}" && (map["{"] = (map["{"] || 0) - 1);

//     char === "[" && (map[char] = (map[char] || 0) + 1);
//     char === "]" && (map["["] = (map["["] || 0) - 1);

//     if (map[char] === -1) return false;
//   }

//   for (const key in map) {
//     if (map[key] !== 0) return false;
//   }

//   return true;
// };
