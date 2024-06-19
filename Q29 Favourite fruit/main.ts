// Q29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
//  that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits : string[] = ["Apple", "Mango", "Banana", "Cherry", "Orange"]
console.log(favorite_fruits);

/*• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


if (favorite_fruits.includes("Apple")){
    console.log("OH! You really like Apple");   
}
if (favorite_fruits.includes("Mango")){
    console.log("OH! You really like Mango");   
}
if (favorite_fruits.includes("Banana")){
    console.log("OH! You really like Banana");   
}
if (favorite_fruits.includes("Cherry")){
    console.log("OH! You really like Cherry");   
}
if (favorite_fruits.includes("Orange")){
    console.log("OH! You really like Orange");   
}