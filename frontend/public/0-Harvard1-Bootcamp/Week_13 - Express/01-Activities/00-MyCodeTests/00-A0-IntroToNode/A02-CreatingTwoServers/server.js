// Here we are creating two servers.

// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=
// --=-=-=-=---- Directions ---=-=-=-=-=-=-=-=
// -=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=

// 1. We require/import the HTTP module
// 2. Then we define the ports we want to listen to.
// 3. We need two different functions to handle requests, one for each server.
// 4. We then create our servers.
// 5. Then we start our servers.
// 6. Callback triggered when server is successfully listening. Hurray! ( For both servers )


// STEP 1: We require/import the HTTP module
var http = require("http");


// STEP 2: Then we define the ports we want to listen to.
var PORTONE = 7000;
var PORTTWO = 7500;


// STEP 3: We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  response.end("Server one is online and ready");
}

function handleRequestTwo(request, response) {
  response.end("Server two is online and ready as well sir");
}



// STEP 4: We then create our servers.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);



// STEP 5: We then START our servers.
serverOne.listen(PORTONE, function () {

  console.log("Server listening on http://localhost:" + PORTONE + ", sir. ");
});

serverTwo.listen(PORTTWO, function () {

  console.log("Server listening on http://localhost:" + PORTTWO + ", sir. ");
});