/**
 * @param {string[]} strs
 * @return {string}
 */
// p: arr
// r: str / ''
// e:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// flowera
// flowerb
// flowerc
// flowerd
// flow

//

var longestCommonPrefix = function (strs) {
  let result = "";

  let minLen = Infinity;
  for (let s of strs) {
    minLen = Math.min(minLen, s.length);
  }

  for (let i = 0; i < minLen; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] !== strs[j][i]) return result;
    }
    result += strs[0][i];
  }

  return result;
};

// // max length of a word ?
// // O(arr.len x maxWord.len x maxWord.len)
// var longestCommonPrefix = function (strs) {
//   const minLen = Math.min(...strs.map((s) => s.length));
//   const map = {};

//   for (let s of strs) {
//     for (let i = 0; i <= minLen; i++) {
//       map[s.slice(0, i)] = (map[s.slice(0, i)] || 0) + 1;
//     }
//   }

//   console.log(map);
//   let max = -Infinity;
//   for (let m in map) {
//     max = Math.max(max, map[m]);
//   }

//   let arr = [];
//   for (let m in map) {
//     if (map[m] === max) arr.push(m);
//   }

//   max = -Infinity;
//   for (let a of arr) {
//     max = Math.max(max, a.length);
//   }
//   for (let a of arr) {
//     if (a.length === max) return a;
//   }
//   return "";
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["a"]));
console.log(
  longestCommonPrefix([
    "flower",
    "flowera",
    "flowerb",
    "flowerc",
    "flowerd",
    "flow",
  ])
);
// flowera
// flowerb
// flowerc
// flowerd
// flow
