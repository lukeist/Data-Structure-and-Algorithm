// p: num, arr;
// r: num;
//
//                            5     4    3    2     1
// [4, 3],                  4 -> 3 -> 2 -> 1 -> 0
// [3, 2],                             \
// [2, 1],                              5 -> 6
// [1, 0],                              4
// [5, 2],
// [5, 6],
//

const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs);
  const memo = {};
  let max = 1;
  for (let node in graph) {
    max = Math.max(max, explore(graph, node, memo));
  }

  return max;
};

const explore = (graph, node, memo) => {
  if (node in memo) return memo[node];
  if (graph[node].length === 0) return 1;

  let max = 0;
  for (let nei of graph[node]) {
    max = Math.max(max, explore(graph, nei, memo));
  }

  memo[node] = max + 1;
  return max + 1;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let e of edges) {
    const [a, b] = e;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
  }

  return graph;
};
