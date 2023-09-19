// p: array;
// r: boolean;
// e:
//                        x   x
//   ['philip', 'seb'],   p - s
//   ['raj', 'nader']     r - n
//  => true;
//                         1    2
// ['philip', 'seb'],      p - s
// ['raj', 'nader'],       | /
// ['raj', 'philip'],   1  r - n
// ['seb', 'raj']
//  -> false

const tolerantTeams = (rivalries) => {
  const graph = buildGraph(rivalries);
  const visited = {};
  for (let node in graph) {
    if (node in visited) continue;
    if (!explore(graph, node, visited, true)) return false;
  }

  return true;
};

const explore = (graph, node, visiting, team) => {
  if (node in visiting) return visiting[node] === team;
  visiting[node] = team;

  for (let nei of graph[node]) {
    if (!explore(graph, nei, visiting, !team)) return false;
  }

  return true;
};

// {
//   p: [s,r]
//   r: [n,p,s]
//   s: [r,p]
//   n: [r]
// }

//  1    2
//  c -  an
//  |    |
//  al - m - b
//  2    1   2
//

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    !(a in graph) && (graph[a] = []);
    !(b in graph) && (graph[b] = []);
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
