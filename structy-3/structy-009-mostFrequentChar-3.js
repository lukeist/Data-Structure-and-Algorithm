// p: str
// r: str
// e:
// bookeeper => e
//
// david => d
// space complexity should be O(24) => O(1): 24 alphabets
const mostFrequentChar = (s) => {
  const map = {};

  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }

  let max = -Infinity;
  for (let key in map) {
    max = Math.max(max, map[key]);
  }

  for (let key in map) {
    if (map[key] === max) return key;
  }
};

module.exports = {
  mostFrequentChar,
};
