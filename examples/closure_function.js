// A closure is a function that has access to the parent scope,\
// even after the parent function has closed. A closure makes\
// it possible for functions to have "private" variables

// Assigne to this variable the return value of a self-invoking\
// (anonymous) function. The function runs only once, which, in\
// this case, sets the `counter` variable to 0 and returns a\
// function expression
// Thus, `add` becomes a function which can still access the `counter`\
// in the parent function's scope
var add = (function () {
	var counter = 0;
	return function () {counter += 1; return counter}
})();

// Now, each time the `add` function is called, `counter` is\
// incremented by 1
// Save the value of `counter` in a global scope variable, otherwise\
// we'd need to call the function to output the value of `counter`\
// (which means to learn its value we'd need to increment `counter`\
// one additional time)
var counter_value = 0;
for (let i=0; i<3; i++) {
	counter_value = add();
}

console.log("counter:", counter_value);