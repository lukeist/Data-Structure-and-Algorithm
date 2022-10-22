// p: arr, num
// r: arr
// e:
// createCombinations(["a", "b", "c"], 2); // ->
// // [
// //   [ 'a', 'b' ],
// //   [ 'a', 'c' ],
// //   [ 'b', 'c' ]
// // ]

//                            ["a", "b", "c", "d"] 3
// a                        /                               \
// [bc][bd][cd]       ["b", "c", "d"] 2                     ["b", "c", "d"] 3
// b                  /           \                         b   /            \
// [c][d]          ["c", "d"] 1    ["c", "d"] 2             [c,d]2           [c,d]3
// c              /       \
// []           ["d"]0   ["d"]1
// d              /
//              []

//  [[ab][ac][ad]-[bc][bd][cd]]         ["a", "b", "c", "d"] 2
// a                                /                                   \
// [[b]-[c][d] ]      ["b", "c", "d"] 1                           ["b", "c", "d"] 2                       [[bc][bd]-[cd]]
// b                  /           \                               /                 \
// [[]-[c][d] ]    ["c", "d"] 0    ["c", "d"] 1                 ["c", "d"] 1        ["c", "d"] 2          [[c][d]]
// c              /              /      \
// [d]           []            [d] 0      [d] 1
//                                /
//                              []

const createCombinations = (items, k) => {
  if (items.length < k) return [];
  if (k === 0) return [[]];

  const firstE = items[0];
  const itemsWOfirstE = items.slice(1);

  const left = createCombinations(itemsWOfirstE, k - 1);
  const right =
    itemsWOfirstE.length === k
      ? [itemsWOfirstE]
      : createCombinations(itemsWOfirstE, k);
  console.log(left, right);

  for (let l of left) {
    l.push(firstE);
  }

  return [...left, ...right];
};

console.log(createCombinations(["a", "b", "c"], 3)); // ->)
// console.log(createCombinations([1, 28, 94], 3)); // ->
// [
//   [ 1, 28, 94 ]
// ])
