/***********************************************************************
 *                       LOCAL STORAGE                                 *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// we use the localStorage object provided by the browser to save and retrieve
// data from the browsers local storage. Local storage is saved on the users
// browser until it is manually deleted by the user.

// we use the setItem method which allows us to save data to local storage using
// the provided key. The key is the first argument in the method call, and the
// second argument is the data you want to save. NOTE that you can only store
// strings in local storage.
localStorage.setItem("the_key", "a value");

// we can use the getItem method which allows us to get the data which is saved
// to local storage using the provided key. We want to store this data in a 
// variable so that we can use it again later.
var valueFromLocalStorage = localStorage.getItem("the_key");

// if you try to get data from local storage that doesn't exist, it will return
// null, which you can check if neccessary.

var nonExistantLocalStorageValue = localStorage.getItem("new_key");

// if the item did not exist in local storage
if (nonExistantLocalStorageValue === null) {
    // do something when there is no value returned
}

// because localStorage can only store strings, if we want to store an object
// we need to convert it to a string using JSON. JSON stands for "JavaScript Object
// Notation", which is just a string representation of Objects and Arrays.

// our object we want to store in local storage
var myObject = {
    name: "David Allen",
    title: "Instructor"
};

// we use the JSON.stringify method in order to turn an object into a string.
// the only argument is the object that we want to get a string for, which is
// returned, so we are going to set it equal to a variable with whatever name
// we want to.
var objectJSON = JSON.stringify(myObject);

// now that we have our object in JSON, we can store it in local storage how
// we normally would
localStorage.setItem("object-json", objectJSON);

// since we are storing the object in local storage as JSON, when we retrieve it
// we need to parse the JSON string back into an object so that we can access
// use it just like a normal object
var objectJSONFromLocalStorage = localStorage.getItem("object-json");

// we got the object as a JSON string, and we need to parse it. We can parse
// the JSON string by using JSON.parse and passing in the JSON string we want
// to parse
var object = JSON.parse(objectJSONFromLocalStorage);

// we could also do all of this on one line (getting the value from localStorage
// and parsing it)
var object = JSON.parse(localStorage.getItem("object-json"));

// we can also JSON stringify arrays just like we do with objects

var myArray = [
    "David Allen",
    "Peter Welby",
    "Kyle Whittemore"
];

// we use the JSON.stringify method in order to turn an array into a string.
// the only argument is the array that we want to get a string for, which is
// returned, so we are going to set it equal to a variable with whatever name
// we want to.
var arrayJSON = JSON.stringify(myArray);

// now that we have our array in JSON, we can store it in local storage how
// we normally would
localStorage.setItem("array-json", arrayJSON);

// since we are storing the array in local storage as JSON, when we retrieve it
// we need to parse the JSON string back into an array so that we can access
// use it just like a normal array
var arrayJSONFromLocalStorage = localStorage.getItem("array-json");

// we got the array as a JSON string, and we need to parse it. We can parse
// the JSON string by using JSON.parse and passing in the JSON string we want
// to parse
var array = JSON.parse(arrayJSONFromLocalStorage);

// we could also do all of this on one line (getting the value from localStorage
// and parsing it)
var array = JSON.parse(localStorage.getItem("array-json"));