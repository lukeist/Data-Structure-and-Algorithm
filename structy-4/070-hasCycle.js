// p: object;
// r: boolean;
// e:
// hasCycle({
//   a: ["b", "c"],
//   b: ["c"],
//   c: ["d"],
//   d: [],
// }); // -> false
//
//      o    o    x    x
// a -> b -> c -> d -> e
//            \ o
//             f
//      o    o
//      a -> b
//      | /
//      c
//      o

const hasCycle = (graph) => {
  const visited = new Set();

  for (let node in graph) {
    if (!!explore(graph, node, visited)) return true;
  }

  return false;
};

const explore = (graph, node, visited, visiting = new Set()) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let nei of graph[node]) {
    if (!!explore(graph, nei, visited, visiting)) return true;
  }

  visited.add(node);
  return false;
};
