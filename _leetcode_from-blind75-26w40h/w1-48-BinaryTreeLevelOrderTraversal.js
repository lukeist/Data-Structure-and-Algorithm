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

// p: root of bt
// r: arry of arrays;
var levelOrder = function (root, l = 0, result = []) {
  if (!root) return [];
  !result[l] && (result[l] = []);
  result[l].push(root.val);
  levelOrder(root.left, l + 1, result);
  levelOrder(root.right, l + 1, result);
  return result;
};

// var levelOrder = function(root) {
//     if (!root) return [];
//     const result = [];
//     const dfs = (root, l) => {
//         if (!root) return;
//         !result[l] && (result[l] = []);
//         result[l].push(root.val);
//         dfs(root.left, l + 1);
//         dfs(root.right, l + 1);
//     }
//     dfs(root, 0)

//     return result;
// };
// var levelOrder = function(root) {
//     if (!root) return [];
//     const queue = [[root, 0]];
//     const result = [];
//     while (queue.length > 0) {
//         const [c, l] = queue.shift();
//         result[l] === undefined && (result[l] = []);
//         result[l].push(c.val);

//         c.left && queue.push([c.left, l + 1]);
//         c.right && queue.push([c.right, l + 1]);
//     }
//     return result;
// };
