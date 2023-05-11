// var isValidBST = function (root) {
//   const arr = [];

//   const dfs = (root) => {
//     if (!root) return;
//     dfs(root.left);
//     arr.push(root.val);
//     dfs(root.right);
//   };

//   dfs(root);

//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i - 1] >= arr[i]) return false;
//   }

//   return true;
// };

// chatGPT's solution: better space complexity

class Tree {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

function isValidBST(root) {
  let prev = null;

  //                5
  //              /   \
  //             1     7
  //                 /   \
  //               -1     8
  //              /  \
  //           T      6
  //                 / \
  //                T   T
  const dfs = (node) => {
    if (!node) return true;
    // check left
    if (!dfs(node.left)) return false;
    // check current
    console.log(prev);
    if (prev && prev >= node.val) return false;
    prev = node.val;
    // check right
    if (!dfs(node.right)) return false;

    return true;
  };

  return dfs(root);
}

const a = new Tree(5);
const b = new Tree(1);
const c = new Tree(7);
const d = new Tree(-1);
const e = new Tree(8);
const f = new Tree(6);

a.left = b;
a.right = c;
c.left = d;
c.right = e;
d.right = f;

console.log(isValidBST(a));
