class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// dfs recursive O(nodes) O(nodes)
const leafList = (root, result = []) => {
  if (!root) return [];

  const left = leafList(root.left, result);
  const right = leafList(root.right, result);

  left.length === 0 && right.length === 0 && result.push(root.val);

  return result;
};

// // dfs iterative O(nodes) O(2^levels)
// const leafList = (root) => {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     !current.left && !current.right && result.push(current.val);

//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }

//   return result.reverse();
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
// e.left = g;
// f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(leafList(a)); // -> [ 'd', 'g', 'h' ]
