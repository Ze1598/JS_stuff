// Note: run this script on the command line with "node -r esm currying.js"

// Import the file system module
import fs from "fs"

// Load the .txt file and save its contents encoded with UTF-8
// Each line of the file contains four tab-separated pieces of data
// This is the data in the .txt file:
/*
matt beef	hot dog	10 	2
matt beef	mouse	15	1
matt beef	knife	10	1
hayden steel	cup	5	6
hayden steel	table	40	2
*/


// The content is first loaded as a single string but it's then split\
// into strings at newlines.
// Then, for each line (string), we create a new array by mapping that\
// line into a tab-split array of strings. By now, the `output` variable\
// is an array of arrays, where each inner array has four strings, that is,
// the strings of one inner array represent the data in one line of the\
// loaded file.
// Lastly, we apply `reduce` to create a single object where each property\
// represents the purchases of a single client (each client name maps to\
// an array of objects, where each object contains the data of each purchase)

var output = fs.readFileSync("sample.txt", "utf8")
	.trim()
	.split("\n")
	.map(line => line.trim().split("\t"))
	.reduce( (customers, line) => {
		// If the customer already exists in the object, use it,\
		// otherwise start a new empty object for a new customer
		customers[line[0]] = customers[line[0]] || []
		// Now append an object with the current purchase to the\
		// customer
		customers[line[0]].push({
				product: line[1],
				price: line[2],
				quantity: line[3]
		})
		
		return customers
	}, {})


// Object.keys(output).forEach( (person) => {
// 	console.log(`${person} purchases:\n`, output[person])	
// })

console.log(JSON.stringify(output, null, 2))

// This is the end result:
/*
{
  "matt beef": [
    {
      "product": "hot dog",
      "price": "10 ",
      "quantity": "2"
    },
    {
      "product": "mouse",
      "price": "15",
      "quantity": "1"
    },
    {
      "product": "knife",
      "price": "10",
      "quantity": "1"
    }
  ],
  "hayden steel": [
    {
      "product": "cup",
      "price": "5",
      "quantity": "6"
    },
    {
      "product": "table",
      "price": "40",
      "quantity": "2"
    }
  ]
}
*/