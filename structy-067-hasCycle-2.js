// p: obj
// r: boolean
// e:

// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["a"],
// }); // -> true
// a -> b
//  ^   |
//  \  v
//      c

//      o    x    x    x
// a -> b -> d -> e -> f
//  ^   |
//  \  v
//     c o

const hasCycle = (graph) => {
  const visited = new Set();
  // traversal from each node and mark visited
  for (let node in graph) {
    if (explore(graph, node, visited)) return true;
  }

  return false;
};

const explore = (graph, node, visited, visiting = new Set()) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let nei of graph[node]) {
    if (explore(graph, nei, visited, visiting)) return true;
  }

  visited.add(node);
  return false;
};

console.log(
  hasCycle({
    a: ["b", "c"],
    b: [],
    c: [],
    e: ["f"],
    f: ["e"],
  })
); // -> true

// console.log(
//   hasCycle({
//     a: ["b", "c"],
//     b: ["c"],
//     c: ["d"],
//     d: [],
//   })
// ); // -> false
