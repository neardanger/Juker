var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs')

	var userSchema = new mongoose.Schema({
		local:{
			name:{type:String,unique:true},
			email:String,
			password:String
		},

		playlists:[{type: mongoose.Schema.Types.ObjectId,ref:'Playlist'}]

	})

	userSchema.methods.generateHash=function(password){
		return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
	}
	userSchema.methods.validPassword=function(password){
		return bcrypt.compareSync(password,this.local.password)
	}

	var User=mongoose.model('User',userSchema)

	module.exports=User

