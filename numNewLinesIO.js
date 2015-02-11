var fs = require('fs');
function printNumNewLines() {
		fs.readFile(process.argv[2], function doneReading(err, file) {
		var numNewLines = file.toString().split('\n').length - 1;
		console.log(numNewLines);
	})
}

printNumNewLines();
