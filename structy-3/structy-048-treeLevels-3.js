// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// p: root of bi tree;
// r: arr
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
// [[], [], []]

// dfs recursive O(n) O(n)
const treeLevels = (root, l = 0, r = []) => {
  if (!root) return r;

  r[l] === undefined && (r[l] = []);
  r[l].push(root.val);
  treeLevels(root.left, l + 1, r);
  treeLevels(root.right, l + 1, r);

  return r;
};

// dfs iterative O(n) O(n)
// const treeLevels = (root) => {
//   if (!root) return [];
//   const result = [];
//   // put root and level 0 into a stack
//   const stack = [[root, 0]];
//   // traverse thru each node
//   while (stack.length > 0) {
//     const [c, l] = stack.pop();
//   // push each node into their level based on result index
//     result[l] === undefined && (result[l] = []);
//     result[l].push(c.val);
//   // increment level of left and right nodes and push them to the stack
//     c.right && stack.push([c.right, l + 1]);
//     c.left && stack.push([c.left, l + 1]);
//   }
//   // return
//   return result;
// };
