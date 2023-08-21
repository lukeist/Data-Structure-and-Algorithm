// p: number, array;
// r: number;
// e:
// const prereqs = [
//   [1, 2],
//   [2, 4],
//   [3, 5],
//   [0, 5],
// ];
// -> 3

//  1 -> 2 -> 4
//  3 -> 5
//   0 /

// [4, 3],
// [3, 2],
// [2, 1],
// [1, 0],
// [5, 2],
// [5, 6],
//      x
// 4 -> 3 -> 2 -> 1 -> 0
//           |
//           5 -> 6
// => 5

// {
// 4: [3],
// 3: [2],
// 2: [1],
// 1: [0],
// 0: [],
// 5: [2,6]
// 6: [],
// }
const semestersRequired = (numCourses, prereqs) => {
  if (prereqs.length === 0) return 1;
  const graph = buildGraph(prereqs);
  const visited = {};
  let minRequired = 0;

  for (let node in graph) {
    minRequired = Math.max(minRequired, explore(graph, node, visited));
  }

  return minRequired;
};

const explore = (graph, node, visited) => {
  if (graph[node].length === 0) return 1;
  if (node in visited) return visited[node];
  let max = 0;
  for (let nei of graph[node]) {
    max = Math.max(max, explore(graph, nei, visited));
  }
  visited[node] = 1 + max;
  return 1 + max;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
  }

  return graph;
};
