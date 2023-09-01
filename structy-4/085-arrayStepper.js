// p: array;
// r: boolean;
// e:
//     idx =  0  1  2  3  4  5
// numbers = [2, 4, 2, 0, 0, 1]
// numbers = [2, 4, 2, 0, 0, 1]
//                           0
// 2                    1/      2\
//                    4         2
// 4            1/ 2\ 3\ 4\    1/ 2\
//               2  0 0 1
//                      \

// arrayStepper([1, 1, 1, 1, 1, 0]); // -> true

const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i >= nums.length - 1) return true;
  if (i in memo) return memo[i];

  for (let j = 1; j <= nums[i]; j++) {
    if (arrayStepper(nums, i + j, memo) === true) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};
