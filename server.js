var path = require( 'path' );
var express = require( 'express' );
var morgan = require( 'morgan' );
var routes = require( './routes' );

var port = process.env.PORT || 2336;
var app = express();

app.set( 'view engine', 'jade' );

app.use( morgan('dev') );
app.use( express.static(path.join(__dirname, 'public')) );
app.use( routes );

if ( !module.parent ) {
  app.listen( port, function() {
    console.log( 'Sitting at port ' + port + ', watching the tides roll away...' );
  });
}
else {
  module.exports = app;
}