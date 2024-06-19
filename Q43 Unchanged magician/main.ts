/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
array of magicians’ names. Because the original array will be unchanged, return the new array and store it in
 a separate array. Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name. */

let magicians : string[] = ["Hammad", "Salman","Naveed"]

function show_magicians(magicians : string[]) {
    magicians.forEach(magician => {
        console.log(magician);
        
    })
}

function make_great (magicians : string[]) : string[]{
    let greatMagicians : string[] = []
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} The Great`)
    })
    return greatMagicians
}

console.log('"Original names"');
show_magicians(magicians)

let greatMagicians = make_great(magicians.slice())
console.log('"Great Magician"');

show_magicians(greatMagicians)