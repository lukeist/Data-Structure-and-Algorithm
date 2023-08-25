// p: array, node, node;
// r: boolean;
// e:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'j', 'm'); // -> true
//
// x
// i - j
// |
// k - m
// |
// l
//
// o - n

// j: [i]
// i: [j, k]
// k: [i, m, l]
// m: [k]
// l: [k]
//
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return explore(graph, nodeA, nodeB, new Set());
};

const explore = (graph, node, target, visited) => {
  if (node === target) return true;
  if (visited.has(node)) return false;
  visited.add(node);

  for (let nei of graph[node]) {
    if (!!explore(graph, nei, target, visited)) return true;
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let e of edges) {
    const [a, b] = e;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
