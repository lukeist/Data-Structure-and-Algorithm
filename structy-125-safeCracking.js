// https://structy.net/problems/premium/safe-cracking

// p: arr
// r: str

const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  const map = {};

  // get map
  for (const node in graph) {
    !(node in map) && (map[node] = 0);

    for (const nei of graph[node]) {
      map[nei] = (map[nei] || 0) + 1;
    }
  }

  // find first num of combination
  const stack = [];
  for (const key in map) {
    map[key] === 0 && stack.push(key.toString());
  }

  // get combination:
  let combi = "";
  while (stack.length > 0) {
    const current = stack.pop();
    combi += current;

    for (const next of graph[current]) {
      map[next]--;
      map[next] === 0 && stack.push(next.toString());
    }
  }

  return graph;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    graph[a] === undefined && (graph[a] = []);
    graph[b] === undefined && (graph[b] = []);

    graph[a].push(b);
  }

  return combi;
};

console.log(
  safeCracking([
    [3, 1], //
    [4, 7], //
    [5, 9], //
    [4, 3], //
    [7, 3], //
    [3, 5], //
    [9, 1], //
  ])
); // -> '473591'
