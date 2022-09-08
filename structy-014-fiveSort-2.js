// p: arr
// r: arr

// 2 pointers
const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
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
// const fiveSort = (nums) => {
//   let i = 0;
//   let j = nums.length - 1;

//   while (i <= j) {
//     if (nums[i] !== 5 && nums[j] !== 5) {
//       i++;
//     } else if (nums[i] === 5) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       i++;
//     } else j--;
//   }

//   return nums;
// };

//            i
// [12, 5, 1, 5, 12, 7]
//               j
//     i
// [5, 2, 5, 6, 5, 1, 10, 2, 5, 5]
//                        j

// const fiveSort = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] === 5 && (nums[i] = Infinity);
//   }

//   nums.sort();
//   let count = 0;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     nums[i] === Infinity && nums.pop() && count++;
//   }

//   while (count > 0) {
//     nums.push(5);
//     count--;
//   }

//   return nums;
// };

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
// -> [12, 7, 1, 12, 5, 5]

// fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]
