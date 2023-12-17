/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// p: string, string
// r: boolean
// e:
//
// a : 1

var canConstruct = function (ransomNote, magazine) {
  const map = {};

  for (let c of ransomNote) {
    map[c] = (map[c] || 0) + 1;
  }

  for (let c of magazine) {
    if (c in map) map[c]--;
  }

  for (let key in map) {
    if (map[key] > 0) return false;
  }

  return true;
};
