// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree, val (str)
// r: arr
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// recursive dfs O(nodes) O(nodes):
const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [target];

  const left = pathFinder(root.left, target);
  const right = pathFinder(root.right, target);

  // if (left && left.includes(target)) {
  if (left) {
    left.unshift(root.val);
    return left;
  }

  // if (right && right.includes(target)) {
  if (right) {
    right.unshift(root.val);
    return right;
  }

  // if (!left && !right) return null;
  return null;
};

// // iterative dfs:
// const pathFinder = (root, target) => {
//   // traverse thru each node, add them to arrays of array
//   // loop thru array & see if any arr.includes('val') => return that arr || null
// };

// // recursive dfs O(nodes^2) O(nodes):
// const pathFinder = (root, target) => {
//   if (!root) return null;
//   if (root.val === target) return [target];

//   const left = pathFinder(root.left, target);
//   const right = pathFinder(root.right, target);

//   if (left) return [root.val, ...left];
//   if (right) return [root.val, ...right];

//   return null;
// };
