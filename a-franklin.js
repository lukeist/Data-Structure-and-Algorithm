// A grocery delivery service that offers consumers the option of purchasing their groceries online and having them delivered on schedule.
// The team is planning a route for a delivery truck to deliver customer orders in the city of Techlandia.
// The planner will create a delivery area for each order to effectively plan the route.
// The area is abstracted as a area. Not all locations are accessible by road. The truck only needs to make a single delivery.

// Write an algorithm to determine the minimum distance required for the truck to deliver the order.

// Assumptions:
// Some places in the delivery area cannot be accessed by the driver, as there are no roads in those locations.
// The delivery area can be represented as a two-dimensional area of integers, where each integer represents one cell.
// The truck must start from the top-left corner of the area, which is always accessible and can move one cell up, down, left, or right at a time.
// The truck must navigate around the areas without roads and cannot leave the area.
// The accessible areas are represented as 1, areas without roads are represented by 0 and the order destination is represented by 9.

// Input
// The input to the function/method consists of one argument:
// area, representing the two-dimensional area of integers.

// Output
// Return an integer representing the total distance traversed to deliver the order else return -1.

// Constraints
// 1 ≤ rows, columns ≤ 103

// Example
// Input:
// area =
// [[1, 0, 0],
// [1, 0, 0],
// [1, 9, 1]]

// Output:
// 3

// Explanation:
// Starting from the top-left corner, the truck traversed the cells (0,0) -> (1,0) -> (2,0) -> (2,1). The truck traversed the total distance
// to deliver the order.
// So, the output is 3.

/*
 * Complete the 'minimumDistance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY area as parameter.
 area =
[[1, 0, 0],
[1, 0, 0],
[1, 9, 1]]
Constraints
1 ≤ rows, columns ≤ 103
 */
function minimumDistance(area) {
  const visited = new Set();
  const stack = [[0, 0]];
  let count;

  while (stack.length > 0) {
    const [y, x] = stack.pop();
    let here = area[y][x];

    if (visited.has(`${y},${x}`)) {
      continue;
    } else {
      visited.add(`${y},${x}`); // If visited doesn't have current [y, x] then add them into visited.

      if (here !== 0) {
        // If value at current [y, x] is not 0, we execute the conditionals below. Otherwise we continue the loop.

        // Here to check:
        //             up
        //             ^
        //  left  < current  >   right
        //             v
        //            down
        //

        // up
        if (
          y - 1 >= 0 &&
          !visited.has(`${y - 1},${x}`) &&
          area[y - 1][x] !== 0
        ) {
          stack.push([y - 1, x]);
          area[y - 1][x] !== 9
            ? (area[y - 1][x] += here)
            : area[y - 1][x] === "x"; // Set 9 to 'x' so that the other count to 9 will not affect the loop
        }

        // left
        if (
          x - 1 >= 0 &&
          !visited.has(`${y},${x - 1}`) &&
          area[y][x - 1] !== 0
        ) {
          stack.push([y, x - 1]);
          area[y][x - 1] !== 9
            ? (area[y][x - 1] += here)
            : (area[y][x - 1] = "x");
        }

        // down
        if (
          y + 1 < area.length &&
          !visited.has(`${y + 1},${x}`) &&
          area[y + 1][x] !== 0
        ) {
          stack.push([y + 1, x]);
          area[y][x - 1] !== 9
            ? (area[y + 1][x] += here)
            : (area[y][x - 1] = "x");
        }

        // right
        if (
          x + 1 < area[0].length &&
          !visited.has(`${y},${x + 1}`) &&
          area[y][x + 1] !== 0
        ) {
          stack.push([y, x + 1]);
          area[y][x + 1] !== 9
            ? (area[y][x + 1] += here)
            : (area[y][x + 1] = "x");
        }
      }

      // end of loop is right at 'x'. We check the surrounding of 'x' to find the last count.
      // Here to check:
      //             0
      //             ^
      //     16  <  'x'  >   0
      //             v
      //             0
      //

      if (here === "x") {
        if (
          x + 1 < area[0].length &&
          y + 1 < area.length &&
          x - 1 >= 0 &&
          y - 1 >= 0
        ) {
          count = Math.max(
            area[y - 1][x],
            area[y + 1][x],
            area[y][x - 1],
            area[y][x + 1]
          );
        }
      }
    }
  }
  console.log(area);
  console.log(`Total steps to get to the destination: ${count}`);
  return count;
}

// minimumDistance([
//   [1, 0, 0],
//   [1, 0, 0],
//   [1, 9, 1],
// ]);

// minimumDistance([
//   [1, 1, 1, 1, 0],
//   [0, 1, 0, 0, 0],
//   [1, 1, 1, 9, 0],
//   [0, 1, 0, 0, 0],
// ]);

minimumDistance([
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 9, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
]);

