// 1. Question
// Select the expressions that will be evaluated as true.
// if(/* expression */) { console.log("TRUE") };
// (Select all acceptable answers.)
// 1 == 1
// 1 === 1
// 1 <> 2
// 1 && 0
// 1 == "1"
// Answer:
// 1 == 1
// 1 === 1
// 1 && 0
// 1 == "1"

// 2. Question
// Given the following HTML code, which snippets of CSS code would result in green text?
//  Label
// (Select all acceptable answers.)
// a. label{ color: blue; } div.label{ color: red; } div { color: green !important; }
// b. label{ color: red; } div.label { color: green; } div { color: blue; }
// c. .label { color: red; } div.label { color: blue; } div { color: green; }
// d. label { color: green; } div.label{ color: red; } div { color: blue; }
// Answer:
// label{ color: red; }
// div.label { color: green; }
// div { color: blue; }

// 3. Question
// In a graphics-based web application, the colors array holds color-names and their corresponding color-codes. Users can suggest and add new color-names that correspond to the color-codes, like below:
let colors = [];
colors["Red"] = "#FF0000"; // suggested by user - valid color code
colors["SomeColor"] = "#GFFF00"; // suggested by user - invalid color code (G is invalid hex number)
// The function isValidHexColor correctly returns true if a color code is valid, else it returns false.
function isValidHexColor(colorCode) {
  // Correct implementation. Returns true for a valid color code like #00AAFF
}
// Fill in the BLANKs in the following function that filters out array elements with invalid color codes and returns an array with valid elements:
function filterValid(colors) {
  let filteredColors = [];
  Object.keys(colors).forEach(function (colorName) {
    if (isValidHexColor(BLANK)) {
      filteredColors[BLANK] = BLANK;
    }
  });
  return filteredColors;
}
// For example, the code below should print Red: #FF0000:
let filteredColors = filterValid(colors);
for (const [key, value] of Object.entries(filteredColors)) {
  // console.log(${key}: ${value});
}
// Answer:
function filterValid(colors) {
  let filteredColors = [];
  Object.keys(colors).forEach(function (colorName) {
    if (isValidHexColor(colors[colorName])) {
      filteredColors[colorName] = colors[colorName];
    }
  });
  return filteredColors;
}

// 4. Question
// Finish the SubscribeButton component so that it renders the following HTML:
`<button>Click to subscribe!</button>` // After the button is clicked, it should no longer be visible and should render the following:
`<p>Thank you for subscribing!</p>`;
// The component should use React Hooks.

// Based on this code:
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const SubscribeButton = (props) => {
  // Write your code here
  return undefined;
};

document.body.innerHTML = "<div id='root'> </div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SubscribeButton />);
setTimeout(() => console.log(document.body.innerHTML));

// Answer:
const SubscribeButton = () => {
  const [subscribed, setSubscribed] = React.useState(false);

  if (subscribed) {
    return <p>Thank you for subscribing!</p>;
  }

  return (
    <button onClick={() => setSubscribed(true)}>Click to subscribe!</button>
  );
};

// 3. Question
// A computer game allows players to perform special actions using the key combinations 'QEE' or 'ZCC'. A player gets extra points if they use these combinations equally in a gaming session. Skilled players who don't use any of the special actions also get extra points.
// Complete the function matchKeyCombo, which returns true if the number of occurrences of 'QEE' matches the number of occurrences of 'ZCC' in a sequence of keypresses received from a player, or if both key combinations have an occurrence of 0. Otherwise it should return false.
// String comparison should be case insensitive.
// Answer:
function matchKeyCombo(keypresses) {
  let qeeCount = 0;
  let zccCount = 0;

  for (let i = 0; i < keypresses.length; i++) {
    if (keypresses.substring(i, i + 3).toUpperCase() === "QEE") {
      qeeCount++;
    } else if (keypresses.substring(i, i + 3).toUpperCase() === "ZCC") {
      zccCount++;
    }
  }

  return qeeCount === zccCount || (qeeCount === 0 && zccCount === 0);
}
