// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree, val(str/num)
// r: arr

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//n    []
//

const pathFinder = (root, target) => {
  const result = _pathFinder(root, target);
  return result ? result.reverse() : null;
};

const _pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  const left = _pathFinder(root.left, target);
  const right = _pathFinder(root.right, target);

  if (left) {
    left.push(root.val);
    return left;
  }

  if (right) {
    right.push(root.val);
    return right;
  }

  return null;
};

// const pathFinder = (root, target) => {
//   if (!root) return null;
//   if (root.val === target) return [root.val];

//   const left = pathFinder(root.left, target);
//   const right = pathFinder(root.right, target);

//   if (left) {
//     left.unshift(root.val);
//     return left;
//   }

//   if (right) {
//     right.unshift(root.val);
//     return right;
//   }

//   return null;
// };

module.exports = {
  pathFinder,
};
