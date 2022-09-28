// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: num

// dfs iterative O(nodes) O(nodes)
const howHigh = (node) => {
  if (!node) return -1;

  let left = howHigh(node.left) + 1;
  let right = howHigh(node.right) + 1;

  return Math.max(left, right);
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// // dfs iterative O(nodes) O(nodes)
// const howHigh = (node) => {
//   if (!node) return -1;
//   const stack = [[node, 0]];
//   let max = -Infinity;

//   while (stack.length > 0) {
//     const [current, distance] = stack.pop();
//     max = Math.max(max, distance);

//     current.left && stack.push([current.left, distance + 1]);
//     current.right && stack.push([current.right, distance + 1]);
//   }

//   return max;
// };
