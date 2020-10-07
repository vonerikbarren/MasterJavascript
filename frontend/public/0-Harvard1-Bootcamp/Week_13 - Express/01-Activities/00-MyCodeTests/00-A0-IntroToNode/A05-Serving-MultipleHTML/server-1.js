// # Serving multiple files (HTML)

// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=
// --=-=-=-=---- Directions ---=-=-=-=-=-=-=-=
// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=

// 1. Require Dependencies
// 2. Set PORT
// 3. Create Server
// 4. Capture the url the request is made to
// 5. Create a switch function to read and respond with different files.
// 6. Start the server.


// 1. Require Dependencies
var http = require("http");
var fs = require("fs");
var PORT = 8030;
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
    case "/food":
      return fs.readFile(__dirname + "/food.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

    case "/movies":
      return fs.readFile(__dirname + "/frameworks.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

    case "/frameworks":
      return fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

    default:
      return fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

  }
}

// 6. Start the server.
server.listen(PORT, function () {
  console.log("Server is listening on PORT " + PORT + "" + "...sir.");
});