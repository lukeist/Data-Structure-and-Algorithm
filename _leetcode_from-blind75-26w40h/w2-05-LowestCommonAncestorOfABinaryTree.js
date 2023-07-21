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

// p: root of bt;
// r: number;
// e:

var lowestCommonAncestor = function (root, p, q) {
  const arrP = getPath(root, p).reverse();
  const arrQ = getPath(root, q).reverse();

  const len = Math.min(arrP.length, arrQ.length);
  let c = null;
  for (let i = 0; i <= len; i++) {
    if (arrP[i] !== arrQ[i]) return c;
    c = arrP[i];
  }
};

const getPath = (root, node) => {
  if (!root) return null;
  if (root.val === node.val) return [node];
  const left = getPath(root.left, node);
  const right = getPath(root.right, node);

  if (left) {
    left.push(root);
    return left;
  }

  if (right) {
    right.push(root);
    return right;
  }
};
