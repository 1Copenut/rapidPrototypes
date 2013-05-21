module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		jshint: {
			files: ["public/js/*.js", "!public/js/config.js"],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true,
					define: true,
					Hogan: true
				}
			}
		},
		
		jquery: {
			dest: "public/lib/jquery/jquery.js",
			minify: true
		},
		
		bootstrap: {
			dest: "public/lib/",
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