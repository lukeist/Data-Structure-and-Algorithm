// https://structy.net/problems/premium/rare-routing

// p: num+ & arr
// r: boolean

// For example, given these roads:

// 0 --- 1
// | \
// |  \
// |   \
// 2    3

// There is a unique route for between every pair of cities.
// So the answer is true.

// For example, given these roads:

// 0 --- 1
// | \
// |  \
// |   \
// 2 -- 3

// 0
// 1 2 3
// 1 2 2 0

// There are two routes that can be used to travel from city 1 to city 2:
// - first route:  1, 0, 2
// - second route: 1, 0, 3, 2
// The answer is false, because routes should be unique.

// dfs recursion
const rareRouting = (n, roads) => {
  const graph = buildGraph(roads);
  const visited = new Set();

  //   if (!explore(graph, visited, 0, 0)) return false;
  //   if (visited.size !== n) return false;
  //   return true;

  return explore(graph, visited, 0, 0) && visited.size === n;
};

const explore = (graph, visited, preC, curC) => {
  if (visited.has(curC)) return false;
  visited.add(curC);

  for (const neiC of graph[curC]) {
    // if (neiC !== preC) {
    //   if (!explore(graph, visited, curC, neiC)) return false;
    // }
    if (neiC !== preC && !explore(graph, visited, curC, neiC)) return false;
  }

  return true;
};

// // dfs iteration
// const rareRouting = (n, roads) => {
//   const graph = buildGraph(roads);
//   const visited = new Set();

//   const stack = [[0, 0]];

//   while (stack.length > 0) {
//     const [curC, preC] = stack.pop();

//     if (visited.has(curC)) return false;
//     visited.add(curC);

//     for (const neiC of graph[curC]) {
//       !visited.has(neiC) && neiC !== preC && stack.push([neiC, curC]);
//     }
//   }

//   for (const c in graph) {
//     if (!visited.has(+c)) return false;
//   }

//   return true;
// };

// c [a]
// a [c]

const buildGraph = (roads) => {
  const graph = {};

  for (const road of roads) {
    const [a, b] = road;

    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(
  rareRouting(4, [
    [0, 1],
    [0, 2],
    [0, 3],
  ])
); // -> true

// {
// '0': [ 1, 2, 3 ],
// '1': [ 0 ],
// '2': [ 0 ],
// '3': [ 0 ]
// }

// console.log(
//   rareRouting(4, [
//     [0, 1],
//     [3, 2],
//   ])
// ); // -> false

console.log(
  rareRouting(4, [
    [0, 1],
    [0, 2],
    [0, 3],
    // [0, 4],
    [3, 2],
  ])
); // -> false
// // dfs iteration
// const rareRouting = (n, roads) => {
//   const graph = buildGraph(roads);
//   const map = {};

//   // check how many city groups
//   const visited = new Set();
//   let count = 0;
//   for (const c in graph) {
//     if (!visited.has(c)) count += explore(graph, c, visited);
//   }

//   if (count > 1) return false;

//   // if only 1 city group
//   for (const c in graph) {
//     if (c in map) continue;

//     const stack = [[c, 0]];

//     while (stack.length > 0) {
//       const [curC, distance] = stack.pop();

//       if (curC in map && map[curC] !== distance) return false;
//       map[curC] = distance;

//       for (const nexC of graph[curC]) {
//         if (!(nexC in map)) stack.push([nexC, distance + 1]);
//       }
//     }
//   }

//   return true;
// };

// console.log(
//   rareRouting(4, [
//     [0, 1],
//     [0, 3],
//     [0, 4],
//     [3, 2],
//     [4, 2],
//   ])
// ); // -> false

// // dfs recursion WRONG
// const rareRouting = (n, roads) => {
//     const graph = buildGraph(roads);
//     const map = {};

//     // check how many city groups
//     const visited = new Set();
//     let count = 0;
//     for (const c in graph) {
//       if (!visited.has(c)) count += explore(graph, c, visited);
//     }

//     if (count > 1) return false;

//     // if only 1 city group
//     for (const c in graph) {
//       if (!(c in map) && !checkRoute(graph, c, map, 0)) return false;
//     }

//     return true;
//   };

//   const explore = (graph, node, visited) => {
//     if (visited.has(node.toString())) return 0;
//     visited.add(node.toString());

//     for (const nei of graph[node]) {
//       explore(graph, nei, visited);
//     }
//     return 1;
//   };

//   const checkRoute = (graph, node, map, distance) => {
//     if (node in map) return map[node] === distance;

//     map[node] = distance;

//     for (const nei of graph[node]) {
//       if (!checkRoute(graph, nei, map, !distance)) return false;
//     }

//     return true;
//   };
