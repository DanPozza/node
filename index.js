var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

var multer= require ('multer');

app.use(multer());




var objectArray = [{uuid: 'xxx-yyy-zzz', position: 'muse'}];
objectArray.push({uuid: 'aaa-bbb-ccc', position: 'school'});



app.use(bodyParser.urlencoded({ extended: true }));// initialize appimport java.io.IOException;
;
fs = require('fs');


var exec = require('child_process').exec;

exec("ssh -i /home/luca/nico/nico.pem ubuntu@52.24.83.205", function (error, stdout, stderr) {
  // output is in stdout
console.log(stdout);console.log(error);console.log(stderr);
   	 

});
/*app.get('/bo', function (req, res) {
  exec("ssh -i /home/luca/nico/nico.pem ubuntu@52.24.83.205", function (error, stdout, stderr) {
  // output is in stdout
console.log(stdout);console.log(error);console.log(stderr);
   	 

});
console.log(req.body);
console.log(req.files);
});*/




app.get('/bo2/:lat/:long', function (req, response) {
   var lat = (req.params.lat);
var long = (req.params.long);
       console.log(req.url);

    
   response.contentType('text/html');
   
   
exec("curl http://127.0.0.1:4242/relative-to-fence/554b5ef24eda842453000001/"+lat+'/'+long, function (error, stdout, stderr) {
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

var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0
    ;

  ifaces[ifname].forEach(function (iface) {

   if((ifname== 'wlan0')&&(iface.family== 'IPv4'))
{//console.log(ifname, iface.address); 
ip= iface.address; }
   
  });
});


var server = app.listen(process.env.PORT||3000, function () {

  var host = server.address().address;
   port = server.address().port;

  console.log('Beacons server listening at http://%s:%s', ip, port);

});




