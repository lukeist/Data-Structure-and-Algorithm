// recursion O(edges) O(nodes)
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    if (explore(graph, +node, visited)) count++;
  }

  return count;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);

  for (let nei of graph[node]) {
    explore(graph, nei, visited);
  }

  return true;
};

// const connectedComponentsCount = (graph) => {
//   const visited = new Set();
//   let count = 0;

//   for (let node in graph) {
//     if (visited.has(+node)) continue;

//     count++;
//     const stack = [node];

//     while (stack.length > 0) {
//       const current = stack.pop();

//       for (let nei of graph[current]) {
//         !visited.has(nei) && visited.add(nei) && stack.push(nei);
//       }
//     }
//   }

//   return count;
// };

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2)
