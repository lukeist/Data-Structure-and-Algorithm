// https://structy.net/problems/premium/anagrams

// p: 2 strings
// r: boolean
// e: anagrams('cats', 'tocs'); // -> false

// time O(n + m)
// space O(n)
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let count = {};

  for (let char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of s2) {
    count[char]--;
  }

  for (let char in count) {
    if (count[char] !== 0) return false;
  }

  return true;
};

console.log(anagrams("restful", "fluster")); // -> true)
console.log(anagrams("cats", "tocs")); // -> true)
// // time O(n + m)
// // space O(n + m)
// const anagrams = (s1, s2) => {
//     if (s1.length !== s2.length) return false;

//     const mapS1 = {};
//     const mapS2 = {};

//     for (let i = 0; i < s1.length; i++) {
//       mapS1[s1[i]] = (mapS1[s1[i]] || 0) + 1;
//       mapS2[s2[i]] = (mapS2[s2[i]] || 0) + 1;
//     }

//     for (let char in mapS1) {
//       if (mapS1[char] !== mapS2[char]) {
//         return false;
//       }
//     }

//     return true;
//   };
