/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// p: array;
// r: binary search tree;
//        0  1  2 3 4  
// e:           r
//      [-10,-3,0,5,9]
//                s  
//                  e  
var sortedArrayToBST = function(nums, s = 0, e = nums.length - 1) {
    if (s > e) return null;
    const m = Math.floor((e + s) / 2);
    const root = new TreeNode(nums[m]);

    root.left = sortedArrayToBST(nums, s, m - 1);
    root.right = sortedArrayToBST(nums, m + 1, e);

    return root;
};