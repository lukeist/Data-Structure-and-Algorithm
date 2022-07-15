// p: adj list of graph
// r: num

// bfs
const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();

  for (let node in graph) {
    // console.log(node, visited);
    if (visited.has(node)) continue;

    if (!visited.has(node.toString())) {
      console.log(node);
      const stack = [node.toString()];

      while (stack.length > 0) {
        let current = stack.pop();

        for (let neighbor of graph[current]) {
          if (!visited.has(neighbor.toString())) {
            visited.add(neighbor.toString());
            stack.push(neighbor.toString());
          }
        }
      }

      count++;
      //   console.log(node, visited);
    }
    // if (visited.has(node)) continue;
  }

  return count;
};

//////////////////////
// // dfs recursion
// const connectedComponentsCount = (graph) => {
//     const visited = new Set();
//     let count = 0;

//     for (let node in graph) {
//       if (checkPath(graph, node, visited) === true) count++;
//     }
//     return count;
//   };

//   const checkPath = (graph, current, visited) => {
//     if (visited.has(current.toString())) return false;

//     visited.add(current.toString());

//     for (let neighbor of graph[current]) {
//       checkPath(graph, neighbor, visited);
//     }

//     return true;
//   };

console.log(
  connectedComponentsCount({
    1: [0],
    5: [0, 8],
    2: [3, 4],
    0: [8, 1, 5],
    8: [0, 5],
    3: [2, 4],
    4: [3, 2],
  }) // -> 2
);

// const connectedComponentsCount = (graph) => {
//     let count = 0;
//     let visited = new Set();

//     // loops thru all nodes
//     for (let node in graph) {
//       // loop  thru all nodes
//       if (!visited.has(node)) {
//         const stack = [node];

//         while (stack.length > 0) {
//           let current = stack.shift();
//           // console.log(graph[current]);

//           for (let neighbor of graph[current]) {
//             if (!visited.has(neighbor)) {
//               stack.push(neighbor);
//               visited.add(neighbor);
//               // console.log(neighbor);
//             }
//           }
//         }

//         //   console.log(stack, visited);
//         stack.length === 0 && count++;
//       }
//       console.log(visited);
//     }

//     return count;
//   };
