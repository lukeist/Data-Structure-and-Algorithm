// https://structy.net/problems/premium/topological-order

// p: graph
// r: arr

const topologicalOrder = (graph) => {
  const map = {};

  for (const node in graph) {
    !(node in map) && (map[node] = 0);

    for (const child of graph[node]) {
      map[child] = (map[child] || 0) + 1;
    }
  }

  const stack = [];
  for (const key in map) {
    map[key] === 0 && stack.push(key);
  }

  const arr = [];
  while (stack.length > 0) {
    const current = stack.pop();
    arr.push(current);

    for (const child of graph[current]) {
      map[child]--;
      map[child] === 0 && stack.push(child);
    }
  }
  return arr;
};
// c a
console.log(
  topologicalOrder({
    a: ["f"],
    b: ["d"],
    c: ["a", "f"],
    d: ["e"],
    e: [],
    f: ["b", "e"],
  })
);

// a
// f        [a]
// b e      [a f]
// b        [a f e]
// d        [a f e b]
// e        [a f e b d]
// -        [a f e b d e]

// -> ['c', 'a', 'f', 'b', 'd', 'e']

// d        [a f e brtw\gbgrszhycdsexfcvg5rtn4 ]

// WRONG
// const topologicalOrder = (graph) => {
//     //   const
//     const arr = [];
//     const temp = {};

//     for (const key in graph) {
//       if (isParent(graph, key)) {
//         console.log(key);
//         arr.push(key);
//       } else {
//         temp[key] = graph[key];
//       }
//     }

//     return temp;
//   };

//   const isParent = (graph, key) => {
//     for (const child in graph) {
//       if (graph[child].includes(key)) return false;
//     }
//     return true;
//   };
