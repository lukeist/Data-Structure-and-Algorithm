// p: arr
// r: boolean
//
//                        t     f
//   ['philip', 'seb'],   p - s
//   ['raj', 'nader']     r - n
//

// ['philip', 'seb'],           t    f
// ['raj', 'nader'],            p - s
// ['raj', 'philip'],           | /
// ['seb', 'raj']             t r - n

const tolerantTeams = (rivalries) => {
  const visited = {};
  const graph = buildGraph(rivalries);

  for (let node in graph) {
    if (node in visited) continue;
    if (!explore(graph, node, visited, true)) return false;
  }

  return true;
};

const explore = (graph, node, visited, team) => {
  if (node in visited) return visited[node] === team;
  visited[node] = team;

  for (let nei of graph[node]) {
    if (!explore(graph, nei, visited, !team)) return false;
  }

  return true;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let e of edges) {
    const [a, b] = e;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
