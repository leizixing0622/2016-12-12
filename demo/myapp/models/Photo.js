var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photo_app');
var schema = new mongoose.Schema({
	name:String,
	sex:String,
	age:String,
	path:String
});
module.exports = mongoose.model('Photo',schema);