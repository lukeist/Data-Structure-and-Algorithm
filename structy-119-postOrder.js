// https://structy.net/problems/premium/post-order

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// p: root of bi tree
// r: arr

// in-order
const postOrder = (root) => {
  if (!root) return [];

  const left = postOrder(root.left);
  const right = postOrder(root.right);

  // const arr = left.concat(right);
  // arr.push(root.val);
  const arr = [...left, root.val, ...right];
  return arr;
};

// // pre-order
// const postOrder = (root) => {
//   if (!root) return [];

//   const left = postOrder(root.left);
//   const right = postOrder(root.right);

//   const arr = left.concat(right);
//   arr.unshift(root.val);

//   return arr;
// };

// // post-order
// const postOrder = (root) => {
//   if (!root) return [];

//   const left = postOrder(root.left);
//   const right = postOrder(root.right);

//   const arr = left.concat(right);
//   arr.push(root.val);

//   return arr;
// };

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");

// x.left = y;
// x.right = z;

// //       x
// //    /    \
// //   y      z

// postOrder(x);
// // ['y', 'z', 'x']
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g

console.log(postOrder(a));
// [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ]
