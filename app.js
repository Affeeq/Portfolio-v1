var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	nodemailer 	= require("nodemailer"),
	async 		= require("async");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/",function(req,res) {
	res.render("landing");
});

app.post("/contact", function(req,res,next) {

});

app.listen(process.env.PORT || 3000, function() {
	console.log("Connected to server");
});