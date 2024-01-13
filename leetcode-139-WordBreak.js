/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// p: string; array;
// r: boolean;      0123456
// e:               applepenapple
//                  /apple         \pen
//          penapple
//          /a     \p
//         x       apple
//                a /  \p
//                 o    x

// Time complexity: O(n * m * k)

// n is the length of the input string s
// m is the number of words in the dictionary wordDict
// k is the average length of words in the dictionary
// Space complexity: O(n)

// The memoization table memo stores results for subproblems, and its size is proportional to the length of the input string s.
var wordBreak = function (s, wordDict, memo = {}) {
  if (s.length === 0) return true;
  if (s in memo) return memo[s];

  for (let w of wordDict) {
    let j = s.indexOf(w);
    if (j === 0 && wordBreak(s.slice(w.length), wordDict, memo)) {
      memo[s] = true;
      return true;
    }
  }

  memo[s] = false;
  return false;
};
