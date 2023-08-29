// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of binary tree;
// r: array;
// e:
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
// [ac
// // abde
// const depthFirstValues = (root) => {
//   if (!root) return [];
//   let stack = [root];
//   const result = [];

//   while (stack.length > 0) {
//     const c = stack.pop();
//     result.push(c.val);

//     !!c.right && stack.push(c.right);
//     !!c.left && stack.push(c.left);
//   }

//   return result;
// };

const depthFirstValues = (root) => {
  if (!root) return [];

  const left = depthFirstValues(root.left);
  const right = depthFirstValues(root.right);

  return [root.val, ...left, ...right];
};
