var express = require("express"),
	app = express(),
	cons = require("consolidate"),
	d_products = require("../data/d_products"),
	d_artists = require("../data/d_artists");

app.use( express.static( __dirname + "/../public" ) );
app.engine( "hogan.js", cons.hogan );
app.set( "view engine", "hogan.js" );
app.set( "views", __dirname + "/../public/tmpl" );

// map products to artists by cross-linking data
for ( var id in d_products.products ) {
	d_products.products[ id ].artist = d_artists.artists[ d_products.products[ id ].artist.toString() ];
}

// This is just a data call to fetch JSON
app.get( "/results", function( req, res ) {
	var arr = [];
	for ( var result in d_products.products ) {
		arr.push( d_products.products[ result ] );	
	}
	res.send( { results: arr } );
});

app.get( "/detail/:id", function( req, res ) {
	res.send( d_products.products[ req.params.id ] );
});

app.get( "/product/:id", function( req, res ) {
	res.render( "detail", d_products.products[ req.params.id ] );
});

app.listen( 3000 );