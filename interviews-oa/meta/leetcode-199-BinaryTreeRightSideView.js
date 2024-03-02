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
 * @return {number[]}
 */

// p: root bt
// r: array of values
// e:
//
// 2 null  4
// 134

// var rightSideView = function(root) {
//     if (!root) return [];
//     const result = [];
//     const queue = [[root, 0]];

//     while (queue.length > 0) {
//         const [c, l] = queue.shift();
//         if (result[l] === undefined) result[l] = [];
//         result[l].push(c.val);
//         c.left && queue.push([c.left, l + 1])
//         c.right && queue.push([c.right, l + 1])
//     }

//     return result.map(r => r[r.length - 1]);
// };

var rightSideView = function (root) {
  if (!root) return [];
  const result = [];

  const dfs = (root, l) => {
    if (!root) return;
    if (result[l] === undefined) result[l] = [];
    result[l].push(root.val);
    dfs(root.left, l + 1);
    dfs(root.right, l + 1);
  };
  dfs(root, 0);

  return result.map((r) => r[r.length - 1]);
};
