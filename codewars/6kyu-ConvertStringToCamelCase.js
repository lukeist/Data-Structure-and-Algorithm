// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// p: str
// r: str
// e:
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  // split str into array
  let newStr = str
    .split("-")
    .join("_")
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

  // map conditional array[0][0] upperCase ?

  return str[0].toLowerCase() !== str[0]
    ? newStr
    : newStr[0].toLowerCase() + newStr.slice(1);
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");
