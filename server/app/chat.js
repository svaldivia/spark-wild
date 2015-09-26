module.exports = function( app, config, http, io ) {
	io.on('connection', function(socket){
		socket.on('chat message', function(message){
			io.emit('chat message', message);
			io.emit( 'chat message', 'wanna go for another one tomorrow?' )
		});
	});
}