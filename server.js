var express = require('express'),
    swig = require('swig'),
    http = require('http');

var app = express();
var port = 4000;
var server = app.listen(port);


//Templating settings
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/development/views');

//For static asset files
['src','dist','example'].forEach(function (dir){
    app.use('/'+dir, express.static(__dirname+'/development/'+dir));
});

// routeData.routes.forEach(function (route){

// 	app.get(route.path, function(req, res) {
// 		res.render(route.view, {
// 		    pageTitle : route.title
// 		});
// 	});
	
// });

app.get('/',function(req,res){
	res.sendfile('./development/views/index.html');
})

app.get('/api/:route',function(req,res){

	var json = require('./app/api/'+req.params.route+'.json');

	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
});

console.log("Express server listening on port ",port);