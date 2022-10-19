// p: str, arr
// r: boolean
// e:
//
// canConcat("oneisnone", ["on", "e", "is"]); // -> false
//
// canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true

// s= s.length n = words.length
// recursive W memo O(n *s) O(n)
const canConcat = (s, words, memo = {}) => {
  if (s.length === 0) return true;
  if (s in memo) return memo[s];

  for (let word of words) {
    if (s.indexOf(word) === 0) {
      if (canConcat(s.slice(word.length), words, memo)) {
        memo[s] = true;
        return true;
      }
    }
  }

  memo[s] = false;
  return false;
};

// // recursive WO memo O(n^s) O(n)
// const canConcat = (s, words) => {
//   if (s.length === 0) return true;

//   for (let word of words) {
//     if (s.indexOf(word) === 0) {
//       if (canConcat(s.slice(word.length), words)) return true;
//     }
//   }

//   return false;
// };

// pointer not working because indexOf always takes the first char
// const canConcat = (s, words, i = 0) => {
//   if (s.length === i) return true;

//   for (let word of words) {
//     console.log(i, s.indexOf(word), word);

//     if (s.indexOf(word) - i === 0) {
//       if (canConcat(s, words, i + word.length)) return true;
//     }
//   }

//   return false;
// };

// console.log(canConcat("oneisnone", ["one", "none", "is"])); // -> true
// oneisnone
// 012345678
// 0  3 5
// i s.idx  w
// 0 0      one
// 3 3      is
// x 5      none
// console.log(canConcat("oneisnone", ["on", "e", "is", "n"])); // -> true
console.log(canConcat("santahat", ["santah", "san", "hat", "tahat"])); // -> true
