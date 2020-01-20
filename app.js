var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/",function(req,res) {
	res.render("landing");
});

app.get("/profile", function(req,res) {
	res.render("profile");
})

app.listen(process.env.PORT || 3000, function() {
	console.log("Connected to server");
});