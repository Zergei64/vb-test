function( req, res ){
	console.log(req);
	console.log(res);
	
	var username = req.headers.username;
	var password = req.headers.password;
	var type = req.headers.type;
	var method = req.headers.method;
	
	var authString = "Basic " + btoa(username + ':' + password);

	// jQuery CORS example
	$.ajax({
		"async": true,
		"headers": {
			"authorization": authString,
		},
		"type": type,
		"dataType": "jsonp",
		"jsonp" : false,
		"url": method
	}).done(function (data) {
		res.status(200).send( data );
	});
}