// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root binary tree, val(string);
// r: array/null;
//
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]
// // dfs O(n^2) O(n)
// const pathFinder = (root, target) => {
//   if (!root) return null;
//   if (root.val === target) return [target];

//   const left = pathFinder(root.left, target);
//   const right = pathFinder(root.right, target);

//   if (!!left) return [root.val, ...left];
//   if (!!right) return [root.val, ...right];

//   return null;
// };

const pathFinder = (root, target) => {
  const arr = _pathFinder(root, target);
  return arr ? arr.reverse() : arr;
};

const _pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [target];

  const left = _pathFinder(root.left, target);
  const right = _pathFinder(root.right, target);

  if (!!left) {
    left.push(root.val);
    return left;
  }

  if (!!right) {
    right.push(root.val);
    return right;
  }

  return null;
};
