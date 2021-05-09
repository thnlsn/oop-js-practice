"use strict";

// Constuctor Functions
// Arrow functions do not work for constructors because they do not have 'this' which is required
const Person = function (firstName, birthyear) {
  // Instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;
};

// The difference between a normal function and a constructor function is that a constructor function is called with new keyword (i.e. new String())
// new is an operator because it ___
const thomas = new Person("Thomas", 1997);
console.log(thomas);

// Calling a function with the new operator does a lot more than just invoking the function...
// 1. New {} is created
// 2. Function is called, and 'this' = {}
// 3. {} is linked to prototype
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
  console.log(2037 - this.birthyear);
};

thomas.calcAge();

console.log(thomas.__proto__); // Prototype of thomas is the prototype property of the constructor function
console.log(Person.prototype); // This is the prototype property of the constructor function
console.log(thomas.__proto__ === Person.prototype); // True because they both point to the same prototype property (there is only 1 to which all instances reference)

// Person.prototype is NOT the prototype of Person, it is actually what WILL BE USED as the prototype property to all instances of Person (i.e. thomas)
console.log(Person.prototype.isPrototypeOf(thomas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
