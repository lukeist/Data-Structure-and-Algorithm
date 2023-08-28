// p: string;
// r: string;
// e:
// bookeeper => e
//
// abba => a
// a: 2
// b: 2

const mostFrequentChar = (s) => {
  // create a hash map
  const map = {};

  // loop thru s to count
  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }

  let max = 0;
  // loop thru map to find max
  for (let key in map) {
    max = Math.max(max, map[key]);
  }

  // loop thru string to get first max
  for (let c of s) {
    if (map[c] === max) return c;
  }
};
