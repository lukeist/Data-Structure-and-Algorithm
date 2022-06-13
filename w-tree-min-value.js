class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: tree !== null
// r: num
// e:
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// Recursion
const treeMinValue = (root) => {
  if (!root) return Infinity;
  const left = treeMinValue(root.left);
  const right = treeMinValue(root.right);

  return Math.min(root.val, left, right);
};

// root = 3 => Math.min(? , root)
// root1 = 11 => Math.min(root, root1)
// root = null =>

// // BFS
// const treeMinValue = (root) => {
//   let min = Infinity;
//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     min = Math.min(current.val, min);

//     current.left && queue.push(current.left);
//     current.right && queue.push(current.right);
//   }

//   console.log(min);
//   return min;
// };

// // DFS
// const treeMinValue = (root) => {
//   let min = Infinity;
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     min = Math.min(current.val, min);

//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }
//   console.log(min);
//   return min;
// };

// module.exports = {
//   treeMinValue,
// };

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeMinValue(a); // -> -2
