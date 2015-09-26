module.exports = function( app, config ) {
	app.get( '/partials/*', function( req, res ) {
		res.render( config.rootPath + 'client/src/' + req.params[ 0 ] );
	} );

	app.get( '*', function( req, res ) {
		res.render( 'index', {isDev: app.isDev(), liveReloadPort: config.liveReloadPort} );
	} );

	app.post('/saveuser', function(req, res){
		res.send("POST BRO");
	});
};
