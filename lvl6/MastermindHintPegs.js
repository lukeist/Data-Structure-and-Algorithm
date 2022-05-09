// function getHints(answer, guess) {
//   const result = {
//     black: 0,
//     white: 0,
//   };

//   let blackAndWhite = 0;
//   const answerClone = [...answer].sort();
//   const guessClone = [...guess].sort();
//   // get single value of each similiar values
//   const mainValueInAnswer = answerClone.filter(
//     (e, i) => e !== answerClone[i + 1]
//   );
//   const mainValueInGuess = guessClone.filter((e, i) => e !== guessClone[i + 1]);

//   // count
//   for (let i = 0; i < mainValueInAnswer.length; i++) {
//     if (mainValueInGuess.indexOf(mainValueInAnswer[i]) > -1) {
//       const numberOfValueIinAnswer = answerClone.filter(
//         (value) => value === mainValueInAnswer[i]
//       ).length;
//       const numberOfValueIinGuess = guessClone.filter(
//         (value) => value === mainValueInAnswer[i]
//       ).length;
//       if (numberOfValueIinAnswer > numberOfValueIinGuess) {
//         blackAndWhite += numberOfValueIinGuess;
//       } else {
//         blackAndWhite += numberOfValueIinAnswer;
//       }
//     }
//   }

//   console.log(mainValueInAnswer, mainValueInGuess);

//   for (let i = 0; i < answer.length; i++) {
//     answer[i] === guess[i] && result.black++;
//   }

//   result.white = blackAndWhite - result.black;
//   console.log(result);

//   return result;
// }

// // let answer = [0, 0, 0, 1, 1];
// // let guess = [2, 2, 0, 0, 0];
// // // result = {black: 1, white: 2}

let answer = [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3];
let guess = [1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1];
getHints(answer, guess);

// better solution:
function getHints(answer, guess) {
  //   answer = answer.concat();
  //   guess = guess.concat();

  var hints = { black: 0, white: 0 };

  for (var i = 0; i < answer.length; i++) {
    if (answer[i] === guess[i]) {
      hints.black++;
      answer[i] = guess[i] = null;
    }
  }

  console.log(answer, guess);

  for (var j, i = 0; i < answer.length; i++) {
    if (answer[i] == null) continue;

    if ((j = guess.indexOf(answer[i])) > -1) {
      console.log(j, guess.indexOf(answer[i]), guess[j]);
      hints.white++;
      guess[j] = null;
    }
  }

  return hints;
}
