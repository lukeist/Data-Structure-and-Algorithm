// https://structy.net/problems/premium/subsets

// p: arr
// r: arr (2d)
// [a,b,c]

// a [b,c]

// excludes:           [[]]
//              /               \
// a         [[]]                  [[a]]
//        /        \            /         \
// b    [[]]      [[b]]         [a]           [a,b]
//    /     \   /     \     /     \       /       \
// c [[]]  [c] [b]  [b,c] [a] [a,c]  [a,b]     [a,b,c]

// [[[]] [a]] + [[]] [b]

const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const first = elements[0]; // c // a
  const subWoFirst = subsets(elements.slice(1)); // [[]] // [[], [b], [c], [b,c]]
  //   const subWFirst = [...subWoFirst];

  // subWFirst.forEach((a) => a.push(first));
  const subWFirst = [];

  for (const sub of subWoFirst) {
    subWFirst.push([...sub, first]);
    // sub.push(first);
  }

  return [...subWoFirst, ...subWFirst];
};

// const subsets = (elements) => {
//   const base = [];
//   if (elements.length === 0) return [[]];

//   for (let i = 0; i < elements.length; i++) {
//     base[i] === undefined && (base[i] = []);
//     base[i].push([], [elements[i]]);
//     console.log(base);
//   }

//   while (base.length > 1) {
//     for (let i = 0; i < 2; i++) {
//         base[i]
//     }
//   }

//   const bases = [[], [elements[0]]];
//   for (let i = 1; i < elements.length; i++) {
//     for (let base of bases) {
//       base.concat(elements[i]);
//     }
//   }

//   return base;
// };

// WRONG
// const subsets = (elements) => {
//   const result = [[], elements];
//   const first = elements[0];

//   let count = 0;

//   while (count < 1) {
//     for (let i = 1; i <= elements.length - 1; i++) {
//       result.push(elements.slice(0, i));
//     }

//     const removeFirst = elements.shift();
//     elements.push(removeFirst);
//     elements[0] === first && count++;
//   }
//   return result;
// };

// console.log(subsets(["a", "b"])); // ->
// [
//   [],
//   [ 'b' ],
//   [ 'a' ],
//   [ 'a', 'b' ]
// ]

console.log(subsets(["a", "b", "c"])); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]
