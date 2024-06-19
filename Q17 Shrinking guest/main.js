"use strict";
/* Question 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. */
let personName = ["Zain", "Talha", "Ayesha", "Najma"];
personName.forEach((Guest) => {
    console.log(`Hello ${Guest}, i would like to invite you for a dinner`);
});
console.log(`\t${["Zain"]} can not come for dinner\t`);
personName.splice(0, 1, "Usama");
personName.forEach((Guest) => {
    console.log(`Hello ${Guest}, i would like to invite you for a dinner`);
});
console.log("\tHello i find a bigger dinner table\t");
personName.unshift("Hammad");
personName.splice(3, 0, "Salman");
personName.push("Naveed");
personName.forEach((Guest) => {
    console.log(`Hello ${Guest}, i would like to invite you for a dinner`);
});
console.log("\tSorry! I can invite only two people for dinner\t");
while (personName.length > 2) {
    let removedGuest = personName.pop();
    console.log(`Sorry ${removedGuest} its not posiible to invite you for dinner `);
}
personName.forEach(Guest => {
    console.log(`${Guest} You are still invited for dinner`);
});
personName.splice(0, personName.length);
console.log(personName);
