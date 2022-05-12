// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// 1 year = 31536000 sec
// 1 day = 86400 sec
// 1 hour = 3600 sec

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  let arr = [];
  let years = Math.floor(seconds / 31536000);
  years !== 0 && arr.push(years === 1 ? years + " year" : years + " years");

  let secondsLeftAfterYears = seconds % 31536000;
  let days = Math.floor(secondsLeftAfterYears / 86400);
  days !== 0 && arr.push(days === 1 ? days + " day" : days + " days");

  let secondsLeftAfterDays = secondsLeftAfterYears % 86400;
  let hours = Math.floor(secondsLeftAfterDays / 3600);
  hours !== 0 && arr.push(hours === 1 ? hours + " hour" : hours + " hours");

  let secondsLeftAfterHours = secondsLeftAfterDays % 3600;
  let minutes = Math.floor(secondsLeftAfterHours / 60);
  minutes !== 0 &&
    arr.push(minutes === 1 ? minutes + " minute" : minutes + " minutes");

  let secondsLeftAfterMinutes = secondsLeftAfterHours % 60;
  secondsLeftAfterMinutes !== 0 &&
    arr.push(
      secondsLeftAfterMinutes === 1
        ? secondsLeftAfterMinutes + " second"
        : secondsLeftAfterMinutes + " seconds"
    );

  //////////////////// option 1: bad
  //   switch (arr.length) {
  //     case 1:
  //       return arr[0];
  //     case 2:
  //       return arr[0] + " and " + arr[1];
  //     case 3:
  //       return arr[0] + ", " + arr[1] + " and " + arr[2];
  //     case 4:
  //       return arr[0] + ", " + arr[1] + ", " + arr[2] + " and " + arr[3];
  //     case 5:
  //       return (
  //         arr[0] +
  //         ", " +
  //         arr[1] +
  //         ", " +
  //         arr[2] +
  //         ", " +
  //         arr[3] +
  //         " and " +
  //         arr[4]
  //       );
  //     default:
  //       return 0;
  //   }

  //////////////////// option 2: better
  let resultString = "";
  for (let i = 0; i < arr.length - 1; i++) {
    resultString += arr[i] + ", ";
  }
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] + " and " + arr[1];
  if (arr.length > 2)
    return (
      resultString.slice(0, resultString.length - 2) +
      " and " +
      arr[arr.length - 1]
    );
}
