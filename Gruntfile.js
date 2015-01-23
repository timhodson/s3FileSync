'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
		'aws_s3': {
      options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_DEV,
        secretAccessKey: process.env.AWS_SECRET_KEY_DEV,
        access: 'public-read',
        region: 'eu-west-1',
        uploadConcurrency: 50,
        progress: 'progressBar'
      },
      sync: {
        options: {
          bucket: process.env.S3SYNC_BUCKET,
          differential: true
        },
        files: [
          {action: 'delete', dest: process.env.S3SYNC_PREFIX + '/', cwd: 'uploads/'},
          {action: 'upload', expand: true, cwd: 'uploads/', src: ['**/*.*'], dest: process.env.S3SYNC_PREFIX + '/'}
        ]
      }
		}
	});

	grunt.registerTask('sync', ['aws_s3:sync']);
	
	
};
