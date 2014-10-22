var location = require('../models/location.js');

var indexController = {
	// When we load the page at / we want to
	// redirect to the first location on our list
	// for consistancy
	load: function(req, res) {
		res.redirect('/seville');
	},
	// Handles all of our
	index: function(req, res) {
		var current = location[req.params.location]
		var placeName = req.params.location[0].toUpperCase() + req.params.location.slice(1);
		if (current === undefined)
		{
			res.render('nonesuch',{
				name: placeName
			});
		}
		// Redirect user to /seville automatically
		// res.redirect('/seville');
		res.render('index', current);
	},
	done: function(req, res) {
		res.render('done')
	}
};

module.exports = indexController;