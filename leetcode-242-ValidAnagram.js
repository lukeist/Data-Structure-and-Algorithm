// https://leetcode.com/problems/valid-anagram/

// p: str & str
// r: boolean
// e:
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Runtime: 111 ms, faster than 52.78% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 46.8 MB, less than 31.27% of JavaScript online submissions for Valid Anagram.
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  s = s.split("").sort();
  t = t.split("").sort();
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) return false;
  }
  return true;
};

// // loop & hash map
// // Runtime: 115 ms, faster than 47.28% of JavaScript online submissions for Valid Anagram.
// // Memory Usage: 43.9 MB, less than 60.32% of JavaScript online submissions for Valid Anagram.
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   // create maps:
//   const mapS = {};
//   const mapT = {};

//   // loop through both strings and count chars:
//   for (let i = 0; i < s.length; ++i) {
//     mapS[s[i]] = (mapS[s[i]] || 0) + 1;
//     mapT[t[i]] = (mapT[t[i]] || 0) + 1;
//   }

//   // loops through a map and compare keys of both maps
//   for (const key in mapS) {
//     if (mapS[key] !== mapT[key]) return false;
//   }
//   return true;
// };

// loop & hash map
// // Runtime: 148 ms, faster than 18.23% of JavaScript online submissions for Valid Anagram.
// // Memory Usage: 43.2 MB, less than 76.92% of JavaScript online submissions for Valid Anagram.
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   // create maps:
//   const mapS = {};
//   const mapT = {};
//   // loop through both strings and count chars:
//   for (let i = 0; i < s.length; ++i) {
//     mapS[s[i]] = (mapS[s[i]] || 0) + 1;
//     mapT[t[i]] = (mapT[t[i]] || 0) + 1;
//   }

//   console.log(mapS, mapT);
//   // loops through a string again and compare both maps ////////////// need optimization so it only loops thru chars in mapS or mapT
//   for (let char of s) {
//     if (mapS[char] !== mapT[char]) return false;
//   }
//   return true;
// };

// Runtime: 211 ms, faster than 6.34% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 49.5 MB, less than 8.59% of JavaScript online submissions for Valid Anagram.
// var isAnagram = function (s, t) {
//     console.log(s.split("").sort().join("") === t.split("").sort().join(""));
//     return s.split("").sort().join("") === t.split("").sort().join("");
//   };

isAnagram("anagram", "nagaram");
