// recursion O(edges) O(nodes)
const largestComponent = (graph) => {
  const visited = new Set();
  let max = 0;

  for (let node in graph) {
    max = Math.max(max, explore(graph, node, visited));
  }

  return max;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);

  count = 1;

  for (let nei of graph[node]) {
    count += explore(graph, nei, visited);
  }

  return count;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
); // -> 4
