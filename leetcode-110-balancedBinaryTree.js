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
 * @return {boolean}
 */

// [1,2,2,3,null,null,3,4,null,null,4]
// Output true
// Expected false

var isBalanced = function (root) {
  if (!root) return true;
  let isBal = true;

  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    if (Math.abs(left - right) > 1) isBal = false;
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return isBal;
};

// // chat
// var isBalanced = function (root) {
//   if (!root) return true;
//   function getHeight(node) {
//     if (!node) return 0;
//     return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
//   }
//   return (
//     Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
//     isBalanced(root.left) &&
//     isBalanced(root.right)
//   );
// };

// var isBalanced = function(root) {
//     if (!root) return true;
//     const stack = [root];
//     while (stack.length > 0) {
//         const c = stack.pop();
//         const left = count(c.left);
//         const right = count(c.right);
//         if (!checkBalance(left,right)) return false;

//         c.left && stack.push(c.left);
//         c.right && stack.push(c.right);
//     }

//     return true;
// }

// const checkBalance = (left, right) => {
//     return (right === left || right === left + 1 || left === right + 1)
// }

// var count = function(root) {
//     if (!root) return 0;
//     const left = 1 + count(root.left);
//     const right = 1 + count(root.right);

//     return Math.max(left, right);
// };
