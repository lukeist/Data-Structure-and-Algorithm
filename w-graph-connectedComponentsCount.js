// https://structy.net/problems/connected-components-count

// p: adjacency list
// r: num of connected components
// e:

// connectedComponentsCount({
//     0: [8, 1, 5],
//     1: [0],
//     5: [0, 8],
//     8: [0, 5],
//     2: [3, 4],
//     3: [2, 4],
//     4: [3, 2]
//   }); // -> 2

// recursion:
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    if (travel(graph, node, visited)) count++;
  }
  console.log(count);
  return count;
};

const travel = (graph, current, visited) => {
  if (visited.has(current.toString())) return false;
  visited.add(current.toString());

  for (let neighbor of graph[current]) {
    travel(graph, neighbor, visited);
  }
  return true;
};

// // DFS
// const connectedComponentsCount = (graph) => {
//   const visited = new Set();
//   let count = 0;
//   const stack = [];

//   for (const node in graph) {
//     stack.push(node);
//   }
//   console.log(stack);

//   while (stack.length > 0) {
//     const current = stack.pop();
//     visited.add(current.toString());

//     for (const neighbor of graph[current]) {
//       !visited.has(neighbor.toString()) && stack.push(neighbor.toString());
//     }
//     // console.log(current);

//     // console.log(visited);
//   }

// };

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}); // -> 2
