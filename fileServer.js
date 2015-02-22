var fs = require('fs'),
	http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type':'text/plain'});
	fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(parseInt(process.argv[2]));