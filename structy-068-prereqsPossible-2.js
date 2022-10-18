// p: num, arr
// r: boolean
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
// ];
// prereqsPossible(numCourses, prereqs); // -> true
// x0 -> 1 x
//  |    |
//  v    v
//x 2 -> 3 x     4 -> 5

// const prereqs = [
//   [0, 1],                 o 0 -> 1 o
//   [2, 3],                  |^   |
//   [0, 2],                  v \  v
//   [1, 3],                  2 -> 3  o
//   [4, 5],
//   [3, 0],
// ];
// prereqsPossible(numCourses, prereqs); // -> false

// O(edges) O(nodes)
const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs);
  const visited = new Set();

  for (let node in graph) {
    if (explore(graph, node, visited)) return false;
  }

  return true;
};

const explore = (graph, node, visited, visiting = new Set()) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let nei of graph[node]) {
    if (explore(graph, nei, visited, visiting)) return true;
  }

  visited.add(node);
  return false;
};

const buildGraph = (nodes) => {
  const graph = {};

  for (let node of nodes) {
    const [a, b] = node;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);

    graph[a].push(b);
  }

  return graph;
};
