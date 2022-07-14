// p: adj list of graph
// r: num

// bfs
const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();

  for (let node in graph) {
    // console.log(visited);
    if (!visited.has(node)) {
      const queue = [node];

      while (queue.length > 0) {
        let current = queue.shift();

        for (let neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
        console.log(queue);
      }
    }

    if (visited.has(node)) continue;
  }

  return count;
};

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
//         const queue = [node];

//         while (queue.length > 0) {
//           let current = queue.shift();
//           // console.log(graph[current]);

//           for (let neighbor of graph[current]) {
//             if (!visited.has(neighbor)) {
//               queue.push(neighbor);
//               visited.add(neighbor);
//               // console.log(neighbor);
//             }
//           }
//         }

//         //   console.log(queue, visited);
//         queue.length === 0 && count++;
//       }
//       console.log(visited);
//     }

//     return count;
//   };
