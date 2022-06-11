// https://structy.net/problems/has-path

// p: 1 obj, 2 nodes
// r: boolean
// e:
// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPath(graph, 'f', 'k'); // true

// Recursion
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  //   if (graph[src].length === 0) {
  //     console.log(src, false);
  //     return false;
  //   }
  //   console.log(graph[src]);
  for (let value of graph[src]) {
    if (hasPath(graph, value, dst)) {
      return true;
    }
  }
  return false;
  //   return graph[src].forEach((v) => hasPath(graph, v, dst));
  //   console.log(false);
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
hasPath(graph, "f", "k"); // true

// const graph = {
//   f: ["g", "i"],
//   g: ["h"],
//   h: [],
//   i: ["g", "k"],
//   j: ["i"],
//   k: [],
// };

// hasPath(graph, "f", "j"); // false

// // DFS
// const hasPath = (graph, src, dst) => {
//     if (graph[src].length === 0) return false;
//     //   console.log(graph[src]);
//     const stack = [src];

//     while (stack.length > 0) {
//       const current = stack.pop();
//       if (current === dst) return true;

//       for (let value of graph[current]) {
//         stack.push(value);
//       }
//       // console.log(graph[current]);
//     }
//     console.log(false);
//     return false;
//   };

// // BFS
// const hasPath = (graph, src, dst) => {
//     if (graph[src].length === 0) return false;
//     const queue = [src];

//     while (queue.length > 0) {
//       const current = queue.shift();
//       if (current === dst) return true;
//       for (let value of graph[current]) {
//         queue.push(value);
//       }
//     }

//     return false;
//   };
