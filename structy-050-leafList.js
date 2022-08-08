class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// r: arr

// dfs recursion
const leafList = (root, leaves = []) => {
  if (!root) return [];
  if (!root.left && !root.right) leaves.push(root.val);

  leafList(root.left, leaves);
  leafList(root.right, leaves);

  return leaves;
};

// // dfs iteration
// const leafList = (root) => {
//   if (!root) return [];

//   const stack = [[root]];
//   const leaves = [];

//   while (stack.length > 0) {
//     const [current] = stack.pop();

//     !current.left && !current.right && leaves.push(current);

//     current.left && stack.push([current.left]);
//     current.right && stack.push([current.right]);
//   }

//   return leaves;
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

leafList(a); // -> [ 'd', 'e', 'f' ]
