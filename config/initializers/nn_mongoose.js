var mongoose = require('mongoose');
var connection; //= mongoose.connect('mongodb://localhost/dev');
module.exports = function() {
   
  switch (this.env) {
    case 'development':
      connection = mongoose.connect('mongodb://localhost/dev'); 
      break;
    case 'production':
      connection = mongoose.connect('mongodb://mongodb.example.com/prod');
      break;
  }
}
