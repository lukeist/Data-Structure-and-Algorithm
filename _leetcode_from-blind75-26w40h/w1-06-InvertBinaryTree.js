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
 * @return {TreeNode}
 */

// p: root of bi tree;
// r: root of bi tree;
//

// // iteration
// var invertTree = function (root) {
//   if (!root) return null;
//   const stack = [root];

//   while (stack.length > 0) {
//     const c = stack.pop();
//     const left = c.left;
//     const right = c.right;
//     c.right = left;
//     c.left = right;
//     if (left) stack.push(left);
//     if (right) stack.push(right);
//   }

//   return root;
// };

// recursion
var invertTree = function (root) {
  if (!root) return null;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;
  return root;
};
