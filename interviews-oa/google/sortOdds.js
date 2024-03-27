// sort all odd elements and leave even elements as it is at their original position

// p: array;
// r: array;
// e:
//
//  0 1  2 3 4 5 6 7 8
//

//              j
// [1,5,7,9,17]
//                 i
// [6,17,7,4,2,5,9,1,8]
// 61542
// [6,1,5,4,2,7,9,17,8]
const sortOdds = (arr) => {
  const odds = [];
  for (let a of arr) {
    if (a % 2 !== 0) odds.push(a);
  }

  odds.sort((a, b) => a - b);
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    } else {
      result.push(odds[j]);
      j++;
    }
    i++;
  }
  return result;
};
// WRONG:
// //                                   [6,17,7,4,2,5,9,1,8]
// //                               /                             \
// //                        [6,17,7,4,2]                       [5,9,1,8]
// //                      /          \                       /          \
// //                [6 17 7]       [4 2]                 [5 9]          [1 8]
// //                /     \
// //              [6 17]   [7]
// //
// //6 7 17

// const sortOdds = (arr) => {
//   if (arr.length === 1) return arr;

//   const m = Math.floor(arr.length / 2);
//   const first = sortOdds(arr.slice(0, m));
//   const second = sortOdds(arr.slice(m));

//   const result = [];
//   let i = 0,
//     j = 0;
//   while (i < first.length && j < second.length) {
//     if (first[i] % 2 === 0) {
//       result.push(first[i]);
//       i++;
//       continue;
//     }

//     if (second[j] % 2 === 0) {
//       result.push(second[j]);
//       j++;
//       continue;
//     }

//     if (first[i] < second[j]) {
//       result.push(first[i]);
//       i++;
//     } else {
//       result.push(second[j]);
//       j++;
//     }
//   }

//   while (i < first.length) {
//     result.push(first[i]);
//     i++;
//   }

//   while (j < second.length) {
//     result.push(second[j]);
//     j++;
//   }

//   return result;
// };

console.log(sortOdds([6, 17, 7, 4, 2, 5, 9, 1, 8]));
