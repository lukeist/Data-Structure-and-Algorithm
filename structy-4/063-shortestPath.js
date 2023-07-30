// p: array, node, node
// r: number
// e:
// ['w', 'x'],
// ['x', 'y'],
// ['z', 'y'],
// ['z', 'v'],
// ['w', 'v']
//
//   1   2
// w - x - y
// 1\      |
//    v - z
//      2
// {
// 'w': ['x', 'v'],
// 'x': ['w', 'y'],
// 'y': ['x', 'z'],
// 'z': ['y', 'v'],
// 'v': ['w', 'z']
// }
// bfs
// visited: w,x,v,y
// [[z,2],[y,2]]

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [[nodeA, 0]];

  while (!!queue.length) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    visited.add(node);

    for (let nei of graph[node]) {
      if (!visited.has(nei)) queue.push([nei, distance + 1]);
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let e of edges) {
    const [a, b] = e;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

module.exports = {
  shortestPath,
};
