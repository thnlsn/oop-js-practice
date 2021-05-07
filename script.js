"use strict";

// Arrow functions do not work for constructors because they do not have 'this' which is required
const Person = function (firstName, birthyear) {
  console.log(this);
};

// The difference between a normal function and a constructor function is that a constructor function is called with new keyword (i.e. new String())
// new is an operator because it ___
new Person("Thomas", 1997);

// Calling a function with the new operator does a lot more than just invoking the function...
// 1. New {} is created
// 2. Function is called, and 'this' = {}
// 3. {} is linked to prototype
// 4. function automatically returns the {}
