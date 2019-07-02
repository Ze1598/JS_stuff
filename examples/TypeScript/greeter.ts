class Student {
	// Declare a `string` class property
	fullName: string;
	// Create the class constructor
	// By default, these fields are `public` but because this is an example, we\
	// setting them explicitly
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`
	}
}

// Interfaces are used to describe objects, i.e., describe their properties:\
// names, types and quantity
interface Person {
	firstName: string;
	lastName: string;
}

// Refactor this function to make use of interfaces
/*
function greeter(person: string) {
	// Because `person` has a type annotation of `string`, the compiler will\
	// throw an error if the argument passed to the function is not of that\
	// type
	return "Hello " + person
}
*/
function greeter(person: Person) {
	// The function still receives one arguments, but now it expects that\
	// argument to comply to the `Person` interface
	return `Hello ${person.firstName} ${person.lastName}`
}

// We can make `user` a simple object to comply with the `Person` interface
// let user = { firstName: "Jane", lastName: "User" }
// Or we can make it a `Student` object which has the fields of `Person`\
// (`firstName` and `lastName`)
let user = new Student("Jane", "M.", "Mcnamara")

document.body.innerHTML = greeter(user)