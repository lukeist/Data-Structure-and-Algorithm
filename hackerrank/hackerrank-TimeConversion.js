// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

function timeConversion(s) {
  // Write your code here
  let newStr = s.slice(0, -2);
  let strArr = newStr.split(":");
  let conversedTime = "";

  if (s.indexOf("P") > -1) {
    let newHour = 0;

    if (strArr[0] !== "12") {
      newHour = (+strArr[0] + 12).toString();
      strArr.splice(0, 1, newHour);
    }

    conversedTime = strArr.join(":");
  } else {
    strArr[0] === "12" ? strArr.splice(0, 1, "00") : strArr;

    conversedTime = strArr.join(":");
  }

  console.log(conversedTime);
}

timeConversion("07:05:45PM");
