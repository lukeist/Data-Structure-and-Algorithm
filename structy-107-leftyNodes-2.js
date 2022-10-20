// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: arr

// // recursive
// const leftyNodes = (root, isLeft = true) => {
//   if (!root) return [];

//   const left = leftyNodes(root.left, true);
//   const right = leftyNodes(root.right, false);

//   return [isLeft && root.val, ...left];
// };

// iterative O(nodes) O(nodes)
const leftyNodes = (root) => {
  if (!root) return [];
  const queue = [[root, 0]];
  const map = {};
  let lastLvl = 0;

  while (queue.length > 0) {
    const [current, level] = queue.shift();
    lastLvl = level;
    map[level] === undefined && (map[level] = []);
    map[level].push(current.val);

    current.left && queue.push([current.left, level + 1]);
    current.right && queue.push([current.right, level + 1]);
  }

  const result = [];
  for (let level = 0; level <= lastLvl; level++) {
    result.push(map[level][0]);
  }

  return result;
};
