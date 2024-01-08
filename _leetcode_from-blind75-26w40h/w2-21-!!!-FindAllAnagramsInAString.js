/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

//       i - p.length + 1
//       |
//       v
//      ---i
//      0123456789
//      cbaebabacd {c0, b1, a1, e1}
//
// abc {a1, b1, c1}

var findAnagrams = function (s, p) {
  const result = [];
  const map = {};
  const mapP = {};

  for (const c of p) {
    mapP[c] = (mapP[c] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;

    if (i >= p.length) map[s[i - p.length]]--;
    if (i >= p.length - 1 && check(mapP, map)) result.push(i - p.length + 1);
  }

  return result;
};
// compare mapP TO map (not the other way around)
const check = (mP, m) => {
  for (const c in mP) {
    if (mP[c] !== m[c]) return false;
  }
  return true;
};

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */

// // p: string; string;
// // r: array
// // e:
// //      0123456789
// //      cbaebabacd
// //       i
// var findAnagrams = function(s, p) {
//   const n = p.length;
//   const result = [];
//   for (let i = 0; i < s.length; i++) {
//       if (isA(p, s.slice(i, i + n))) result.push(i);
//   }
//   return result;
// };

// const isA = (s1, s2) => {
//   const map = {}
//   for (const c of s1) {
//       map[c] = (map[c] || 0) + 1;
//   }

//   for (const c of s2) {
//       if (!(c in map)) return false;
//       map[c]--
//   }

//   for (const c in map) {
//       if (map[c] !== 0) return false;
//   }

//   return true;
// }
