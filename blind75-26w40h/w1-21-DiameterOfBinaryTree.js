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
 * @return {number}
 */

// p: root of binary tree;
// r: number
// e:

var diameterOfBinaryTree = function (root) {
  let max = 0;
  const dfsCount = (root) => {
    if (!root) return 0;
    const left = dfsCount(root.left);
    const right = dfsCount(root.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  };
  dfsCount(root);
  return max;
};
