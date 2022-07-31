// https://structy.net/problems/premium/semesters-required

// p: num+ & list
// r: num (min of semesters)

// dfs recursion
const semestersRequired = (numCourses, prereqs) => {
  if (prereqs.length === 0) return 1;

  const graph = graphConverter(prereqs);
  const memo = {};
  let max = -Infinity;

  for (let node in graph) {
    max = Math.max(max, explore(graph, node, memo));
  }

  return max;
};

const explore = (graph, node, memo) => {
  if (graph[node].length === 0) return 1;

  if (node in memo) return memo[node];

  let max = -Infinity;

  for (let neighbor of graph[node]) {
    count += explore(graph, neighbor, memo);
    max = Math.max(count, max);
  }

  memo[node] = max;
  return max;
};
//{ '0': [], '1': [ 0, 2 ], '2': [], '3': [ 4, 2 ], '4': [] }

// // dfs recursion WRONG
// const semestersRequired = (numCourses, prereqs) => {
//   if (prereqs.length === 0) return 1;

//   const graph = graphConverter(prereqs);
//   let max = -Infinity;

//   for (const node in graph) {
//     max = explore(graph, node, max);
//   }

//   return max;
// };

// const explore = (graph, node, max) => {
//   if (graph[node].length === 0) return 1;
//   let count = 1;

//   for (const neighbor of graph[node]) {
//     count += explore(graph, neighbor, max);
//     // console.log(count);
//     max = Math.max(max, count);
//   }

//   return max;
// };
// { '0': [ 5 ], '1': [ 2 ], '2': [ 4 ], '3': [ 5 ], '4': [], '5': [] }

// // bfs iteration
// const semestersRequired = (numCourses, prereqs) => {
//   if (prereqs.length === 0) return 1;
//   const graph = graphConverter(prereqs);

//   //   const visited = new Set();
//   let max = -Infinity;

//   for (const node in graph) {
//     const stack = [[node, 1]];

//     while (stack.length > 0) {
//       const [neighbor, sem] = stack.pop();

//       max = Math.max(max, sem);

//       for (const neighbor of graph[neighbor]) {
//         const curToNei = neighbor + "," + neighbor;

//         // if (visited.has(curToNei)) continue;
//         // visited.add(curToNei);

//         stack.push([neighbor, sem + 1]);

//         console.log(neighbor, neighbor, sem);
//       }
//     }
//     console.log("---");
//   }

//   return max;
// };
const graphConverter = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;

    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);

    graph[a].push(b);
  }

  return graph;
};

// const numCourses = 6;
// const prereqs = [
//   [1, 2],
//   [2, 4],
//   [3, 5],
//   [0, 5],
// ]; // -> 3

// const numCourses = 3;
// const prereqs = [
//   [0, 2],
//   [0, 1],
//   [1, 2],
// ]; // -> 3

// const numCourses = 7;
// const prereqs = [
//   [4, 3],
//   [3, 2],
//   [2, 1],
//   [1, 0],
//   [5, 2],
//   [5, 6],
// ]; // -> 5

const numCourses = 5;
const prereqs = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
]; // -> 2
console.log(semestersRequired(numCourses, prereqs)); // -> 3
