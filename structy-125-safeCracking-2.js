// p: arr
// r: num

//  7 -> 1
//   \  |
//     8
//
// ready 3
//
// result 4 7
//      7
//   /  |
// 4 -> 3 -> 1
//      |    |
//      5 -> 9
// 4 7 3 5 9 1
// 0 1 2 1 1 2
const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  console.log(graph);
  const map = {};

  for (let node in graph) {
    map[node] = 0;
  }

  for (let node in graph) {
    for (let nei of graph[node]) {
      map[nei]++;
    }
  }

  const ready = [];
  for (let node in map) {
    if (map[node] === 0) ready.push(node);
  }

  const result = [];
  while (ready.length > 0) {
    const current = ready.pop();
    result.push(current);

    for (let nei of graph[current]) {
      map[nei]--;
      map[nei] === 0 && ready.push(nei);
    }
  }

  return result.join("");
};

const buildGraph = (hints) => {
  const graph = {};
  for (let hint of hints) {
    const [a, b] = hint;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
  }

  return graph;
};

//   module.exports = {
//     safeCracking,
//   };

console.log(
  safeCracking([
    [7, 1],
    [1, 8],
    [7, 8],
  ])
); // -> '718'
