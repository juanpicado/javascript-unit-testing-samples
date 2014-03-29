/* jshint indent: false */

'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig({
	jshint: {
		options: {
			jshintrc: '.jshintrc',
			ignores: ['test/coverage/**/*.js'],
			reporter: require('jshint-stylish')

		},
		files: {
			src: ['test/**/*.test.js']
		},
		gruntfile: {
			src: 'Gruntfile.js'
		}

	},
	clean: ["./coverage"],
    karma: {
      test: {
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['clean', 'jshint', 'karma:test']);
};
