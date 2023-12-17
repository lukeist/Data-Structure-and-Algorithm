// function dirReduc(arr) {
//   let arrToStr = arr.join("");
//   const strNS = "NORTHSOUTH";
//   const strSN = "SOUTHNORTH";
//   const strEW = "EASTWEST";
//   const strWE = "WESTEAST";
//   while (
//     arrToStr.includes(strNS) ||
//     arrToStr.includes(strSN) ||
//     arrToStr.includes(strEW) ||
//     arrToStr.includes(strWE)
//   ) {
//     if (arrToStr.includes(strNS)) {
//       arrToStr = arrToStr.replace(strNS, "");
//     }
//     if (arrToStr.includes(strSN)) {
//       arrToStr = arrToStr.replace(strSN, "");
//     }
//     if (arrToStr.includes(strEW)) {
//       arrToStr = arrToStr.replace(strEW, "");
//     }
//     if (arrToStr.includes(strWE)) {
//       arrToStr = arrToStr.replace(strWE, "");
//     }
//   }
//   // console.log(arrToStr);

//   let arrResult = [];
//   while (arrToStr.length > 0) {
//     if (arrToStr[0] === "N") {
//       arrResult.push("NORTH");
//       arrToStr = arrToStr.slice(5);
//     }
//     if (arrToStr[0] === "S") {
//       arrResult.push("SOUTH");
//       arrToStr = arrToStr.slice(5);
//     }
//     if (arrToStr[0] === "E") {
//       arrResult.push("EAST");
//       arrToStr = arrToStr.slice(4);
//     }
//     if (arrToStr[0] === "W") {
//       arrResult.push("WEST");
//       arrToStr = arrToStr.slice(4);
//     }
//   }
//   console.log(arrResult);
//   return arrResult;
// }

// better solution: //////////////////////////////////

// function dirReduc(plan) {
//   var opposite = {
//     NORTH: "SOUTH",
//     EAST: "WEST",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//   };
//   return plan.reduce((dirs, dir) => {
//     console.log(dirs, dir);
//     // console.log(dirs[dirs.length - 1]);

//     // if (dirs[dirs.length - 1] === opposite[dir]) {
//     //   dirs.pop();
//     // } else dirs.push(dir);
//     // // console.log(dirs);
//     // return dirs;
//   }, []);
// }

function dirReduc(plan) {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  return plan.reduce((dirs, dir) => {
    console.log(dirs, dir);

    if (dirs[dirs.length - 1] === opposite[dir]) {
      console.log(dirs[dirs.length - 1]);
      dirs.pop();
    } else {
      dirs.push(dir);
    }

    return dirs;
  }, []);
}
//////////////////////////////////////////////////
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
  "NORTH",
]);
