module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		jshint: {
			files: "public/js/*.js",
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		
		jquery: {
			version: "1.9.1",
			dest: "public/js/vendor/jquery-1.9.1.min.js",
			minify: true
		},
		
		bootstrap: {
			dest: "public/js/vendor/bootstrap",
			js: [
				"bootstrap-transition.js",
				"bootstrap-modal.js",
				"bootstrap-dropdown.js",
				"bootstrap-scrollspy.js",
				"bootstrap-tab.js",
				"bootstrap-tooltip.js",
				"bootstrap-popover.js",
				"bootstrap-affix.js",
				"bootstrap-alert.js",
				"bootstrap-button.js",
				"bootstrap-collapse.js",
				"bootstrap-carousel.js",
				"bootstrap-typeahead.js"
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jquerybuilder');
	grunt.loadNpmTasks('grunt-bootstrap');
};