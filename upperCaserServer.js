var http = require('http');

server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req.on('data', function(data) {
			res.write(data.toString().toUpperCase());
		}).on('end', function() {
			res.end();
		});
	}
});

server.listen(parseInt(process.argv[2]));