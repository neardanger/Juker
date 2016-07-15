var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs')

	var userSchema = new mongoose.Schema({
		id:String,
		name:String,
		token:String,
		

	})