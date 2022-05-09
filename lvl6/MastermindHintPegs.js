function getHints(answer, guess) {
  const result = {
    black: 0,
    white: 0,
  };

  //   const countWhite = (arr) =>
  //     arr.reduce((cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt), {});

  //   const matchValues = [];
  //   answer.forEach((e1) =>
  //     guess.forEach((e2) => e2 === e1 && matchValues.push(e1))
  //   );

  //   let countAnswer = countWhite(answer);
  //   let countGuess = countWhite(guess);
  //
  let blackAndWhite = 0;
  const answerClone = [...answer].sort();
  const guessClone = [...guess].sort();
  const mainValueInAnswer = answerClone.filter(
    (e, i) => e !== answerClone[i + 1]
  );
  const mainValueInGuess = guessClone.filter((e, i) => e !== guessClone[i + 1]);

  for (let i = 0; i < mainValueInAnswer.length; i++) {
    if (mainValueInGuess.indexOf(mainValueInAnswer[i]) > -1) {
      const numberOfValueIinAnswer = answerClone.filter(
        (value) => value === mainValueInAnswer[i]
      ).length;
      const numberOfValueIinGuess = guessClone.filter(
        (value) => value === mainValueInAnswer[i]
      ).length;
      if (numberOfValueIinAnswer > numberOfValueIinGuess) {
        blackAndWhite += numberOfValueIinGuess;
      } else {
        blackAndWhite += numberOfValueIinAnswer;
      }
    }
  }

  console.log(mainValueInAnswer, mainValueInGuess);
  //   const similiarGuess = answerClone.filter((e) => {
  //     guessClone.includes(e);
  //     guessClone.splice(guessClone.indexOf(e), 1);
  //     answerClone.splice(answerClone.indexOf(e), 1);
  //   });

  //   for (let i = 0; i < answerClone.length; i++) {
  //     for (let j = 0; j < guessClone.length; j++) {
  //       if (answerClone[i] === guessClone[j]) {
  //         blackAndWhite++;
  //         const removedAnswer = answerClone.splice(answerClone[i], 1);
  //         const removedGuess = guessClone.splice(guessClone[j], 1);
  //         // console.log(blackAndWhite);
  //         console.log(
  //           blackAndWhite,
  //           i,
  //           removedAnswer,
  //           answerClone.join(""),
  //           j,
  //           removedGuess,
  //           guessClone.join("")
  //         );
  //         // break;
  //         // console.log(answerClone, guessClone);
  //       }
  //     }
  //   }

  //   const similiarAnswer = guess.filter((e) => answer.includes(e));
  //   const mainValueInSimilar = [...similiarGuess]
  //     .sort()
  //     .filter((val, index) => val != [...similiarGuess].sort()[index + 1]);

  //   const sortAnswer = [...answer].sort();
  //   const sortGuess = [...guess].sort();
  //   const filterAnswer = [...sortAnswer].filter(
  //     (x, i) => x !== sortAnswer[i + 1]
  //   );
  //   const filterGuess = [...sortGuess].filter((x, i) => x !== sortGuess[i + 1]);

  for (let i = 0; i < answer.length; i++) {
    answer[i] === guess[i] && result.black++;
    // sortAnswer[i] === sortGuess[i] && blackAndWhite++;
  }

  result.white = blackAndWhite - result.black;
  //   console.log(sortAnswer, sortGuess);
  //   console.log(similiarGuess.sort(), mainValueInSimilar);
  //   console.log(countAnswer, countGuess, result);
  console.log(result);

  return result;
}

// let answer = [0, 0, 0, 1, 1];
// let guess = [2, 2, 0, 0, 0];
// // result = {black: 1, white: 2}

let answer = [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3];
let guess = [1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1];
getHints(answer, guess);
