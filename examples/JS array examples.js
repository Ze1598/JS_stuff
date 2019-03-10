//Create an array
let newYearsResolutions = ['One', 'Two', 'Three'];
console.log(newYearsResolutions); //[ 'One', 'Two', 'Three' ]
console.log();

//Acces an element from the array
let listItem = newYearsResolutions[0];
console.log(listItem); // One
console.log(newYearsResolutions[2]); //Three
console.log(newYearsResolutions[3]); //undefined
console.log();

//Modify an element from the array
newYearsResolutions[1] = 2;
console.log(newYearsResolutions); //2
console.log();

//Obtain the length (number of elements) in an array or string
console.log(newYearsResolutions.length); //3
console.log('abcdef'.length); //6
console.log();

//Append new elements to an array
newYearsResolutions.push('Four', 'Five');
console.log(newYearsResolutions); //[ 'One', 2, 'Three', 'Four', 'Five' ]
console.log();

//Remove the last element from an array
newYearsResolutions.pop();
console.log(newYearsResolutions); //[ 'One', 2, 'Three', 'Four' ]

console.log();
console.log();

//Remove the first element from an array
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList); //[ 'bananas','coffee beans', 'brown rice',  'pasta',  'coconut oil', 'plantains' ]
console.log();

//Add an element to beginning of an array
groceryList.unshift('popcorn');
console.log(groceryList); //[ 'popcorn',  'bananas',  'coffee beans',  'brown rice',  'pasta',  'coconut oil',  'plantains' ]
console.log();

//Access a slice (portion) of the list, in the range of (begin,end) with 'end' excluded
console.log(groceryList.slice(1,4)); //[ 'bananas', 'coffee beans', 'brown rice' ]

console.log();
console.log();

//let VS const arrays
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

//In both cases the arrays remain mutable (changeable), but in the case of const, it's not possible to reassign the variable
condiments.push('Mayo');
console.log(condiments); //[ 'Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha', 'Mayo' ]
condiments =['Ketchup'];
console.log(condiments); //[ 'Ketchup' ]
console.log();

utensils.pop();
console.log(utensils); //[ 'Fork', 'Knife', 'Chopsticks' ]
// utensils = ['Fork']; //error: Assignment to constant variable
console.log();
