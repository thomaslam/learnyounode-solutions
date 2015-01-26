var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var fileString = file.toString();
var numNewLines = fileString.split('\n').length - 1;
console.log(numNewLines)