const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.get('/', function(req, res){
	res.sendFile(path.resolve("./index.html"));
})

app.get('/resume', function(req, res){
	console.log("resume queried!");
	res.setHeader('Content-disposition', 'attachment; filename=noah_mcdonough.pdf');
	res.sendFile(path.resolve("./noah_mcdonough.pdf"));
	fs.readFile("hits.txt", "utf-8", (err, data) => {
		var hits = parseInt(data, 10);
  		console.log(data);
		hits += 1;
		fs.writeFile("hits.txt", hits, err => {
			if(err){
				console.log("Write error:\n" + err);			
			}		
		});
	});
})

app.use(express.static('public'));

app.listen(3030);
