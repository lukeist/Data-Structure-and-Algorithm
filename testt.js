function parseBirthday(remarkString) {
  var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|day(?<day>\d{1,2})/gm;
  //   console.log(regex.exec(remarkString));

  remarkString = remarkString.toLowerCase();
  console.log(remarkString);

  let m;

  var formattedDate = "";

  while ((m = regex.exec(remarkString)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    formattedDate += m[1];
  }

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
