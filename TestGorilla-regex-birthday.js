// As a backend developer, you're working with strings containing user data including birthdays. Your goal is to parse the birthday from a remark string. The string contains year, month and day somewhere. You've already made a first attempt but it's not working yet. The script has a function parseBirthday() that is supposed to take a remark string as input and return a formatted birthday (YYYY-MMDD). The function contains a regex (var regex) to parse the pattern.
// It is your task to correct the code.
// The regex is case insensitive and searches for a pattern to parse the year, month and day.
// year: any four digit number after the word 'year'
// month: any two or one digit number after the word 'month' day: any two or one digit number after the word 'day'
// For example:
// Input string: HGI_YEAR2019testmonth12DATE12ABU1234DAY23 Output: 2019-12-23
// For this test you're using JavaScript Node 13
// Feel free to add comments in your code explaining your solution.

// function parseBirthday(remarkString) {
//   var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|day(?<day>\d{1,2})/gm;
//   //   console.log(regex.exec(remarkString));

//   remarkString = remarkString.toLowerCase();
//   console.log(remarkString);

//   let m;

//   var formattedDate = "";

//   while ((m = regex.exec(remarkString)) !== null) {
//     // This is necessary to avoid infinite loops with zero-width matches
//     if (m.index === regex.lastIndex) {
//       regex.lastIndex++;
//     }

//     formattedDate += m[1];
//   }

//   return formattedDate;
// }

// export function parseBirthday(remarkString) {
function parseBirthday(remarkString) {
  var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|day(?<day>\d{1,2})/gim; //gmi, not gim

  remarkString = remarkString.toLowerCase();
  let m = remarkString.match(regex);
  var formattedDate = `${m[0].slice(4)}-${m[1].slice(5)}-${m[2].slice(3)}`;

  return formattedDate;
}

console.log(parseBirthday("P_6vLUyear1970UUw3}=tjgHmonth02Pj{yVQB[Uday29"));
// Task executed successfully.

// ---------------------------------
// Input parameters: (String("P_6vLUyear1970UUw3}=tjgHmonth02Pj{yVQB[Uday29"))
// Result: 1970undefinedundefined
// Expected: 1970-02-29
// ---------------------------------
// Input parameters: (String("year1989month1Pju#tV934Ue6GdNS6Am5DAY10"))
// Result: 1989undefined
// Expected: 1989-1-10
// ---------------------------------
// Input parameters: (String("reg_YEAR2001tV934Umonth04e6GdNS6Am5day016849"))
// Result: undefinedundefined
// Expected: 2001-04-01
// ---------------------------------
// Input parameters: (String("year1943month4DAY1"))
// Result: 1943undefined
// Expected: 1943-4-1
// ---------------------------------
// Input parameters: (String("Berjt}YEAR1935testmonth11DATE12ABU1234DAY20"))
// Result: undefined
// Expected: 1935-11-20
// ---------------------------------
// Input parameters: (String("Berjt}YEAR1915testmonth11DATE12ABU12DAYDAY01"))
// Result: undefined
// Expected: 1915-11-01
