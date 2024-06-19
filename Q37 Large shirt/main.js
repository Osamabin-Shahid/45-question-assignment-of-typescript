"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium 
// shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Medium", message = "Hello world") {
    console.log(`The shirt size is ${size} and the message ${message} printed on it`);
}
make_shirt();
make_shirt("Small");
make_shirt("Large", "I Love coding");
