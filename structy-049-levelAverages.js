// https://structy.net/problems/premium/level-averages

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi
// r: arr

// // dfs recursion
const levelAverages = (root) => {
  const arrs = explore(root);
  const result = [];
  for (const arr of arrs) {
    result.push(arr.reduce((p, c) => p + c) / arr.length);
  }
  return result;
};

const explore = (root, i = 0, arrs = []) => {
  if (!root) return [];

  arrs[i] === undefined && (arrs[i] = []);
  arrs[i].push(root.val);

  explore(root.left, i + 1, arrs);
  explore(root.right, i + 1, arrs);

  return arrs;
};

// // dfs iteration
// const levelAverages = (root) => {
//   if (!root) return [];
//   const stack = [[root, 0]];

//   const arrs = [];

//   while (stack.length > 0) {
//     const [current, index] = stack.pop();

//     arrs[index] === undefined && (arrs[index] = []);
//     arrs[index].push(current.val);

//     current.left && stack.push([current.left, index + 1]);
//     current.right && stack.push([current.right, index + 1]);
//   }

//   const result = [];
//   for (const arr of arrs) {
//     result.push(arr.reduce((p, c) => p + c) / arr.length);
//   }

//   return result;
// };

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
