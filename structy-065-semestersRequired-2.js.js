// p: num, arr
// r: num
// 1 -> 2 -> 4
// 3 -> 5
//      |
//      0

// [
//   [4, 3],
//   [3, 2],
//   [2, 1],
//   [1, 0],
//   [5, 2],
//   [5, 6],
// ];

// 4 -> 3 -> 2 -> 1 -> 0
//           |
//           5
//          |
//          6

// dfs recursive O(edges) O(nodes)
const semestersRequired = (numCourses, prereqs) => {
  if (prereqs.length === 0) return 1;
  const graph = buildGraph(prereqs);
  const sems = {};

  for (let c in graph) {
    graph[c].length === 0 && (sems[c] = 1);
  }

  for (let c in graph) {
    explore(graph, c, sems);
  }

  // console.log(graph);
  // console.log(sems);
  return Math.max(...Object.values(sems));
};

const explore = (graph, node, sems) => {
  if (node in sems) return sems[node];

  let max = -Infinity;
  for (let nei of graph[node]) {
    max = Math.max(max, explore(graph, nei, sems));
  }

  sems[node] = max + 1;
  return max + 1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);

    graph[a].push(b);
  }

  return graph;
};

// // iterative O(edges) O(nodes)
// const semestersRequired = (numCourses, prereqs) => {
//   if (prereqs.length === 0) return 1;

//   const graph = buildGraph(prereqs);
//   let max = -Infinity;

//   for (let c in graph) {
//     const stack = [[c, 1]];

//     while (stack.length > 0) {
//       const [node, sems] = stack.pop();
//       max = Math.max(max, sems);

//       for (let nei of graph[node]) {
//         stack.push([nei, sems + 1]);
//       }
//     }
//   }

//   return max;
// };

// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     !(a in graph) && (graph[a] = []);
//     !(b in graph) && (graph[b] = []);

//     graph[a].push(b);
//   }

//   return graph;
// };

///////////////////////////////////////////
// // dfs recursive O(edges) O(nodes)
// const semestersRequired = (numCourses, prereqs) => {
//   if (prereqs.length === 0) return 1;
//   const graph = buildGraph(prereqs);
//   let max = -Infinity;

//   for (let course in graph) {
//     max = Math.max(max, explore(graph, course));
//   }

//   return max;
// };

// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     !(a in graph) && (graph[a] = []);
//     !(b in graph) && (graph[b] = []);

//     graph[a].push(b);
//   }

//   return graph;
// };

// const explore = (graph, node, memo = {}) => {
//   if (node in memo) return memo[node];
//   if (graph[node].length === 0) return 1;

//   let count = 0;
//   for (let nei of graph[node]) {
//     count = 1 + explore(graph, nei, memo);
//   }

//   memo[node] = count;
//   return count;
// };

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];

// const numCourses = 7;
// const prereqs = [
//   [4, 3],
//   [3, 2],
//   [2, 1],
//   [1, 0],
//   [5, 2],
//   [5, 6],
// ]; // -> 5

// const numCourses = 5;
// const prereqs = [
//   [1, 0],
//   [3, 4],
//   [1, 2],
//   [3, 2],
// ]; // -> 2

//          1(1) -> 0(0)
//          |
//    3 -> 2(0)
//    |
//    4(0)

console.log(semestersRequired(numCourses, prereqs));
