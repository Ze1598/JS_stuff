let appId = "05026b1a7ec4a63cdc3b10209fe9e998";
let units = "metric";
let searchMethod;

function getSearchMethod(searchTerm) {
	// If the search term has 5 characters (digits) and when converted into a number\
	// it stays the same, then the user entered a zip code
	// Note: if the string has more than just digits, then parseInt() will only convert\
	// the digits, ignoring the other characters. This means that, when converted back to\
	// a string, it wouldn't be the same as what the user entered (the `+""` part is\
	// enough to convert the number back to string)
	if ( (searchTerm.length === 5) && (Number.parseInt(searchTerm)+"" === searchTerm) ) {
		searchMethod = "zip";
	}
	else {
		searchMethod = "q";
	}
}

function searchWeather (searchTerm) {
	// Set which search method to use (city name or zip code), depending on the user input
	getSearchMethod(searchTerm);

	// Make the call to the API. When the response is received, then convert the response to JSON, which is then\
	// call a function, passing it the result
	fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
		.then(result => { return result.json(); })
		.then(result => { init(result); })
}


function init(resultFromServer) {
	console.log(resultFromServer);

	// Define cases for each weather status
	switch (resultFromServer.weather[0].main) {
		case "Clear":
			document.body.style.backgroundImage = "url('resources\\\\clear.jpg')";
			break

		case "Clouds":
			document.body.style.backgroundImage = "url('resources\\\\cloudy.jpg')";
			break

		// Execute the same code for these three cases
		case "Rain":
		case "Drizzle":
		case "Mist":
			document.body.style.backgroundImage = "url('resources\\\\rain.jpg')";
			break

		case "Thunderstorm":
			document.body.style.backgroundImage = "url('resources\\\\storm.jpg')";
			break

		case "Snow":
			document.body.style.backgroundImage = "url('resources\\\\snow.jpg')";
			break

		default:
			break
	}

	// Grab the necessary HTML elements from index.html
	let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
	let temperatureElement = document.getElementById("temperature");
	let humidityElement = document.getElementById("humidity");
	let windSpeedElement = document.getElementById("windSpeed");
	let cityHeader = document.getElementById("cityHeader");
	let weatherIcon = document.getElementById("documentIconImg");

	// Build the weather icon URL
	weatherIcon.src = `http://openweathermap.org/img/w/${resultFromServer.weather[0].icon}.png`;
	// Get the weather status (description)
	let resultDescription = resultFromServer.weather[0].description;
	// Set the weather description (the text from the <div> with id "weatherDescriptionHeader")
	// Capitalize the first letter
	weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
	// Get the current temperature, rounded down (append the degree symbol)
	temperature.innerHTML = Math.floor(resultFromServer.main.temp) + "&#176";
	// Get the wind speed, rounded down
	windSpeedElement.innerHTML = "Wind at " + Math.floor(resultFromServer.wind.speed) + "m/s";
	// Get the city name
	cityHeader.innerHTML = resultFromServer.name;
	// Get the humidy level
	humidityElement.innerHTML = "Humidity levels at " + resultFromServer.main.humidity + "%";

	// Position the weather info container and make it visible
	setPositionForWeatherInfo();	
}

function setPositionForWeatherInfo() {
	// Position the weather info container and make it visible

	// Get the element with id "weatherContainer"
	let weatherContainer = document.getElementById("weatherContainer");
	// Get the element's height
	let weatherContainerHeight = weatherContainer.clientHeight;
	// Get the element's width
	let weatherContainerWidth = weatherContainer.clientWidth;

	// Now adjust its height and width
	weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/2}px)`;
	weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
	// Make the element visible
	weatherContainer.style.visibility = "visible";
}

// Get the search button, and add an event listener to it. With this\
// event, whenever the user clicks it, we'll get the value from the\
// input text box and, if it's not an empty string, we'll call\
// searchWeather with that value as the argument
document.getElementById("searchBtn").addEventListener(
	"click",
	() => {
		let searchTerm = document.getElementById("searchInput").value;
		if (searchTerm) {
			searchWeather(searchTerm);
		}
	}
)