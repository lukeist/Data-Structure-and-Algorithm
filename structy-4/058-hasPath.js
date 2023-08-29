// p: obj, node, node;
// r: boolean
// e:
// {
// f: ['g', 'i'],
// g: ['h'],
// h: [],
// i: ['g', 'k'],
// j: ['i'],
// k: []
// }
// => true;
//  j -> i -> k
//      ^ \
//      |  v
//      f -> g -> h

// dfs
// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;

//   for (let nei of graph[src]) {
//     if (!!hasPath(graph, nei, dst)) return true;
//   }

//   return false;
// };

// bfs
const hasPath = (graph, src, dst) => {
  let stack = [src];

  while (stack.length > 0) {
    const c = stack.pop();
    if (c === dst) return true;

    for (let nei of graph[c]) {
      stack.push(nei);
    }
  }

  return false;
};
