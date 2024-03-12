// Given map {USER=>admin, HOME=>/%USER%/home}
// Input: I am %USER% My home is %HOME% Output: I am admin My home is /admin/home
//
// USER= bob
// HOME= /home/%USER% should be substituted as : /home/bob ex2:
// home/ %USER% -> /home/bob
// Hello %USER% -> Hello bob!
// ex3:
// The user %USER% is at 50%% -> The user bob is at 50%
//

//
// const map1 = { USER: "admin", HOME: "/%USER%/home" };
// const input1 = "I am %USER% My home is %HOME%";
//                      i
// I am admin My home is %HOME%
//                            j

const substitutedTokens = (map, str) => {
  let i = 0,
    j = 1;

  //   let s = "";

  while (j < str.length) {
    if (str[i] === "%") {
      if (str[j] === "%") {
        const tokenWithPercent = str.slice(i, j + 1);
        const token = tokenWithPercent.split("%")[1];
        if (token in map) {
          str = str.replace(tokenWithPercent, map[token]);
          j = i + 1;
        } else {
          str = str.replace(tokenWithPercent, "%");
          i++;
          j++;
        }
      } else {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return str;
};

const map1 = { USER: "admin", HOME: "/%USER%/home" };
const input1 = "I am %USER% My home is %HOME%";
console.log(substitutedTokens(map1, input1));
// Output: I am admin My home is /admin/home

const map2 = {
  USER: "bob",
  HOME: "/home/%USER%",
};
// should be substituted as : /home/bob

const input2a = "/home/%USER%"; // -> /home/bob
const input2b = "Hello %USER%!"; // -> Hello bob!
const input2c = "The user %USER% is at 50%%"; //-> The user bob is at 50%
console.log(substitutedTokens(map2, input2a));
console.log(substitutedTokens(map2, input2b));
console.log(substitutedTokens(map2, input2c));
