// p: obj, node, node
// r: boolean

// recursion dfs O(n) O(n):
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let nei of graph[src]) {
    if (hasPath(graph, nei, dst)) return true;
  }

  return false;
};

// // iteration dfs O(n) O(n):
// const hasPath = (graph, src, dst) => {
//   const stack = [src]

//   while (stack.length > 0) {
//     const current = stack.pop();

//     if (current === dst) return true;

//     for (let nei of graph[current]) {
//       stack.push(nei);
//     }
//   }

//   return false;
// };

module.exports = {
  hasPath,
};
