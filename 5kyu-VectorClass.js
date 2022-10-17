// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/javascript
class Vector {
  constructor(components) {
    this.components = components;
  }

  add(arr) {
    if (arr.components.length !== this.components.length) {
      throw "Parameter is not a number!";
    }
    return new Vector(this.components.map((c, i) => c + arr.components[i]));
  }

  subtract(arr) {
    if (arr.components.length !== this.components.length) {
      throw "Parameter is not a number!";
    }
    return new Vector(this.components.map((c, i) => c - arr.components[i]));
  }

  dot(arr) {
    if (arr.components.length !== this.components.length) {
      throw "Parameter is not a number!";
    }
    return this.components
      .map((c, i) => c * arr.components[i])
      .reduce((a, b) => a + b, 0);
  }

  norm() {
    return Math.sqrt(
      this.components.map((c, i) => c ** 2).reduce((a, b) => a + b, 0)
    );
  }

  toString() {
    return "(" + this.components.toString() + ")";
  }

  equals(arr) {
    // console.log(this.components, arr.components);

    for (let i = 0; i < arr.components.length; i++) {
      console.log(this.components, arr.components);
      if (arr.components[i] !== this.components[i]) return false;
    }

    return true;
  }
}

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

// console.log(a.add(b)); // should return a new Vector([4, 6, 8])
// console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
// console.log(a.dot(b)); // should return 1*3 + 2*4 + 3*5 = 26
// console.log(a.norm()); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// console.log(a.add(c)); // throws an error

console.log(a.equals(new Vector([1, 2, 3])));
console.log(b.equals(new Vector([3, 4, 5])));
console.log(a.equals(b));
