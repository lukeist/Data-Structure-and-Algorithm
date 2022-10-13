// Help with a broken CSV upload
// You come into work one day to find an email in your inbox from Sandy Smithers, an implementation manager at your company.

// From: Sandy Smithers
// To: You
// CC: leslie@csv.org
// Subject: File upload broken - help!

// I was trying to upload this spreadsheet for our new client, The Community Service Volunteers (CC Leslie). I made sure all the names were filled in since that was a problem before, but I'm getting this error:
// https://docs.google.com/spreadsheets/d/1T6ZxAMR8iLivnyivf34Ho5LhG9qWrMswZxiAx3dmUpw/edit#gid=847523638

// ERROR Invalid phone number at CSV Row 12, Column 36

// We really need to get this file uploaded ASAP so we can close out implementation. Can you take a look and give me a few (maybe 3?) options I can present back to the client on how we might be able to fix this in the next 24 hours?

// Thanks!

// – Sandy

// Being the eager engineer that you are, you snap into action to help Sandy come up with some options. Searching through the codebase for their error message, you come across the section of code on the left. (Feel free to change the code to whatever language is most comfortable for you from the available options.)

// Debug and present options
// Your goal is to reply to Sandy's email with 3 options – fixes, workarounds, code changes, etc – she can present back to the client.

// You do not need to make any code changes for this scenario, although you are welcome to do so if it helps you understand the issue.

// We have provided some example phone numbers that you can try out by clicking the "Run Tests" option and looking at the test results pane in the lower-right corner. (You may need to click on the green arrow to expand and see log output if the sample phone numbers are all valid. Also note that at smaller screen sizes, "Run Tests" might be a "Play" icon.)

// Here are some things to consider when coming up with options:

// What data could be changed in the spreadsheet or the original source?
// What assumptions could you make to fill in gaps in the data?
// What code changes could you make to allow the import to proceed?
// What are the tradeoffs or consequences of any of the above approaches that might help Sandy or the client make a decision?
// Your response
// Enter your response in the "Your Notes" tab in the upper-right quadrant. Here is a template you can paste in for your email reply to Sandy and Leslie:

// **From**: You
// **To**: Sandy
// **CC**: Leslie
// **Subject**: re: File upload broken - help!

// {your email to Sandy, an implementation manager who works closely with clients}

function removeNonDigits(str) {
  return str.replace(/\D/g, "");
}
// console.log(removeNonDigits("(123) 456-7890)"));
// console.log(removeNonDigits("(123 456-7890)"));
// console.log(removeNonDigits("(123-456-7890)"));
// console.log(removeNonDigits("123-456-7890"));

function cleansePhoneNumber(phone) {
  // remove parenthesis, hyphens, periods, etc
  var cleansedPhone = removeNonDigits(phone);
  // empty is OK
  if (cleansedPhone !== "" && cleansedPhone.length !== 10) {
    throw new Error("Invalid phone number!");
  }

  return cleansedPhone;
}

// 1. phone number should be 10 digits: there are some have less than 10

// fixes:
// We should contact the customers who have wrong info via emails or their other numbers and ask them to correct their invalid numbers
// workarounds

// code changes:

// Here are some things to consider when coming up with options:

// What data could be changed in the spreadsheet or the original source?
// - Phone number should be 10 digits.
// What assumptions could you make to fill in gaps in the data?

// What code changes could you make to allow the import to proceed?

// What are the tradeoffs or consequences of any of the above approaches that might help Sandy or the client make a decision?

// NOTE: Feel free to test other phone numbers to figure out what's happening
// function main() {
console.log(cleansePhoneNumber("(123) 456-7890"));
console.log(cleansePhoneNumber("123-456-7890"));
console.log(cleansePhoneNumber("456-7890"));
console.log(cleansePhoneNumber(""));

// }

////////// TEST

// let assert = require('chai').assert;

// describe('main', function() {
//   it('sample phone numbers', function() {
//     main()
//   })
// })

// EMAIL:
// **From**: You
// **To**: Sandy
// **CC**: Leslie
// **Subject**: re: File upload broken - help!

// Hey Sandy,

// After reviewing the data and our code, I found out that the provided sheet had some missing/invalid information about the phone numbers. The phone numbers should be 10 digits for our code to work. However, in the spreadsheet, there are some numbers with 7 digits, more or less.

// Here are 3 suggestions of mine:

// 1. Fix the issues, we could either:
// - ask The Community Service Volunteers to contact all customers who have invalid phone numbers via emails or their valid numbers and ask them to correct their invalid numbers.
// - correct the 7-digit numbers ourselves, based on their location/postal code.
//
// For this, the phone data will be changed in the spreadsheet or the original source.

// Pro: We will keep our base code and take off the workload on our side.
// Con: For the former, currently the spreadsheet has 1000 users and although it's not impossible to contact them all, it's tiring and requires a lot of work. Our company and the client could be seen as incompetent. Sent emails and phone calls could be seen as spam as best and harassment as worst. This is also not sustainable in the future when the client has more users (imagine when they have 1 million.) For the latter, it would be wrong if we correct the number ourselves because: (a) one postal code could have more area numbers and (b) we interfere with the integrity of the client's data.

// 2. Workaround: We could ask the client to remove all invalid phone numbers in the spreadsheet for us.
// Pro: The change would be fast and easy on the client's side if they were competent in working with spreadsheets. If not, it could take a bit of time.
// Con: They have to make a backup for the current data and create a new one. The new data is not original and not 'pure'.

// 3. Change the current code: We could accept numbers that are different from 10 digits. For that, we could remove the error alert in the code and accept phone numbers that have numbers of digits different from 10.
// Pro: We will not interfere with the client's existing data. The change would be fast and easy on our side.
// Cons: This is not sustainable, especially in the future when the client has more users. The data be dirty: inaccurate, incomplete, or inconsistent data.

// My take:
// - Short term: Since we don't have much time, we could go with (3) for this particular spreadsheet. It's the fastest and easiest solution now. But we have to trade it off with some dirty data coming in.
// - Long term: The client should work on the form that takes in customers' info. Be sure to accept only valid phone numbers. If they cannot manage to do that, before giving the data to us, they should clean it up with (2.)

// If you have any questions please feel free to ask. Let’s solve this together.
// I look forward to your feedback.
// Cheers,
// Luan
