var path = require( 'path' ),
	getenv = require( 'getenv' ),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
	defaults = require( 'lodash/object/defaults' );

var rootPath = path.normalize( __dirname + '/../../' ),
	serverPath = '/server',
	clientPath = '/client',
	clientSrcPath = '/client/src',
	clientBuildPath = '/client/build',
	defaultMongoUrl = 'mongodb://localhost/spark';

var defaultValues = {
	env: 'development',
	rootPath: rootPath,
	serverPath: rootPath + getenv( 'SERVER_PATH', serverPath ),
	clientPath: rootPath + getenv( 'CLIENT_PATH', clientPath ),
	clientSrcPath: rootPath + getenv( 'CLIENTSRC_PATH', clientSrcPath ),
	clientBuildPath: rootPath + getenv( 'CLIENTBUILD_PATH', clientBuildPath ),
	dbUrl: getenv( 'MONGO_URL', defaultMongoUrl ),
	port: process.env.PORT || getenv.int( 'HTTP_PORT', 4000 ),
};

module.exports = {
	development: defaults( {}, defaultValues )
};
