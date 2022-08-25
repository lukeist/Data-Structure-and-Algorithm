// https://structy.net/problems/premium/prereqs-possible

// p: num+, arr
// r: boolean

const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs);
  const visited = new Set();

  for (const node in graph) {
    if (checkCycle(graph, node, visited, new Set())) return false;
  }

  return true;
};

const checkCycle = (graph, node, visited, visiting) => {
  if (visited.has(+node)) return false;
  if (visiting.has(+node)) return true;
  visiting.add(+node);

  for (const nei of graph[+node]) {
    if (checkCycle(graph, nei, visited, visiting)) return true;
  }

  visiting.delete(+node);
  visited.add(+node);

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);

    graph[a].push(b);
    // graph[b].push(a); WRONG because only 1 WAY
  }

  return graph;
};

// { '0': [ 1, 2 ], '1': [ 3 ], '2': [ 3 ], '3': [], '4': [ 5 ], '5': [] }
// visited:   0 1 2 3
// visiting:  4 5
// 0 --> 1
// |     |
// 2 --> 3
// 4 --> 5
const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> true

// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
//   [3, 0],
// ];

// // 0 --> 1
// // |  \  |
// // 2 --> 3
// // 4 --> 5
// console.log(prereqsPossible(numCourses, prereqs)); // -> false
