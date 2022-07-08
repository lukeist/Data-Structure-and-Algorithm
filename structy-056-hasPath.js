// https://structy.net/problems/has-path

// p: graph, 2 nodes
// r: boolean
// e:

// dfs recursion

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;
  }

  return false;
};

// // bfs
// const hasPath = (graph, src, dst) => {
//   const queue = [src];

//   while (queue.length > 0) {
//     let current = queue.shift();

//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }

//   return false;
// };

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph, "f", "k")); // true

// // dfs recursion
// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true;

//     for (let neighbor of graph[src]) {
//       if (hasPath(graph, neighbor, dst)) return true;
//     }
//     return false;
//   };

// // bfs too complicated
// const hasPath = (graph, src, dst) => {
//     const set = new Set();

//     const queue = [graph[src]];

//     while (queue.length > 0) {
//       let current = queue.shift();

//       for (let item of current) {
//         if (item === dst) return true;

//         if (!set.has(item)) {
//           queue.push(graph[item]);
//           set.add(item);
//         }
//       }

//       console.log(current);
//     }
//     return false;
//   };
