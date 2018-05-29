exports.bsc = function ( req, res ){
	console.log("---REQ---");
	console.log(req);
	console.log("---RES---");
	console.log(res);
	
	var username = req.headers.username;
	var password = req.headers.password;
	var type = req.headers.type;
	var method = req.headers.method;
	var origin = req.headers.origin;
	
	var authString = "Basic " + Buffer.from(username + ':' + password).toString('base64');
	
	var request = require("request");
	var options = { method: type,
		url: method,
		headers: { authorization: authString }
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		
		res.setHeader('Access-Control-Allow-Origin', origin );
		res.status(200).send( body );
	});
};