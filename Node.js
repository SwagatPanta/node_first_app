var http = require('http');
var dt = require('./myfirstmodule');
var moment = require('moment');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are corrently: " + moment(dt.myDateTime()).format('LL'));
    res.end();
}).listen(8080);