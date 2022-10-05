// p: arr;
// r: boolean;
//  0  1  2  3  4  5
// [2, 4, 2, 0, 0, 1]
// 2
//              5
//         1 /       \ 2
//          4         3
//    1 / 2/ \3 \4   1/ \2
//     3   2  1  0   2   1
//        i 0
//    nums[i]              #0 = 2
//    j  1   2       1 /            \ 2
//  nums[j+i]        #1 = 4         #2 = 2
//   j  2 3 4 5   1 / 2/ \3 \4        1/   \2
// nums[j+j+i]  #2 #3  #4  #5      #3     #4

// recursive O(n^2) O(n) worst case: [7,6,5,4,3,2,1,0,0]
const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i === nums.length - 1) return true;
  if (i in memo) return memo[i];

  for (let j = 1; j <= nums[i]; j++) {
    if (arrayStepper(nums, i + j, memo)) return true;
  }

  memo[i] = false;
  return false;
};
