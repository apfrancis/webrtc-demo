var express = require("express");
var app = express();

// serve static files for the demp from /public
app.use(express.static(__dirname + '/public'));

app.listen(8009);