// https://structy.net/problems/undirected-path

// p: arr of edges, 2 nodes
// r: boolean

// dfs: recursion
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

// dfs recursion 2
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  return findPath(graph, nodeA, nodeB, visited);
};

const findPath = (graph, start, end, visited) => {
  if (start === end) return true;

  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);

      if (findPath(graph, neighbor, end, visited)) return true;
    }
  }
  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// // dfs recursion 1
// const undirectedPath = (edges, nodeA, nodeB, set = new Set()) => {
//   const graph = buildGraph(edges);

//   if (nodeA === nodeB) return true;

//   for (let neighbor of graph[nodeA]) {
//     console.log(neighbor);

//     if (!set.has(neighbor)) {
//       set.add(neighbor);
//       if (undirectedPath(edges, neighbor, nodeB, set)) return true;
//     }
//   }

//   return false;
// };

// {
//     i: [ 'j', 'k' ],
//     j: [ 'i' ],
//     k: [ 'i', 'm', 'l' ],
//     m: [ 'k' ],
//     l: [ 'k' ],
//     o: [ 'n' ],
//     n: [ 'o' ]
//   }

// console.log(undirectedPath(edges, "j", "m")); // -> true
console.log(undirectedPath(edges, "k", "o")); // -> false

// const buildGraph = (edges) => {
//     const graph = {};

//     // convert to graph:
//     for (let edge of edges) {
//       const [a, b] = edge;

//       !(a in graph) && (graph[a] = []);
//       !(b in graph) && (graph[b] = []);

//       graph[a].push(b);
//       graph[b].push(a);
//     }

//     return graph;
//   };

//   // bfs
//   const undirectedPath = (edges, nodeA, nodeB) => {
//     const graph = buildGraph(edges);
//     const queue = [nodeA];

//     const set = new Set();

//     while (queue.length > 0) {
//       const current = queue.shift();

//       for (let node of graph[current]) {
//         console.log(node);
//         if (node === nodeB) return true;

//         if (!set.has(node)) {
//           queue.push(node);
//           set.add(node);
//         }
//       }
//     }

//     return false;
//   };
