// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript/
// p: string
// r: string 1 word
// e: man i need a taxi up to ubud => 'taxi

function high(x) {
  let al = "abcdefghijklmnopqrstuvwxyz";
  // functioin find score of word
  // score of char = al.indexOf(char) +1
  const findScore = (w) => {
    return w
      .split("")
      .map((c) => al.indexOf(c) + 1)
      .reduce((p, c) => p + c, 0);
  };

  // split x to array, // loop through array's item,
  return x.split(" ").sort((a, b) => findScore(b) - findScore(a))[0];
}
