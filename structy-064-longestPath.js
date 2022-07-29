// https://structy.net/problems/premium/longest-path

// p: graph
// r: num+

// dfs: recursion: WITH MEMOIZATION
const longestPath = (graph) => {
  let max = -Infinity;
  const memo = {};

  for (const node in graph) {
    node in memo
      ? (max = Math.max(memo[node], max))
      : (max = Math.max(explore(graph, node, memo), max));
  }

  return max;
};

const explore = (graph, node, memo) => {
  if (graph[node].length === 0) return 0;

  let max = -Infinity;
  for (const neighbor of graph[node]) {
    max = Math.max(1 + explore(graph, neighbor, memo), max);
  }

  memo[node] = max;
  return memo[node];
};

// // dfs: recursion: WITHOUT MEMOIZATION
// const longestPath = (graph) => {
//   let max = -Infinity;

//   for (const node in graph) {
//     max = Math.max(explore(graph, node), max);
//   }

//   return max;
// };

// const explore = (graph, node) => {
//   if (graph[node].length === 0) return 0;

//   let max = -Infinity;
//   for (const neighbor of graph[node]) {
//     max = Math.max(1 + explore(graph, neighbor), max);
//   }
//   return max;
// };

// // bfs
// const longestPath = (graph) => {
//   let max = -Infinity;

//   for (let node in graph) {
//     const queue = [[node, 0]];

//     while (queue.length > 0) {
//       const [current, distance] = queue.shift();

//       for (const neighbor of graph[current]) {
//         queue.push([neighbor, distance + 1]);
//       }

//       max = Math.max(distance, max);
//     }
//   }

//   return max;
// };

// const longestPath = (graph) => {
//   const map = {};

//   let count = 0;

//   for (let node in graph) {
//     if (node in map) continue;

//     const stack = [node];

//     while (stack.length > 0) {
//       const current = stack.pop();

//       for (const neighbor of graph[current]) {
//         stack.push(neighbor);
//         // count++;
//         map[node] = (map[node] || 0) + 1;
//       }
//     }

//     // map[node] = Math.max(map[node] || -Infinity, count);
//   }
//   //   return count;
//   return map;
// };

const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
};
// -> 2
console.log(longestPath(graph));
