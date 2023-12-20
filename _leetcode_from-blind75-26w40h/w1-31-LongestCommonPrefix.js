/**
 * @param {string[]} strs
 * @return {string}
 */

// p: string;
// r: string
// e:
//   c
// "flow",
//   i
// "flower",
// "flight"
// c = o
// s = fl

function longestCommonPrefix(strs) {
  strs.sort((a, b) => a.length - b.length);
  let s = strs[0];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    for (let j = 1; j < strs.length; j++) {
      const str = strs[j];
      if (str[i] !== c) return s.substring(0, i);
    }
  }
  return s;
}
