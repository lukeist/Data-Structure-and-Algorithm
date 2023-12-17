// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// parameTERS: str / no num, no null no array, undefined funny stuff
// return: string / no consoole.log
// example: lmao => lm / heeey => hy

const disemvowel = (str) => {
  const vowels = "aeiouAEIOU";
  // convert str to arr
  // filter letter !== vowels
  return str
    .split("")
    .filter((c) => !vowels.includes(c))
    .join("");
};
