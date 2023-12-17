// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

// p: arr
// r: str
// e:
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(arr) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet + alphabet.toUpperCase();
  let alphabetSub = alphabet
    .substring(
      alphabet.indexOf(arr[0]),
      alphabet.indexOf(arr[arr.length - 1]) + 1
    )
    .split("")
    .filter((c) => !arr.includes(c))[0];

  // find index of arr[0] in alphabet
  //   alphabet.indexOf(arr[0]);
  // find index of arr[arr.length -1] in alphabet
  //   alphabet.indexOf(arr[arr.length - 1]);
  // create alphabet substring then split
  //   alphabet.substring(
  //     alphabet.indexOf(arr[0]),
  //     alphabet.indexOf(arr[arr.length - 1])
  //   ).split().filter(c => !array.includes(c));
  // filter out the character
  //   console.log(alphabet, alphabetSub);
  return alphabetSub;
}

// findMissingLetter(["a", "b", "c", "d", "f"]);
findMissingLetter(["O", "Q", "R", "S"]);
