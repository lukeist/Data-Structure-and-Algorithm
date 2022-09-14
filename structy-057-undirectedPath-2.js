// p: arr, node, node
// r: boolean

// // dfs recursion O(edges) O(nodes)
const undirectedPath = (edges, nodeA, nodeB, visited = new Set()) => {
  if (visited.has(nodeA)) return false;
  visited.add(nodeA);
  if (nodeA === nodeB) return true;

  const graph = buildGraph(edges);

  for (let nei of graph[nodeA]) {
    if (undirectedPath(edges, nei, nodeB, visited)) return true;
  }

  return false;
};

// // dfs recursion O(edges) O(nodes)
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   const visited = new Set();

//   return isPath(graph, nodeA, nodeB, visited);
// };

// const isPath = (graph, nodeA, nodeB, visited) => {
//   // if (nodeA !== nodeB) return false;
//   if (nodeA === nodeB) return true;
//   if (visited.has(nodeA)) return false;
//   visited.add(nodeA);

//   for (let nei of graph[nodeA]) {
//     if (isPath(graph, nei, nodeB, visited)) return true;
//   }

//   return false;
// }

/////////////////////////////////////////////
/////////////////////////////////////////////
// // dfs iteration O(edges) O(nodes)
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const stack = [nodeA];
//   const visited = new Set();
//   const graph = buildGraph(edges);

//   while (stack.length > 0) {
//     const current = stack.pop();
//     visited.add(current);

//     if (current === nodeB) return true;

//     for (let nei of graph[current]) {
//       !visited.has(nei) && stack.push(nei);
//     }
//   }

//   return false;
// };

// i - j
// |
// k - m
// |
// l
// o - n

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

// module.exports = {
//   undirectedPath,
// };
