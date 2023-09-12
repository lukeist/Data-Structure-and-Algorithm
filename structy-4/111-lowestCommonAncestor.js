// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

// p: root of binary tree, val, val;
// r: val;

// [d,b,a]
// [h,e,b,a]

// [b,a]
// [g,e,b,a]
const lowestCommonAncestor = (root, val1, val2) => {
  const a1 = explore(root, val1);
  const a2 = explore(root, val2);
  const set1 = new Set(a1);

  for (let val of a2) {
    if (set1.has(val)) return val;
  }
};

const explore = (root, val) => {
  if (!root) return null;
  if (root.val === val) return [val];

  const left = explore(root.left, val);
  const right = explore(root.right, val);

  if (!!left) {
    left.push(root.val);
    return left;
  }

  if (!!right) {
    right.push(root.val);
    return right;
  }
};
