// https://structy.net/problems/premium/how-high

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// r: num+ / -1

//

// dfs recursioni
const howHigh = (root) => {
  if (!root) return -1;

  const left = howHigh(root.left);
  const right = howHigh(root.right);

  return 1 + Math.max(left, right);
};

// // dfs iteration
// const howHigh = (root) => {
//   if (!root) return -1;

//   root.val = 0;
//   const stack = [root];

//   let count = {};

//   while (stack.length > 0) {
//     const current = stack.pop();

//     count[current] = current.right && stack.push(current.right);
//     current.left && stack.push(current.left);
//   }

//   return;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(howHigh(a)); // -> 2
