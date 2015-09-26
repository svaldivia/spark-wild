var path = require( 'path' ),
	getenv = require( 'getenv' ),
	defaults = require( 'lodash/object/defaults' );

var rootPath = path.normalize( __dirname + '/../../' ),
	serverPath = '/server',
	clientPath = '/client',
	clientSrcPath = '/client/src',
	clientBuildPath = '/client/build';

var defaultValues = {
	env: 'development',
	rootPath: rootPath,
	serverPath: rootPath + getenv( 'SERVER_PATH', serverPath ),
	clientPath: rootPath + getenv( 'CLIENT_PATH', clientPath ),
	clientSrcPath: rootPath + getenv( 'CLIENTSRC_PATH', clientSrcPath ),
	clientBuildPath: rootPath + getenv( 'CLIENTBUILD_PATH', clientBuildPath ),
	port: process.env.PORT || getenv.int( 'HTTP_PORT', 4000 ),
};

module.exports = {
	development: defaults( {}, defaultValues )
};
