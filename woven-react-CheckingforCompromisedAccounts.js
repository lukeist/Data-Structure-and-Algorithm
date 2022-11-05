// import { User } from "./types"
// import {
//   users as sampleUsers,
//   breaches as sampleBreaches,
//   response as sampleResponse
// } from "./sample";

// function authenticate(email: string, password: string) {
//   const account = sampleUsers.find(a => a.email === email);
//   if (account && account.password === password) {
//     return account;
//   } else {
//     return null;
//   }
// }

async function login(email, password) {
// async function login(email: string, password: string) {
  const account = authenticate(email, password);
  const allBreaches = Array();
  await fetch(
    `https://hackcheck.woventeams.com/api/v4/breachedaccount/${account!.email}`
  )
    .then((res) => res.json())
    .then((json) =>
      json.map((j) => {
        // console.log(j);
        // console.log(account.lastLogin, j.AddedDate, account.lastLogin < j.AddedDate);
        j.IsSensitive === false && 
        j.DataClasses.includes('Passwords') && 
        account!.lastLogin < j.AddedDate &&
        allBreaches.push({
          name: j.Name,
          domain: j.Domain,
          breachDate: j.BreachDate,
          addedDate: j.AddedDate,
        })
          }
      )
    )
    .catch((err) => console.error(err));

//   IsSensitive === false && 
//   DataClasses.includes('Passwords') && 
//   account.lastLogin < AddedDate
  
  console.log(account)
  if (account) {
    // A new breach was detected!
    if (allBreaches.length > 0) {
      return {
        success: true,
        meta: {
          suggestPasswordChange: true,
          // hardcoded for now...
          breachedAccounts: allBreaches,
        },
      };
    } else {
      return { success: true };
    }
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid.",
    };
  }
}

export default login;
