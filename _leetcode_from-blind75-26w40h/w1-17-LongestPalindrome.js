/**
 * @param {string} s
 * @return {number}
 */

// p: string
// r: number;
// e:
// "abccccdd"
// => "dccaccd"
// => "dccbccd"
// a: 1
// b: 1
// c: 4
// d: 2
// "abcccdd"
// => "dccbccd"
// a: 1
// b: 1
// c: 3
// d: 2
// e: 3

var longestPalindrome = function (s) {
  const map = {};

  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }

  let odd = 0;
  let sum = 0;

  for (let key in map) {
    if (map[key] % 2 === 0) {
      sum += map[key];
    } else {
      if (odd === 0) odd = 1;
      sum += map[key] - 1;
    }
  }
  return odd + sum;
};
