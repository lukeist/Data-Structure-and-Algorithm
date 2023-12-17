// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// prep interview solution
// parameters: array / 10 int positive numbers
// return: number
// examples: ['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'] //15

//
function points(games) {
  // pseudo code
  let totalPoints = 0;
  // loop
  for (let i = 0; i < games.length; ++i) {
    //// conditionals to compare: item[0] & item[2]
    let game = games[i];
    let x = game[0];
    let y = game[2];
    let winningPoints = 3;
    let losingPoints = 0;
    let drawingPoints = 1;
    ////// add points to a variable
    if (x > y) {
      totalPoints += winningPoints;
    } else if (x === y) {
      totalPoints += drawingPoints;
    } else {
      totalPoints += losingPoints;
    }
  }
  // return variable
  return totalPoints;
}

// another solution
function points(games) {
  return games
    .map((v) => (v[0] > v[2] ? 3 : v[0] === v[2] ? 1 : 0))
    .reduce((p, c) => p + c, 0);
}
