module.exports = function (dir, filterStr, callback) {
	var fs = require("fs");
	var path = require("path");

	fs.readdir(dir, function(err, list) {
		if (err)
			return callback(err);

		var returnList = [];
		for (var i=0; i < list.length; i++) {
			if ("." + filterStr == path.extname(list[i])) {
				returnList.push(list[i]);
			}
		}

		// list = list.filter(function (file) {
  //         return path.extname(file) === '.' + filterStr
  //       })

		callback(null, returnList);
	});
}
