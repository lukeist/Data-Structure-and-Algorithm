// https://structy.net/problems/premium/five-sort

// p: arr of nums
// r: arr
// e: fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5]

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      i++;
    }
  }
  return nums;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7]));

// const fiveSort = (nums) => {
//     for (let num of nums) {
//       if (num === 5) {
//         nums.splice(nums.indexOf(num), 1);
//         nums.push(num);
//       }
//     }
//     return nums;
//   };
