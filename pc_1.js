var express = require('express');
var http = require('http');
var app = express();

fs = require('fs');


var exec = require('child_process').exec;


app.get('/geofence', function (req, response) {
   var lat = (req.params.lat);
var long = (req.params.long);
       console.log(req.url);
  
   response.contentType('text/html');


var latlong = fs.readFileSync('./LATeLONG.txt').toString().split("\n");
for(i in latlong) {
    console.log(latlong[i]);
}
var persone = fs.readFileSync('./Npersone.txt').toString().split("\n");
for(i in persone) {
    console.log(persone[i]);
}

   
 //settare l'indirizzo IP del pc che fa da ponte server  
exec("curl http://192.168.1.108:3000/"+ latlong+'/'+ persone  , function (error, stdout, stderr) {
  // output is in stdout
console.log(stdout);console.log(error);console.log(stderr);
   	response.send(stdout);
	console.log(stdout);

		

});
});

var server = app.listen(process.env.PORT||3000, function () {

  var host = "localhost";
   port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);

});
