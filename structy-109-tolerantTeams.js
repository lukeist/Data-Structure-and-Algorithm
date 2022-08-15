// https://structy.net/problems/premium/tolerant-teams

// p: arr
// r: boolean

// dfs recursion
const tolerantTeams = (rivalries) => {
  const map = {};
  const graph = makeGraph(rivalries);

  for (const p in graph) {
    // if (p in map) continue;
    if (!(p in map) && !getTeam(graph, map, p, false)) return false;
  }

  return true;
};

const getTeam = (graph, map, p, team) => {
  if (p in map) return map[p] === team;

  map[p] = team;
  for (const p2 of graph[p]) {
    if (!getTeam(graph, map, p2, !team)) return false;
  }

  return true;
};

// // dfs iteration
// const tolerantTeams = (rivalries) => {
//   const graph = makeGraph(rivalries);
//   const map = {};

//   for (const p in graph) {
//     if (p in map) continue;

//     const stack = [[p, false]];

//     while (stack.length > 0) {
//       const [p1, team] = stack.pop();

//       if (p1 in map && map[p1] !== team) return false;
//       map[p1] = team;

//       for (const p2 of graph[p1]) {
//         if (!(p2 in map)) stack.push([p2, !team]);
//       }
//     }
//   }

//   return true;
// };

const makeGraph = (arr) => {
  const graph = {};

  for (const pair of arr) {
    const [p1, p2] = pair;

    graph[p1] === undefined && (graph[p1] = []);
    graph[p2] === undefined && (graph[p2] = []);
    graph[p1].push(p2);
    graph[p2].push(p1);
  }

  return graph;
};

console.log(
  tolerantTeams([
    ["philip", "seb"],
    ["raj", "nader"],
  ])
);
// -> true
// // philip : seb
// // seb :  philip
// // raj : nader
// // nader: raj
// // t1 => p, r
// // t2 => s, n

console.log(
  tolerantTeams([
    ["philip", "seb"], // !t1.includes(p1) && !t2.includes(p1) && t1.push(p1) && t2.push(p2)
    ["raj", "nader"], // t2.includes(p1) && t1.push(p2)
    ["raj", "philip"], // t1.includes(p1) && t2.push(p2)
    ["seb", "raj"],
  ])
);
// -> false
// philip : [seb, raj]
// seb : [philip, raj]
// raj : [philip, nader, seb]
// nader: [raj]
// t1 => p,
// t2 => s, r, n

// const tolerantTeams = (rivalries) => {
//     const graph = makeGraph(rivalries);
//     const visited = new Set();

//     const t1 = [];
//     const t2 = [];

//     //   for (const p in graph) {
//     //     const stack = [p];

//     //     if (visited.has(p)) continue;
//     //     visited.add(p);

//     //     while (stack.length > 0) {
//     //       const p1 = stack.pop();

//     //       //   !t1.includes(p1) && !t2.includes(p1) && t1.push(p1);
//     //       //   if (!t1.includes(p1) && t2.includes(p1)) continue;

//     //       for (const nei of p1) {
//     //         !visited.has(nei) && stack.push(nei);
//     //         // !t1.includes(nei) && !t2.includes(nei) && t2.push(nei);
//     //       }
//     //     }
//     //   }

//     return graph;
//   };
