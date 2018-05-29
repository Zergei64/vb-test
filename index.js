const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

var app = express();
  //.use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get("/api", function(req, res) {
	res.status(200);
});

app.route("/api").get( function(req, res) {
	res.status(200); 
});