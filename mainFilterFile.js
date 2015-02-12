var filterFile = require("./filteredFileList");

filterFile(process.argv[2], process.argv[3], function(err, data) {
	if (err) return console.error('err: ', err);

	data.forEach(function(dirname) {
		console.log(dirname);
	});
});