var express = require('express'),
 	mongoose = require('mongoose'),
 	ejsLayouts = require('express-ejs-layouts'),
 	bodyParser = require('body-parser'),
 	path = require('path'),
 	logger = require('morgan'),
 	cookieParser = require('cookie-parser'),
 	session = require('express-session'),
 	passport = require('passport'),
 	bcrypt = require('bcrypt-nodejs'),
 	flash = require('connect-flash')


var port = process.env.PORT || 8000

//Middelware
var app = express();
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(flash())
app.use(express.static(path.join(__dirname,'./public')))
app.use(bodyParser.json())
app.use(session({secret:'hehe xd'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('./public'))
app.use(flash())

app.get('/',function(req,res){
	res.sendFile(__dirname,'./index.html')
})



app.listen(port)
console.log("Now listening on " + port + "...")


