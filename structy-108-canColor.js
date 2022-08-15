// https://structy.net/problems/premium/can-color

// p: obj
// r: boolean

// e:
// x-y-z => true
// b r b
// r b r

// q
// / \
// s - r  => false

// dfs all recursion BETTER
const canColor = (graph) => {
  const map = {};

  for (let node in graph) {
    if (!(node in map) && !explore(graph, node, map, false)) return false;
  }

  return true;
};

const explore = (graph, node, map, color) => {
  console.log(map, node, c, color);

  if (node in map) return map[node] === color;

  map[node] = color;

  for (const nei of graph[node]) {
    if (!explore(graph, nei, map, !color)) return false;
  }

  return true;
};

//////////////////////////////////
// // dfs all recursion
// const canColor = (graph) => {
//   const map = {};

//   //////////////////////////////////
//   const explore = (graph, node, c) => {
//     const color = c % 2;
//     console.log(map, node, c, color);
//     // if (node in map && map[node] === color) return true;
//     // if (node in map && map[node] !== color) return false;

//     if (node in map) return map[node] === color;

//     map[node] = color;

//     for (const nei of graph[node]) {
//       if (!explore(graph, nei, c + 1)) return false;
//     }

//     return true;
//   };

//   //////////////////////////////////
//   for (let node in graph) {
//     if (node in map) continue;
//     if (!explore(graph, node, 0)) return false;
//   }

//   return true;
// };

// // dfs all iteration GOOD
// const canColor = (graph) => {
//   const map = {};

//   for (let node in graph) {
//     const stack = [[node, 1]];

//     if (node in map) continue;

//     while (stack.length > 0) {
//       const [current, c] = stack.pop();
//       const color = c % 2;

//       if (node in map && map[current] !== color) return false;
//       if (node in map && map[current] === color) continue;
//       map[current] = color;

//       for (const nei of graph[current]) {
//         stack.push([nei, c + 1]);
//       }
//     }
//   }

//   return true;
// };

// // dfs all iteration BAD
// const canColor = (graph) => {
//   const map = {};
//   const visited = new Set();

//   for (let node in graph) {
//     const stack = [[node, 1]];

//     if (visited.has(node)) continue;

//     while (stack.length > 0) {
//       const [current, c] = stack.pop();
//       const color = c % 2;

//       if (visited.has(current)) {
//         if (map[current] !== color) return false;
//         continue;
//       } else {
//         visited.add(current);
//         map[current] = color;
//       }

//       for (const nei of graph[current]) {
//         stack.push([nei, c + 1]);
//       }
//     }
//   }

//   return true;
// };

//
console.log(
  canColor({
    x: ["y"],
    y: ["x", "z"],
    z: ["y"],
  }) // -> true
);

console.log(
  canColor({
    q: ["r", "s"],
    r: ["q", "s"],
    s: ["r", "q"],
  }) // -> true
);
