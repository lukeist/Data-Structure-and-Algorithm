// https://leetcode.com/problems/word-break/

// p: string & arr
// r: boolean
// e:

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

var wordBreak = function (s, wordDict) {
  // not working: split word from 0 -> s.length
  let sClone = s;
  for (let word of wordDict) {
    for (let i = 0; i <= sClone.length; i++) {
      let s1 = sClone.slice(0, i);
      let s2 = sClone.slice(i);
      // console.log([s1, s2]);

      if (s1 === word) {
        if (wordDict.indexOf(s2) > -1) {
          console.log(true);
          return true;
        } else {
          sClone = s2;
          i = 0;
        }
        //   console.log(s);
      }
    }
    sClone = s;
  }
  //   console.log(wordDict);
  //   console.log(s);

  //   console.log(s.length === 0);
  console.log(false);
  return false;
};

// Good example, but you might be overcomplicating things. Given an array of length n,
// there are n+1 ways/intervals to partition it into two parts. Each interval has two choices -
// split or not. In the worse case, we will have to check all possibilities,
// which becomes O(2^(n+1)) -> O(2^n). This analysis is similar to palindrome partitioning

wordBreak("leetcode", ["leet", "code"]);
wordBreak("applepenapple", ["apple", "pen"]);
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
wordBreak("cars", ["car", "ca", "rs"]);
wordBreak("aaaaaaa", ["aaaa", "aaa"]);
wordBreak("goalspecial", [("go", "goal", "goals", "special")]); //true
/////////////////////////////////////////////////

// not working: replaceAll match words in s with ''
//   for (const w of wordDict) {
//     // console.log("before", w, s);
//     s.includes(w) && (s = s.replaceAll(w, ""));
//     // console.log("after", s);
//   }

//   console.log(s, s === "");
//   return s === "";

///////////////////////////////////////////////// 35 / 45 test cases passed.
// var wordBreak = function (s, wordDict) {
//     // not working: split word from 0 -> s.length
//     for (let i = 0; i <= s.length; i++) {
//       let s1 = s.slice(0, i);
//       let s2 = s.slice(i);
//       // console.log([s1, s2]);

//       if (wordDict.indexOf(s1) > -1) {
//         wordDict.splice(wordDict.indexOf(s1), 1);
//         if (wordDict.indexOf(s2) > -1) {
//           // console.log(s2);
//           wordDict.splice(wordDict.indexOf(s2), 1);
//           s2 = s2.replace(s2, "");
//         }
//         s = s2.replaceAll(s1, "");
//         i = 0;
//         //   console.log(s);
//       }
//       // wordDict.indexOf(s2) > -1 && wordDict.splice(wordDict.indexOf(s2), 1);
//     }
//     //   console.log(wordDict);
//     //   console.log(s);

//     console.log(s.length === 0);
//     return s.length === 0;
//   };
