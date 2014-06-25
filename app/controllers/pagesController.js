var locomotive = require('locomotive'), Controller = locomotive.Controller;
var User = require('../schemas/user');
var pagesController = new Controller();
var logger = require('../util/logger');

pagesController.main = function() {
	this.title = 'Locomotive';
	this.render();
};

pagesController.img1 = function() {
	this.render();
};

pagesController.count = function() {

	var userid = this.param('id');
	User.findOne({
		id : userid
	}, function(err, fetchedUser) {

		if (fetchedUser === null) {
			fetchedUser = new User({
				id : userid,
				count : 1
			});

		} else {
			fetchedUser.count = fetchedUser.count + 1;
		}

		fetchedUser.save(function(err, data) {
			if (err) {
				logger.info('encountered an error ' + err);
			} else {
				logger.info('YE YE YE');
			}

		});
	}

	); // end of find one
	this.redirect('http://www.google.com');
};

module.exports = pagesController;