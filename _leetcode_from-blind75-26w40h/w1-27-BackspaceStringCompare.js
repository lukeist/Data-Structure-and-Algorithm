/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// p: string; string;
// r: boolaen
// e: s = "ab#c", t = "ad#c" => true
//i
// ab##
//  i
// c#d#
//  j
//
// 01234567890
//    i
// xxxxabcdef#####
//    j
// xxxxx####
//
// f

//       i
//  s = "ab#c", t = "ad#c"
//       j
//      i
// "bxo#j##tw"
//  [btw
// "bxj##tw"
const getString = (s) => {
  // let count = 0;
  // let newS = "";
  // for (let i = s.length - 1; i >= 0; i--) {
  //     if (s[i] === '#') {
  //         count++;
  //     } else {
  //         if (count === 0) {
  //             newS = s[i] + newS;
  //         } else {
  //             count--;
  //         }
  //     }
  // }
  // return newS;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    s[i] === "#" ? stack.pop() : stack.push(s[i]);
  }
  return stack.join("");
};

var backspaceCompare = function (s, t) {
  return getString(s) === getString(t);
};
