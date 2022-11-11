// p: str, arr
// r: boolean;
// canConcat("oneisnone", ["one", "none", "is"]); // -> true
//
// canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
//                                  santahat
//                        santah/       san\
//                          at              tahat

const canConcat = (str, arr, memo = {}) => {
  if (!str.length) return true;
  if (str in memo) return memo[str];

  for (let a of arr) {
    if (str.indexOf(a) === 0 && canConcat(str.slice(a.length), arr, memo)) {
      memo[str] = true;
      return true;
    }
  }
  memo[str] = false;
  return false;
};

// // p: str, arr
// // r: boolean
// // e:
// // canConcat("oneisnone", ["one", "none", "is"]); // -> true
// //
// // canConcat("oneisnone", ["on", "e", "is"]); // -> false
// //
// // canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true

// // s= s.length n = words.length
// // recursive W memo O(n *s) O(n)
// const canConcat = (s, words, memo = {}) => {
//   if (s.length === 0) return true;
//   if (s in memo) return memo[s];

//   for (let word of words) {
//     if (s.indexOf(word) === 0) {
//       if (canConcat(s.slice(word.length), words, memo)) {
//         memo[s] = true;
//         return true;
//       }
//     }
//   }

//   memo[s] = false;
//   return false;
// };

// // // recursive WO memo O(n^s) O(n)
// // const canConcat = (s, words) => {
// //   if (s.length === 0) return true;

// //   for (let word of words) {
// //     if (s.indexOf(word) === 0) {
// //       if (canConcat(s.slice(word.length), words)) return true;
// //     }
// //   }

// //   return false;
// // };

// // not working becuase of indexOf
// // const canConcat = (s, words, i = 0) => {
// //   if (s.length === i) return true;

// //   for (let word of words) {
// //     if (s.indexOf(word) - i === 0) {
// //       if (canConcat(s, words, i + word.length)) return true;
// //     }
// //   }

// //   return false;
// // };

module.exports = {
  canConcat,
};
