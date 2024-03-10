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
// r: array;
// e:

var verticalTraversal = function (root) {
  const map = {};
  const stack = [[root, 0, 0]];

  while (stack.length > 0) {
    const [c, row, col] = stack.pop();
    if (map[col] === undefined) map[col] = [];
    map[col].push([row, c.val]);
    if (c.left) stack.push([c.left, row + 1, col - 1]);
    if (c.right) stack.push([c.right, row + 1, col + 1]);
  }

  const result = [];
  for (let key in map) {
    result.push([key, map[key]]);
  }

  result.sort((a, b) => a[0] - b[0]);

  const ree = result.map((r) => r[1]);

  for (let r of ree) {
    r.sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    });
  }

  console.log(ree);
  return ree.map((r) => r.map((a) => a[1]));
};
