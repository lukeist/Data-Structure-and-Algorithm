var longestCommonPrefix = function (strs) {
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== first[i]) return first.slice(0, i);
    }
  }
  return first;
};

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

// // p: arr
// // r: str
// //   i
// // flower
// // flow
// // flight
// //
// // a
// //
// // aigae
// // cie
// // bige

// var longestCommonPrefix = function (strs) {
//   if (strs.length === 1) return strs[0];
//   let str = "";
//   let minLen = Infinity;
//   let stop = false;
//   for (let s of strs) {
//     minLen = Math.min(minLen, s.length);
//   }

//   //   console.log(minLen);

//   for (let i = 0; i < minLen; i++) {
//     let temp;
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j - 1][i] !== strs[j][i]) {
//         stop = !stop;
//         break;
//       }
//       temp = strs[j][i];
//     }
//     if (stop) break;
//     str += temp;
//   }

//   return str;
// };

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["aflower", "bflow", "cflight"]));
console.log(longestCommonPrefix(["flower"]));