// [
//   [1, 2, 3, 0, 31, 30, 29, 28, 27, 26, 25, 0],
//   [0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 24, 23],
//   [0, 0, 0, 6, 7, 8, 9, 10, 11, 0, 0, 22],
//   [0, 0, 0, 7, 0, 0, 0, 0, 12, 0, 0, 21],
//   [0, 0, 0, 8, 0, 0, 0, 0, 13, 14, 0, 20],
//   [0, 0, 0, 9, 0, 0, 0, 0, 0, 15, 0, 19],
//   [0, 0, 0, 10, 0, 0, 0, 0, 0, 16, 17, 18],
//   [0, 0, 0, 11, 0, 1, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 12, 0, 1, 0, 0, 1, 1, 1, 0],
//   [16, 15, 14, 13, 0, 1, 0, 0, 0, 0, 0, 0],
//   [17, 0, 0, 0, 0, 0, 0, 26, 27, 28, 9, 0],
//   [18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0],
// ];

[
  [1, 2, 3, 0, 31, 30, 29, 28, 27, 26, 25, 0],
  [0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 24, 23],
  [0, 0, 0, 6, 7, 8, 9, 10, 11, 0, 0, 22],
  [0, 0, 0, 7, 0, 0, 0, 0, 12, 0, 0, 21],
  [0, 0, 0, 8, 0, 0, 0, 0, 13, 14, 0, 20],
  [0, 0, 0, 9, 0, 0, 0, 0, 0, 15, 0, 19],
  [0, 0, 0, 10, 0, 0, 0, 0, 0, 16, 17, 18],
  [0, 0, 0, 11, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 12, 0, 1, 0, 0, 1, 1, 1, 0],
  [16, 15, 14, 13, 0, 1, 0, 0, 0, 0, 0, 0],
  [17, 0, 0, 0, 0, 0, 0, 26, 27, 28, 29, 30],
  [18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 39],
];

[
  [1, 2, 3, 0, 31, 30, 29, 28, 27, 26, 25, 0],
  [0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 24, 23],
  [0, 0, 0, 6, 7, 8, 9, 10, 11, 0, 0, 22],
  [0, 0, 0, 7, 0, 0, 0, 0, 12, 0, 0, 21],
  [0, 0, 0, 8, 0, 0, 0, 0, 13, 14, 0, 20],
  [0, 0, 0, 9, 0, 0, 0, 0, 0, 15, 0, 19],
  [0, 0, 0, 10, 0, 0, 0, 0, 0, 16, 17, 18],
  [0, 0, 0, 11, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 12, 0, 1, 0, 0, 1, 1, 1, 0],
  [16, 15, 14, 13, 0, 1, 0, 0, 0, 0, 0, 0],
  [17, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [26, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 9],
];
// Given a sum of money compute the minimum number of bills and coins that equal that sum. Assume you only have the following denominations:
// Bills: 20, 10, 5, 1,
// Coins: .25, .1, .05, .01
// For example, given 6.35 the solution would be One 5, One 1, One .25, One .1

// [10, 5, 2, 1, .5, .25, .10, .05, .01]
// [10, 5, 1]

// function getChange(change: 6.27, currency: [10, 5, 2, 1, .5, .25, .10, .05, .01]) {
//     change = change * 100

//     return [Math.floor(change/1000), , two,..]
// }

// function getChange(given, owed) {
//     let change = (give - owned) * 100; // $2.23 => 223 cent
//     let quarters = Math.floor(change / 25);
//     let changeAfterQuaters = change % 25;
//     let dimes = changeAfterQuaters / 10;
//     let changeAfterDimes = changeAfterQuaters & 10
//     let

//     return }
//     // return {".1": x, ".5":y}

// y > 0 && (n = area[y - 1][x]); // north
// y < area.length && (s = area[y + 1][x]); // south
// x > 0 && (w = area[y][x - 1]); // west
// x < area[0].length && (e = area[y][x + 1]); // east

// if (y === 0 && x === 0) {
//   stack.push([y, x + 1], [y + 1, x]);

//   //   continue;
// } else if (y === 0) {
//   console.log(Math.max(e, w, s));
//   here = 1 + Math.max(e, w, s);
//   stack.push([y, x + 1], [y, x - 1], [y + 1, x]);
// } else if (x === 0) {
//   console.log(Math.max(n, e, s));
//   here = 1 + Math.max(n, e, s);
//   stack.push([y - 1, x], [y, x + 1], [y + 1, x]);
// } else if (y === area.length - 1) {
//   console.log(Math.max(e, w, s));
//   here = 1 + Math.max(e, w, s);
//   stack.push([y - 1, x], [y, x + 1], [y, x - 1]);
// } else if (x === area[0].length - 1) {
//   console.log(Math.max(n, w, s));
//   here = 1 + Math.max(n, w, s);
//   stack.push([y - 1, x], [y, x - 1], [y + 1, x]);
// } else if (x === area[0].length - 1 && y === area.length) {
//   console.log(Math.max(n, w));
//   here = 1 + Math.max(n, w);
//   stack.push([y - 1, x], [y, x - 1]);
// } else {
//   console.log(Math.max(n, e, w, s));
//   here = 1 + Math.max(n, e, w, s);
//   stack.push([y - 1, x], [y, x + 1], [y, x - 1], [y + 1, x]);
// }
