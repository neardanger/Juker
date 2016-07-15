var mongoose = require('mongoose')


var spotifySchema=new mongoose.Schema({
	
})

var playListSchema=new mongoose.Schema({
	user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
	name:{type:String,required:true},

})