"use strict";
// Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// and titlecase.
let personName = "talha";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
let couple = "areeba usama";
console.log(couple.toLowerCase());
console.log(couple.toUpperCase());
console.log(couple.charAt(0).toUpperCase() + couple.slice(1, 6).toLowerCase() + " " + couple.charAt(7).toUpperCase() + couple.slice(8, 12));
