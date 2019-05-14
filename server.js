
 const url = require('url');
 const http = require('http');
 
 let quoteAPI = require ('./quoteAPI');
 
 let api = new quoteAPI();
 
 http.createServer(function(request, response) {
     var queryData = url.parse(request.url, true).query;
     console.log(queryData);
 
     response.writeHead(200, {'Content-type': "application/json"});

      response.end(); 
 
 }).listen(8888);
 
 console.log(`http://localhost:8888`);

 //TESTING