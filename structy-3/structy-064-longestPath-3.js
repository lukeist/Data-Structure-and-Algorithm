// p: obj
// r: num;
// a -> c
// \ /
//  b
// q -> r -> s
//    /  \ /
//   u <-t

// O(e) O(n)
const longestPath = (graph) => {
  let max = -Infinity;
  const memo = {};
  for (let node in graph) {
    max = Math.max(max, explore(graph, node, memo));
  }

  return max;
};

const explore = (graph, node, memo) => {
  if (node in memo) return memo[node];
  if (graph[node].length === 0) return 0;
  let max = 0;
  for (let nei of graph[node]) {
    max = Math.max(max, explore(graph, nei, memo));
  }

  memo[node] = max + 1;
  return max + 1;
};
