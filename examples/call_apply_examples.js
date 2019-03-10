/*
This script exemplifies the difference between call() and apply()

While the call() method takes arguments separately (e.g.
call(test_object, arg1, arg2) ), apply takes arguments as a
single array (e.g. apply(test_object, [arg1, arg2]) ).
*/

// The object with the method to be called/applied using other\
// objects
person = {
	fullName: function () {
		return `${this.firstName} ${this.lastName}`;
	},
	fullNameCountry: function (country) {
		return `${this.firstName} ${this.lastName}, ${country}`;
	}
}

person1 = {
	firstName: "Jordan",
	lastName: "Peterson"
}

person2 = {
	firstName: "Stephen",
	lastName: "Fry"
}

// Example for call()
console.log("call() examples:")
// ---------------------------------------------------------------------------

// Call the person object's `fullName` method on person1
console.log("person.fullName.call(person1):", person.fullName.call(person1))
// This time we call the person object's `fullNameCountry`\
// method, again on person1, but with an extra argument since\
// the method itself asks for one
console.log("person.fullNameCountry.call(person1, \"Canada\"):", 
	person.fullNameCountry.call(person1, "Canada")
)

// Call the person object's `fullName` method on person2
console.log("person.fullName.call(person2):", person.fullName.call(person2))
// This time we call the person object's `fullNameCountry`\
// method, again on person2, but with an extra argument since\
// the method itself asks for one
console.log("person.fullNameCountry.call(person2, \"United Kingdom\"):",
	person.fullNameCountry.call(person2, "United Kingdom")
)

// ---------------------------------------------------------------------------


// Example for apply()
console.log("\napply() examples")
// ---------------------------------------------------------------------------

// This works exactly the same as with call(), except here we are using apply()
console.log("person.fullName.apply(person1):", person.fullName.apply(person1))
// The difference between this and what was used with call() is that here we need\
// to pass the argument inside an array
console.log("person.fullNameCountry.apply(person1, [\"Canada\"]):",
	person.fullNameCountry.apply(person1, ["Canada"])
)
// This works exactly the same as with call(), except here we are using apply()
console.log("person.fullName.apply(person2):", person.fullName.apply(person2))
// The difference between this and what was used with call() is that here we need\
// to pass the argument inside an array
console.log("person.fullNameCountry.apply(person2, [\"United Kingdom\"]):",
	person.fullNameCountry.apply(person2, ["United Kingdom"])
)

// ---------------------------------------------------------------------------


// Extra- apply() for finding the max value in an array
// ---------------------------------------------------------------------------

// apply() can be used to find the max value in an array of integers
// Passing null results in it being ignored and the method returning only what\
// we want: the max value in the array (the second argument)
Math.max.apply(null, [1,3,4,2]); // returns 4

// ---------------------------------------------------------------------------