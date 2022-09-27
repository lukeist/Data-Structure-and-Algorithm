// p: arr, node, node,
// r: num

// w - x
// |   |
// v   y
//  \  |
//    z

// bfs O(edges) O(edges)
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  const queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [curNode, distance] = queue.shift();

    if (curNode === nodeB) return distance;
    visited.add(curNode);

    for (let nei of graph[curNode]) {
      if (!visited.has(nei)) queue.push([nei, distance + 1]);
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
