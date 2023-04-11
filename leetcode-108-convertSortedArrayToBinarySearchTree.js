var sortedArrayToBST = function (nums, i = 0, j = nums.length - 1) {
  if (i > j) return null;
  const mid = Math.floor((i + j) / 2);
  const rootVal = nums[mid];
  const root = new TreeNode(rootVal);

  root.left = sortedArrayToBST(nums, i, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, j);

  return root;
};

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {number[]} nums
//  * @return {TreeNode}
//  */
// // p: array
// // r: bi search tree
// //   0       3 4
// //         j
// //   i   j   r
// //   i   j   i j
// // [-10,-3,0,5,9] Math.floor(i+j/2 = 2.5) = 2 => root
// //  0     3
// // [1,3,4,6] => root i
// //j r ij
// // [1,3] root = 1

// var sortedArrayToBST = function (nums, i = 0, j = nums.length - 1) {
//   if (i > j) return null;
//   const rootIndex = Math.floor((i + j) / 2);
//   const root = new TreeNode(nums[rootIndex]);
//   root.left = sortedArrayToBST(nums, i, rootIndex - 1);
//   root.right = sortedArrayToBST(nums, rootIndex + 1, j);
//   return root;
// };

// // var sortedArrayToBST = function(nums) {
// //     if (nums.length === 0) return null;
// //     const rootIndex = Math.floor(nums.length / 2)
// //     const root = new TreeNode(nums[rootIndex]);
// //     root.left = sortedArrayToBST(nums.slice(0, rootIndex));
// //     root.right = sortedArrayToBST(nums.slice(rootIndex + 1));
// //     return root;
// // };
