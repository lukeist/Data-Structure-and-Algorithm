/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// p: str, str
// r: boolean
//
// e:                                   aab
//                                      baa
//

var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let c of ransomNote) {
    map[c] = (map[c] || 0) + 1;
  }
  for (let c of magazine) {
    c in map && map[c]--;
  }
  for (let k in map) {
    if (map[k] > 0) return false;
  }
  return true;
};

// var canConstruct = function(ransomNote, magazine) {
//     const r = ransomNote.split('').sort();
//     const m = magazine.split('').sort();
//     let i = 0, j = 0;
//     while (i < r.length && j < m.length) {
//         if (r[i] === m[j]) {
//             i++;
//             j++;
//         } else {
//             j++;
//         }
//     }
//     return r.length === i;
// };

// var canConstruct = function(ransomNote, magazine) {
//     let i = 0, j = 0;
//     while (i < ransomNote.length && j < magazine.length) {
//         if (ransomNote[i] === magazine[j]) {
//             i++;
//             j++;
//         } else {
//             j++;
//         }
//     }
//     return ransomNote.length === i;
// };
