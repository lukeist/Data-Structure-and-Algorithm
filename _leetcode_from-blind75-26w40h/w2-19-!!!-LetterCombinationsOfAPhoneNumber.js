/**
 * @param {string} digits
 * @return {string[]}
 */

// p: string;

//                              abc def ghi
// abc                              |
//                              def ghi
// def                              |
//                                 ghi
//
//
//
// In the worst case, each digit corresponds to four letters (except for '7' and '9' which have four letters each). So, for n digits, the total number of combinations is 4^n.

const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits, i = 0) {
  if (i === digits.length) return [];
  if (i === digits.length - 1) return map[digits[i]];
  const first = map[digits[i]];
  const rest = letterCombinations(digits, i + 1);

  const result = [];
  for (let r of rest) {
    for (let f of first) {
      result.push(f + r);
    }
  }

  return result;
};

// var letterCombinations = function(digits) {
//     if (digits.length === 0) return [];
//     if (digits.length === 1) return map[digits];
//     const first = map[digits[0]];
//     const rest = letterCombinations(digits.slice(1));

//     const result = [];
//     for (let r of rest) {
//         for (let f of first) {
//             result.push(f + r)
//         }
//     }

//     return result;
// };
