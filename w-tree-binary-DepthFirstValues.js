class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//         a
//       /   \
//     b       c
//   / \         \
// d     e         f

const depthFirstValues = (root) => {
  if (!root) return [];
  console.log(root);
  const left = depthFirstValues(root.left); // b,d,e
  const right = depthFirstValues(root.right); // c,f
  // console.log(left);
  console.log("-----------");
  console.log([root.val, ...left, ...right]);
};

// const depthFirstValues = (root) => {
//   if (!root) return false;
//   const stack = [root];
//   const result = [];
//   // console.log(stack);
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current.val);
//     result.push(current.val);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   console.log(result);
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

depthFirstValues(a);
