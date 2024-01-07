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

// p: root of bt
// r: array of nodes;

var rightSideView = function (root) {
  if (!root) return [];
  const nodes = [];
  const getNodes = (root, level) => {
    if (!root) return;

    if (nodes[level] === undefined) nodes[level] = [];
    nodes[level].push(root.val);
    getNodes(root.left, level + 1);
    getNodes(root.right, level + 1);
  };
  getNodes(root, 0);

  const result = [];
  for (let n of nodes) {
    result.push(n[n.length - 1]);
  }

  return result;
};
