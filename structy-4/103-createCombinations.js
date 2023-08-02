// p: array, number;
// r: array;
// e:
// (["a", "b", "c"], 2)
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]

//                                 abc 2
// a                             /      \
//                           bc 1         bc 2
//                          [b,c]          [[b,c]]
//
//                                 abcd 2 => ab, ac, ad, bc, bd, cd
// a                             /      \
//                           bcd 1         bcd 2 => bc, bd, cd
// b                                       /   \
//                                       cd1    cd2
//

const createCombinations = (items, k) => {
  if (items.length === k) return [items];
  if (k === 1) return items;

  const first = items[0];
  const itemsWithFirst = [];
  const itemsWithoutFirst = createCombinations(items.slice(1), k - 1);

  for (let item of itemsWithoutFirst) {
    itemsWithFirst.push([first, item]);
  }

  return [...itemsWithFirst, ...createCombinations(items.slice(1), k)];
};
