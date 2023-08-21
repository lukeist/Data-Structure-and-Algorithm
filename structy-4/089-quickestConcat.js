// p: string, array;
// r: number;

// 'caution', ['ca', 'ion', 'caut', 'ut'] => 2
//                                  caution
//                      ca/       ion/          \caut  \ut
//                   ution        caut          ion      caion
//                 / \ \ \       /  \ \ \
//               x  ut x ion    ut x  '' ca

// look for first index;
//                                  caution
//                      ca/                 \caut  \ut
//                   ution                  ion      caion
//                 / \ \ \
//               x  ut x ion

const quickestConcat = (s, words) => {
  if (s.length === 0) return 0;
  let min = _quickestConcat(s, words);

  return min === Infinity ? -1 : min;
};

// const _quickestConcat = (s, words, memo = {}) => {
//   if (s.length === 0) return 0;
//   if (s in memo) return memo[s];
//   let min = Infinity;

//   for (let w of words) {
//     if (s.includes(w)) min = Math.min(min, _quickestConcat(s.replace(w, ''), words, memo))
//   }

//   memo[s] = min + 1;
//   return min + 1;
// };

// better:

const _quickestConcat = (s, words, memo = {}) => {
  if (s.length === 0) return 0;
  if (s in memo) return memo[s];
  let min = Infinity;

  for (let w of words) {
    if (s.indexOf(w) === 0)
      min = Math.min(min, _quickestConcat(s.slice(w.length), words, memo));
  }

  memo[s] = min + 1;
  return min + 1;
};
