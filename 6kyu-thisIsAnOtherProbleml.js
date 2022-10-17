// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

class NamedOne {
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.full = first + " " + last;
  }

  get firstName() {
    return this.first;
  }

  first(name) {
    this.first = name;
    return this.first;
  }

  lastName(name) {
    this.last = name;
    return this.last;
  }

  fullName(name) {
    let nameArr = name.split(" ");
    if (nameArr.length < 2) return this.full;

    this.first = nameArr[0];
    this.last = nameArr[1];

    return this.first + " " + this.last;
  }
}

var namedOne = new NamedOne("Naomi", "Wang");
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);

namedOne.firstName = "john";
console.log(namedOne.firstName);
