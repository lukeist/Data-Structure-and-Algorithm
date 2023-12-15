/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// p: string, string;
// r: boolean;
//
var isAnagram = function (s, t) {
  // create a hash map for s to +count
  const map = {};
  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  // use t to -count from map
  for (let c of t) {
    if (!(c in map)) return false;
    map[c]--;
  }

  // loop thru map to chek non zero character
  for (let key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
};
