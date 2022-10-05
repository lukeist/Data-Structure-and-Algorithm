class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//        a
//      /   \
//      b     c
//    / \     \
// [d]   [e]     [f]

// [a,b,c,d,e,f]

// dfs O(nodes) O(nodes)
const treeLevels = (root) => {
  if (!root) return [];
  const map = {};
  explore(root, map, 0);

  const result = [];
  for (let level in map) {
    result.push(map[level]);
  }

  return result;
};

const explore = (root, map, level) => {
  if (!root) return;

  if (level in map) {
    map[level].push(root.val);
  } else {
    map[level] = [];
    map[level].push(root.val);
  }

  explore(root.left, map, level + 1);
  explore(root.right, map, level + 1);
};

// // bfs O(nodes) O(nodes)
// const treeLevels = (root) => {
//   if (!root) return [];
//   const map = {};
//   const queue = [[root, 0]];

//   while (queue.length > 0) {
//     const [current, level] = queue.shift();
//     console.log(map);
//     if (level in map) {
//       map[level].push(current.val);
//     } else {
//       map[level] = [];
//       map[level].push(current.val);
//     }

//     current.left && queue.push([current.left, level + 1]);
//     current.right && queue.push([current.right, level + 1]);
//   }

//   const result = [];
//   for (let level in map) {
//     result.push(map[level]);
//   }

//   return result;
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

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
