var longestPalindrome = function (s) {
  const map = {};
  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }

  let count = 0;
  let one = 0;
  for (let key in map) {
    if (!(map[key] % 2)) {
      count += map[key];
    } else {
      count += map[key] - 1;
      !one && (one = 1);
    }
  }

  return count + one;
};

// /**
//  * @param {string} s
//  * @return {number}
//  */

// // p: str
// // r: num
// // e:
// // abccccdd
// // dccaccd
// //                                                           abccccdd
// //                                                           11 4  2
// //
// var longestPalindrome = function (s) {
//   let map = {};
//   for (let c of s) {
//     map[c] = (map[c] || 0) + 1;
//   }
//   let count = 0;
//   for (let k in map) {
//     count += !(map[k] % 2) ? map[k] : map[k] - 1;
//   }
//   return s.length > count ? count + 1 : count;
// };

// // s.length > count: a ab aaa aaab aaabbb
// // s.length === count: aa aabb aaaabb

// console.log(longestPalindrome("abccccdd"));
