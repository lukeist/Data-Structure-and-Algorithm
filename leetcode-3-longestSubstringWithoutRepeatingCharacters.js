//    i
// pwwkew
//       j
// [kew]
// O(n) O(1)
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    max = 0;
  let set = new Set();
  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j++;
    } else {
      set.delete(s[i]);
      i++;
    }

    max = Math.max(max, set.size);
  }
  return max;
};

// var lengthOfLongestSubstring = function(s) {
//     if (s.length === 0) return 0;
//     if (s.length === 1) return 1;

//     let arr = [s[0]];
//     let max = 0;
//     for (let i = 1; i < s.length; i++) {
//         let j = arr.indexOf(s[i])
//         if (j > -1) {
//             arr = arr.slice(j + 1);
//             arr.push(s[i]);
//         } else {
//             arr.push(s[i]);
//         }
//         max = Math.max(max, arr.length)
//     }
//     return max;
// }

//      i
// e: abcabcbb => 3
//       j
//     i
//    bbbb => 1
//      j
//  i
// dvdf
//   j
// dv
//   i
// pwwkew
//    j
// var lengthOfLongestSubstring = function(s) {
//     if (s.length === 0) return 0;
//     if (s.length === 1) return 1;
//     let u = new Set(s[0]);
//     let i = 0, j = 1;
//     let max = 0;
//     while (j < s.length) {
//         if (s[i] === s[j] || u.has(s[j])) {
//             u.size > 1 && u.delete(s[j]);
//         } else {
//             u.add(s[j])
//         }
//         i++;
//         j++;
//         max = Math.max(max, u.size);
//     }

//     return max;
// };
