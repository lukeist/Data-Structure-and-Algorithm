// w MEMO
const quickestConcat = (s, arr) => {
  const result = _quickestConcat(s, arr, {});
  return result === Infinity ? -1 : result;
};

const _quickestConcat = (s, arr, memo) => {
  if (s in memo) return memo[s];
  if (s.length === 0) return 0;
  let min = Infinity;

  for (let a of arr) {
    if (s.indexOf(a) !== 0) continue;
    if (s.indexOf(a) === 0)
      min = Math.min(min, _quickestConcat(s.slice(a.length), arr, memo));
  }

  memo[s] = min + 1;
  return min + 1;
};

// // wo MEMO
// const quickestConcat = (s, arr) => {
//   const result = _quickestConcat(s, arr);
//   console.log(result);
//   return result === Infinity ? -1 : result;
// };

// const _quickestConcat = (s, arr) => {
//   // console.log(s);
//   if (s.length === 0) return 0;
//   let min = Infinity;

//   for (let a of arr) {
//     if (s.indexOf(a) !== 0) continue;
//     if (s.indexOf(a) === 0)
//       min = Math.min(min, _quickestConcat(s.slice(a.length), arr));
//   }

//   return min + 1;
// };

console.log(quickestConcat("simchacindy", ["sim", "simcha", "acindy", "ch"]));
