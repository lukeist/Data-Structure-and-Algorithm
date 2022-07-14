class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// n: num

// dfs:
const treeMinValue = (root) => {
  if (!root) return Infinity;

  let minLeft = treeMinValue(root.left);
  let minRight = treeMinValue(root.right);

  return Math.min(root.val, minLeft, minRight);
};

// // dfs:
// const treeMinValue = (root, min = Infinity) => {
//   if (!root) return Infinity;

//   let minLeft = treeMinValue(root.left, min);
//   let minRight = treeMinValue(root.right, min);
//   min = Math.min(root.val, minLeft, minRight, min);

//   //   console.log(min);
//   return min;
// };

// // bfs:
// const treeMinValue = (root) => {
//   const queue = [root];
//   let min = Infinity;

//   while (queue.length > 0) {
//     let current = queue.shift();

//     min = Math.min(current.val, min);

//     current.right && queue.push(current.right);
//     current.left && queue.push(current.left);
//   }

//   return min;
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

console.log(treeMinValue(a)); // -> -2
