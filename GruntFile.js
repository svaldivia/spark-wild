module.exports = function(grunt) {

	var vendorDir = 'client/vendor',
		srcDir = 'client/src',
		buildDir = 'client/build',
		jsSourceFiles = [
			srcDir + '/*.js',
			srcDir + '/**/*.js'
		],
		jsVendorFiles = [
			vendorDir + '/angular/angular.js',
			vendorDir + '/angular-route/angular-route.js',
			vendorDir + '/angular-resource/angular-resource.js',
			vendorDir + '/ng-lodash/build/ng-lodash.js',
			vendorDir + '/angular-bootstrap/ui-bootstrap.js'
		],
		jsServerFiles = [
			'server.js',
			'server/*.js',
			'server/**/*.js'
		],
		jsAllBrowserFiles = jsVendorFiles.concat( jsSourceFiles ),
		jsSourceFilesWithGruntFile = jsSourceFiles.concat( ['Gruntfile.js'] ),
		jsAllBrowserFilesWithGruntFile = jsAllBrowserFiles.concat(['Gruntfile.js'] ),
		jsAllFiles = jsAllBrowserFilesWithGruntFile.concat( jsServerFiles );

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		vendorDir: vendorDir,
		srcDir: srcDir,
		buildDir: buildDir,
		uglify: {
			build: {
				files: {
					'<%= buildDir %>/<%= pkg.name %>.js': jsSourceFiles
				},
				options: {
					mangle: false,
					sourceMap: true,
					screwIE8 : true,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */'
				}
			},
			vendor: {
				files: {
					'<%= buildDir %>/vendors.js': jsVendorFiles
				},
				options: {
					mangle: false,
					sourceMap: true,
					screwIE8 : true,
					banner: '/*! <%= pkg.name %> Vendor Files - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */'
				}
			}
		},
		sass: {
			dist : {
				options: {
					sourcemap  : 'auto',
					style: 'compressed',
					precision: 10,
					loadPath: [ '<%= vendorDir %>/bootstrap-sass/assets/stylesheets']
				},
				files: {
					'<%= buildDir %>/<%= pkg.name %>.css': '<%= srcDir %>/styles/main.scss'
				}
			}
		},
		autoprefixer: {
			main: {
				src : '<%= buildDir %>/<%= pkg.name %>.css',
				dest: '<%= buildDir %>/<%= pkg.name %>.css'
			}
		},
		watch: {
			sass: {
				files: ['<%= srcDir %>/styles/**/*.{scss,sass}'],
				tasks: ['sass','autoprefixer:main'],
				options: {
					livereload: false
				}
			},
			css: {
				files: ['<%= buildDir %>/<%= pkg.name %>.css'],
				tasks: [],
				options: {
					livereload: true
				}
			},
			jsclient: {
				files: jsSourceFiles,
				tasks: ['uglify:build'],
				options: {
					livereload: true
				}
			}
		},
		nodemon: {
			dev: {
				script  : 'server/server.js',
				options: {
					callback: function( nodemon ) {
						nodemon.on( 'log', function( event ) {
							console.log( event.colour );
						} );

						// opens browser on initial server start
						nodemon.on( 'config:update', function() {
							setTimeout( function() {
								require( 'open' )( 'http://spark-wild.dev:4000' );
							}, 1000 );
						} );
					},
					ignore: ['node_modules/**', 'client/**', 'Gruntfile.js'],
					watch: ['server']
				}
			}
		},
		concurrent: {
			dev : {
				options: {
					logConcurrentOutput: true
				},
				tasks  : ['watch', 'nodemon']
			}
		}
	});



	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', [
		'startMongo',
		'uglify:build',
		'sass',
		'autoprefixer:main',
		'concurrent:dev'
	]);

	grunt.registerTask('vendors', [
		'bower_install',
		'uglify:vendor'
	]);

	grunt.registerTask('update', [
		'npm-install',
		'vendors'
	]);

};
