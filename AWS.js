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
   
   
exec("curl http://127.0.0.1:4242/relative-to-fence/554b5ef24eda842453000001/"+lat+'/'+long, function (error, stdout, stderr) {
  // output is in stdout
console.log(stdout);console.log(error);console.log(stderr);
   	response.send(stdout);
   	
   	if(stdout == '{"in_fence":true}' )
		{console.log("son dentro al true");
	
	//
	
var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'nikotesta@gmail.com',
        pass: 'nikothebest'
    }/*,
	ssl:        true*/
});

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'Nico Testolin <nikotesta@gmail.com>',

    // Comma separated list of recipients
    to: '<danpozza21@hotmail.it>',

    // Subject of the message
    subject: 'VIOLAZIONE AREA PROTETTA', //

    // plaintext body
    text: 'Attenzione è stata violata la zona protetta da ' + prs+ 'persone a latitudine :' + lat+ ' e longitudine : '+long 
};

console.log('Sending Mail');
transporter.sendMail(message, function(error, info) {
    if (error) {
        console.log('Errore durante invio mail. Disattivare avast ');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
});
		}

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
   	console.log(stdout);
   	

});
   
        
});







var server = app.listen(process.env.PORT||3000, function () {

  var host = server.address().address;
   port = server.address().port;

  console.log('server listening at http://%s:%s', host, port);

});
