// https://structy.net/problems/premium/tree-levels

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root
// r: arr

// // recursion
// const treeLevels = (root, arr = [], index = 0) => {
//   if (!root) return [];

//   arr[index] === undefined && (arr[index] = []);

//   treeLevels(root.left, arr, index + 1);
//   treeLevels(root.right, arr, index + 1);
//   arr[index].push(root.val);

//   return arr;
// };

// bfs iteration 2
const treeLevels = (root) => {
  if (!root) return [];

  const queue = [[root, 0]];
  const arr = [];

  while (queue.length > 0) {
    const [current, index] = queue.shift();

    arr[index] === undefined && (arr[index] = []);
    arr[index].push(current.val);

    current.left && queue.push([current.left, index + 1]);
    current.right && queue.push([current.right, index + 1]);
  }

  return arr;
};

// bfs iteration 1
// const treeLevels = (root) => {
//   const queue = [[root, 0]];
//   const map = {};
//   const arr = [];

//   while (queue.length > 0) {
//     const [current, index] = queue.shift();
//     map[current.val] = index;

//     current.left && queue.push([current.left, index + 1]);
//     current.right && queue.push([current.right, index + 1]);
//   }

//   for (const key in map) {
//     arr[map[key]] === undefined && (arr[map[key]] = []);
//     arr[map[key]].push(key);
//   }

//   return arr;
// };

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
c.right = f;
e.right = g;
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
