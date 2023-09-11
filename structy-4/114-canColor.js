// p: obj
// r: boolean;
// e:
// 1   2   1
// x - y - z
//

//   q 1
//  / \
// s - r 2
// 1

//  1    2
//  a - b
//  |   |
//  d - c 1
//  2

const canColor = (graph) => {
  const map = {};

  for (let node in graph) {
    if (!(node in map) && !explore(graph, node, map, true)) return false;
  }

  return true;
};

const explore = (graph, node, map, color) => {
  if (node in map) return map[node] === color;
  map[node] = color;

  for (let nei of graph[node]) {
    if (!explore(graph, nei, map, !color)) return false;
  }

  return true;
};

// const canColor = (graph) => {
//   const visited = new Set();

//   for (let node in graph) {
//     if (!explore(graph, node, visited)) return false
//   }

//   return true;
// };

// const explore = (graph, node, visited, map = {}, color = true) => {
//   if (node in visited) return true;
//   if (node in map) return map[node] === color;
//   visited.add(node);
//   map[node] = color;

//   for (let nei of graph[node]) {
//     if (!explore(graph, nei, visited, map, !color)) return false;
//   }

//   return true;
// }
