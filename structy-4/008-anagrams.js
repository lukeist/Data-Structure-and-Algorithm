// p: string, string;
// r: boolean;
// anagrams('restful', 'fluster'); // -> true
// anagrams('cats', 'tocs'); // -> false
// anagrams('paper', 'reapa'); // -> false
// p: 1
// a: -1
// e: 0
// r: 0

const anagrams = (s1, s2) => {
  const map = {};

  for (let c of s1) {
    map[c] = (map[c] || 0) + 1;
  }

  for (let c of s2) {
    map[c] = (map[c] || 0) - 1;
  }

  for (let key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
};

anagrams("paper", "reapa");
