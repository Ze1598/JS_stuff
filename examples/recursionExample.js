// Find the nth value of the Fibbonacie sequence, starting at 0
let fib = (n) => {
	if (n < 2) {
		return n
	}

	return fib(n-1) + fib(n-2)
}


for (let i=0; i<10; i++) {
	console.log(`${i+1}th term: ${fib(i)}`)
}
// ---------------------------------------------------------------

// Create a tree based on the relations of the objects in the following array
let categories = [
	{id: "animals", parent: null},
	{id: "mammals", parent: "animals"},
	{id: "cats", parent: "mammals"},
	{id: "dogs", parent: "mammals"},
	{id: "chihuahua", parent: "dogs"},
	{id: "labrador", parent: "dogs"},
	{id: "persian", parent: "cats"},
	{id: "siamese", parent: "cats"},
]

let makeTree = (categories, parent) => {
	// Create an empty object to hold the subtree of the current category
	let node = {}
	// First filter the input array to contain only the objects whose `parent`\
	// is the same as the one passed as input (that is, the root of the\
	// subtree). Then, for each of the remaining objects in the array,\
	// recursively build their subtrees
	categories
		.filter(c => c.parent === parent)
		.forEach(c => node[c.id] =
			makeTree(categories, c.id)
		)

	return node
}

console.log(
	JSON.stringify(
		makeTree(categories, null),
		null,
		2
	)
)