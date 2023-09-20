// p: object;
// r: array;
// e:
// a: ["f"],
// b: ["d"],
// c: ["a", "f"],
// d: ["e"],
// e: [],
// f: ["b", "e"],

//    a -> f -> b -> d
//    ^   ^ \      /
//    | /    v   v
//    c       e
// ['c', 'a', 'f', 'b', 'd', 'e']
//
// {
// a: 0,
// b: 1,
// c: 0,
// d: 1,
// e: 2,
// f: 0,
// }
//
// [f]
// [c,a]
const topologicalOrder = (graph) => {
  const parentCounts = {};

  for (let node in graph) {
    parentCounts[node] = 0;
  }

  for (let node in graph) {
    for (let nei of graph[node]) {
      parentCounts[nei]++;
    }
  }

  const stack = [];
  for (let key in parentCounts) {
    if (parentCounts[key] === 0) stack.push(key);
  }

  const result = [];
  while (stack.length > 0) {
    const c = stack.pop();
    result.push(c);
    for (let nei of graph[c]) {
      parentCounts[nei]--;
      if (parentCounts[nei] === 0) stack.push(nei);
    }
  }
  return result;
};
