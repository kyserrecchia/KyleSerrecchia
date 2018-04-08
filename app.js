const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.listen(PORT, function(){
	console.log("running on 8080!");
});