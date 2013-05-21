(function () {
	"use strict";
	
	define([
		"jquery",
		"hogan"
	], function($) {

		var resultsTmpl,
				detailTmpl;

		function init() {
			$.get( "results", function( data ) {
				$( "div.results" ).html(resultsTmpl.render(data));
				console.log(data);
			});
			$( "div.content" ).on( "click", "div.result", showDetail );
		}

		function showDetail( e ) {
			var id = $( this ).data( "id" );
			loadDetail( id );
			$( "div.detail" ).show();
		}

		function loadDetail( id ) {
			if ( id.data ) {
				id = id.data.id;
			}
			$.get( "detail/" + id, function(data) {
				$( "div.detail" ).html(detailTmpl.render(data));
				$( "div.detail a.prev" ).on( "click", { id: parseInt( id ) - 1 }, loadDetail );
				$( "div.detail a.next" ).on( "click", { id: parseInt( id ) + 1 }, loadDetail );
				$( "div.detail div.artist a" ).on( "click", loadBio );
			});
		}

		function loadBio( artistId ) {
			// some stuff here, definitely needs a template
		}

		$.when( 
			$.get( "tmpl/results.hogan", function( tmpl ) {
				resultsTmpl = Hogan.compile( tmpl );
			}, "text" ),
			$.get( "tmpl/detail.hogan", function( tmpl ) {
				detailTmpl = Hogan.compile( tmpl );
			}, "text" )
		).then( init );
	});
}());


