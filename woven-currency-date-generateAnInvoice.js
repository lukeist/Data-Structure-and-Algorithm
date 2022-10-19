// Prorating Subscriptions
// Background
// Our company has started selling to larger customers, so we are creating subscription tiers with different feature sets to cater to our customers’ unique needs. We previously charged every customer a flat fee per month, but now we plan on charging for the number of users active on the customer's subscription plan. As a result, we're changing our billing system.

// Instructions
// You’ve picked up the work item to implement the logic to compute the monthly charge:

// Prorating Subscriptions (#8675309)
// We'd like you to implement a monthlyCharge function to calculate the total monthly bill for a customer.

// Customers are billed based on their subscription tier. We charge them a prorated amount for the portion of the month each user’s subscription was active. For example, if a user was activatedOn or deactivatedOn part way through the month, then we charge them only for the days their subscription was active.

// We want to bill customers for all days users were active in the month (including any activation and deactivation dates, since the user had some access on those days).

// Notes
// Here’s an idea of how we might go about this:

// Calculate a daily rate for the subscription tier
// For each day of the month, identify which users had an active subscription on that day
// Multiply the number of active users for the day by the daily rate to calculate the total for the day
// Return the running total for the month at the end
// Testing
// For some examples showing the calculation in action, see the provided unit tests. The provided tests only cover a few cases, so you should plan to add your own tests to ensure that your solution handles any edge cases. You should be able to follow the existing patterns for naming and constructing tests to add your own.

// Notes
// It’s more important for the return value to be correct than it is for the algorithm to be highly optimized.
// You can store intermediate results as any kind of decimal type (e.g. float, double). You do not need to round values until the last step.
// You should not change function names or return types of the provided functions since our test cases depend on those not changing.

// /**
//  * Computes the monthly charge for a given subscription.
//  *
//  * @returns {number} The total monthly bill for the customer in cents, rounded
//  * to the nearest cent. For example, a bill of $20.00 should return 2000.
//  * If there are no active users or the subscription is null, returns 0.
//  *
//  * @param {string} month - Always present
//  *   Has the following structure:
//  *   "2022-04"  // April 2022 in YYYY-MM format
//  *
//  * @param {object} subscription - May be null
//  *   If present, has the following structure:
//  *   {
//  *     'id': 763,
//  *     'customerId': 328,
//  *     'monthlyPriceInCents': 359  // price per active user per month
//  *   }
//  *
//  * @param {array} users - May be empty, but not null
//  *   Has the following structure:
//  *   [
//  *     {
//  *       'id': 1,
//  *       'name': "Employee #1",
//  *       'customerId': 1,
//  *
//  *       // when this user started
//  *       'activatedOn': new Date("2021-11-04"),
//  *
//  *       // last day to bill for user
//  *       // should bill up to and including this date
//  *       // since user had some access on this date
//  *       'deactivatedOn': new Date("2022-04-10")
//  *     },
//  *     {
//  *       'id': 2,
//  *       'name': "Employee #2",
//  *       'customerId': 1,
//  *
//  *       // when this user started
//  *       'activatedOn': new Date("2021-12-04"),
//  *
//  *       // hasn't been deactivatedOn yet
//  *       'deactivatedOn': null
//  *     },
//  *   ]
//  */

function monthlyCharge(month, subscription, users) {
  // example: current month: 2011-03
  //        2011-02-01   2011-03-01   2011-04-01
  // ------------o------------o------------o------------
  // lastMonthFirstDay   monthFirstDay  nextMonthFirstDay
  const lastMonthFirstDay = new Date(month);
  const monthFirstDay = nextDay(lastDayOfMonth(lastMonthFirstDay));
  const nextMonthFirstDay = nextDay(lastDayOfMonth(monthFirstDay));
  const milisecPerDay = 1000 * 60 * 60 * 24;

  let total = 0;

  // 1. Calculate a daily rate for the subscription tier
  const { monthlyPriceInCents } = subscription;
  const dailyRate = (monthlyPriceInCents * 12) / 365;

  // 2. For each day of the month, identify which users had an active subscription on that day
  const usersOnThisMonth = users.filter(
    (user) => user.activatedOn < nextMonthFirstDay
  );

  // 3. Multiply the number of active users for the day by the daily rate to calculate the total for the day
  for (let user of usersOnThisMonth) {
    let { activatedOn, deactivatedOn } = user;
    !deactivatedOn && (deactivatedOn = Infinity);

    // --------o--------|--------|--------x--------   = monthlyPriceInCents
    //     active     currM     nextM    deactive

    activatedOn <= monthFirstDay &&
      nextMonthFirstDay <= deactivatedOn &&
      (total += monthlyPriceInCents);

    // --------|--------o--------|--------x--------   = (nextM - active) * dailyRate
    //     currM     active   nextM    deactive

    monthFirstDay < activatedOn &&
      nextMonthFirstDay <= deactivatedOn &&
      (total +=
        (Math.round(nextMonthFirstDay - activatedOn) / milisecPerDay) *
        dailyRate);

    // --------|--------o--------x--------|--------   = (deactive - active) * dailyRate
    //      currM    active   deactive   nextM

    monthFirstDay < activatedOn &&
      deactivatedOn < nextMonthFirstDay &&
      (total +=
        (Math.round(deactivatedOn - activatedOn) / milisecPerDay) * dailyRate);

    // --------o--------|--------x--------|--------   = (deactive - currM) * dailyRate
    //     active    currM    deactive   nextM

    activatedOn <= monthFirstDay &&
      deactivatedOn < nextMonthFirstDay &&
      (total +=
        (Math.round(deactivatedOn - monthFirstDay) / milisecPerDay) *
        dailyRate);
  }

  // 4. Return the running total for the month at the end
  return Math.round(total);
}

/*******************
 * Helper functions *
 *******************/

/**
 * Takes a Date instance and returns a Date which is the first day
 * of that month. For example:
 *
 * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
 *
 * Input type: Date
 * Output type: Date
 **/
function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Takes a Date object and returns a Date which is the last day of that month.
 *
 * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
 *
 * Input type: Date
 * Output type: Date
 **/
function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * Takes a Date object and returns a Date which is the next day.
 * For example:
 *
 * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
 * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
 *
 * Input type: Date
 * Output type: Date
 **/
function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

//   let assert = require('chai').assert;

const users = [
  {
    id: 1,
    name: "Employee #1",
    activatedOn: new Date("2019-01-01"),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: "Employee #2",
    activatedOn: new Date("2019-01-01"),
    deactivatedOn: null,
    customerId: 1,
  },
];

const plan = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};

// describe('monthlyCharge', function() {
//   it('works when no users are active', function () {
//     assert.equal(monthlyCharge('2018-10', plan, users), 0);
//   });

//   it('works when the active users are active the entire month', function() {
//     const expectedUserCount = 2;
//     assert.closeTo(monthlyCharge('2020-12', plan, users), expectedUserCount * 5000, 1);
//   });
// });

console.log(monthlyCharge("2020-12", plan, users));
