// p: arr of edges & 2 nodes
// r: num/-1

// bfs better
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = makeGraph(edges);

  const visited = new Set([nodeA]);

  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [current, distance] = queue.shift();

    if (current === nodeB) return distance;

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
        visited.add(neighbor);
      }
    }
  }

  return -1;
};

// // bfs
// const shortestPath = (edges, nodeA, nodeB) => {
//   const graph = makeGraph(edges);
//   const count = {};
//   count[nodeA] = 0;

//   const visited = new Set();
//   visited.add(nodeA);

//   const queue = [nodeA];

//   while (queue.length > 0) {
//     const current = queue.shift();

//     if (current === nodeB) return count[current];

//     for (const neighbor of graph[current]) {
//       if (!visited.has(neighbor)) {
//         count[neighbor] = count[current] + 1;
//         queue.push(neighbor);
//         visited.add(neighbor);
//       }
//     }

//     console.log(count, visited, queue);
//   }

//   return -1;
// };

const makeGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;

    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

// const edges = [
//   ["w", "x"],
//   ["x", "y"],
//   ["z", "y"],
//   ["z", "v"],
//   ["w", "v"],
// ];

// console.log(shortestPath(edges, "w", "z")); // -> 2
// console.log(shortestPath(edges, "y", "x")); // -> 1

// const edges = [
//   ["a", "c"],
//   ["a", "b"],
//   ["c", "b"],
//   ["c", "d"],
//   ["b", "d"],
//   ["e", "d"],
//   ["g", "f"],
// ];

// console.log(shortestPath(edges, "a", "e")); // -> 3

const edges = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

console.log(shortestPath(edges, "b", "g")); // -> -1
