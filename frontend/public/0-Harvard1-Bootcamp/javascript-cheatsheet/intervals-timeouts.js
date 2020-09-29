/***********************************************************************
 *                       TIMEOUTS AND INTERVALS                        *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
// when we want to run a block of code after a certain period of time
// we use setTimeout() function

// we're going to use the setTimeout function that is provided to us
// by the browser, which takes 2 arguments. The first argument is a
// function that we call an anonymous function (it's called that because
// it does not have a name). The second argument is how long we want to
// wait until it runs our anonymous function in milliseconds. So 1000
// milliseconds would be 1 second.
setTimeout(function () {
    alert("Displayed this alert after 500 milliseconds!");
}, 500);

// the setInterval function is provided to us by the browser, which takes
// which takes 2 arguments. The first argument is a function that we call
// an anonymous function (it's called that because it does not have a name).
// The second argument is how often we want to run our anonymous function
// in milliseconds. So 1000 milliseconds would run the code in the
// interval every 1 second.
var myInterval = setInterval(function () {
    console.log("log this every second");
}, 1000);

// intervals will run indefinitely until you clear them, using clearInterval()
// the reason we set the interval equal to a variable is so that we can
// call the clearInterval function to stop it from running
// generally we want to do this after some criteria is met
clearInterval(myInterval);

var count = 0;

// create an interval that is going to add one to the count each second
var myCounter = setInterval(function () {
    count++;
}, 1000);

// and we're going to clear the interval after 10 seconds so that it
// stops adding to our count number
if (count >= 10) {
    clearInterval(myCounter);
}

// you can also define a function the normal way and pass in the name of
// the function as the argument instead of the anonymous function.
// you may do this in case you want to use your function in other places
// or if you prefer to separate them. NOTE that we are not going to
// call the function with the parentheses when we pass it into the setInterval
function myIntervalFunction() {
    console.log("named function being called on an interval")
}

// we are passing in our myIntervalFunction as an argument of the setInterval
// function. NOTE that we are not calling the function using the parantheses
var myNamedFunctionInterval = setInterval(myIntervalFunction, 400);

// clear the interval just like before
clearInterval(myNamedFunctionInterval);