class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// r: arr

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1
// [3, 7.5, 1.5]

// dfs O(nodes) O(nodes)
const levelAverages = (root) => {
  const levels = [];
  explore(root, levels, 0);

  for (let i = 0; i < levels.length; i++) {
    levels[i] = levels[i].reduce((a, b) => a + b, 0) / levels[i].length;
  }

  return levels;
};

const explore = (root, levels, currentLevel) => {
  if (!root) return [];

  levels[currentLevel] === undefined && (levels[currentLevel] = []);
  levels[currentLevel].push(root.val);

  explore(root.left, levels, currentLevel + 1);
  explore(root.right, levels, currentLevel + 1);
};

// // bfs O(nodes) O(levels)

const levelAverages = (root) => {
  let queue = [[root, 0]];
  const map = {};

  while (queue.length > 0) {
    const [current, level] = queue.shift();

    map[level] === undefined && (map[level] = []);
    map[level].push(current.val);

    current.left && queue.push([current.left, level + 1]);
    current.right && queue.push([current.right, level + 1]);
  }

  const result = [];
  for (let key in map) {
    const avrg = map[key].reduce((a, b) => a + b) / map[key].length;
    console.log(map[key].reduce((a, b) => a + b));
    result.push(avrg);
  }

  return result;
};

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

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
