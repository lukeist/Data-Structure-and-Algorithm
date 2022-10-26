// p: arr
// r: boolean
// e:
// tolerantTeams([
//   ['p', 's'],
//   ['r', 'n'],
//   ['r', 'p'],
//   ['s', 'r']
// ]); // -> false

// p1 - s2
// | /
// r 1
// |
// n 2

// stack r1 p1 n2 s2 p2
// map   p1 s2 r1

// recursive
const tolerantTeams = (rivalries) => {
  const graph = buildGraph(rivalries);
  const map = {};

  for (let person in graph) {
    if (!(person in map) && !checkTeam(graph, person, map)) return false;
  }

  return true;
};

const checkTeam = (graph, person, map, team = true) => {
  if (person in map) return map[person] === team;
  map[person] = team;

  for (let nei of graph[person]) {
    if (!checkTeam(graph, nei, map, !team)) return false;
  }

  return true;
};

// // iterative O(n^2) O(n)
// const tolerantTeams = (rivalries) => {
//   const graph = buildGraph(rivalries);
//   const map = {};

//   for (let node in graph) {
//     if (node in map) continue;

//     const stack = [[node, true]];
//     while (stack.length > 0) {
//       const [person, team] = stack.pop();

//       !(person in map) && (map[person] = team);
//       if (map[person] !== team) return false;

//       for (let nei of graph[person]) {
//         !(nei in map) && stack.push([nei, !team])
//       }
//     }
//   }

//   return true;
// };

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
