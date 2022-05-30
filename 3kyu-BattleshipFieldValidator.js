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
