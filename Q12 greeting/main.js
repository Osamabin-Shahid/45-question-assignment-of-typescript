"use strict";
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
name, print a message to them. The text of each message should be the same, but each message should
be personalized with the person’s name.*/
let friendName = ["Usama", "Salman", "Hammad"];
for (let i = 0; i < friendName.length; i++) {
    let message = " Bro! How are you";
    console.log("Hello", friendName[i] + message);
}
