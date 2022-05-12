function dirReduc(arr) {
  // ...
  let northSouth = arr.filter((v) => v === "NORTH" || v === "SOUTH");
  let eastWest = arr.filter((v) => v === "EAST" || v === "WEST");

  let nS = 0;
  let eW = 0;

  for (value of northSouth) {
    value === "NORTH" ? (nS += 1) : (nS -= 1);
  }

  for (value of eastWest) {
    value === "EAST" ? (eW += 1) : (eW -= 1);
    console.log(eW);
  }

  if (nS > 0) {
    northSouth = ["NORTH"];
  } else if (nS < 0) {
    northSouth = ["SOUTH"];
  } else {
    northSouth = [];
  }

  if (eW > 0) {
    eastWest = ["EAST"];
  } else if (eW < 0) {
    eastWest = ["WEST"];
  } else {
    eastWest = [];
  }
  console.log(eastWest.concat(northSouth));
  return eastWest.concat(northSouth);
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
