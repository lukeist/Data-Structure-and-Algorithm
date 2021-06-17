// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// prep
// parameters: str / no numbers no array no null no undefined no funny stuff
// return: boolean / no console.log
// examples: yes => true / hello => false
const isIsogram = (str) => {
  str = str.toLowerCase();
  // loop through str - remove the char - check if str still contains the same char
  // conditionals: if contains return false, if not return true
  for (char of str) {
    str = str.replace(char, "");
    if (str.indexOf(char) > -1) return false;
  }
  return true;
};
isIsogram("Dermatoglyphics");
