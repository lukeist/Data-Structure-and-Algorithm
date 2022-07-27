// https://structy.net/problems/premium/bottom-right-value

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// r: val(num/str)

// dfs recursion
const bottomRightValue = (root) => {
  if (!root) return -1;

  const left = bottomRightValue(root.left);
  const right = bottomRightValue(root.right);

  return 1 + Math.max(left, right);
};

// // dfs iteration
// const bottomRightValue = (root) => {
//   const stack = [root];
//   const allVal = [];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     allVal.push(current.val);
//     current.right && stack.push(current.right);
//     current.left && stack.push(current.left);
//   }

//   return allVal[allVal.length - 1];
// };

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
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
// //   11     10
// //  / \      \
// // 4   -2     1

// console.log(bottomRightValue(a)); // -> 1

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \
//    -2  6

console.log(bottomRightValue(a)); // -> 6
