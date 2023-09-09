// p: array
// r: array
// e:
// permutations(['a', 'b', 'c']); // ->
// [
//   [ 'a', 'b', 'c' ], z
//   [ 'b', 'a', 'c' ], z
//   [ 'b', 'c', 'a' ], z
//   [ 'a', 'c', 'b' ], z
//   [ 'c', 'a', 'b' ], z
//   [ 'c', 'b', 'a' ] z
// ]

//                                   abc
//                           a/      \b        \c
//                          bc        ac         ab
//                        b/ c\     a/ c\      a/  b\
//                       c    b     c    a     b     a
// abc
// bc
// ac
// const permutations = (items) => {
//   if (items.length === 0) return [[]]
//   const result = [];

//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     const arrays = permutations([...items.slice(0, i), ...items.slice(i + 1)]);
//     for (let a of arrays) {
//       result.push([...a, item])
//     }
//   }

//   return result;
// };

//                                   [[]]
// a                                 |
//                                  [[a]]
// b                                /    \
//                             ab           ba
// c                         / / \        / / \
//                        cab acb abc  cba  bca  bac

const permutations = (items) => {
  if (items.length === 0) return [[]];
  const first = items[0];
  const rest = permutations(items.slice(1));
  const result = [];

  for (let i = 0; i < rest.length; i++) {
    for (let j = 0; j <= rest[i].length; j++) {
      result.push([...rest[i].slice(0, j), first, ...rest[i].slice(j)]);
    }
  }
  return result;
};
