// https://leetcode.com/problems/valid-parentheses/

// p: string
// r: boolean
//

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

var isValid = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  }; //
  const stack = [];

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(map[char]);
    } else {
      let popStack = stack.pop();
      if (char !== popStack) {
        console.log(popStack, false);
        return false;
      }
    }
  }
  console.log(stack.length === 0);
  return stack.length === 0;
};

isValid("[({(())}[()])]"); // true []()
isValid("()"); // true
isValid("))"); // false
isValid("{[]}"); // true
isValid("()[]{}"); // true
isValid("([)]"); // false
isValid("([}}])"); // false
// var isValid = function (s) {
//   // hash table of strings
//   // give value them as +1 & -1

//   const map = { "(": 1, ")": -1, "{": 1, "}": -1, "[": 1, "]": -1 };

//   let count = 0;
//   let countPA = 0;
//   let countPB = 0;
//   let countPC = 0;

//   // loop through s, if we see -1 first, return false

//   for (let char of s) {
//     count += map[char];

//     if (count === -1) {
//       console.log("wrong order", false);
//       return false;
//     }

//     countPA += (char === "(" || char === ")") && map[char];
//     countPB += (char === "{" || char === "}") && map[char];
//     countPC += (char === "[" || char === "]") && map[char];

//     // // console.log(countPA, "---", countPB, "---", countPC);

//     if (countPA === 0 && (countPB !== 0 || countPC !== 0)) {
//       console.log(false);
//       return false;
//     }
//     if (countPB === 0 && (countPC !== 0 || countPA !== 0)) {
//       console.log(false);
//       return false;
//     }
//     if (countPC === 0 && (countPA !== 0 || countPB !== 0)) {
//       console.log(false);
//       return false;
//     }
//   }

//   // check from open char (example '[') to close char (ex. ']') if count !== 0 => return false (ex: "([)]")   what about : (())

//   // filter to only A, B, C
//   const filterS = (str, left, right) => {
//     str = str.split("").filter((c) => c === left || c === right);
//     // str = str.map((c) => (c === left ? 1 : -1)); =>>> space complexity

//     return str.reduce((p, c) => p + map[c], 0);
//   };

//   let filterPA = filterS(s, "(", ")");
//   let filterPB = filterS(s, "{", "}");
//   let filterPC = filterS(s, "[", "]");
//   // console.log(filterPA === 0 && filterPB === 0 && filterPC === 0);
//   return filterPA === 0 && filterPB === 0 && filterPC === 0;
// };

// // working solution but too slow:

// var isValid = function (s) {
//   if (s.length % 2 !== 0) return false;

//   const map = { "(": 1, ")": -1, "{": 1, "}": -1, "[": 1, "]": -1 };
//   let count = 0;

//   const stack = [];

//   for (let char of s) {
//     count += map[char];
//     if (count === -1) {
//       console.log("wrong order", false);
//       return false;
//     }

//     char === "(" && stack.push("()");
//     char === "{" && stack.push("{}");
//     char === "[" && stack.push("[]");

//     let stackpop = "";

//     console.log(stack.lastIndexOf("()"), stack.length - 1);
//     if (char === ")" && stack.lastIndexOf("()") === stack.length - 1) {
//       stackpop = stack.pop();
//       console.log(char, stackpop);
//     }

//     // else if (char === ")" && stack.lastIndexOf("()") !== stack.length - 1) {
//     //   console.log(false);
//     //   return false;
//     // }

//     console.log(stack.lastIndexOf("{}"), stack.length - 1);
//     if (char === "}" && stack.lastIndexOf("{}") === stack.length - 1) {
//       stackpop = stack.pop();
//       console.log(char, stackpop);
//     }

//     // else if (char === "}" && stack.lastIndexOf("{}") !== stack.length - 1) {
//     //   console.log(false);
//     //   return false;
//     // }

//     console.log(stack.lastIndexOf("[]"), stack.length - 1);
//     if (char === "]" && stack.lastIndexOf("[]") === stack.length - 1) {
//       stackpop = stack.pop();
//       console.log(char, stackpop);
//     }

//     // else if (char === "]" && stack.lastIndexOf("[]") !== stack.length - 1) {
//     //   console.log(false);
//     //   return false;
//     // }

//     console.log(char);
//   }
//   console.log(stack.length === 0);
//   return stack.length === 0;
// };
