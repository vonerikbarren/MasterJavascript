/***********************************************************************
 *                   ALERTS, PROMPTS, CONFIRMS                         *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm

// alert is a function provided by the window that displays information
// to the user in an alert window where they have an ok button to dismiss it.
// Generally you would pass a string as the argument to the alert function
// if you open the console, you will see that this alert actually pauses
// the rest of the javascript until the user has clicked on the ok button
// once you click okay you will see additional console logs
alert("Check out this alert!");

// a confirm dialog allows a user to answer a question with true/false
// if the user clicks on "cancel" the confirm will return false and if
// the user clicks on "ok", the confirm will return true.
var userLikesCats = confirm("Do you like cats?");

console.log("userLikesCats from confirmation", userLikesCats);

// the prompt dialog allows a user to enter input, which is returned as
// a string. The user can also click on "cancel" which will return a null
// value. This will allow you to check if the user actually entered
// something or not
var usersName = prompt("What is your name?");

console.log("usersName from prompt", usersName);