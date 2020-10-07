// # Serving Files (HTML etc.);

// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=
// --=-=-=-=---- Directions ---=-=-=-=-=-=-=-=
// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=

// 1. Import Dependencies
// 2. Create a PORT
// 3. Create the server
// 4. Create a function for handling the requests and responses coming into our server.
// --4A. Use the fs package to read the index.html file.
// --4B. Respond to the client with the HTML page by specifically telling the browser that we are devlivering an html file. 

// 5. Start the server. 


// SECTION 1.  Import Dependencies
var http = require("http");
var fs = require("fs");

// Section 2: Set our port to 9000;
var PORT = 8076;

// Section 3: Create our server
var server = http.createServer(handleRequest);

// Section 4: Create a function for handling the requests and responses coming into our server.
function handleRequest(req, res) {
  fs.readFile(__dirname + "/index.html", function (err, data) {
    if (err) throw err;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Section 5: Start the server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});

// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=
// --=-=-=-=---- Important  =---=-=-=-=-=-=-=-=
// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=

// when using the handleRequest function, make sure that I have the following:
// 1 - fs.readfile method
// 2 - The function(err, data)
// 3 - res.writeHead(Number, {Content-Type}: "text/html");
// 4 - res.end(data);