var express = require( 'express' );
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var http =  require('http').Server(app);
var io = require('socket.io')( http );
var config = require( './app/config' )[ env ];

require( './app/db' )( app, config );
require( './app/express' )( app, config );
require( './app/routes' )( app, config );
require( './app/chat' )( app, config, http, io );


http.listen( config.port, function(){
	if ( 'development' === config.env ) {
		console.log( "App's runnin'! visit http://spark-wild.dev:" + config.port + ' to check it out.' );
	}
});

module.exports = app;
