const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res){
	res.sendFile(path.resolve("./index.html"));
})

app.get('/resume', function(req, res){
	res.sendFile(path.resolve("./noahres.pdf"));
})

app.use(express.static('public'));

app.listen(3000);