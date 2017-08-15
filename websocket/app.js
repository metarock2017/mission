var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 8806;
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
http.listen(port, function() {
    console.log('started at localhost: ' + port);
});

io.on('connection', function(socket) {
    console.log('a user has connected');
});
io.on('connection', function(socket) {
    socket.on('message', function(msg) {
        console.log('message: ' + msg);
    });
});

io.on('connection', function(socket) {
    socket.on('message', function(msg) {
        io.emit('message', msg);
    });
});

