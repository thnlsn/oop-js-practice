"use strict";

// Constuctor Functions
// Arrow functions do not work for constructors because they do not have 'this' which is required
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
}; // Inside the function block {} is the object that will be returned when this constructor is called with the new keyword

// The difference between a normal function and a constructor function is that a constructor function is called with new keyword (i.e. new String())
// new is an operator because it ___
const thomas = new Person("Thomas", 1997);
console.log(thomas);

// Calling a function with the new operator does a lot more than just invoking the function...
// 1. New {} is created
// 2. Function is called, and 'this' = {}
// 3. {} is linked to prototype ---------- via the .__proto__ property
// 4. Function automatically returns the {}, so it is the value of the {} when called.

const marilyn = new Person("Marilyn", 1996);
const ethan = new Person("Ethan", 1998);
console.log(marilyn);
console.log(ethan);

const edgardo = "eggy";

// instance of operator checks whether an instance is from a specific constructor
console.log(thomas instanceof Person);
console.log(edgardo instanceof Person);

// Prototypes
// Every object in JavaScript has the prototype property
// Anything defined on this prototype property will be available on children of the constructor function
// This is better than defining the function in the constructor, because you will not by making a copy of the same method 1000 times, instead it will simply be available via prototypal inheritance
// Only one function exists, but all children can access it
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

thomas.calcAge();

console.log(thomas.__proto__); // Prototype of thomas is the prototype property of the constructor function
console.log(Person.prototype); // This is the prototype property of the constructor function
console.log(thomas.__proto__ === Person.prototype); // True because they both point to the same prototype property (there is only 1 to which all instances reference)

// Person.prototype is NOT the prototype of Person, it is actually what WILL BE USED as the prototype property to all instances of Person (i.e. thomas)
console.log(Person.prototype.isPrototypeOf(thomas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype is bad naming on JavaScript
// A more apt name would be something like 'Person.prototypeOfInstances' or 'Person.prototypeOfLinkedObjects'

// Adding anything to the prototype property will make it available to all instances
Person.prototype.species = "Homo Sapiens"; // All Person instances will have access to this via the __proto__ property
console.log(thomas.__proto__.species);
console.log(thomas.species); // .__proto__ is not neccessary because of the prototype chain
// This syntax is possible because JavaScript will always first check the the objects own properties, and if it is unable to find it, it will check the __proto__ property

// Properties that are directly inside the constructor block will be 'own properties' whereas prototype accessible properties are simply able to be accessed in the same syntax
console.log(thomas.hasOwnProperty("firstName")); // true
console.log(thomas.hasOwnProperty("species")); // false

// But where did thomas get access to the .hasOwnProperty method?
// 1. It checks thomas' own properties... Nothing
// 2. It checks thomas' .__proto__ property (which is Person.prototype)... Nothing
// 3. It checks Person's .__proto__ property (which is the built-in Object.prototype)... It found one of many built-in and widely inherited object properties! .hasOwnProperty!
// .hasOwnProperty is called on thomas with 'this' set to thomas itself, so it is as if it is an own method

// This is a visualization of what is literally happening when you look-up the prototype chain
console.log(thomas.__proto__); // Person.prototype
console.log(thomas.__proto__.__proto__); // Object.prototype
console.log(thomas.__proto__.__proto__.__proto__); // null

// .constructor points back to the constructor function that a prototype is from
console.dir(Person.prototype.constructor); // Person
console.dir(thomas.__proto__.constructor); // Person\

const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // This shorthand to create arrays is the same as new Array
console.log(arr.__proto__); // This will show you all the built in array methods and properties
console.log(arr.__proto__ === Array.prototype); // Remember that .__proto__ on an instance and .prototype on a constructor are referencing the same thing

// Because arrays are objects, they have access to all Object prototype properties, at the top of the prototype chain
console.log(arr.hasOwnProperty("1")); // true
console.log(arr.hasOwnProperty("10")); // false

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going ${this.speed} km/h`);
};

const tesla = new Car("Tesla", 120);
const delorian = new Car("Delorian", 95);

delorian.accelerate();
delorian.accelerate();
delorian.accelerate();
delorian.brake();

tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();

// ES6 Classes
// They can be created in both ways that a function can be, because they are simply a kind of function (like constructor function)

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // Static method
  static greeting() {
    console.log("Hey! 👋");
  }
}
// Classes are not hoisted, even if they are a declaration rather than expression
// Classes are first-class citizens
// Classes are executed in strict mode (regardless if you have enabled it or not)

const jessica = new PersonCl("Jessica", 1996);
PersonCl.greeting();

// Object.create()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

// Create an object bronn, with PersonProto as it's .__proto__ or prototype
const bronn = Object.create(PersonProto);
console.log(bronn);
bronn.name = "Bronn";
bronn.birthYear = 2002;
bronn.calcAge();

console.log("\n\n\n\n\n\n\n\n");

class Automobile {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed += 10;
    this.speed = speed * 1.6;
  }
}

const camry = new Automobile("Camry", 120);
console.log(camry.speedUS);
camry.accelerate();
camry.accelerate();
camry.accelerate();
camry.accelerate();
