const items = [
	{name: "A", price:100},
	{name: "B", price:200},
	{name: "C", price:300},
	{name: "D", price:400},
	{name: "E", price:500},
	{name: "F", price:600}
]
const numbers = [ 1, 29, 25, 187, 23, 47, 59, 87, 3 ]

// Filter: return a new array that contains only the elements from the\
// original array that evaluate to true
// In this case we create an array that contains all the objects from `items`\
// whose `price` attribute is larger than 300
let filteredArray = items.filter( (item) => {
	return item.price > 300
})
console.log(filteredArray)
// -----------------------------------------------------------------------------

// Map: return a new array that contains all the elements from the original\
// array with some modification
// In this case we return an array with the `name`s from the object elements\
// of `items`
let mappedArray = items.map( (item) => {
	return item.name
})
console.log(mappedArray)
// In this case we return an array with the `price` attribute of each object in\
// `items` doubled
let mappedArray2 = items.map( (item) => {
	return item.price*2
})
console.log(mappedArray2)
// -----------------------------------------------------------------------------

// Reduce: returns a single value after executing the provided function\
// over all the elements of the original array (i.e., reduces the array\
// to a single value). The method takes a second argument, which is the\
// starting value for the accumulated variable
// In this case we calculate a running sum of the object elements' `price`\
// attribute from the `items` array
let reducedArray = items.reduce( (currentTotal, item) => {
	return item.price + currentTotal
}, 0)
console.log(reducedArray)
// -----------------------------------------------------------------------------

// Find: returns the first value from the array that satifies the given\
// condition
// In this case, the method will return `29`, as it is the first value in\
// `numbers` that is larger than 20
let findNum = numbers.find( (item) => {
	return item > 20
})
console.log(findNum)
// -----------------------------------------------------------------------------