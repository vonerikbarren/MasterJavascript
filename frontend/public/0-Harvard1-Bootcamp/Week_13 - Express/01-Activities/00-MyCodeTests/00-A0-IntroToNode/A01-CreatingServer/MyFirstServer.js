var http = require("http");

var PORT = 9000;

function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {

  console.log("server listening on: http://localhost:" + PORT);
})




