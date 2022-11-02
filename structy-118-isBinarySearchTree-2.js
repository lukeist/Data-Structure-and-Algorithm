// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: boolean
// e:
//            12
//          /   \
//         5     18
//        / \     \
//      4   15     19
// [4 5 15 12 18 19] -> false

//            12
//          /   \
//         5     18
//        / \     \
//      4   7     19
//    / \
//   1   6

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const isBinarySearchTree = (root) => {
  console.log(values);

  for (let i = 1; i < values.length; i++) {
    if (values[i - 1] > values[i]) return false;
  }

  return true;
};

const explore = (root) => {
  if (!root) return [];

  const left = explore(root.left);
  const right = explore(root.right);

  return [...left, root.val, ...right];
};

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

console.log(isBinarySearchTree(a)); // -> true
