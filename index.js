const express = require('express')
const bodyParser = require("body-parser");
const path = require('path')
const PORT = process.env.PORT || 3000

var app = express();
var bsConnection = require('./app/broadsoftconnection');
var router = express.Router(); // create our router

app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
	var origin = req.headers.origin;
	console.log(origin);
	if( origin != undefined && origin.indexOf("visual.force") && origin.indexOf("votacall") ){
		console.log("--------------------");
		res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
	}

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "username, password, type, method, origin");
	
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Middleware to use for all requests
router.use(function(req, res, next) {
    next();
});

//Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

app.get("/api", bsConnection.bsc );
app.use('/app', router);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

