// const depthFirstPrint = (graph, source) => {
//   const stack = [source];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     for (let direction of graph[current]) {
//       stack.push(direction);
//     }
//   }
// };

// // recursive: depth first - for each
// const depthFirstPrint = (graph, source) => {
//   console.log(source);
//   return graph[source].forEach((d) => depthFirstPrint(graph, d));
// };

// // recursive:
// const depthFirstPrint = (graph, source) => {
//   console.log(source);
//   for (let neighbor of graph[source]) {
//     depthFirstPrint(graph, neighbor);
//   }
// };

// breadth first:
const depthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstPrint(graph, "a");
