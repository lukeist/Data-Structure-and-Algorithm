// p: array;
// r: array;
// e:
//                                [10, 4, 42, 5, 8, 100, 5, 6, 12, 40]
//                            /                      \
//            10 4 42 5 8
//           /        \
//        10 4       42 5 8
//       /   \        /   \
//     10    4     42    5 8
//                       /  \
//                      5    8
//                 [42]       [5,8]
//[4,4]  [5,8,42]
// [4,4,]

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};
