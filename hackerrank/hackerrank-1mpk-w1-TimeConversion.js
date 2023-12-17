// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/

// p: string
// r: string / no print console
// e: '12:01:00PM' => 12:01:00 / '12:01:00AM' => '00:01:00'

function timeConversion(s) {
  // split str into arr
  const timeWithoutAMPM = s.slice(0, -2).split(":");
  let hour = +timeWithoutAMPM[0];
  let hourPlus12 = hour + 12;
  let hour00 = "00";
  const amPM = s.slice(-2);
  if (amPM === "PM")
    hour === 12 ? hour : timeWithoutAMPM.splice(0, 1, hourPlus12);
  if (amPM === "AM") hour !== 12 ? hour : timeWithoutAMPM.splice(0, 1, hour00);
  // conditionals:
  //// PM: hh + 12
  //   return;
  console.log(timeWithoutAMPM.join(":"));
  return timeWithoutAMPM.join(":");
}

timeConversion("12:01:00AM");
timeConversion("07:05:45PM");
