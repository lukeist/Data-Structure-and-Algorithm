// p: obj
// r: arr
// topologicalOrder({
//   v: ["z", "w"],
//   w: [],
//   x: ["w", "v", "z"],
//   y: ["x"],
//   z: ["w"],
// }); // -> ['y', 'x', 'v', 'z', 'w']
//  ready
//
//  result  y x v z w
//
//        o v  ->  z
//          |^  |  ^
//          V V\  | o   o
//          w  <- x  <- y
//  v 1
//  z 2
//  w 3
//  x 1
//  y 0

// O(edges + nodes) O(nodes)
const topologicalOrder = (graph) => {
  const map = {};

  for (let node in graph) {
    map[node] = 0;
  }

  for (let node in graph) {
    for (let nei of graph[node]) {
      map[nei]++;
    }
  }

  let ready = [];
  for (let node in map) {
    if (map[node] === 0) ready.push(node);
  }

  let result = [];
  while (ready.length > 0) {
    let current = ready.pop();
    result.push(current);

    for (let nei of graph[current]) {
      map[nei]--;
      if (map[nei] === 0) ready.push(nei);
    }
  }

  return result;
};

// // p: obj
// // r: arr
// // e:
//   // a: ["f"],
//   // b: ["d"],
//   // c: ["a", "f"],
//   // d: ["e"],
//   // e: [],
//   // f: ["b", "e"],
// //            x
// //            c -> a   b -> d
// //                    ^
// //              \  | /     |
// //              V V       V
// //                f  ->  e
// // e
// // ready: e
// // result: c
// // f 2 1
// // d 1
// // a 1 0
// // e 2 1
// // b 1 0
// // c 0
// //
// //
// const topologicalOrder = (graph) => {
//   let map = {}
//   for (let node in graph) {
//     map[node] = 0;
//   }

//   for (let node in graph) {
//     for (let nei of graph[node]) {
//       map[nei]++;
//     }
//   }

//   const ready = []
//   for (let node in map) {
//     if (map[node] === 0) ready.push(node);
//   }

//   const result = []
//   while (ready.length > 0) {
//     const curr = ready.pop();
//     result.push(curr);

//     for (let nei of graph[curr]) {
//       map[nei]--;
//       (map[nei] === 0) && ready.push(nei)
//     }
//   }

//   return result;
// };

//   module.exports = {
//     topologicalOrder,
//   };
