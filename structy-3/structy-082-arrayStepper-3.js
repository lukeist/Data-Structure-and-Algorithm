// p: arr;
// r: boolean;

//                       2, 4, 2, 0, 0, 1
//                            1/     \2
//                  42001               2001
//              1/ 2\  3\   4\            1/  2\
//           2001   001   01    1         001   01

// time O(n^2) because nested loops: [7,6,5,4,3,2,1,0,0] worst case
const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length - 1) return true;

  for (let j = 1; j <= nums[i]; j++) {
    // no need to put memo here since it returns right away
    if (arrayStepper(nums, i + j, memo)) return true;
  }

  memo[i] = false;
  return false;
};
