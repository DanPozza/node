//NODEJS SERVER RUNNING ON BRIDGE PC

var express = require('express');
var http = require('http');
var app = express();

fs = require('fs');


var exec = require('child_process').exec;


app.get('/:lat/:long/:prs', function (req, response) {
        var lat = (req.params.lat);
	var long = (req.params.long);
	var prs = (req.params.prs);
        console.log(req.url);

    
   response.contentType('text/html');
   

exec( 'ssh -i nico.pem ubuntu@52.25.105.255 curl -H \"Accept: application/xml\" -H \"Content-Type: application/xml\" -X GET http://0.0.0.0:3000/'+lat+'/'+long+'/'+prs, function (error, stdout, stderr) {
  // output is in stdout
console.log(stdout);console.log(error);console.log(stderr);
   	response.send(stdout);

});
});
app.get('/bo1', function (req, response) {
  // var uuid = (req.params.uuid);
       console.log(req.url);

    
   response.contentType('text/html');
   
   
exec("curl http://127.0.0.1:4242/fences", function (error, stdout, stderr) {
  // output is in stdout
console.log(stdout);console.log(error);console.log(stderr);
   	response.send(stdout); 

});
   
        
});


var server = app.listen(process.env.PORT||3000, function () {

  var localhost ="0.0.0.0"; //server.address().address;
   port = server.address().port;

  console.log('bridge server listening at http://%s:%s', localhost, port);

});
