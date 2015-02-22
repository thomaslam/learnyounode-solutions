var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var path = url.parse(req.url, true);
	res.writeHead(200, {'content-type':'application/json'});
	var date = new Date(path.query.iso);

	if (path.pathname === '/api/parsetime') {
		res.write(JSON.stringify({
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}));
	}

	if (path.pathname === '/api/unixtime') {
		res.write(JSON.stringify({
			"unixtime": date.getTime()
		}));
	}

	res.end();
});

server.listen(parseInt(process.argv[2]));