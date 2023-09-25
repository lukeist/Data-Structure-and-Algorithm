// p: array, number;
// r: 2d array;
// e:                             abc 2
// a                            /    \
//                          bc 1       bc 2
// b                        /  \
//                         c0   c1
//                        [[]]   [[c]]
//

const createCombinations = (items, k) => {
  if (items.length === k) return [items];
  if (k === 0) return [[]];

  const first = items[0];
  const left = createCombinations(items.slice(1), k - 1);
  const right = createCombinations(items.slice(1), k);
  for (let l of left) {
    l.push(first);
  }

  return [...left, ...right];
};
