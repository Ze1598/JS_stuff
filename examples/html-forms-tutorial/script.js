const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
	// Array with the error messages needed
	let messages = []

	// Check if the name field is empty
	if (name.value === "" || name.value === null) {
		messages.push("Name is required.")
	}

	// If the password is shorter than 6 characters, create an error message
	if (password.value.length < 6) {
		messages.push("The password must be at least 6-characters long.")
	}

	// If the password is longer than 10 characters, create an error message
	if (password.value.length > 10) {
		messages.push("The password must be less than 10 characters.")
	}

	// If the `messages` array is not empty then at least one error has been\
	// detected. Thus, don't allow the form to be submitted
	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(", ")
	}
})