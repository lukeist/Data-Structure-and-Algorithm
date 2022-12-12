// p: arr;
// r: arr;

// //            i            j
// fiveSort([12, 5, 1, 5, 12, 7]);
//           12
// //    -> [12, 7, 1, 12, 5, 5]

const fiveSort = (nums) => {
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    if (nums[j] === 5) {
      j--;
    } else {
      if (nums[i] === 5) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j--;
        i++;
      } else {
        i++;
      }
    }
  }
  return nums;
};

module.exports = {
  fiveSort,
};
