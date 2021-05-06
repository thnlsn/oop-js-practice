"use strict";

// Arrow functions do not work for constructors because they do not have 'this' which is required
const Person = function (firstName, birthyear) {};

// The difference between a normal function and a constructor function is that a constructor function is called with new keyword (i.e. new String())
