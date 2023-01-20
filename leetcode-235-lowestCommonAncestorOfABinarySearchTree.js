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

// p: root of binary search tree, node, node;
// r: node;
//                                  6
//                             /           \
//                            2             8
//                        /        \      /     \
//                        0        4      7       9
//                                / \
//                              3     5
//     [2 6]
//     [4 2 6]

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);

  return root;
};

// // version 2 like Alvin's
// var lowestCommonAncestor = function (root, p, q) {
//   if (!root) return null;
//   const p1 = getPath(root, p);
//   const p2 = getPath(root, q);

//   let i = p1.length - 1,
//     j = p2.length - 1;
//   let node;

//   while (i >= 0 && j >= 0 && p1[i].val === p2[j].val) {
//     node = p1[i];
//     i--;
//     j--;
//   }
//   return node;
// };

// const getPath = (root, node) => {
//   if (!root) return null;
//   if (root.val === node.val) return [root];

//   const left = getPath(root.left, node);
//   const right = getPath(root.right, node);

//   if (left) {
//     left.push(root);
//     return left;
//   }
//   if (right) {
//     right.push(root);
//     return right;
//   }
//   return null;
// };
