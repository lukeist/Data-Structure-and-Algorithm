/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// p: boolean, num
// r: num
// l     m       r
// 1 2 3 4 5 6 7 8

// l   r
// 1 2 3
//   m

// p: boolean, num
// r: num
//         l m   r
// 1 2 3 4 5 6 7 8
//         B B B B

var solution = function (isBadVersion) {
  return function (n) {
    let l = 1,
      r = n;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (isBadVersion(m)) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return l;
  };
};

// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         let m;
//         const findV = (n, l, r, isBadV) => {
//             if (l > r) return false;
//             m = Math.floor((l + r) / 2);
//             if (isBadV(m)) return true;
//             if (findV(n, m + 1, r, isBadV)) return true;
//             if (findV(n, l, m - 1, isBadV)) return true;
//         };
//         if (findV(n, 1, n, isBadVersion)) return m;
//     };
// };

console.log(solution(3));
