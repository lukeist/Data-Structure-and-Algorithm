function dirReduc(arr) {
  // const arrClone = [...arr];
  // const arrMap = arr.map((v) =>
  //   //  v === "NORTH" ?  1 : -1
  //   {
  //     switch (v) {
  //       case "NORTH":
  //         return 1;
  //       // console.log(v);
  //       case "SOUTH":
  //         return -1;
  //       // console.log(v);
  //       case "EAST":
  //         return 2;
  //       // console.log(v);
  //       case "WEST":
  //         return -2;
  //       // console.log(v);
  //       default:
  //         return v;
  //     }
  //   }
  // );

  // // console.log(arr);
  // for (let i = 0; i < arr.length; i++) {
  //   // console.log(arrMap[i], arrMap[i + 1]);
  //   // console.log(arrMap[i - 1], arrMap[i]);
  //   // console.log(arr[i], arr[i + 1]);
  //   if (arrMap[i] + arrMap[i + 1] === 0) {
  //     arrMap[i] = 0;
  //     arrMap[i + 1] = 0;
  //     arr[i] = null;
  //     arr[i + 1] = null;
  //     // arr.splice(i, 1);
  //     // arrMap.splice(i, 1);
  //     // // splice the i + 1 (but now at the position of i because of above)
  //     // arr.splice(i, 1);
  //     // arrMap.splice(i, 1);
  //   }
  //   if (arrMap[i] + arrMap[i - 1] === 0) {
  //     // console.log(arr[i - 1], arr[i]);
  //     // arr.splice(i, 1);
  //     // arrMap.splice(i, 1);
  //     // arr.splice(i - 1, 1);
  //     // arrMap.splice(i - 1, 1);
  //     // console.log(arr);
  //   }

  //   // console.log(arr, arrMap, "-----------");
  // }
  // console.log(arrMap);
  let arrToStr = arr.join("");
  const strNS = "NORTHSOUTH";
  const strSN = "SOUTHNORTH";
  const strEW = "EASTWEST";
  const strWE = "WESTEAST";
  while (
    arrToStr.includes(strNS) ||
    arrToStr.includes(strSN) ||
    arrToStr.includes(strEW) ||
    arrToStr.includes(strWE)
  ) {
    if (arrToStr.includes(strNS)) {
      arrToStr = arrToStr.replace(strNS, "");
    }
    if (arrToStr.includes(strSN)) {
      arrToStr = arrToStr.replace(strSN, "");
    }
    if (arrToStr.includes(strEW)) {
      arrToStr = arrToStr.replace(strEW, "");
    }
    if (arrToStr.includes(strWE)) {
      arrToStr = arrToStr.replace(strWE, "");
    }
  }
  // console.log(arrToStr);

  let arrResult = [];
  while (arrToStr.length > 0) {
    if (arrToStr[0] === "N") {
      arrResult.push("NORTH");
      arrToStr = arrToStr.slice(5);
    }
    if (arrToStr[0] === "S") {
      arrResult.push("SOUTH");
      arrToStr = arrToStr.slice(5);
    }
    if (arrToStr[0] === "E") {
      arrResult.push("EAST");
      arrToStr = arrToStr.slice(4);
    }
    if (arrToStr[0] === "W") {
      arrResult.push("WEST");
      arrToStr = arrToStr.slice(4);
    }
  }
  console.log(arrResult);
  return arrResult;
}

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

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
// dirReduc([]);

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

// // misunderstanding the question:
// function dirReduc(arr) {
//   // separate "NORTH" "SOUNTH" and "EAST" "WEST" to 2 arrays, map all directions to -1 & 1; unwanted value to null
//   let northSouth = arr.map((v) =>
//     v === "NORTH" ? (v = 1) : v === "SOUTH" ? (v = -1) : (v = null)
//   );
//   let eastWest = arr.map((v) =>
//     v === "EAST" ? (v = 1) : v === "WEST" ? (v = -1) : (v = null)
//   );

//   // create an all null array
//   let arrNull = arr.map((v) => (v = null));

//   // reduce to sum all values, if positive: go "NORTH"/"EAST", if negative: go "SOUTH"/"WEST"
//   const sumNS = northSouth.reduce((p, c) => p + c, 0);
//   const sumEW = eastWest.reduce((p, c) => p + c, 0);

//   // get indexes of the working directions

//   const indexOfNS = [];
//   const indexOfEW = [];

//   const arrClone = [...arr];
//   //
//   for (i = 0; i < Math.abs(sumNS); i++) {
//     indexOfNS.push(
//       arrClone.lastIndexOf(sumNS > 0 ? "NORTH" : sumNS < 0 ? "SOUTH" : null)
//     );
//     arrClone.splice(
//       arrClone.lastIndexOf(sumNS > 0 ? "NORTH" : sumNS < 0 ? "SOUTH" : null),
//       1
//     );
//   }

//   for (i = 0; i < Math.abs(sumEW); i++) {
//     indexOfEW.push(
//       arrClone.lastIndexOf(sumEW > 0 ? "EAST" : sumEW < 0 ? "WEST" : null)
//     );
//     arrClone.splice(
//       arrClone.lastIndexOf(sumEW > 0 ? "EAST" : sumEW < 0 ? "WEST" : null),
//       1
//     );
//     console.log(indexOfEW);
//   }

//   // replace element at indexOfNS in arrNull by "NORTH"/E/W/S
//   for (j = 0; j < indexOfNS.length; j++) {
//     arrNull.splice(
//       indexOfNS[j],
//       1,
//       sumNS > 0 ? "NORTH" : sumNS < 0 ? "SOUTH" : null
//     );
//   }

//   for (j = 0; j < indexOfEW.length; j++) {
//     arrNull.splice(
//       indexOfEW[j],
//       1,
//       sumEW > 0 ? "EAST" : sumEW < 0 ? "WEST" : null
//     );
//   }

//   arrNull = arrNull.filter((v) => v !== null);

//   console.log(arrNull);
//   return arrNull;
// }
