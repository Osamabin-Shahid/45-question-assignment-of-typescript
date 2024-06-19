// Q16. More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
//  that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

let personName: string[] = ["Zain", "Talha", "Ayesha", "Najma"];
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
