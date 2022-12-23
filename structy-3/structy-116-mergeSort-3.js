// p: arr
// r: arr
//                      10, 4, 42, 5, 8, 100
//                       /             \
//                 10 4 42            5 8 100
//                 /    \               /    \
//              10      4  42         5       8     100
//                      /  \                    /   \
//                    4   42                    8   100
//
// base cases: nums.len === 1 return nums
const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  let mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  let i = 0,
    j = 0;
  const result = [];
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

module.exports = {
  mergeSort,
};
