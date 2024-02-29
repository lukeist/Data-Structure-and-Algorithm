// Print unique subarrays with expected sum.

// input: a ={1,1,2,5,6,7} and expectedSum=8
// expected output:
// [1, 1, 6]
// [1, 2, 5]
// [1, 7]
// [2, 6]
///////////////////////////////////////////// WRONG vvv
// //                                 8
// //               1/      1/      2/      5\       6\             7\
// //              7       7        6        3        2              1
// //    1 2 5 6 7  1 2 5 6 7  1 1 5 6 7   1 1 2 6 7   1 1 2 5 7    1 1 2 5 6
// // XXX
///////////////////////////////////////////// WRONG ^^^

// //                                 8
// // 1                         0x1/     \1x1
// //                        8                     7
// // 1            0x1/  1x1\                  0x1/  1x1\
// //           8             7               7            6
// // 2       /  \          / \             /  \          /   \
// //      8      6        7      5       7    5        6      4
// // 5   /  \   /  \    /  \   /  \    /  \  / \     /   \    /  \
// //   8    3  6   1   7   2  5   0   7   2  5  0   6   1    4    x

// const printSubArrs = (arr, sum) => {
//   const subarrays = findSubarraysWithSum(arr, sum).map((s) =>
//     s.sort((a, b) => a - b)
//   );
//   const setUnique = new Set();
//   const result = [];
//   for (let sub of subarrays) {
//     const s = sub.join(",");
//     if (setUnique.has(s)) continue;
//     setUnique.add(s);
//     result.push(sub);
//   }

//   return result;
// };

// const findSubarraysWithSum = (arr, sum, i = 0) => {
//   if (sum < 0) return [];
//   if (sum === 0) return [[]];
//   if (i === arr.length) return [];

//   const first = arr[i];
//   const excludeFirst = findSubarraysWithSum(arr, sum, i + 1);
//   const includeFirst = findSubarraysWithSum(arr, sum - first, i + 1);

//   for (const a of includeFirst) {
//     a.push(first);
//   }

//   return [...excludeFirst, ...includeFirst];
// };

console.log(printSubArrs([1, 1, 2, 5, 6, 7], 8));
console.log(
  printSubArrs(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    30
  )
);
