// p: num, arr
// r: boolean
// 0v --- 1v      // stack    2 3
// | \            // visited  1 0
// |  \
// |   \
// 2    3v
// -> true

//  0 --- 1       // stack    2
// | \            // visited  1 0 2
// |  \
// |   \
//2 --  3
// -> false

const rareRouting = (n, roads) => {
  const graph = buildGraph(roads);
  const visited = new Set();
  const validate = explore(graph, 0, visited);

  return validate && visited.size === n;
};

const explore = (graph, node, visited, lastNode = null) => {
  if (visited.has(+node)) return false;
  visited.add(+node);

  for (let nei of graph[node]) {
    if (+nei !== +lastNode && !explore(graph, +nei, visited, node))
      return false;
  }

  return true;
};

// iterative O(edges) O(nodes)
// const rareRouting = (n, roads) => {
//   const graph = buildGraph(roads);
//   const visitedCity = new Set();
//   let count = 0;
//   const visited = new Set();

//   for (let city in graph) {
//     if (explore(graph, +city, visitedCity)) {
//       count++;
//       console.log(count, city, visitedCity);
//     }
//     const stack = [city];

//     while (stack.length > 0) {
//       const curCity = stack.pop();

//       if (visited.has(+curCity)) return false;
//       visited.add(+curCity);

//       for (let nei of graph[curCity]) {
//         !visited.has(nei) && stack.push(nei);
//       }
//     }
//   }

//   return count > 1 ? false : true;
// };

// const explore = (graph, node, visited) => {
//   if (visited.has(+node)) return false;
//   visited.add(+node);

//   for (let nei of graph[node]) {
//     explore(graph, +nei, visited);
//   }

//   return true;
// };

// const buildGraph = (roads) => {
//   const graph = {};

//   for (let r of roads) {
//     const [a, b] = r;

//     !(a in graph) && (graph[a] = []);
//     !(b in graph) && (graph[b] = []);
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   return graph;
// };

console.log(
  rareRouting(4, [
    [0, 1],
    [0, 2],
    [0, 3],
  ])
); // -> true

// console.log(
//   rareRouting(4, [
//     [0, 1],
//     [3, 2],
//   ])
// ); // -> false
