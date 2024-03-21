// p: obj, string;
// r: string

// '$LOCATION$': '$ANIMAL$ park',
// '$ANIMAL$': 'dog',
//
//                                    i
// Walk the $ANIMAL$ in the $LOCATION$!
//                                     j

const tokenTransform = (str, tokens) => {
  let i = 0,
    j = 1,
    s = "";

  while (i < str.length) {
    if (str[i] === "$") {
      if (str[j] === "$") {
        const token = str.slice(i, j + 1);
        const sub = tokenTransform(tokens[token], tokens);
        tokens[token] = sub;
        s += sub;
        i = j + 1;
        j = i + 1;
      } else {
        j++;
      }
    } else {
      s += str[i];
      i++;
      j++;
    }
  }
  return s;
};

// const tokens = {
//   $LOCATION$: "$ANIMAL$ park",
//   $ANIMAL$: "dog",
// };
// console.log(tokenTransform("Walk the $ANIMAL$ in the $LOCATION$!", tokens));
// -> 'Walk the dog in the dog park!'
// const tokens = {
//   $ADJECTIVE_1$: "quick",
//   $ADJECTIVE_2$: "eager",
//   $ADVERBS$: "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
//   $VERB$: "hopped $DIRECTION$",
//   $DIRECTION$: "North",
// };
// console.log(
//   tokenTransform("the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward", tokens)
// );
// // -> 'the quick fox quickly and eagerly hopped Northward'
// const tokens = {
//   $B$: "epicly $C$",
//   $A$: "pretty $B$ problem $D$",
//   $D$: "we have",
//   $C$: "clever",
// };
// console.log(tokenTransform("What a $A$ here!", tokens));
// // -> 'What a pretty epicly clever problem we have here!'
// const tokens = {
//   $1$: "a$2$",
//   $2$: "b$3$",
//   $3$: "c$4$",
//   $4$: "d$5$",
//   $5$: "e$6$",
//   $6$: "f!",
// };
// console.log(tokenTransform("$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$", tokens));
// // -> 'abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!'
const tokens = {
  $0$: "$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$",
  $1$: "$2$$2$$2$$2$$2$$2$$2$$2$$2$",
  $2$: "$3$$3$$3$$3$$3$$3$$3$",
  $3$: "$4$$4$$4$$4$$4$$4$",
  $4$: "$5$$5$$5$$5$$5$",
  $5$: "$6$$6$$6$$6$",
  $6$: "$7$$7$$7$",
  $7$: "$8$$8$",
  $8$: "",
};
console.log(tokenTransform("z$0$z$0$z$0$z$0$z$0$z$0$z", tokens));
// // -> 'zzzzzzz'
