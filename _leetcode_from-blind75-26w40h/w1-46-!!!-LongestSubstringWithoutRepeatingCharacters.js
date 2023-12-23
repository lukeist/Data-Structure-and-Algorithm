/**
 * @param {string} s
 * @return {number}
 */
// p: string;
// r: number;
// e:
//

//
//
//
//
//          1        j
//  i
// "au"
//  j
//
//    i
//  dvdf
//    j
//
//  i
// dvdf
//     j
//
//

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
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

// WORK but not so CLEAN like above;
// var lengthOfLongestSubstring = function(s) {
//     let setC = new Set();
//     let i = 0, j = 0, max = 0;

//     while (j < s.length) {
//         if (setC.has(s[j])) {
//             i++;
//             j = i;
//             setC = new Set();
//         } else {
//             setC.add(s[j])
//             max = Math.max(max, setC.size);
//             j++;
//         }

//     }
//     return max;
// };

//  i
// dvdf
//     j
//  vdf
