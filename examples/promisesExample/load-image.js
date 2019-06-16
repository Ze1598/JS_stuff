function loadImage(url) {
	return new Promise((resolve, reject) => {
		// Start by creating a new `Image` object
		let image = new Image()

		// Upon success, call the `resolve` function
		image.onload = function() {
			resolve(image)
		}

		// Upon error, call the `reject` function
		image.onerror = function() {
			let message = 'Could not load image at ' + url
			reject(new Error(msg))
		}

		// Update the `src` attribute of the <img> element
		image.src = url
	})
}

// Export this module
export default loadImage