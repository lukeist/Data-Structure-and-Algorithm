// https://structy.net/problems/premium/longest-path

// p: graph
// r: num+

// bfs
const longestPath = (graph) => {
  let max = -Infinity;

  for (let node in graph) {
    let distance = 0;
    const queue = [[node, distance]];

    while (queue.length > 0) {
      const [current, distance] = queue.shift();

      for (const neighbor of graph[current]) {
        queue.push([neighbor, distance + 1]);
      }
      max = Math.max(distance, max);
    }
  }

  return max;
};

// const longestPath = (graph) => {
//   const map = {};

//   let count = 0;

//   for (let node in graph) {
//     if (node in map) continue;

//     const stack = [node];

//     while (stack.length > 0) {
//       const current = stack.pop();

//       for (const neighbor of graph[current]) {
//         stack.push(neighbor);
//         // count++;
//         map[node] = (map[node] || 0) + 1;
//       }
//     }

//     // map[node] = Math.max(map[node] || -Infinity, count);
//   }
//   //   return count;
//   return map;
// };

const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
};
// -> 2
console.log(longestPath(graph));
