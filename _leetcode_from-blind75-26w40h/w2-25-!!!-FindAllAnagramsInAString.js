/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// // p: root of bst; num int
// // 

// p: root of bst; num int
// 
// O(<n) O(<n)
const kthSmallest = (root, k) => {
  const stack = [];
  let c = root;
  let count = 0;
  // [5,3,2,]
  while (c || stack.length > 0) {
      while (c) {
          stack.push(c)
          c = c.left
      }
      c = stack.pop();
      count++;
      if (count === k) return c.val;
      c = c.right;
  }

  return -1;
};

// O(n) O(n)
// var kthSmallest = function(root, k) {
//     if (!root) return null;
//     const arr = [];

//     const getArr = (root) => {
//         if (!root) return;

//         getArr(root.left);
//         arr.push(root.val);
//         getArr(root.right);
//     }
//     getArr(root);
//     return arr[k - 1]
// };

