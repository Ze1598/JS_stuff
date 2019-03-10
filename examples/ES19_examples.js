// Array#flat() and Array#flatMap()
// -----------------------------------------------------------------

// Array#flat() flattens an array (i.e., reduces the array by one dimension)
let arr1 = [[1, 2], [3, 4], [5, 6]];
console.log(arr1.flat()); // [1, 2, 3, 4, 5, 6]
// However, the `flat()` method can be passed an integer as an argument\
// (`depth`) to specify by how many dimensions the array should be reduced
let arr2 = [[[1, 2]], [[3, 4]], [[5, 6]]]
console.log(arr2.flat()) // [ [1,2], [3,4], [5,6] ]
console.log(arr2.flat(2)); // [1, 2, 3, 4, 5, 6]

// Array#flatMap() is equivalent to calling `map()` followed by `flat()`
let arr3 = [1, 3, 5, 7, 9];
// Create an array with all numbers between 1 and 10, inclusive
let arr4 = arr3.flatMap( num => ([num, num+1]) ); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(arr4);
// The above is equivalent to:
let arr5 = arr3.map(num => ([num, num+1]) ).flat();
console.log(arr5);

// -----------------------------------------------------------------


// Object.fromEntries()
// -----------------------------------------------------------------

// The `Object.fromEntries()` function is intended to make it easy to convert a\
// JavaScript Map into a JavaScript object
let a = {};
a.fromEntries(new Map([['hello', 'world'], ['foo', 'bar']])); // { hello: 'world', foo: 'bar' }

// You can also convert an array of key/value pairs into a JavaScript object
let b = {};
b.fromEntries([['hello', 'world'], ['foo', 'bar']]); // { hello: 'world', foo: 'bar' }

// -----------------------------------------------------------------


// Symbol#description
// -----------------------------------------------------------------

// A symbol is a guaranteed unique property name
// The first parameter of `for()` is just a description for the symbol for debugging

// Create two symbols
let sym1 = Symbol.for('foo');
let sym2 = Symbol.for('foo');
// Log the description of the symbols
console.log(sym1.description); // foo
console.log(sym2.description); // foo

// Use the symbols as keys in the below object
let obj = { [sym1]: 'bar', [sym2]: 'baz' };
console.log(obj[sym1]); // 'bar'
console.log(obj[sym2]); // 'baz'

// -----------------------------------------------------------------


// Optional `catch` binding
// -----------------------------------------------------------------

// In ES19, it's possible to skip defining a variable in the `catch` expression
try {
	// `try` body
}
// The variable is now optional
catch {
	// `catch` body
}
// -----------------------------------------------------------------