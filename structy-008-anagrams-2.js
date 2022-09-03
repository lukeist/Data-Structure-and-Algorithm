// p: str, str
// r: boolean

// O(max(s1.length, s2.length)) wrong => O(s1.length + s2.length) O(max(s1.length, s2.length)
const anagrams = (s1, s2) => {
  // todo
  // fast way but maybe not accepted:
  //   return s1.split("").sort().join("") === s2.split("").sort().join("");

  if (s1.length !== s2.length) return false;
  const map = {};

  for (let c of s1) {
    map[c] = (map[c] || 0) + 1;
  }

  for (let c of s2) {
    if (!(c in map)) return false;
    map[c] = map[c] - 1;
  }

  for (let c in map) {
    if (map[c] !== 0) return false;
  }

  return true;
};

console.log(anagrams("restful", "fluster")); // -> true
