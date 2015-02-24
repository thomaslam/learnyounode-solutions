var express = require('express');
var app = express();

app.use(express.static(process.argv[3]));
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
})

app.listen(parseInt(process.argv[2]));

// var express = require('express')
// var app = express()
// app.set('view engine', 'jade')
// app.set('views', process.argv[3])
// app.get('/home', function(req, res) {
//   res.render('index', {date: new Date().toDateString()})
// })
// app.listen(process.argv[2])