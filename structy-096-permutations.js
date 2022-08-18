// https://structy.net/problems/premium/permutations

// p: arr
// r: arr (2d)

const permutations = (items) => {
  if (items.length === 0) return [[]];

  const firstI = items[0];
  const iWOfirstI = items.slice(1);
  const nextItems = permutations(iWOfirstI);
  const arrs = [];
  //   console.log(nextItems);

  //   for (let i = 0; i < nextItems.length; i++) {
  //     // console.log(nextItems[i]);
  //     // arrs.push(nextItems[i]);
  //     console.log(arrs);
  //     arrs.push(nextItems[i].splice(i, 0, firstI));
  //   }
  //   console.log(arrs);
  for (const nextItem of nextItems) {
    for (let i = 0; i <= nextItem.length; i++) {
      //   arrs.push(nextItem[i].splice(i, 0, firstI));
      arrs.push([...nextItem.slice(0, i), firstI, ...nextItem.slice(i)]);
    }
  }
  return arrs;
};

// const permutations = (items, arrs = []) => {
//   if (items.length === 0) return [[]];

//   for (let i = 0; i < items.length; i++) {
//     const itemsClone = [...items];
//     const item = itemsClone[i];
//     itemsClone.splice(i, 1);
//     const aFinder = permutations(itemsClone);

//     for (const arr of aFinder) {
//       arr.push(item);
//     }

//     arrs.push(...aFinder);
//   }

//   return arrs;
// };

console.log(permutations(["a", "b", "c", "d"]));

// ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]

//

// work as STRING 'abc' but not 'bluered'
// const permutations = (a) => {
//     const arrs = permutations(a.join(""));

//     return arrs;
//   };

//   const permutations = (str, arrs = []) => {
//     if (str.length === 0) return [[]];

//     for (let i = 0; i < str.length; i++) {
//       const charOut = str[i];
//       const strN = str.slice(0, i) + str.slice(i + 1);
//       const aFinder = permutations(strN);

//       for (const arr of aFinder) {
//         arr.push(charOut);
//       }

//       arrs.push(...aFinder);
//     }

//     return arrs;
//   };
