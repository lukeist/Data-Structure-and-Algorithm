// [[4,3,1],[3,2,4],[],[4],[]]
// => [[0,4],[0,3,4],[0,1,3,4],[0,1,4]]

//  4
// | \
// 0 - 1 - 2
// | /
// 3

var allPathsSourceTarget = function (array) {
  const graph = buildGraph(array);

  const dfs = (node) => {
    // if (graph[node].length === 0) return [[node]];
    if (node === array.length - 1) return [[node]];
    let result = [];

    for (let nei of graph[node]) {
      const arr = dfs(nei);
      for (let a of arr) {
        result.push([node, ...a]);
      }
    }
    return result;
  };

  return dfs(0);
};

const buildGraph = (array) => {
  const graph = {};
  for (let i = 0; i < array.length; i++) {
    graph[i] = array[i];
  }
  return graph;
};
