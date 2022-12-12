// p: str; str
// r: boolean
// restful fluster => true

// best
const anagrams = (s1, s2) => {
  const m = {};
  for (let c of s1) {
    m[c] = (m[c] || 0) + 1;
  }

  for (let c of s2) {
    m[c]--;
  }

  for (let key in m) {
    if (m[key] !== 0) return false;
  }

  return true;
};

// ok
// const anagrams = (s1, s2) => {
//   if (s1.length !== s2.length) return false;
//   const a1 = s1.split('');
//   const a2 = s2.split('');
//   a1.sort();
//   a2.sort();

//   for (let i = 0; i < s1.length; i++) {
//     if (a1[i] !== a2[i]) return false
//   }

//   return true;
// };

// good
// const anagrams = (s1, s2) => {
//   if (s1.length !== s2.length) return false;

//   const m1 = {};
//   const m2 = {};

//   for (let i = 0; i < s1.length; i++) {
//     m1[s1[i]] = (m1[s1[i]] || 0) + 1;
//     m2[s2[i]] = (m2[s2[i]] || 0) + 1;
//   }

//   for (let key in m1) {
//     if (!(key in m2)) return false;
//     if (m1[key] !== m2[key]) return false;
//   }
//   return true;
// };

module.exports = {
  anagrams,
};
