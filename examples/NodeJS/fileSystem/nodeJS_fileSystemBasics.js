var http = require("http");
var fs = require("fs");


http.createServer(
	function(req, res) {
		// Read a file and write its content to the response
		fs.readFile("sampleHTMLDataFile.html", function(err, data) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(data);
			res.end();
		});

		// Tries to open a file called "nodeAppendedFile.txt"; if it doesn't exist,\
		// then it is created
		fs.open("nodeAppendedFile.txt", "w", function(err, file){} );
		// Each time the page is loaded, the content is appended to the file
		fs.appendFile(
			"nodeAppendedFile.txt",
			"Appended content\n",
			function(err) {}
		);
		// Replaces the content of the file if it exists; else it creates the file with\
		// the given content
		fs.writeFile("nodeCreatedFile.txt", "This file was created with Node.js", function(err) {});
		// Delete a file
		fs.unlink("nodeCreatedFile.txt", function(err) {});
		// Rename a file
		fs.rename("sampleHTMLDataFile.html", "sampleHTMLDataFile.html", function(err) {});

	}
).listen(8080);