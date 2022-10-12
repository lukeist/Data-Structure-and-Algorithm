// https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript
// p: obj
// r: obj
// e:
// var group = {
//     A: 20,
//     B: 15,
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}

function splitTheBill(group) {
  let sum = 0;
  let numOfF = 0;

  for (let friend in group) {
    sum += group[friend];
    numOfF++;
  }

  let avrg = ((sum / numOfF) * 100) / 100;

  for (let friend in group) {
    group[friend] = Math.round((group[friend] - avrg) * 100) / 100;
  }

  return group;
}

// const splitTheBill = (x) => {
//   let vals = Object.values(x),
//     avg = vals.reduce((s, v) => s + v) / vals.length;
//   return Object.keys(x).reduce(
//     (y, v) => ((y[v] = +(x[v] - avg).toFixed(2)), y),
//     {}
//   );
// };
