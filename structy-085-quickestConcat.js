// p: str, arr
// r: num

//                        caution
//                 ca/             \caut
//            ution                ion
//            ut/                 |ion
//          ion                    ''

const quickestConcat = (str, arr) => {
  let count = _quickestConcat(str, arr);
  return count === Infinity ? -1 : count;
};

const _quickestConcat = (str, arr, memo = {}) => {
  if (str in memo) return memo[str];
  if (str.length === 0) return 0;
  let count = Infinity;

  for (let a of arr) {
    if (str.indexOf(a) === 0) {
      console.log(str, a, str.slice(a.length));
      count = Math.min(count, _quickestConcat(str.slice(a.length), arr, memo));
    }
  }

  memo[str] = count + 1;
  return count + 1;
};

// // p: str, arr
// // r: num
// //                           caution
// //              ca/     ion /         \caut       \ut
// //          ution         x           ion         x
// //  ca/ ion /  \caut \ut        ca/ ion /  \caut \ut
// // x       x   x     ion       x      o     x     x
// //          ca/ ion /  \caut \ut
// //          x     o x   x     x

// const quickestConcat = (s, words) => {
//   const result = _quickestConcat(s, words)
//   return result === Infinity ? -1 : result;
// }

// const _quickestConcat = (s, words, memo = {}) => {
//   if (s in memo) return memo[s]
//   if (s.length === 0) return 0;
//   let min = Infinity;

//   for (let word of words) {
//     if (s.startsWith(word)) {
//       min = Math.min(min, _quickestConcat(s.slice(word.length), words, memo))
//     }
//   }

//   memo[s] = min + 1;
//   return min + 1;
// };
