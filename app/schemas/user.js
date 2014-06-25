var mongoose = require('mongoose');

module.exports = mongoose.model('User', 
	{
		'id' : Object,
		'count': Number
	}
);