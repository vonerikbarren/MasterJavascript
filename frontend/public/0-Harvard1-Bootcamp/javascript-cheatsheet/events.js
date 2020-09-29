/***********************************************************************
 *                              EVENTS                                 *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

// we use the method addEventListener() on any DOM elements that we wish
// in order to "listen" for the event to occur based on the users input

// the first argument of the addEventListener is the type of event
// that we want to listen for. There are many different types of events,
// all of which can be found here: https://developer.mozilla.org/en-US/docs/Web/Events
// the most common are:
//     - click
//     - keydown
//     - keyup
// the second argument of the addEventListener is a function. This works
// just like setTimeout and setInterval, where you can define an anonymous
// function, or can created a named function and pass it in. The function
// that you provide will be called/run each time the event you are listening
// for is triggered
document.addEventListener("keyup", function () {
    console.log("there was a keyup event");
});

// we can put event listeners all all sorts of DOM elements. If you wanted
// to query an element from the page with document.querySelector, you could
// add the event listener to that item as well. We use the document here
// because we want to listen to any event that occurs in the page.

// when you are using addEventListener, you can define an argument in
// your anonymous function (you can call it anything you wish, but event
// or e are common variables), which is AUTOMATICALLY assigned by the 
// event object we are listening for
document.addEventListener("click", function (event) {
    console.log("MouseEvent from our listener", event);
});


// just like our setInterval and setTimeouts, we can use named functions
// instead of anonymous functions as well.

function myEventListenerFunction(event) {
    console.log("Named function for our event listener", event);
}

// we are passing in our myEventListenerFunction as an argument of the
// addEventListenerfunction. NOTE that we are not calling the function
// using the parantheses
document.addEventListener("keydown", myEventListenerFunction);

// get the elements we want to add event listeners to using document.querySelector
var grandParentDiv = document.querySelector("#grandparent");
var parentDiv = document.querySelector("#parent");
var childDiv = document.querySelector("#child");

// the three event listeners we've defined below should print out the console.log
// when the items are clicked. The only problem here is that because these elements
// are nested in the document when you click on the element with the id of child
// the click event is going to be "bubbled" up to its parent ("#parent"), and its
// grandparent ("#grandparent"). Because we've also defined event listeners on 
// those elements, they will be triggered as well. We can prevent this using
// the stopPropagation() method on the event. If you uncomment the event.stopPropagation()
// code you can see this in action. NOTE you need to ensure that you include the
// event in the function argument, otherwise you can't call the event.stopPropagation() method

// set an event listener on the grand parent div
grandParentDiv.addEventListener("click", function(event) {
    // event.stopPropagation();
    console.log("clicked on grandparent div");
});

// set an event listener on the parent div
parentDiv.addEventListener("click", function(event) {
    // event.stopPropagation();
    console.log("clicked on parent div");
});

// set an event listener on the child div
childDiv.addEventListener("click", function(event) {
    // event.stopPropagation();
    console.log("clicked on child div");
});

// the event object contains a lot of properties and some methods
// which will depend on the type of event. Here is some documentation
// for some of the most common event types:
//     - MouseEvent: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
//     - KeyboardEvent: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
//     - TouchEvent: https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
// you can always just console.log(event) to inspect the entire object
// and see what you are looking for

// in the example below we are console logging the users mouse X and Y coordinates
// from the event object
document.addEventListener("click", function(event) {
    console.log("user clicked on the document at X:" + event.clientX + " and Y: " + event.clientY);
});

// sometimes events have a default behavior. For example when we click on a button
// in a form, the default action is to submit the form. We can prevent this default
// action from occuring by calling event.preventDefault() in the anonymous function.
var formButton = document.querySelector('#form-button');
formButton.addEventListener("click", function(event) {
    // prevent the default action of this event from occuring (submitting the form)
    event.preventDefault();
    console.log("Clicked the submit button in the form")
});