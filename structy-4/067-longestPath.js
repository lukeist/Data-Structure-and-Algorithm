// p: obj.
// r: number
// e:
// a: ['c', 'b'],
// b: ['c'],
// c: [],
// q: ['r'],
// r: ['s', 'u', 't'],
// s: ['t'],
// t: ['u'],
// u: []

//
//      a -> c
//      |   ^
//      V  /
//       b
//
//    x
//    u <-  t x
//    ^    ^  ^
//      \  |   \
//    q -> r -> s x
//
//

const longestPath = (graph) => {
  let memo = {};
  let max = 0;

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
