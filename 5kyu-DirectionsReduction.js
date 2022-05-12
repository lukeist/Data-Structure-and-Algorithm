function dirReduc(arr) {
  // ...

  let northSouth = arr.map((v) =>
    v === "NORTH" ? (v = 1) : v === "SOUTH" ? (v = -1) : (v = null)
  );

  let eastWest = arr.map((v) =>
    v === "EAST" ? (v = 1) : v === "WEST" ? (v = -1) : (v = null)
  );
  console.log(northSouth, eastWest);

  // loop +1 -1 0 search for directions

  // if direction = -3, loop from back to front to find 3 indexes of -1

  // put all -1 into order
}

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
dirReduc([
  "NORTH",
  "EAST",
  "NORTH",
  "EAST",
  "WEST",
  "WEST",
  "EAST",
  "EAST",
  "WEST",
  "SOUTH",
]);

// function dirReduc(arr) {
//   // ...
//   // let northSouth = arr.filter((v) => v === "NORTH" || v === "SOUTH");
//   let eastWest = arr.filter((v) => v === "EAST" || v === "WEST");

//   // let northSouth = arr.map((v) =>
//   //   v === "NORTH" ? (v = 1) : v === "SOUTH" ? (v = -1) : (v = null)

//   // let nS = 0;
//   // let eW = 0;

//   // for (value of northSouth) {
//   //   value === "NORTH" ? (nS += 1) : (nS -= 1);
//   // }

//   // for (value of eastWest) {
//   //   value === "EAST" ? (eW += 1) : (eW -= 1);
//   //   console.log(eW);
//   // }

//   // if (nS > 0) {
//   //   northSouth = ["NORTH"];
//   // } else if (nS < 0) {
//   //   northSouth = ["SOUTH"];
//   // } else {
//   //   northSouth = [];
//   // }

//   // if (eW > 0) {
//   //   eastWest = ["EAST"];
//   // } else if (eW < 0) {
//   //   eastWest = ["WEST"];
//   // } else {
//   //   eastWest = [];
//   // }
//   // console.log(eastWest.concat(northSouth));

//   // return arr.lastIndexOf(northSouth[0]) > arr.lastIndexOf(eastWest[0])
//   //   ? eastWest.concat(northSouth)
//   //   : northSouth.concat(eastWest);
// }
