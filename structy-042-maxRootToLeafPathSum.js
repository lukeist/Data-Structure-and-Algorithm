// https://structy.net/problems/max-root-to-leaf-path-sum

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// r: num
// e:

// dfs recursion:
const maxPathSum = (root) => {
  if (!root) return -Infinity;

  const max = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return max === -Infinity ? root.val : root.val + max;
};

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// console.log(maxPathSum(a)); // -> 18

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

console.log(maxPathSum(a)); // -> -8

// // dfs iteration:
// const maxPathSum = (root) => {
//   const stack = [root];
//   let max = -Infinity;

//   while (stack.length > 0) {
//     const current = stack.pop();

//     console.log(current.val);

//     if (current.right) {
//       current.right.val += current.val;
//       stack.push(current.right);
//     }

//     if (current.left) {
//       current.left.val += current.val;
//       stack.push(current.left);
//     }

//     !current.left && !current.right && (max = Math.max(max, current.val));
//   }

//   return max;
// };
