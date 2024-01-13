/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// p: string; array;
// r: boolean;                                   x   x
// e:                                         012345678
//                                            catsandog
//                  cats/           dog/           sand\         \and          \cat
//                  andog           catsan         catog          catsog          sandog
//             /  \  \   \  \
//          x    an   x   og x
//                |       |
//                x       x

var wordBreak = function (s, wordDict, memo = {}) {
  if (s.length === 0) return true;
  if (s in memo) return memo[s];

  for (const w of wordDict) {
    const i = s.indexOf(w);
    const l = w.length;
    if (i === 0 && wordBreak(s.slice(i + l), wordDict, memo)) {
      memo[s] === true;
      return true;
    }
  }

  memo[s] = false;
  return false;
};

// // FALSE with  "ccbb" ["bc","cb"]
// var wordBreak = function(s, wordDict) {
//     if (s.length === 0) return true;
//     for (const w of wordDict) {
//         const i = s.indexOf(w);
//         const l = w.length;
//         if (i >= 0 && wordBreak(s.slice(0, i) + s.slice(i + l), wordDict)) return true;
//     }
//     return false;
// };
