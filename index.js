const express = require('express')
const bodyParser = require("body-parser");
const path = require('path')
const PORT = process.env.PORT || 3000

var app = express();
var bsConnection = require('./app/broadsoftconnection');
  //.use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))


//app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://votacall.na35.visual.force.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/api", function(req, res) {
	//res.status(200).send("Test");
	bsConnection(req,res);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

