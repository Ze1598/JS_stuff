// Note: run this script on the command line with "node -r esm currying.js"
import loadImage from './load-image'

let addImg = (src) => {
	// Create a new <img> element
	let imgElement = document.createElement('img')
	// Update the element's `src` attribute
	imgElement.src = src
	// Append the <img> element to the <body> element
	document.body.appendChild(imgElement)
}

// Now use the promise loaded from the module to load images into the\
// created <img> elements
Promise.all([
	loadImage("media/cat1.jpg"),
	loadImage("media/cat2.jpg"),
	loadImage("media/cat3.jpg")
]).then((images) => {
	images.forEach(img => addImg(img.src))
}).catch(error) {
	// error handling
}