/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// p: num int, array of arrays;
// r: boolean;
// e:
// [[0,1],[1,3][3,4],[2,3]]
// o    o    x    x
// 0 -> 1 -> 3 -> 4
//           |
//           2
//           x
//
// [[0,1],[1,3][3,4],[3,2],[2,0]]
//
// o    !    o     x
// 0 -> 1 -> 3 -> 4
//    \    /
//       2
//       o
//
//  5 -> 8
//
//

// {
//   0: [1],
//   1: [3],
//   3: [4,2],
//   4: [],
//   2: [0],
// }

var canFinish = function (numCourses, prerequisites) {
  const graph = buildGraph(prerequisites);
  const visited = new Set();

  for (let key in graph) {
    if (explore(graph, 0, visited)) return false;
  }

  return true;
};

const explore = (graph, node, visited, visiting = new Set()) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let nei of graph[node]) {
    if (explore(graph, nei, visited, visiting)) return true;
  }

  visited.add(node);
  return false;
};

const buildGraph = (array) => {
  const graph = {};
  for (let [a, b] of array) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
  }
  return graph;
};
