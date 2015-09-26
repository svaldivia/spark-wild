var express = require( 'express' ),
	bodyParser = require( 'body-parser' );

module.exports = function( app, config ) {
	app.isDev = function() {
		return 'development' === config.env;
	};

	app.set( 'views', config.rootPath + '/server/views' );
	app.set( 'view engine', 'jade' );

	app.use( bodyParser.json() );

	// todo: re-enable this when going into production
	app.disable( 'etag' );

	app.use( express.static( config.rootPath + '/client', {
		dotfiles: 'ignore'
	} ) );

	app.use( '/fonts/bootstrap/', express.static( config.rootPath + '/client/vendor/bootstrap-sass/assets/fonts/bootstrap/' ) );
	app.use( '/assets/', express.static( config.rootPath + '/client/src/assets/' ) );
};
