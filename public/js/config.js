(function() {
  require.config({
    deps: ["main"],

    paths: {
      jquery: "../lib/jquery/jquery",
      underscore: "../lib/underscore/underscore",
			bootstrap: "../lib/bootstrap/js/bootstrap-min",
			hogan: "../lib/hogan",
      templates: "../tmpl"
    },

    shim: {
      underscore: {
				exports: "_"
      }
    }
  });
}());

