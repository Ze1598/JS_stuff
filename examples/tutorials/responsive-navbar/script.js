const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// When the button is clicked, remove the `active` class if it has the class;\
// else it add the class to the element
toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
})