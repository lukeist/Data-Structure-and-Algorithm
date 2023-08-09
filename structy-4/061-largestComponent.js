// p: obj;
// r: number
// e:

// largestComponent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2']
// }); // -> 4
//    x   x    x
//    1 - 0 - 8
//        | /
//        5 x
//
//    2 - 3
//      \ |
//       4

const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;

  for (let node in graph) {
    largest = Math.max(largest, explore(graph, node, visited));
  }

  return largest;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let count = 1;

  for (let nei of graph[node]) {
    count += explore(graph, nei, visited);
  }

  return count;
};
