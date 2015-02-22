var net = require('net');
var date = new Date();

var server = net.createServer(function(socket) {
	var year = date.getFullYear().toString();
	var month = (date.getMonth()+1).toString();
	month = (month.length === 1) ? "0" + month : month;

	var day = date.getDate().toString();
	day = day.length === 1 ? "0" + day : day;

	var hours = date.getHours().toString();
	var minutes = date.getMinutes().toString();


	socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
});

server.listen(parseInt(process.argv[2]));