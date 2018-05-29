const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

var app = express();
  //.use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))

app.configure(function () {
	app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser());
});

app.get("/api", function(req, res) {
	res.status(200).send("Test");
});

app.route("/api").get( function(req, res) {
	res.status(200).send("Test2"); 
});
  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

