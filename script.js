"use strict";

// Arrow functions do not work for constructors because they do not have 'this' which is required
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

// The difference between a normal function and a constructor function is that a constructor function is called with new keyword (i.e. new String())
// new is an operator because it ___
const thomas = new Person("Thomas", 1997);
console.log(thomas);
const marilyn = new Person("Marilyn", 1997);
console.log(marilyn);

// Calling a function with the new operator does a lot more than just invoking the function...
// 1. New {} is created
// 2. Function is called, and 'this' = {}
// 3. {} is linked to prototype
// 4. Function automatically returns the {}, so it is the value of the {} when called.
