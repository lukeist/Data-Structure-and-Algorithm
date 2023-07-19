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

// p: root of bt;
// r: boolean;
// e:

//  1 5 3 7 6
var isValidBST = function (root) {
  const array = [];
  const bfs = (root) => {
    if (!root) return;
    bfs(root.left);
    array.push(root.val);
    bfs(root.right);
  };
  bfs(root);
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] >= array[i]) return false;
  }

  return true;
};
