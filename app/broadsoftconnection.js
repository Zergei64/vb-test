exports.bsc = function ( req, res ){
	console.log("---REQ---");
	console.log(req);
	console.log("---RES---");
	console.log(res);
	
	var username = req.headers.username;
	var password = req.headers.password;
	var type = req.headers.type;
	var method = req.headers.method;
	
	var authString = "Basic " + Buffer.from(username + ':' + password).toString('base64');

	// jQuery CORS example
	$.ajax({
		"async": true,
		"headers": {
			"authorization": authString,
		},
		"type": type,
		"url": method
	}).done(function (data) {
		res.status(200).send( data );
	});
};