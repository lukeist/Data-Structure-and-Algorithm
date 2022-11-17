// // Amazon Fresh is a grocery delivery service that offers consumers the option of purchasing their groceries online and having them delivered on schedule. The Amazon Fresh team is planning a route for a delivery truck to deliver customer orders in the city of Techlandia. The planner will create a delivery area for each order to effectively plan the route. The area is abstracted as a grid. Not all locations are accessible by road. The truck only needs to make a single delivery.
// // Write an algorithm to determine the minimum distance required for the truck to deliver the order.
// // Assumptions: Some places in the delivery area cannot be accessed by the driver, as there are no roads in those locations. The delivery area can be represented as a two-dimensional grid of integers, where each integer represents one cell. The truck must start from the top-left corner of the area, which is always accessible and can move, one cell up, down, left, or right at a time. The truck must navigate around the areas without roads and cannot leave the area. The accessible areas are represented as 1, areas without roads are represented by O and the order destination is represented by 9.
// // Input The input to the function/method consists of one argument: area, representing the two-dimensional grid of integers.
// // Output Return an integer representing the total distance traversed to deliver the order else return -1.
// // Constraints 1 <rows, columns s 103
// // Example
// // Input: area = [[1, 0, 0], (1, 0, 0], [1,9,1]]
// // Output:
// // Explanation: Starting from the top-left corner, the truck traversed the cells (0,0) -> (1,0) -> (2,0) -> (2,1). The truck traversed the total distance to deliver the order. So, the output is 3.

// // p: grid [[],[]]
// // r: int +/-1

// //  dfs recursive O(r x c) O(r x c)
// const shortestPath = (area, y = 0, x = 0, visited = new Set(), d = 0) => {
//   const boundY = 0 <= y && y < area.length;
//   const boundX = 0 <= x && x < area[0].length;
//   if (!boundY || !boundX) return 0;

//   const yx = y + "," + x;
//   if (visited.has(yx)) return 0;
//   visited.add(yx);

//   if (area[y][x] === 0) return 0;
//   if (area[y][x] === 9) return d;

//   const n = shortestPath(area, y + 1, x, visited, d + 1);
//   const s = shortestPath(area, y - 1, x, visited, d + 1);
//   const w = shortestPath(area, y, x + 1, visited, d + 1);
//   const e = shortestPath(area, y, x - 1, visited, d + 1);
//   //   console.log(y, x, n, s, w, e);
//   return Math.max(n, s, w, e);
// };

// // // bfs iterative O(r x c) O(r x c)
// // const shortestPath = (area) => {
// //   const queue = [[0, 0, 0]];

// //   while (queue.length > 0) {
// //     const [y, x, distance] = queue.shift();
// //     if (area[y][x] === 9) return distance;

// //     const deltas = [
// //       [y + 1, x],
// //       [y - 1, x],
// //       [y, x + 1],
// //       [y, x - 1],
// //     ];

// //     for (let delta of deltas) {
// //       const [neiY, neiX] = delta;
// //       const boundY = 0 <= neiY && neiY < area.length;
// //       const boundX = 0 <= neiX && neiX < area[0].length;

// //       boundY &&
// //         boundX &&
// //         area[neiY][neiX] !== 0 &&
// //         queue.push([neiY, neiX, distance + 1]);
// //     }
// //   }

// //   return -1;
// // };

// // const area = [
// //   [1, 0, 0],
// //   [1, 0, 0],
// //   [1, 9, 1],
// // ];

// const area = [
//   [1, 0, 1, 1, 1, 1],
//   [1, 1, 1, 0, 0, 1],
//   [1, 0, 1, 1, 1, 1],
//   [1, 0, 0, 0, 1, 0],
//   [1, 0, 0, 0, 1, 0],
//   [9, 1, 1, 1, 1, 1],
// ];

// console.log(shortestPath(area));
