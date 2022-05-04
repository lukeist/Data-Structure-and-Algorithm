// https://www.codewars.com/kata/55084d3898b323f0aa000546/train/javascript
function encodeStr(s, shift) {
  const alphabetLength = 26;
  const alphabetLowerCase = "abcdefjhijklmnopqrstuvwxyz";
  const alphabetUpperCase = alphabetLowerCase.toUpperCase();
  // add prefix
  const firstLetter = s[0].toLowerCase();
  const secondLetter =
    alphabetLowerCase[alphabetLowerCase.indexOf(firstLetter) + shift];
  const prefix = firstLetter + secondLetter;
  s = prefix + s;

  // map through s to s+shift
  s = s
    .split("")
    .map((char) =>
      alphabetLowerCase.indexOf(char) < 0 && alphabetUpperCase.indexOf(char) < 0
        ? char
        : char !== char.toLowerCase()
        ? alphabetUpperCase[
            (alphabetUpperCase.indexOf(char) + shift) % alphabetLength
          ]
        : alphabetLowerCase[
            (alphabetLowerCase.indexOf(char) + shift) % alphabetLength
          ]
    )
    .join("");

  const sLength = s.length;

  // split s to 5 strings
  let splitArr = [];
  let numOfCharInEachArr = 0;
  let numOfCharInLastArr = 0;

  if (sLength % 5 === 0) {
    numOfCharInEachArr = sLength / 5;
  } else {
    numOfCharInEachArr = Math.floor(sLength / 4);
    numOfCharInLastArr = sLength % 4;
  }

  for (let i = 0; i < sLength; i += numOfCharInEachArr) {
    splitArr.push(s.slice(i, i + numOfCharInEachArr));
  }

  console.log(sLength, numOfCharInEachArr, numOfCharInLastArr);
  console.log(s);
  //   console.log(ss);

  console.log(splitArr);
}

function decode(arr) {
  // your code
}

// const u = "O CAPTAIN! my Captain! our fearful trip is donez";
const u = "I should have known that you would have a perfect answer for me!!!";

encodeStr(u, 1);
