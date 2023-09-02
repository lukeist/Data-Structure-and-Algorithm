// p: number, array of arrays;
// r: boolean;
// e:
//
// 0 -> 1 x
// |    |
// v    v
// 2 -> 3 x
//
// 4 -> 5
//
//

const prereqsPossible = (numCourses, prereqs) => {
  const visited = new Set();
  const graph = buildGraph(prereqs);

  for (let node in graph) {
    if (!!explore(graph, node, visited)) return false;
  }

  return true;
};

const explore = (graph, node, visited, visiting = new Set()) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let nei of graph[node]) {
    if (!!explore(graph, nei, visited, visiting)) return true;
  }

  visited.add(node);
  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
  }
  return graph;
};

// {
// 0: [1, 2];
// 1: [3];
// 2: [];
// 3: [];
// 4: [5];
// 5: [];
// }
