// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// p: root of bi tree
// r: array
//

//0       3
//     /    \
//1   11     4
//   / \      \
//2 4   -2     1
//    0   1   2
// [ 3, 7.5, 1 ]

const levelAverages = (root, level = 0) => {
  const result = [];
  la(root, 0, result);

  return result.map((a) => a.reduce((p, c) => p + c, 0) / a.length);
};

const la = (root, level, result) => {
  if (!root) return;
  if (result[level] === undefined) result[level] = [];
  result[level].push(root.val);
  la(root.left, level + 1, result);
  la(root.right, level + 1, result);
};

// const levelAverages = (root) => {
//     if (!root) return [];
//     const stack = [[root, 0]]
//     const r = [];
//     while (stack.length > 0) {
//       const [c, level] = stack.pop();
//       if (r[level] === undefined) r[level] = [];
//       r[level].push(c.val);

//       c.left && stack.push([c.left, level + 1]);
//       c.right && stack.push([c.right, level + 1]);
//     }

//     return r.map(a => a.reduce((p,c) => p + c, 0) / a.length)
// };

module.exports = {
  levelAverages,
};
