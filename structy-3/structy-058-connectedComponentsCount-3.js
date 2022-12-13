const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (visited.has(node)) continue;
    visited.add(node);
    count++;
    console.log(visited);
    const stack = [node];
    while (stack.length > 0) {
      const c = stack.pop();
      for (let nei of graph[c]) {
        !visited.has(nei.toString()) &&
          visited.add(nei.toString()) &&
          stack.push(nei.toString());
      }
    }
  }
  return count;
};

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
); // -> 2
