const boardElement = document.getElementById("board")
// Automatically create the paint board squares
for (let i=0; i<49; i++) {
	let newSquare = document.createElement("button")
	newSquare.classList = ["board-item"]
	boardElement.append(newSquare)
}

// Get some relevant HTML elements
const redPickButton = document.getElementById("red-button")
const greenPickButton = document.getElementById("green-button")
const bluePickButton = document.getElementById("blue-button")
const defaultPickButton = document.getElementById("undefined-button")
const boardSquares = Array.from(document.getElementsByClassName("board-item"))
const resetButton = document.getElementById("reset-button")

const colorOptions = ["red", "green", "blue"]
let chosenColor

// Add event listeners to handle color choices
[redPickButton, greenPickButton, bluePickButton, defaultPickButton].forEach(colorBtn => {
	colorBtn.addEventListener("click", chooseColor)
})
// Reset the board colors button
resetButton.addEventListener("click", resetBoard)
// Change color of board squares upon user click
boardSquares.forEach(square => {
	square.addEventListener("click", changeColor)
	let randomColor = Math.floor(Math.random() * 3)
	square.classList.add("color-"+colorOptions[randomColor])
})


// User chooses a color from the "Color Picker" section
function chooseColor() {
	// Get the `id` of the clicked button
	let clickedColor = this.id
	// Update the `chosenColor` variable accordingly
	switch (clickedColor) {
		case "red-button":
			chosenColor = "red"
			break;
		case "green-button":
			chosenColor = "green"
			break;
		case "blue-button":
			chosenColor = "blue"
			break;
		default:
			chosenColor = "undefined"
			break;
	}
}

// Change the color of the clicked square
function changeColor() {
	this.classList = ["board-item"]
	this.classList.add("color-"+chosenColor)
}

// Randomize the colors of all squares in the board
function resetBoard() {
	// Update the classes of each individual board square to change its color
	boardSquares.forEach(square => {
		// Choose a random index to pick a random color from the above array
		let randomColor = Math.floor(Math.random() * 3)
		// Reset the square's class list to include just `board-item`
		square.classList = ["board-item"]
		// Add the new color to the class list (`color-` plus the randomly\
		// chosen color)
		square.classList.add("color-"+colorOptions[randomColor])
	})
}