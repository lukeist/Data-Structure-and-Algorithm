// p: arr
// r: arr

// e: 5 3 2 => 5 / 3 2 => 5 / 2 3 => 2 3 5
//                    [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
//                /            i        j                  \
//         10 4 42 5 8   [4 5 8 10 42] [5 6 12 40 100]   100 5 6 12 40
//        /       \                                     /       \
//[4 10]10 4      42 5 8   [5 8 42]                  100 5       6 12 40
//    /   \       /   \                             /   \       /   \
//  10    4     42    5 8  [5 8]                  100    5     6    12 40
//  |    |           /   \                                         /   \
// []   []         5     8                                      12      40

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const half = Math.floor(nums.length / 2);
  let first = mergeSort(nums.slice(0, half));
  let last = mergeSort(nums.slice(half));
  console.log(first, last);

  // // console.log(half, nums.slice(0, half), nums.slice(half));
  let i = 0;
  let j = 0;

  let result = [];
  // i
  // 10
  //    j
  // 4 42
  // 4 10

  while (i < first.length && j < last.length) {
    if (first[i] < last[j]) {
      result.push(first[i]);
      i++;
    } else {
      result.push(last[j]);
      j++;
    }
  }
  // console.log(first, i, last, j, result);

  if (i < first.length) return [...result, ...first.slice(i)];
  if (j < last.length) return [...result, ...last.slice(j)];
};

// console.log(mergeSort([10, 4]));
// console.log(mergeSort([10, 4, 42]));
console.log(mergeSort([10, 4, 42, 5, 8, 100, 5, 6, 12, 40]));
//                 -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]
// module.exports = {
//   mergeSort,
// };
