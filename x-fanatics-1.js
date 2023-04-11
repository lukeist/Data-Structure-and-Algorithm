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
//     0      1    2
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
//   max x = 5
//   max y = 8
//   data = {(1,2), (2, 3), (3, 1), (4, 6), (4, 2), (5, 8)}
// parameters: set(), number, number;
// return: print (console.log())

// examples:
// ([1,2],[3,4]) 3 4
// '+', '     '

const printGraph = (dataSet, maxX, maxY) => {
  //Put every string in a variable
  const plus = "+";
  const star = "*";
  const space = ".";
  const border = "-----";
  const fullBorder = (border + plus).repeat(maxX + 1);
  const spaceBetween = ".....";
  const spaceStart = "      ";
  const spaceStartWithLegend = "  $   ";

  //Print the top border: +-----+
  console.log(spaceStart + plus + fullBorder);

  //To print the Y axis values in the correct order, traverse from maxY down to 0:
  for (let y = maxY; y >= 1; y--) {
    //All rows start empty except for center Y row which starts with '  $   '
    let row =
      y !== Math.floor(maxY / 2)
        ? spaceStart + plus
        : spaceStartWithLegend + plus;

    //To get the X axis values in the correct order, traverse from 1 to maxX:
    for (let x = 1; x <= maxX; x++) {
      //For each x value, add values to 'row' if present
      if (dataSet.some((p) => p[0] === x && p[1] === y)) {
        row += spaceBetween + star;
      } else {
        row += spaceBetween + space;
      }
    }

    //Print each row of the table with each iteration of the y loop
    console.log(row + spaceBetween + plus);
  }

  //Print the bottom border: +-----+
  console.log(spaceStart + plus + fullBorder);
  //To center 'time', divide maxX by 2 and add 1 for leading space
  console.log(spaceStart.repeat(Math.floor(maxX / 2) + 1) + "  time");
};

// const arr = [[3,4],[1,2],[3,2]]
// printGraph(arr, 3, 4)
const arr = [
  [1, 2],
  [2, 3],
  [3, 1],
  [4, 6],
  [4, 2],
  [5, 8],
];
printGraph(arr, 5, 8);
