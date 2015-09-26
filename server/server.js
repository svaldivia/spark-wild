var express = require( 'express' );
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require( './app/config' )[ env ];

require( './app/express' )( app, config );
require( './app/routes' )( app, config );

app.listen( config.port );

if ( 'development' === config.env ) {
	console.log( "App's runnin'! visit http://spark-wild.dev:" + config.port + ' to check it out.' );
}

module.exports = app;
