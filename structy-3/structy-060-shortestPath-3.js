// p: arr
// r: num;
//
// w - x - y
//  \      |
//    v -  z
//
//

// const shortestPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   const stack = [ [nodeA, 0] ];
//   // let last = null;
//   const visited = new Set([nodeA]);
//   while (stack.length > 0) {
//     const [c, d] = stack.pop();
//     if (c === nodeB) return d;

//     for (let nei of graph[c]) {
//       !visited.has(nei) && visited.add(nei) && stack.push([nei, d + 1]);
//     }
//   }

//   return -1;
// };

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return sp(graph, nodeA, nodeB, new Set());
};

const sp = (graph, a, b, visited) => {
  if (a === b) return 0;
  if (visited.has(a)) return Infinity;
  visited.add(a);

  let min = Infinity;
  for (let nei of graph[a]) {
    min = Math.min(min, sp(graph, nei, b, visited));
  }

  return min + 1;
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

const edges = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

// a - c
// \ / \
// b - d  - e
//

console.log(shortestPath(edges, "a", "e")); // -> 3
