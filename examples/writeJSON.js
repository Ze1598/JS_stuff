/* This script creates a JS object and writes it as a
JSON object to a .json file */

// Object to be written
var test_obj = {};
// Each pair is of the type "itemj: j"
for (var j=0; j<10; j++) {
    test_obj['item' + j.toString()] = j;
}

// Module for filesystem operations
const fs = require('fs');
// JSON.stringify(value[, replacer[, space]])
/*
    value- data to be serialized
    replacer- alters the behavior of the process
    space- indentation
*/
fs.writeFile('test_file.json', JSON.stringify(test_obj, null, 4), (err) => {
    if (err) throw err;
    console.log('The file has been created');
});

/*
Expected output:

{
    "item0": 0,
    "item1": 1,
    "item2": 2,
    "item3": 3,
    "item4": 4,
    "item5": 5,
    "item6": 6,
    "item7": 7,
    "item8": 8,
    "item9": 9
}
*/