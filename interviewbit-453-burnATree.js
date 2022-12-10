// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const burn = (A, B) => {
  return _findB(A, B) + _findO(A, B) - 1;
};

//  Tree :      12
//             / \
//            21   3i
//           /   / \
//          40   5i   6i
//                   \
//                    7i
//  Tree :      14
//             / \
//            2-i 33
//           /   / \
//          4-i 51  62
//                   \
//                    71
//                    \
//                      8
//                        \
//                         9
//                        /  \
//                      10    11

// dfs recusrive O(n) O(n)
const _findB = (root, leaf) => {
  if (!root) return Infinity;
  if (root.val === leaf) return 0;

  const left = _findB(root.left, leaf);
  const right = _findB(root.right, leaf);

  return 1 + Math.min(left, right);
};

const _findO = (root, leaf) => {
  if (!root) return 0;
  if (root.val === leaf) return -Infinity;
  const left = _findO(root.left, leaf);
  const right = _findO(root.right, leaf);

  return 1 + Math.max(left, right);
};

// const burn = function (root, B) {
//   // Initialize the minimum burning time and current burning time to zero
//   let min_time = 0;
//   let cur_time = 1;

//   // Helper function to perform DFS and find the minimum time required
//   // to burn the entire tree
//   function dfs(node) {
//     // If the current node is the leaf node that we are looking for,
//     // return the current burning time
//     if (node.val == B) {
//       min_time = cur_time;
//       return;
//     }

//     // If the current node has a left child, recursively call the
//     // DFS function on the left child and increment the current
//     // burning time by one
//     if (node.left) {
//       cur_time += 1;
//       dfs(node.left);
//     }

//     // If the current node has a right child, recursively call the
//     // DFS function on the right child and increment the current
//     // burning time by one
//     if (node.right) {
//       cur_time += 1;
//       dfs(node.right);
//     }
//   }

//   // Start the DFS from the root node
//   dfs(root);

//   // Return the minimum time required to burn the entire tree
//   return min_time;
// };

// const burn = function (root, B) {
//   // Initialize the minimum burning time and current burning time to zero
//   let min_time = 0;
//   let cur_time = 1;

//   // Create a stack to store the nodes for the iterative DFS
//   const stack = [];

//   // Push the root node to the stack
//   stack.push(root);

//   // Continue the iterative DFS while the stack is not empty
//   while (stack.length > 0) {
//     // Pop the top node from the stack
//     const node = stack.pop();

//     // If the current node is the leaf node that we are looking for,
//     // update the minimum burning time and break out of the loop
//     if (node.val == B) {
//       min_time = cur_time;
//       break;
//     }

//     // If the current node has a right child, push it to the stack
//     // and increment the current burning time by one
//     if (node.right) {
//       stack.push(node.right);
//       cur_time += 1;
//     }

//     // If the current node has a left child, push it to the stack
//     // and increment the current burning time by one
//     if (node.left) {
//       stack.push(node.left);
//       cur_time += 1;
//     }
//   }

//   // Return the minimum time required to burn the entire tree
//   return min_time;
// };

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

const g = new Node(7);
const h = new Node(8);
const i = new Node(9);
const j = new Node(10);
const k = new Node(11);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;

f.right = g;
g.right = h;
h.right = i;
i.left = j;
i.right = k;

// console.log(a.right);
console.log(burn(a, 4));
