//Application: nodeJSChat
//Function: This project is a standard chat program using node.js.

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


//this function will return the "index.html" file to the requester
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//this function routes a new message to everyone in the chat room
io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		 io.emit('chat message', msg);
	});
});

//this function sets up the web server attaching port 3000
http.listen(3000, function(){
	console.log('listening on *:3000');
});