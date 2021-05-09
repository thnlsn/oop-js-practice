"use strict";

// Constuctor Functions
// Arrow functions do not work for constructors because they do not have 'this' which is required
const Person = function (firstName, birthyear) {
  // Instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;

  this.calcAge = function () {
    console.log(2037 - this.birthyear);
  };
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

console.log(ethan.calcAge());
