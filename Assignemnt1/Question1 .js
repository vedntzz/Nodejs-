var http = require('http');
var server = http.createServer(function(req,res)
{
    console.log("listen to request")
});

server.listen(3000 , '127.0.0.1');
console.log('Success ! Now listening');