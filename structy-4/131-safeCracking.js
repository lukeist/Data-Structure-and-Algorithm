// p: array;
// r: string;
// e:
// [3, 1],
// [4, 7],
// [5, 9],
// [4, 3],
// [7, 3],
// [3, 5],
// [9, 1],
//
//           o          o
// =>  4 ->  3 -> 1 <- 9
//     |  ^    \     ^
//    v /       v   /
//    7          5
//               o
// 473591
//
// {
//  3: [1,5];
//  4: [7,3];
//  5: [9];
//  7: [3];
//  9: [1];
//  1: [];
// }
//
// parents:
// { '1': 2, '3': 2, '4': 0, '5': 1, '7': 1, '9': 1 }
// { '1': 1, '3': 0, '4': 0, '5': 0, '7': 0, '9': 1 }
//
// [5
// 473

const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  console.log(
    "🚀 ~ file: 131-safeCracking.js:38 ~ safeCracking ~ graph:",
    graph
  );

  const parentsCount = {};
  for (let node in graph) {
    parentsCount[node] = 0;
  }
  for (let hint of hints) {
    const [_, h] = hint;
    parentsCount[h]++;
  }

  let s = "";
  let stack = [];
  for (let c in parentsCount) {
    if (parentsCount[c] === 0) stack.push(c);
  }

  while (stack.length > 0) {
    const c = stack.pop();
    s += c;

    for (let nei of graph[c]) {
      parentsCount[nei]--;
      if (parentsCount[nei] === 0) stack.push(nei);
    }
  }
  return s;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b.toString());
  }
  return graph;
};

console.log(
  safeCracking([
    [3, 1],
    [4, 7],
    [5, 9],
    [4, 3],
    [7, 3],
    [3, 5],
    [9, 1],
  ])
); // -> '473591'
