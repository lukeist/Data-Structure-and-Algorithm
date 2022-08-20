// https://structy.net/problems/premium/merge-sort

// p: arr
// r: arr

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const arr = [];

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  //   console.log(left, right);
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      arr.push(left[l]);
      l++;
    } else {
      arr.push(right[r]);
      r++;
    }
  }

  //   console.log(arr.concat(left.slice(l)));
  //   console.log(arr.concat(right.slice(r)));
  //   l < left.length && (arr = arr.concat(left.slice(l)));
  //   r < right.length && arr = arr.concat(right.slice(r));

  l < left.length && arr.push(...left.slice(l));
  r < right.length && arr.push(...right.slice(r));

  return arr;
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40]; // -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]

console.log(mergeSort(numbers));
// [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]
//                 / \
//[4, 5, 5, 6, 8]      [10, 12, 40, 42, 100]
//      / \                     / \
//[4, 5]  [5, 6, 8]     [10, 12]    [40, 42, 100]
//   / \         / \         / \             / \
//[4] [5]    [5]  [6, 8]  [10] [12]      [40] [42, 100]
//                 / \                         / \
//               [6] [8]                    [42] [100]
