// p: array;
// r: array;
// e:
//                     i
// fiveSort([12, 7, 1, 12, 5, 5]);
//                     j
// -> [12, 7, 1, 12, 5, 5]
//           i
// fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
//                                 j
const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[j] === 5) {
      j--;
    } else {
      if (nums[i] === 5) [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
};
