var appRoute = function(app) {
	app.get("/", function(req, res) {
    		res.send("Hello World from Docker Image");
	});
}

module.exports = appRoute;
