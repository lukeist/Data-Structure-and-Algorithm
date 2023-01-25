/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// p: str, str
// r: boolean

//   i
// ab#c
//   j
// ad#c

var backspaceCompare = function (s, t) {
  let i = s.length - 1,
    j = t.length - 1;
  let skipS = 0,
    skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      console.log(skipS, i, skipT, j);
      if (s[i] === "#") {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }

    while (j >= 0) {
      if (t[j] === "#") {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }
    if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
    if (i >= 0 !== j >= 0) return false;
    i--;
    j--;
  }

  return true;
};

// O(n) O(n)
// var backspaceCompare = function(s, t) {
//     return getStr(s) === getStr(t);
// };
// const getStr = (str) => {
//     let stack = [];
//     for (let c of str) {
//         c === '#' ? stack.pop() : stack.push(c);
//     }
//     return stack.join('');
// }

console.log(backspaceCompare("aaa###", "a#a#a#"));
