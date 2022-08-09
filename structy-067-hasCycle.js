// https://structy.net/problems/premium/has-cycle

// p: obj (graph)
// r: boolean
const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();

  for (const node in graph) {
    if (cycleDetect(graph, node, visited, visiting)) return true;
  }

  return false;
};

const cycleDetect = (graph, node, visited, visiting) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (const nei of graph[node]) {
    if (cycleDetect(graph, nei, visited, visiting)) {
      return true;
    }
  }

  visited.add(nei);
  visiting.remove(nei);

  return false;
};

// iteration NOT WORKING
// const hasCycle = (graph) => {
//   const visited = new Set();

//   for (const node in graph) {
//     if (visited.has(node)) continue;

//     const stack = [node];

//     const visiting = new Set();
//     visiting.add(node);

//     while (stack.length > 0) {
//       const current = stack.pop();

//       for (const nei of graph[current]) {
//         if (visiting.has(nei) && !visited.has(nei)) return true;
//         visiting.add(nei);
//         stack.push(nei);

//         if (graph[nei].length === 0) visited.add(nei);
//       }
//     }
//   }

//   return false;
// };

console.log(
  hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
  })
);
// // -> true

console.log(
  hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: [],
  })
);
// -> false
