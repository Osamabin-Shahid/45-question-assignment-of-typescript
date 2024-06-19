// Cars: Write a function that stores information about a car in a Object. The function should always receive a 
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
// with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manufacturer : string,
    model : number,
    [key:string] : any,
}

function carInfo(manufacturer  :string, model : number,...optional : [string,any][]) : Car {
        let car : Car = {manufacturer,model}

        optional.forEach(([key,value]) => car[key] = value);
        return car   
    }
        let carDetail = carInfo("Toyota", 2020, ["color", "Black"])
        console.log(carDetail);
        
