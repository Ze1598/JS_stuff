var http = require("http");
// Module to handle file uploads
var formidable = require("formidable");
// Use the fs module to save the uploaded file
var fs = require("fs")

http.createServer(function (req, res) {

	if (req.url==="/fileupload") {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			// Define the default path and the new path file where the file will be saved
			var oldpath = files.filetoupload.path;
			var newpath = "C:\\Users\\ze179\\Desktop\\" + files.filetoupload.name;
			// Save the file at the specified file path with `newpath`
			fs.rename(oldpath, newpath, function(err) {
				if (err) throw err;
				res.end("File uploaded to Desktop");
			});
		});
	}

	else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		// Create a basic HTML form for file upload
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		return res.end();
	}
}).listen(8080);