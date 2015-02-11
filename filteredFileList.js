var fs = require("fs");
var path = require("path");

function filterFiles() {
	fs.readdir(process.argv[2], function doneReading(err, list) {
		for (var i = 0; i < list.length; i++) {
			if ('.'+process.argv[3] == path.extname(list[i])) {
				console.log(list[i]);
			}
		}
	});
}

filterFiles();