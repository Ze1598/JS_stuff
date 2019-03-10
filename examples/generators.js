// This file goes over some examples of generators in JavaScript
/*
	Generators are functions which can be exited and later re-entered.
Their context (variable bindings) will be saved across re-entrances.
	Calling a generator function does not execute its body immediately;
an iterator object for the function is returned instead.
	When the iterator's `next()` method is called, the generator
function's body is executed until the first `yield` expression, which
specifies the value to be returned from the iterator.
	Each call to the `next()` method returns an object of the type:
	{value: yieldedValue, done: bool}
	`done` will be `true` once the generator has finished; until then it
is set to `false`.
	A return statement in a generator, when executed, will make the
generator finished.
*/

// Create a generator for the Fibonnaci Sequence
function* fibonnaci () {
	// Start with 0 and 1
	let [prev, curr] = [0, 1];
	// Create an infinite for loop since the sequence can go on forever
	for (;;) {
		// Calculate the next element of the sequence
		[prev, curr] = [curr, prev+curr];
		// Yield the new element0
		yield curr;
	}
}
	
// Save the function (the generator) in a variable
var fibSequence = fibonnaci();
// Output the first 20 elements of the sequence
for (let i=0; i<20; i++) {
	// Each time we call the `next()` method, the generator yields the next\
	// element of the Fibonnaci sequence (i.e., the function is executed\
	// until the `yield` expression)
	// We access the `value` property so that only the actual yielded value is\
	// output
	console.log(`Element #${i+1}: ${fibSequence.next().value}`);
}


// Parameters can also be passed to generators just like normal functions
// This function generates the first five consecutive numbers after the\
// input number
function* firstFive (x) {
	// With each `next()` call, the generator will go through another `yield`\
	// expression until it finally reaches the `return` expression and the\
	// generator is done
	yield ++x; // Yield for the first `next()` call
	yield ++x; // Yield for the second `next()` call
	yield ++x; // Yield for the third `next()` call
	yield ++x; // Yield for the fourth `next()` call
	yield ++x; // Yield for the fifth `next()` call
	return "This generator is done";
}

// Create a generator for the first five integers after 20
var firstFiveExample = firstFive(20);
// Print the first six calls to the generator
for (let i=0; i<6; i++) {
	// Print the whole object yielded with each `next()` call
	// The sixth call will be returned instead of yielded, thus\
	// ending the generator. Any more calls would raise errors
	console.log(firstFiveExample.next());
}