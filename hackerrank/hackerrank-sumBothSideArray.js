const findIndex = (arr) => {
  let i = 0;
  let j = 0;
  let countL = arr[0];
  let countR = arr[arr.length - 1];

  const allMidNums = [];

  while (i < j - 2) {
    if (countL < countR) {
    } else if (countL > countR) {
    } else {
      if (j - i !== 2) {
      } else {
        allMidNums.push();
      }
    }
  }
};

console.log(findIndex([3, 2, 5, 1, 6, 4]));
//  i     2     4
// [3, 2, 5, 1, 6, 4]
//              j
