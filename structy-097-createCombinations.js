// https://structy.net/problems/premium/create-combinations

// p: arr, num
// r: 2d arr
// n = length of items
// k = target length
// Time: ~O(n choose k) https://en.wikipedia.org/wiki/Binomial_coefficient
// Space: ~O(n choose k)

const createCombinations = (items, k) => {
  if (k === 0) return [[]];
  if (k > items.length) return [];

  const e = items[0];
  const combiWOe = createCombinations(items.slice(1), k);

  const combiWe = createCombinations(items.slice(1), k - 1);
  combiWe.map((c) => c.push(e));

  //   for (let c of cWOeLeft) {
  //     c.push(e);
  //   }
  //   return cWOeLeft.concat(combiWOe);

  return [...combiWOe, ...combiWe];
};

console.log(createCombinations(["a", "b", "c"], 2)); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]
