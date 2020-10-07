//  # Making a server with light content on it.

// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=
// --=-=-=-=---- Directions ---=-=-=-=-=-=-=-=
// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=

// 1A. Creating 
// 1B. Starting the server
// 2. Create a function which handles incoming requests and sends responnses
// --2A. Caputre the url the request is made to
// --2B. Depending on the URL, display a different HTML file. 

// 3. When someone visits the "http://localhost:8080/" path, this function is ran.
// --3A. Configure the response to returnn a status code of 200 and to be on HTML document
// --3B. End the response by sending the client the myHTML string. (HTML);

// 4. When somone visits the "http://localhost:8080/portfolio" path, this function is ran.
// --4A. Configure the response to return a status code of 200 (meaning everything went okay) => HTML doc.
// --4B. End the response by sending the client the myHTML string.

// 5. When someone visists any path that is not specifically defined, this function is ran.
// --5A. Configure the response to return a status code of 404 (couldnt be found) => html file. 
// --5B. End the response by sending the client the myHTML string. 


// STEP 1A: Creating The server. 
var http = require("http");
var PORT = 9090;
var server = http.createServer(handleRequest);


// STEP 1B: Starting the server. 
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT + "," + "...Sir");
});


// STEP 2: Create a function which handles incoming requests and sends responses. 
function handleRequest(req, res) {

  var path = req.url;

  switch (path) {
    case "/":
      return displayRoot(res);

    case "/portfolio":
      return displayPortfolio(res);

    default:
      return display404(path, res);
  }
}

// STEP 3: When someone visits the "http://localhost:8080/" path, this function is ran.
function displayRoot(res) {
  myHTML = "<html>" +
    "<body><h1>Home Page</h1>" +
    "<a href='/portfolio'>Portfolio</a>" +
    "</body></html>";

  res.writeHead(200, { "Contennt-Type": "text/html" });

  res.end(myHTML);
}

// 4. When somone visits the "http://localhost:8080/portfolio" path, this function is ran.
function displayPortfolio(res) {
  var myHTML = "<html>" +
    "<body><h1>My Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

// 5. When someone visists any path that is not specifically defined, this function is ran.
function display404(url, res) {
  var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });

  res.end(myHTML);
}
