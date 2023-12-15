/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// p: binary search tree, node, node;
// r: number;
//

// [6,2]
// [6,2,4]

// [1,2]
// [3]

// 2.
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  return root;
};

// 1.
// var lowestCommonAncestor = function(root, p, q) {
//     const aP = [];
//     const aQ = [];
//     let common = null;

//     dfs(root, p, aP);
//     dfs(root, q, aQ);
//     const minLen = Math.min(aP.length, aQ.length);
//     for (let i = 0; i < minLen; i++) {
//         if (aP[i] !== aQ[i]) return common;
//         common = aP[i];
//     }

//     return common;
// };

// 1. recursion
// const dfs = (root, node, array) => {
//     if (!root) return array;
//     array.push(root);
//     if (root.val === node.val) return array;
//     if (node.val < root.val) return dfs(root.left, node, array)
//     if (root.val < node.val) return dfs(root.right, node, array)
// }

// 1. iteration
// const dfs = (root, node, array) => {
//     const stack = [root];
//     while (stack.length > 0) {
//         const c = stack.pop();
//         array.push(c);
//         if (c === node) return;

//         c.left && node.val <= c.val && stack.push(c.left);
//         c.right && c.val < node.val && stack.push(c.right);
//     }

//     return array;
// }

//       5
//     3  6
//    2 4
//   1
// const dfs = (root, node, array) => {
//     if (!root) return array;
//     if (root === node) {
//         array.push(node);
//         return array;
//     }

//     dfs(root.left, node, array)
//     dfs(root.right, node, array)

//     return array;
// }
