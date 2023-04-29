// p: root of bi tree;
// r: array
// bfs recu:

var levelOrder = function (root) {
  if (!root) return [];
  const result = [];

  const dfs = (root, level) => {
    if (!root) return;

    if (result[level] === undefined) result[level] = [];
    result[level].push(root.val);
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  };

  dfs(root, 0);

  return result;
};

// var levelOrder = function(root) {
//     if (!root) return [];
//     const queue = [[root, 0]];
//     const result = [];

//     while (queue.length > 0) {
//         const [c, level] = queue.shift();
//         if (result[level] === undefined) result[level] = [];
//         result[level].push(c.val);

//         c.left && queue.push([c.left, level + 1]);
//         c.right && queue.push([c.right, level + 1]);
//     }

//     return result;
// };
