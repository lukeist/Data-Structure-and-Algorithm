// p: obj
// r: boolean

//   t a -> b f
//     |    |
//   f d <- c t

//   t x -> y f
//      \  |
//        z  t

//2 x <-> y 1
//     ||
//    2 z

// // recursive O(nodes^2) O(nodes)
// const canColor = (graph) => {
//   const map = {};
//   for (let node in graph) {
//     if (!(node in map) && !explore(graph, node, map)) return false;
//   }

//   return true;
// };

// const explore = (graph, node, map, color = true) => {
//   //   if (map[node] !== color) return false;
//   //   if (node in map) return true;
//   if (node in map) return map[node] === color;

//   map[node] = color;

//   for (let nei of graph[node]) {
//     if (!explore(graph, nei, map, !color)) return false;
//   }

//   return true;
// };

// iterative O(nodes^2) O(nodes)
const canColor = (graph) => {
  const map = {};

  for (let node in graph) {
    if (node in map) continue;

    const stack = [[node, true]];
    while (stack.length > 0) {
      const [current, color] = stack.pop();
      !(current in map) && (map[current] = color);

      if (map[current] !== color) return false;

      for (let nei of graph[current]) {
        !(nei in map) && stack.push([nei, !color]);
      }
    }
  }

  return true;
};

// NOT WORKING
// const canColor = (graph) => {
//   const map = {};

//   for (let node in graph) {
//     if (node in map) continue;

//     const stack = [[node, true]];

//     while (stack.length > 0) {
//       const [current, color] = stack.pop();
//       console.log(current, color);

//       if (!(current in map)) {
//         map[current] = color;
//       } else {
//         if (map[current] !== color) return false;

//         console.log(current, color, "break");
//         if (map[current] === color) break;
//       }

//       for (let nei of graph[current]) {
//         stack.push([nei, !color]);
//         map[nei] = !color;
//       }
//     }
//   }

//   return true;
// };

console.log(
  canColor({
    x: ["y"],
    y: ["x", "z"],
    z: ["y"],
  })
); // -> true

// x <-> y
//     ||
//     z

// stack x1 x1 z1
//   map x1 y2 z1

// console.log(
//   canColor({
//     q: ["r", "s"],
//     r: ["q", "s"],
//     s: ["r", "q"],
//   })
// ); // -> false

// 1 r <-> s 2
//   \\  ||
//    2 q
// stack s2 r1 r2 q2
//   map r1 q2
