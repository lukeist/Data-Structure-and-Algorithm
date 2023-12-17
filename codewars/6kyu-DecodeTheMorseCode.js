// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
// p: str
// r: str
// e:
// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

decodeMorse = function (morseCode) {
  const dic = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "...---...": "SOS",
  };

  console.log(
    morseCode
      .split("   ")
      .map((c) =>
        c
          .split(" ")
          .map((c) => (dic.hasOwnProperty(c) ? dic[c] : c))
          .join("")
          .toUpperCase()
      )
      .join(" ")
  );
  return morseCode
    .trim()
    .split("   ")
    .map((c) =>
      c
        .split(" ")
        .map((c) => (dic.hasOwnProperty(c) ? dic[c] : c))
        .join("")
        .toUpperCase()
    )
    .join(" ");
};

decodeMorse(".... . -.--   .--- ..- -.. .");
