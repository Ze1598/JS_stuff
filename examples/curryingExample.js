// Note: run this script on the command line with "node -r esm currying.js"

// The principle of currying allows the chaining of functions by having a\
// single function return another function which itself returns a third\
// function and so on. As each function is returned, arguments are\
// graually passed to the functions instead of passing all arguments at\
// once for a single function

// In this case, `curriedFunction` returns an arrow function which takes one\
// argument (`name`). Then, the first arrow function returns a second arrow\
// function, which also takes one argument (`specieis`). Lastly, the second\
// arrow function returns a third arrow function which takes one argument\
// as well (`color`). This third function is the one that returns an actual\
// value (a string), which makes use of all the arguments passed to the\
// previous arrow functions
let curriedFunction = 
	(name) =>
		(species) =>
			(color) =>
				`${name} is a ${color} ${species}.`

// Thus, to call `curriedFunction` and obtain a value at the end, in the first\
// function call we pass it one argument, and then pass another argument to\
// the first function call (that is, pass one argument to the function\
// returned by the first function call), and then pass pass one argument to\
// the second function call (that is, pass one argument to the function\
// returned by the second function call)
console.log(curriedFunction("Pikachu")("pokémon")("yellow"))

// Each returned function can also be assigned to a variable to be used later
let firstReturnedFunction = curriedFunction("Agumon")
let secondReturnedFunction = firstReturnedFunction("digimon")
let thirdReturnedFunction = secondReturnedFunction("yellow")
// Here we pass an argument to the first returned function and then an argument\
// to the second returned function
console.log(firstReturnedFunction("digimon")("yellow"))
// Here we only pass an argument to the second returned function
console.log(secondReturnedFunction("yellow"))
// Here we don't pass any arguments, as the third returned function returns\
// a string instead of another function
console.log(thirdReturnedFunction)
// -----------------------------------------------------------------------------

// In this demonstration we will use the `lodash` library to make a function\
// curriable. We'll use the same example function from above.
import _ from "lodash"

// This is a non-curried version of the `curriedFunction` function (it receives\
// all three arguments at once and returns the string immediately)
curriedFunction = (name, species, color) =>
	`${name} is a ${color} ${species}.`

// Transform the `curriedFunction` function into an actual curried function with\
// the `curry` function of the `lodash` library
curriedFunction = _.curry(curriedFunction)

// Now use `curriedFunction` as a curried function to demonstrate it has been\
// transformed into a curried function
console.log(curriedFunction("Pikachu")("pokémon")("yellow"))