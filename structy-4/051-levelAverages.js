// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of binary tree;
// r: array;
// e:
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1
// [[3], [11,4], [4,-2,1]]
// levelAverages(a); // -> [ 3, 7.5, 1 ]
//bfs
// const levelAverages = (root) => {
//   if (!root) return [];
//   const queue = [[root, 0]];
//   const arr = [];

//   while (queue.length > 0) {
//     const [c, l] = queue.shift();
//     if (arr[l] === undefined) arr[l] = [];
//     arr[l].push(c.val);

//     if (!!c.left) queue.push([c.left, l + 1]);
//     if (!!c.right) queue.push([c.right, l + 1]);
//   }

//   return arr.map(a => (a.reduce((p, c) => p + c, 0)) / a.length)
// };

const levelAverages = (root) => {
  if (!root) return [];
  const arr = [];

  const explore = (root, level) => {
    if (!root) return;
    if (arr[level] === undefined) arr[level] = [];
    arr[level].push(root.val);

    explore(root.left, level + 1);
    explore(root.right, level + 1);
  };

  explore(root, 0);

  return arr.map((a) => a.reduce((p, c) => p + c, 0) / a.length);
};
