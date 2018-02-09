
var path = require("path");

module.exports = function(app){

	app.get("/", function(req, res){
		res.render("home");
	});

	app.get("/about", (req, res)=>{
		res.render("about");
	});

	app.get("/portfolio", (req, res)=>{
		res.render("portfolio");
	});

	app.get("/contact", (req, res)=>{
		res.render("contact");
	});
};