// Fix a bug in email host identification
// When a user signs up for our system, we want to identify if they are using a common email host provider such as Gmail or Outlook. We have some integrations built with these platforms that allow us to customize some of our email campaigns. One of your teammates took a first try at writing a function to do this yesterday, and asked you to finish it up today.

// On the left you can see the code they wrote, along with a test case that is currently failing. Looking at version control history, you see that the last change they made was adding the full list of domains. (It was originally hard-coded to "gmail.com" for testing.)

// Instructions
// Diagnose and fix the issue

// If you click the "Run Tests" button, you should see a failing test that suggests that something isn't quite right with this code. Once you fix the issue, you should be able to run the tests again and see it pass. (You may need to click on the green arrows to see log output if you add logging and the test passes. Also note that at smaller screen sizes, "Run Tests" might be a "Play" icon.)

// Note that it is possible (but undesirable) to make the provided test pass without actually fixing the bug, e.g. if you just return true for every case. So make sure you understand the issue!

// Once you have fixed the issue, please leave a comment for your teammates in the Candidate Notes section explaining what the bug was and how you fixed it. If you are unable to fix the issue, leave a comment explaining your current understanding of the issue so your original teammate could help you debug further.

// Here's a template you can use:

// Task #372: Detect common email host providers

// {your comment here}

const commonHosts = [
  "aol.com",
  "att.net",
  "comcast.net",
  "facebook.com",
  "gmail.com",
  "gmx.com",
  "googlemail.com",
  "google.com",
  "hotmail.com",
  "hotmail.co.uk",
  "live.com",
  "mac.com",
  "me.com",
  "mail.com",
  "msn.com",
  "outlook.com",
  "sbcglobal.net",
  "verizon.net",
  "yahoo.com",
  "yahoo.co.uk",
];

function hostForEmail(email) {
  var emailArray = email.split("@");
  return emailArray[emailArray.length - 1];
}

function isCommonEmailHost(email) {
  var host = hostForEmail(email);

  let i = 0;
  while (i < commonHosts.length) {
    if (commonHosts[i] === host) return true;
    i++;
  }
  return false;
}

// describe('should find common email host', function() {
//     it('marks gmail.com as common', function() {
//       assert.equal(isCommonEmailHost('test@gmail.com'), true)
//     })
//   })

console.log(isCommonEmailHost("test@gmail.com"));
