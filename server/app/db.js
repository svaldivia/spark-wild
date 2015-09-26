var mongoose = require( 'mongoose' );

module.exports = function( app, config ) {
	var db;
	mongoose.connect( config.dbUrl );
	db = mongoose.connection;
	db.on( 'error', console.error.bind( console, 'connection error:' ) );
	db.once( 'open', function() {
		if ( 'development' === config.env ) {
			console.log( 'Connected to MongoDB at ' + db.host + ':' + db.port + '/' + db.name );
		}
	} );
};
