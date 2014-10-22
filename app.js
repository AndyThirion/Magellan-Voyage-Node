var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var location = require('./models/location.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Create our routes
// index redirects to seville
app.get('/', indexController.load);
app.get('/done', indexController.done);
app.get('/:location', indexController.index);
// app.get('/done', indexController.done);
// app.get('/seville', indexController.seville);
// app.get('/canary-islands', indexController.canaryIslands);
// app.get('/cape-verde', indexController.capeVerde);
// app.get('/straight-of-magellan', indexController.straightOfMagellan);
// app.get('/guam', indexController.guam);
// app.get('/philippines', indexController.philippines);
// app.get('/next', indexController.next);

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
