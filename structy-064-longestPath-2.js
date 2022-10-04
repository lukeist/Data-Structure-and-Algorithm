// p: graph
// r: num

// a -> c
// | /
// b
//
//
// q -> r ->  s
//      |\    |
//      v  v  v
//      u <- t

// bfs iterative O(edges) O(nodes)
const longestPath = (graph) => {
  let max = -Infinity;

  for (let node in graph) {
    const stack = [[node, 0]];

    while (stack.length > 0) {
      const [current, distance] = stack.shift();

      max = Math.max(distance, max);

      for (let nei of graph[current]) {
        graph[current].length > 0 && stack.push([nei, distance + 1]);
      }
    }
  }

  return max;
};

// dfs recursive O(edges) O(nodes)
// const longestPath = (graph) => {
//   const distance = {};

//   for (let node in graph) {
//     graph[node].length === 0 && (distance[node] = 0);
//   }

//   for (let node in graph) {
//     explore(graph, node, distance);
//   }

//   return Math.max(...Object.values(distance));
// };

// const explore = (graph, node, distance) => {
//   if (node in distance) return distance[node];

//   let max = -Infinity;
//   for (let nei of graph[node]) {
//     max = Math.max(max, explore(graph, nei, distance));
//   }

//   distance[node] = max + 1;
//   return max + 1;
// };

//////////////////////////////////////////////////////////////
// const longestPath = (graph) => {
//   const distance = {};

//   for (let node in graph) {
//     graph[node].length === 0 && (distance[node] = 0);
//   }

//   for (let node in graph) {
//     explore(graph, node, distance);
//   }

//   //   let max = -Infinity;
//   //   for (let node in distance) {
//   //     max = Math.max(max, distance[node]);
//   //   }
//   //   return max;
//   return Math.max(...Object.values(distance));
// };

// const explore = (graph, node, distance) => {
//   if (node in distance) return distance[node];

//   let max = -Infinity;
//   for (let nei of graph[node]) {
//     max = Math.max(max, explore(graph, nei, distance));
//   }

//   distance[node] = max + 1;
//   return max + 1;
// };

// // WRONG
// const longestPath = (graph) => {
//   let max = -Infinity;
//   for (let node in graph) {
//     console.log(node, explore(graph, node));
//     max = Math.max(max, explore(graph, node));
//   }

//   return max;
// };

// const explore = (graph, node) => {
//   if (graph[node].length === 0) return 1;

//   let count = 0;
//   for (let nei of graph[node]) {
//     count += explore(graph, nei);
//   }

//   return count;
// };

// const graph = {
//   a: ["c", "b"],
//   b: ["c"],
//   c: [],
// };

const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
  q: ["r"],
  r: ["s", "u", "t"],
  s: ["t"],
  t: ["u"],
  u: [],
};

console.log(longestPath(graph));
