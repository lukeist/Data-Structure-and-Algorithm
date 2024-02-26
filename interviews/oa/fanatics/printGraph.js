// Overview:
// Write a program, in any language, that will display an ASCII chart given the following data
// data = {(1,2), (2, 3), (3, 1), (4, 6), (5, 8)}.
// You should be able to print the surrounding components of the chart and then place an * where
// each data point is specified in the data set. You do not need to print the X and Y legends
// but that would be helpful. You are given the max x and max y but if you can calculate that
// it would be helpful.
//
//  Online auction graph display
//  x axis is time
//  y axis is price
//  Title item
//
//  Given a two-dimension array graph the price over time
//
//     +-----+-----+-----+-----+-----+-----+
//     +                             *     +
//     +                                   +
//     +                       *           +
//   $ +                                   +
//     +                                   +
//     +           *                       +
//     +     *                 *           +
//     +                 *                 +
//     +-----+-----+-----+-----+-----+-----+
//                   time
//
//

const printGraph = () => {
  const data = [
    [1, 2],
    [2, 3],
    [3, 1],
    [4, 6],
    [4, 2],
    [5, 8],
  ];

  let maxX = -Infinity;
  let maxY = -Infinity;

  for (let [x, y] of data) {
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  const midY = Math.floor(maxY / 2);
  const midX = Math.floor(maxX / 2);

  const horizontalBorder = "   " + "+-----".repeat(6) + "+";
  const start = "   ";
  const legendY = " $ ";
  const legendX = "time";
  const end = "+";
  console.log(horizontalBorder);
  for (let i = maxY; i > 0; i--) {
    let lineI = "";
    for (let j = 0; j <= maxX + 1; j++) {
      if (j === 0 && i === midY) {
        lineI += legendY;
      } else if (j === 0) {
        lineI += start;
      } else if (j === 1) {
        lineI += "+     ";
      } else {
        const pointExist = data.find((a) => a[0] === j - 1 && a[1] === i);
        lineI += pointExist ? "*     " : "      ";
      }
    }
    lineI += end;
    console.log(lineI);
  }
  console.log(horizontalBorder);
  console.log("      ".repeat(midX + 1) + legendX);
};

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
// const printGraph = () => {
//   const data = [
//     [1, 2],
//     [2, 3],
//     [3, 1],
//     [4, 6],
//     [4, 2],
//     [5, 8],
//   ];

//   const plus = "+";
//   const star = "*";
//   const space = " ";
//   const spaces = "     ";
//   const dashes = "-----";
//   const yLegend = "$";
//   const xLegend = "time";
//   const lastCol = 7;

//   let maxX = -Infinity;
//   let maxY = -Infinity;

//   for (let [x, y] of data) {
//     maxX = Math.max(maxX, x);
//     maxY = Math.max(maxY, y);
//   }

//   const yLegendPos = Math.floor(maxY / 2);
//   const xLegendPos = Math.floor(maxX / 2);

//   const horizontalBorder = (plus + dashes).repeat(6) + plus;
//   console.log(horizontalBorder);

//   for (let i = maxY; i > 0; i--) {
//     for (let j = 0; j <= lastCol; j++) {
//       if (j === 0) {
//         if (i === yLegendPos) {
//           console.log(space + yLegend + space);
//         } else {
//           console.log(space.repeat(3));
//         }
//       } else if (j === 1) {
//         console.log(plus + spaces);
//       } else if (1 < j && j < lastCol) {
//         console.log(star + spaces);
//         // for (let [x, y] of data) {
//         //   if (y === maxY && x === j) {
//         //     console.log(star + spaces);
//         //     maxY--;
//         //   } else {
//         // console.log(space + spaces);
//         //   }
//         // }
//       } else {
//         console.log(plus);
//       }
//     }
//   }
//   console.log(horizontalBorder);
//   console.log(space.repeat(3) + (space + spaces).repeat(xLegendPos) + xLegend);
// };

printGraph();
