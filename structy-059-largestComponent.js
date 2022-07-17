// p: adj list of undirected graph
// r: num
// e:

// // dfs recursion
const largestComponent = (graph) => {
  const visited = new Set();
  // let count = { max: 0 };
  let max = -Infinity;

  for (const current in graph) {
    let count = explore(graph, current, visited);
    max = Math.max(count, max);
  }

  return max;
};

const explore = (graph, current, visited) => {
  if (visited.has(current.toString())) return 0;

  visited.add(current.toString());

  size = 1;
  for (const neighbor of graph[current]) {
    size += explore(graph, neighbor, visited);
  }

  return size;
};

// // // dfs recursion
// const largestComponent = (graph) => {
//   const visited = new Set();
//   let count = { max: 0 };
//   let max = -Infinity;

//   for (const current in graph) {
//     // explore(graph, current, visited, count);
//     if (explore(graph, current, visited, count)) {
//       //   console.log(count);
//       max = Math.max(count["max"], max);
//       count["max"] = 0;
//     } else {
//       continue;
//     }

//     // console.log(current, explore(graph, current, visited));
//   }

//   return max;
// };

// const explore = (graph, current, visited, count) => {
//   if (visited.has(current.toString())) return false;

//   count["max"]++;
//   visited.add(current.toString());

//   console.log(count, current, visited);
//   //   count[node] = (count[node] || 0) + 1;

//   for (const neighbor of graph[current]) {
//     // console.log(neighbor, explore(graph, neighbor, visited), visited);
//     explore(graph, neighbor, visited, count);
//   }

//   return true;
// };

// // dfs recursion
// const largestComponent = (graph) => {
//   const visited = new Set();
//   let count = 0;

//   for (let node in graph) {
//     if (explore(graph, node, visited)) count++;
//   }

//   return count;
// };

// const explore = (graph, node, visited) => {
//   if (visited.has(node)) return false;

//   visited.add(node);

//   for (let neighbor of graph[node]) {
//     if (!visited.has(neighbor)) {
//       //   visited.add(neighbor);
//       // count[node] = (count[node] || 0) + 1;
//       //   count++;
//     }
//     if (explore(graph, neighbor, visited)) return true;
//     // count[node] = (count[node] || 0) + 1;
//   }

//   return false;
// };

// // dfs iteration
// const largestComponent = (graph) => { f brji;io=-po09u
//   if (Object.keys(graph).length === 0) return 0;

//   const visited = new Set();
//   const count = {};

//   for (let node in graph) {
//     // if (node in visited) continue;

//     if (!visited.has(node.toString())) {
//       const stack = [node];

//       while (stack.length > 0) {
//         const current = stack.pop();
//         // console.log(current);

//         for (let neighbor of graph[current]) {
//           if (!visited.has(neighbor.toString())) {
//             visited.add(neighbor.toString());
//             stack.push(neighbor.toString());

//             count[node] = (count[node] || 0) + 1;
//           }
//         }
//       }
//     }
//   }

//   let max = -Infinity;
//   for (let compo in count) {
//     max = Math.max(count[compo], max);
//   }

//   return max;
// };

// console.log(
//   largestComponent({
//     0: ["8", "1", "5"],
//     1: ["0"],
//     5: ["0", "8"],
//     8: ["0", "5"],
//     2: ["3", "4"],
//     3: ["2", "4"],
//     4: ["3", "2"],
//   })
// ); // -> 4

console.log(
  largestComponent({
    1: ["2"],
    2: ["1", "8"],
    6: ["7"],
    9: ["8"],
    7: ["6", "8"],
    8: ["9", "7", "2"],
  }) // -> 6
);

// // dfs iteration
// const largestComponent = (graph) => {
//     if (Object.keys(graph).length === 0) return 0;

//     const visited = new Set();
//     const count = {};

//     for (let node in graph) {
//       // if (node in visited) continue;

//       if (!visited.has(node.toString())) {
//         const stack = [node];

//         while (stack.length > 0) {
//           const current = stack.pop();
//           // console.log(current);

//           for (let neighbor of graph[current]) {
//             if (!visited.has(neighbor.toString())) {
//               visited.add(neighbor.toString());
//               stack.push(neighbor.toString());

//               count[node] = (count[node] || 0) + 1;
//             }
//           }
//         }
//       }
//     }

//     let max = -Infinity;
//     for (let compo in count) {
//       max = Math.max(count[compo], max);
//     }
//     return max;
//   };
