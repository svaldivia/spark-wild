var User = require( './models/user' );

module.exports = function( app, config ) {
	app.get( '/partials/*', function( req, res ) {
		res.render( config.rootPath + 'client/src/' + req.params[ 0 ] );
	} );

	app.get( '*', function( req, res ) {
		res.render( 'index', {isDev: app.isDev(), liveReloadPort: config.liveReloadPort} );
	} );

	app.post('/api/user', function(req, res){
		if ( ! req.body.id ) {
			res.status( 400 ).json( { error: 'Missing Facebook user ID' } );
			return;
		}

		var user = {
			facebook_id: req.body.id
		};

		if ( req.body.email ) {
			user.email = req.body.email;
		}

		if ( req.body.name ) {
			user.name = req.body.name;
		}

		if ( req.body.location ) {
			user.latest_location = req.body.location;
		}

		User.update(
    		{ facebook_id: user.facebook_id },
    		{
    			$set: user,
    		},
    		{ upsert: true }
		);
	});
};
