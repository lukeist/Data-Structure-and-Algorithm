// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

// p: array of 10x10 arrays of int 0 & 1
// r: boolean / no print
// e:
// [
//     [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]
// => true
////////////////////////////////////////////////////////////////

function validateBattlefield(field) {
  //   console.log(field);

  let battleship = 0;
  let cruiser = 0;
  let destroyer = 0;
  let submarine = 0;
  // surrounding on x axis: arr[y][x] => arr[y][x+1] => arr[y][x+2]
  // surrounding on y axis: arr[y][x] => arr[y+1][x] => arr[y+2][x]
  const checkShip = (x, y) => {
    /////////////////////////////////////////////////////
    // 1 square - check submarine
    (field[y - 1] === undefined || field[y - 1][x] === 0) &&
      (field[y][x - 1] === 0 || field[y][x - 1] === undefined) &&
      field[y][x + 1] === 0 &&
      field[y + 1][x] === 0 &&
      (field[y - 1] === undefined ||
        field[y - 1][x - 1] === undefined ||
        field[y - 1][x - 1] === 0) &&
      (field[y - 1] === undefined || field[y - 1][x] === 0) &&
      (field[y - 1] === undefined ||
        field[y - 1][x + 1] === undefined ||
        field[y - 1][x + 1] === 0) &&
      (field[y][x - 1] === undefined || field[y][x - 1] === 0) &&
      (field[y][x + 1] === undefined || field[y][x + 1] === 0) &&
      (field[y + 1] === undefined ||
        field[y + 1][x - 1] === undefined ||
        field[y + 1][x - 1] === 0) &&
      (field[y + 1] === undefined || field[y + 1][x] === 0) &&
      (field[y + 1] === undefined ||
        field[y + 1][x + 1] === undefined ||
        field[y + 1][x + 1] === 0) &&
      submarine++;

    /////////////////////////////////////////////////////
    // check ships on X axis

    // 2 squares
    // y-1,x-1	y-1,x	y-1,x+1	y-1,x+2
    (field[y][x - 1] === 0 || field[y][x - 1] === undefined) &&
      field[y][x + 1] === 1 &&
      field[y][x + 2] === 0 &&
      destroyer++;

    // 3 squares
    (field[y][x - 1] === 0 || field[y][x - 1] === undefined) &&
      field[y][x + 1] === 1 &&
      field[y][x + 2] === 1 &&
      field[y][x + 3] === 0 &&
      cruiser++;

    // 4 squares
    (field[y][x - 1] === 0 || field[y][x - 1] === undefined) &&
      field[y][x + 1] === 1 &&
      field[y][x + 2] === 1 &&
      field[y][x + 3] === 1 &&
      battleship++;

    /////////////////////////////////////////////////////
    // check ship on Y axis

    // 2 squares
    (field[y - 1] === undefined || field[y - 1][x] === 0) &&
      field[y + 1][x] === 1 &&
      field[y + 2][x] === 0 &&
      destroyer++;

    // 3 squares
    (field[y - 1] === undefined || field[y - 1][x] === 0) &&
      field[y + 1][x] === 1 &&
      field[y + 2][x] === 1 &&
      field[y + 3][x] === 0 &&
      cruiser++;

    // 4 squares
    (field[y - 1] === undefined || field[y - 1][x] === 0) &&
      field[y + 1][x] === 1 &&
      field[y + 2][x] === 1 &&
      field[y + 3][x] === 1 &&
      battleship++;
  };
  // search for number 1 in the matrix
  // if 1 found: search for its surrounding & count
  // for loop here
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      field[i][j] === 1 && checkShip(j, i);
    }
  }

  //   // testing coordinate of x y
  //   let indexOfY = 0;
  //   let indexOfX = field[indexOfY].indexOf(1);

  console.log(battleship, cruiser, destroyer, submarine);
  // }
  console.log(
    battleship === 1 && cruiser === 2 && destroyer === 3 && submarine === 4
  );
  return (
    battleship === 1 && cruiser === 2 && destroyer === 3 && submarine === 4
  );
}

validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);

validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);

// https://docs.google.com/spreadsheets/d/1nrsi0u1JqBpICNyVokR-e8-KhR06P4HfTZNl-dQuFPk/edit?usp=sharing
// y-1,x-1	y-1,x	y-1,x+1			y-1,x-1	y-1,x	y-1,x+1	y-1,x+2			y-1,x-1	y-1,x	y-1,x+1	y-1,x+2	y-1,x+3			y-1,x-1	y-1,x	y-1,x+1	y-1,x+2	y-1,x+3	y-1,x+4
// y,x-1	y,x	y,x+1			y,x-1	y,x	y,x+1	y,x+2			y,x-1	y,x	y,x+1	y,x+2	y,x+3			y,x-1	y,x	y,x+1	y,x+2	y,x+3	y,x+4
// y+1,x-1	y+1,x	y+1,x+1			y+1,x-1	y+1,x	y+1,x+1	y+1,x+2			y+1,x-1	y+1,x	y+1,x+1	y+1,x+2	y+1,x+3			y+1,x-1	y+1,x	y+1,x+1	y+1,x+2	y+1,x+3	y+1,x+4

// 					y-1,x-1	y-1,x	y-1,x+1				y-1,x-1	y-1,x	y-1,x+1					y-1,x-1	y-1,x	y-1,x+1
// 					y,x-1	y,x	y,x+1				y,x-1	y,x	y,x+1					y,x-1	y,x	y,x+1
// 					y+1,x-1	y+1,x	y+1,x+1				y+1,x-1	y+1,x	y+1,x+1					y+1,x-1	y+1,x	y+1,x+1
// 					y+2,x-1	y+2,x	y+2,x+1				y+2,x-1	y+2,x	y+2,x+1					y+2,x-1	y+2,x	y+2,x+1
// 											y+3,x-1	y+3,x	y+3,x+1					y+3,x-1	y+3,x	y+3,x+1
// 																		y+4,x-1	y+4,x	y+4,x+1

// better solution

// function validateBattlefield(field) {
//     let ships = [0,4,3,2,1];                             // initialize ships to be found
//     const s = (x, y) => field[x] && field[x][y];         // formula for "is ship at [x, y]?"
//     for (let i = 0; i < 100; i++) {                      // check all spaces in field
//       let x = i%10, y = i/10|0, l = 0;                   // calculate x & y, initialize length
//       if (s(x, y)) {                                     // ship found at [x, y]?
//         if (s(x+1, y+1) || s(x-1, y+1)) return false;    // corners touching?
//         if (s(x+1, y  ) && s(x  , y+1)) return false;    // sides touching?
//         while(s(x+l, y  )) { field[x+l][y  ] = 0; l++; } // find vertical ship
//         while(s(x  , y+l)) { field[x  ][y+l] = 0; l++; } // find horizontal ship
//         if (ships[l]) ships[l]--; else return false;     // record found ship
//       }
//     }
//     return ships.every(s => s === 0);                    // verify all ships found
//   }

function validateBattlefield(field) {
  var hit = (row, col) =>
    row < 0 || col < 0 || row > 9 || col > 9 ? 0 : field[row][col];
  for (var ships = [10, 0, 0, 0, 0], row = 0; row < 10; row++) {
    for (var col = 0; col < 10; col++) {
      if (hit(row, col)) {
        if (hit(row - 1, col - 1) || hit(row - 1, col + 1)) return false; // Corner is touching
        if (hit(row - 1, col) && hit(row, col - 1)) return false; // Side is touching
        if ((field[row][col] += hit(row - 1, col) + hit(row, col - 1)) > 4)
          return false; // Ship is too long
        ships[field[row][col]]++;
        ships[field[row][col] - 1]--;
      }
    }
  }
  return [0, 4, 3, 2, 1].every((s, i) => s == ships[i]);
}
