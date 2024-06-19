"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magician = ["Hammad", "Salman", "Naveed"];
function show_magicians(magician) {
    magician.forEach(Magician => {
        console.log(Magician);
    });
}
show_magicians(magician);
