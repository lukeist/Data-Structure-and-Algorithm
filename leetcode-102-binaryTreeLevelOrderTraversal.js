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
 * @return {number[][]}
 */

// p: root of bi tree;
// r: array

// bfs recursive
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];

  const lo = (root, level, result) => {
    if (!root) return;
    if (!result[level]) result[level] = [];
    result[level].push(root.val);
    lo(root.left, level + 1, result);
    lo(root.right, level + 1, result);
  };
  lo(root, 0, result);
  return result;
};

// bfs iterative
// var levelOrder = function(root) {
//     if (!root) return [];
//     const queue = [[root, 0]];
//     const result = [];
//     while (queue.length > 0) {
//         const [c, level] = queue.shift();
//         if (!result[level]) result[level] = [];
//         result[level].push(c.val);

//         c.left && queue.push([c.left, level + 1]);
//         c.right && queue.push([c.right, level + 1]);
//     }

//     return result;
// };
