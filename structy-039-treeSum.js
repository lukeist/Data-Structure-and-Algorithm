// https://structy.net/problems/tree-sum

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// DFS: recursion
const treeSum = (root, sum = 0) => {
  if (!root) return sum;

  return sum + treeSum(root.right, sum) + treeSum(root.left, sum);
};

// // DFS: iteration
// const treeSum = (root) => {
//   if (!root) return 0;
//   const stack = [root];
//   let sum = 0;

//   while (stack.length > 0) {
//     let current = stack.pop();

//     sum += current.val;

//     current.right && stack.push(current.right);
//     current.left && stack.push(current.left);
//   }

//   return sum;
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

// // BFS:
// const treeSum = (root) => {
//     const queue = [root];
//     let sum = 0;

//     while (queue.length > 0) {
//       let current = queue.shift();

//       sum += current.val;

//       current.right && queue.push(current.right);
//       current.left && queue.push(current.left);
//     }

//     return sum;
//   };
