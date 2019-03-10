var mysql = require("mysql");


// Createa a connection to the database
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Z.Dev_Test.Costa98",
	database: "jstestdb"
});

// Connect to the database to execute a query (using `con.query()` and passing\
// it a string with SQL as an argument)
// The method will support any SQL it's passed as if the SQL was being executed\
// directly in MySQL. The following are just some examples to show it in action
con.connect(function(err) {
	if (err) {
		throw err;
	}
	console.log("Connected!");

	// Create a new database
	/*
	var sql = "CREATE DATABASE jstestdb";
	con.query(sql, function (err, result) {
		if (err) {
			throw err;
		}
		console.log("Database created");
	});
	*/

	// Create a new table
	/*
	var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
	con.query(sql, function (err, result) {
		if (err) {
			throw err;
		}
		console.log("Table created");
	});
	*/

	// Add records to the table
	/*
	var sql = "INSERT INTO customers (name, address) VALUES ?";
	// Array where each element is an array of values to be replaced in the SQL statement
	var values = [
		['John', 'Highway 71'],
		['Peter', 'Lowstreet 4'],
		['Amy', 'Apple st 652'],
		['Hannah', 'Mountain 21'],
		['Michael', 'Valley 345'],
		['Sandy', 'Ocean blvd 2'],
		['Betty', 'Green Grass 1'],
		['Richard', 'Sky st 331'],
		['Susan', 'One way 98'],
		['Vicky', 'Yellow Garden 2'],
		['Ben', 'Park Lane 38'],
		['William', 'Central st 954'],
		['Chuck', 'Main Road 989'],
		['Viola', 'Sideway 1633']
	];
	// As a second argument to the `query()`, pass an array of values to be replaced in the SQL\
	// statement
	con.query(sql, [values], function (err, result) {
		if (err) {
			throw err;
		}
		console.log("Number of records inserted: " + result.affectedRows);
	});
	*/

});



// Example of `result` object
/*
{
	fieldCount: 0,
	affectedRows: 14,
	insertId: 0,
	serverStatus: 2,
	warningCount: 0,
	message: '\'Records:14  Duplicated: 0  Warnings: 0',
	protocol41: true,
	changedRows: 0
}
*/