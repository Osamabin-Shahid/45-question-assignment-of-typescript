// 23 .More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests.
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");

console.log("fruits" == "fruits");

// • Tests using the lower case function
console.log("Tests using the lower case function");

let veg = "Carrot";
console.log(veg.toLowerCase() == "carrot");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
console.log("Numerical test Equality and Inequality");

console.log(3 == 3);
console.log(5 < 2);
console.log(5 <= 5);
console.log(5 >= 9);

// • Tests using "and" and "or" operators
console.log("Tests using and And or operators");

console.log(true && false);
console.log(true || false);

// • Test whether an item is in a array
console.log("Test whether an item is in a array");

let fruitName: string[] = ["Apple", "Peach", "Mango", "Orange"];

console.log(fruitName.includes("Mango"));

// • Test whether an item is not in a array
console.log("Test whether an item is in a array");

let fruitName2: string[] = ["Apple", "Peach", "Mango", "Orange"];

console.log(fruitName.includes("Banana"));
