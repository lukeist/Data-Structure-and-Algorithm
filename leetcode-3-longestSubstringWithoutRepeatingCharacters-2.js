/**
 * @param {string} s
 * @return {number}
 */

// p: string;
// r: num int;
// e:
//        i
// abcabcbb
//        j
// 01234567
// i
// abcad
//    j
//

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let i = 0,
    j = 0,
    max = 0;

  while (j < s.length) {
    if (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    } else {
      set.add(s[j]);
      j++;
    }

    max = Math.max(max, set.size);
  }
  return max;
};

// THIS WORKS TOO:
// var lengthOfLongestSubstring = function (s) {
//   let set = new Set();
//   let i = 0,
//     j = 0,
//     max = 0;

//   while (j < s.length) {
//     if (set.has(s[j])) {
//       i++;
//       j = i;
//       set = new Set();
//     } else {
//       set.add(s[j]);
//       max = Math.max(max, set.size);
//       j++;
//     }
//   }
//   return max;
// };
