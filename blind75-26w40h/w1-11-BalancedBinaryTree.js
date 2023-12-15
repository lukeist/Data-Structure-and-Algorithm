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
var isBalanced = function (root) {
  if (!root) return true;
  const left = count(root.left);
  const right = count(root.right);

  if (Math.abs(left - right) < 2)
    return isBalanced(root.left) && isBalanced(root.right);
  return false;
};

const count = (root) => {
  if (!root) return 0;
  const left = count(root.left);
  const right = count(root.right);
  return 1 + Math.max(left, right);
};
