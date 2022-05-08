function getHints(answer, guess) {
  const result = {
    black: 0,
    white: 0,
  };

  const countWhite = (arr) =>
    arr.reduce((cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt), {});

  let countAnswer = countWhite(answer);
  let countGuess = countWhite(guess);

  const sortAnswer = [...answer].sort();
  const sortGuess = [...guess].sort();
  let blackAndWhite = 0;

  for (let i = 0; i < answer.length; i++) {
    answer[i] === guess[i] && result.black++;
    sortAnswer[i] === sortGuess[i] && blackAndWhite++;
  }

  result.white = blackAndWhite - result.black;
  //   console.log(answer, guess);
  console.log(countAnswer, countGuess, result);
  return result;
}

// let answer = [0, 0, 0, 1, 1];
// let guess = [2, 2, 0, 0, 0];
// // result = {black: 1, white: 2}

let answer = [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3];
let guess = [1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1];
getHints(answer, guess);
