// Import another file created by me
var importedDateTime = require("./exports_sample.js")
// Handles everything regarding the server
var http = require("http");
// Used to work with the URLs
var url = require("url");

// Create a server object
http.createServer(
	// Create a function to handle the request and the response
	function (req, res) {
		// Response head: the first argument is the response code and the second\
		// is an object that contains the response headers
		res.writeHead(200, {"Content-Type": "text/html"});
		// Response content
		res.write(`<p>Current date and local time: ${importedDateTime.myDateTime()}</p><br />`);
		// Print the part of the request's URL that comes after the domain name
		// e.g. `localhost:8080/test_path` gives `test_path`
		res.write(`<p>URL path: ${req.url}</p>`);
		// Creates an object to work with the URL's query parameters
		queryURL = url.parse(req.url, true).query;
		var querySampleParams = queryURL.first + "-" + queryURL.second;
		res.write(`<p>\`first\` and \`second\` parameters of a given two-parameter query: ${querySampleParams}</p><br />`)		
		// End the response
		res.end();
	}
// Make the server listen on port 8080
).listen(8080);