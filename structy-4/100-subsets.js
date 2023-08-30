// p: array;
// r: 2d array;
// e:
//                                    [a b]
// a                                 /        \
//                         [[],[b]]* [b]       [a b]
// b                               / \        /  \
//                                []  [b]  [a]   [ab]

// [[],[b]]
// [[a],[b,a]]

const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const first = elements[0];
  const eWoFirst = subsets(elements.slice(1));
  const eWFirst = eWoFirst.map((a) => [first, ...a]);

  return [...eWoFirst, ...eWFirst];
};

// not working because => const eWoFirstClone = eWoFirst.map(a => a)
//   => eWoFirst takes reference from eWoFirstClone
// const subsets = (elements) => {
//   if (elements.length === 0) return [[]];
//   const first = elements[0];
//   const eWoFirst = subsets(elements.slice(1));
//   const eWoFirstClone = eWoFirst.map(a => a);
//   for (let e of eWoFirstClone) {
//     e.push(first);
//   }
//   return [...eWoFirst, ...eWoFirstClone]
// };
