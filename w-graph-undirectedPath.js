// https://structy.net/problems/undirected-path

// p: array of edges & 2 nodes
// r: boolean
// e:

// recursion
const undirectedPath = (edges, nodeA, nodeB) => {
  const adjList = adjacencyList(edges);
  return hasPath(adjList, nodeA, nodeB, new Set());
};

//// recursion: convert edge list to adjacency list
const adjacencyList = (edges) => {
  const adjList = {};
  for (let edge of edges) {
    const [a, b] = edge;

    !(a in adjList) && (adjList[a] = []);
    !(b in adjList) && (adjList[b] = []);

    adjList[a].push(b);
    adjList[b].push(a);
  }
  return adjList;
};

//// recursion: recursive function to find path
const hasPath = (adjList, begin, end, visited) => {
  if (begin === end) return true;
  if (visited.has(begin)) return false;

  visited.add(begin);

  for (let neighbor of adjList[begin]) {
    if (hasPath(adjList, neighbor, end, visited)) return true;
  }
  console.log(false);
  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// const list = {
//   i: ["j", "k"],
//   j: ["i"],
//   k: ["i", "m", "l"],
//   m: ["k"],
//   l: ["k"],
//   o: ["n"],
//   n: ["o"],
// };

// hasPath(list, "m", "j");
undirectedPath(edges, "j", "m"); // -> true
// undirectedPath(edges, "m", "j"); // -> true
// undirectedPath(edges, "o", "j"); // -> true

// // DFS
// const undirectedPath = (edges, nodeA, nodeB) => {
//     //   convert edge list to adjacency list
//     const map = {};
//     for (let edge of edges) {
//       // map[edge[0]] === undefined && (map[edge[0]] = []);
//       // map[edge[1]] === undefined && (map[edge[1]] = []);
//       const [a, b] = edge;

//       !(a in map) && (map[a] = []);
//       !(b in map) && (map[b] = []);

//       map[a].push(b);
//       map[b].push(a);
//       // console.log(a, b, edge, map);
//     }

//     const stack = [nodeA];
//     const visited = new Set();

//     while (stack.length > 0) {
//       let current = stack.pop();

//       for (let value of map[current]) {
//         //   console.log(value);
//         if (value === nodeB) {
//           console.log(true);
//           return true;
//         } else {
//           !visited.has(value) && stack.push(value);
//           visited.add(value);
//           console.log(map, value);
//         }
//       }
//     }
//     console.log(false);
//     return false;
//   };
