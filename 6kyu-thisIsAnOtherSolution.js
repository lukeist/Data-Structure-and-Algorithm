// https://www.codewars.com/kata/54834b3559e638b39d0009a2/train/javascript

class OnceNamedOne {
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(firstName) {
    console.log("Immutable First Name");
  }

  set lastName(lastName) {
    console.log("Immutable Last Name");
  }

  set fullName(fullName) {
    console.log("Immutable Full Name");
  }
}

var onceNamed = new OnceNamedOne("Naomi", "Wang");

// ...then...
onceNamed.firstName; // -> "Naomi"
onceNamed.lastName; // -> "Wang"
onceNamed.fullName; // -> "Naomi Wang"
console.log(onceNamed.firstName);
console.log(onceNamed.lastName);
console.log(onceNamed.fullName);

// ...if you try : ...
onceNamed.firstName = "Bill";
// ...or...
onceNamed["lastName"] = "Smith";

// ...then...
onceNamed["firstName"]; // -> "Naomi"
onceNamed["lastName"]; // -> "Wang"
onceNamed["fullName"]; // -> "Naomi Wang"

console.log(onceNamed["firstName"]);
console.log(onceNamed["lastName"]);
console.log(onceNamed["fullName"]);
