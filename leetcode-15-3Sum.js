// p: arr
// r: arr
// e:

//   i           l
// [-2, -1 , -1, 0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
//                  +r

// [-4, -3, -3, 0, 1, 2, 2, 3, 4, 4, 4, 5, 7, 9]
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1,
      r = n - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      let numsL = nums[l],
        numsR = nums[r];
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === numsL) l++;
        while (nums[r] === numsR) r--;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return result;
};

console.log(threeSum([-4, -3, -3, 0, 1, 2, 2, 3, 4, 4, 4, 5, 7, 9]));
