require('dotenv').config()

var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	nodemailer 	= require("nodemailer"),
	flash 		= require("connect-flash"),
	async 		= require("async");

// app config
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(flash());

app.use(require("express-session")({
	secret: "Corgis are the best!!!!!",
	resave: false,
	saveUninitialized: false
}));

// passing info to all templates
app.use(function (req,res,next) {
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});


// route config
app.get("/",function(req,res) {
	res.render("landing");
});

app.post("/contact", function(req,res,next) {
	async.waterfall([
		function(done) {
			var smtpTransport = nodemailer.createTransport({
				service: "Gmail",
				auth: {
					user: process.env.GMAIL,
					pass: process.env.GMAILPW
				}
			});
			var mailOptions = {
				to: process.env.GMAIL,
				from: process.env.GMAIL,
				subject: req.body.subject,
				text: req.body.message + '\n' + req.body.name + '\n' + req.body.email
			};
			smtpTransport.sendMail(mailOptions, function(err) {
				req.flash("success", 'Successfully sent message');
				res.redirect("back");
				done(err,"done");
			});
		}, function(err) {
			if(err) {
				return next(err);
				req.flash("error", 'Message not sent');
				res.redirect("/");
			}
		}
		])
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Connected to server");
});