// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: arr

// recursive
const leftyNodes = (root, level = 0, result = []) => {
  if (!root) return [];

  result[level] === undefined && (result[level] = root.val);

  leftyNodes(root.left, level + 1, result);
  leftyNodes(root.right, level + 1, result);

  return result;
};

// // no hashmap iterative O(nodes) O(nodes)
// const leftyNodes = (root) => {
//   if (!root) return [];
//   const queue = [[root, 0]]
//   const result = [];

//   while (queue.length > 0) {
//     const [current, level] = queue.shift();
//     result[level] === undefined && (result[level] = current.val);

//     current.left && queue.push([current.left, level + 1])
//     current.right && queue.push([current.right, level + 1])
//   }

//   return result;
// };

// // iterative O(nodes) O(nodes)
// const leftyNodes = (root) => {
//   if (!root) return [];
//   const queue = [[root, 0]]
//   const map = {};
//   let lastLvl = 0;

//   while (queue.length > 0) {
//     const [current, level] = queue.shift();
//     lastLvl = level;
//     map[level] === undefined && (map[level] = []);
//     map[level].push(current.val);

//     current.left && queue.push([current.left, level + 1])
//     current.right && queue.push([current.right, level + 1])
//   }

//   const result = [];
//   for (let level = 0; level <= lastLvl; level++) {
//     result.push(map[level][0]);
//   }

//   return result;
// };
