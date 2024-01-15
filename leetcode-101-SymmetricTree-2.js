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

// iter
var isSymmetric = function (root) {
  const stack = [[root.left, root.right]];

  while (stack.length > 0) {
    const [r1, r2] = stack.pop();
    if (!r1 && !r2) continue;
    if (!r1 || !r2 || r1.val !== r2.val) return false;

    stack.push([r1.left, r2.right]);
    stack.push([r1.right, r2.left]);
  }
  return true;
};

// recu

// var isSymmetric = function(root) {
//     return (check(root.left, root.right));
// };

// const check = (r1, r2) => {
//     if (!r1 && !r2) return true;
//     if (!r1 || !r2 || r1.val !== r2.val) return false;
//     return check(r1.right, r2.left) && check(r2.right, r1.left);
// }
