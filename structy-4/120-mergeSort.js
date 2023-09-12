// p: array;
// r: array;
//                      m
//      0  1  2  3  4   5   6   7  8    9
// e: [10, 4, 42, 5, 8, 100, 5, 6, 12, 40]
// => [4, 5, 5, 6, 8, 10, 12, 40, 42, 100]

//            [10, 4, 42, 5, 8, 100, 5, 6, 12, 40]
//              /                          \
//  [10, 4, 42, 5, 8]                     100, 5, 6, 12, 40
//          /   \
//    10 4 42    5  8  => 4 10 42 - 5 8
//    /   \
// 10 4   42
//  / \
// 10  4

// const mergeSort = (nums, i = 0, j = nums.length - 1) => {
//   if (i === j) return [nums[i]];

//   const result = [];
//   const mid = Math.floor((j - i) / 2); // 4

//   const left = mergeSort(nums, i, mid); // (array, 0, 4) -> (array, 0, 2) (array, 0, 2) -> (array, 0, 1) -> (array, 0, 0)
//   const right = mergeSort(nums, mid, j);// (array, 4, 9)
//   const len = Math.max(left.length, right.length);

//   for (let x = 0; x < len; x++) {
//     if (left[x] <= right[x]) {
//       result.push(left[x]);
//     } else {
//       result.push(right[x])
//     }
//   }

//   return result;
// };

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  const result = [];
  //      i    j
  //   10   4 42
  //   i  j
  //   4 42
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
};
