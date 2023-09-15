// p: number, array
// r: boolean;
// e:
//
//  o    x
// 0 --- 1
// | \
// |  \
// | x  \ x
// 2    3
//
// 4 -- 5
//
// true
//
// o
// 0 --- 1
// | \
// |  \
// |   \
// 2 -- 3 x
// x
// false
//

// { 0: [1,2,3],
//   1: [0],
//   2: [0],
//   3: [0],
// }

const rareRouting = (n, roads) => {
  const graph = buildGraph(roads);
  const visited = new Set();

  // for (let node in graph) {
  //   if (visited.has(node)) continue;
  //   if (!explore(graph, node, null, visited)) return false;
  // }

  if (!explore(graph, "0", null, visited)) return false;

  return visited.size === n;
};

const explore = (graph, node, last, visited, visiting = new Set()) => {
  if (visiting.has(node)) return false;
  visiting.add(node);

  for (let nei of graph[node]) {
    if (nei === last) continue;
    if (!explore(graph, nei, node, visited, visiting)) return false;
  }

  visited.add(node);
  return true;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b.toString());
    graph[b].push(a.toString());
  }
  return graph;
};
