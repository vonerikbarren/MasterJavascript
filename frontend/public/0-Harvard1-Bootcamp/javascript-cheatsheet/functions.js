/***********************************************************************
 *                             FUNCTIONS                               *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// functions allow you to reuse code, and are some of the most used features
// of JavaScript


// we define a function using the function keyword, followed by the name
// of the function, and parentheses where we would define any arguments.
// the block of code the function runs is between the two curley brackets

// in this sample, this function takes no arguments and just alerts
function alertSomethingFunny() {
    alert("SOMETHING FUNNY!");
}

// so far we've declared the function (similar to defining a variable)
// but it's not going to do anything until we actually call that function
// we call that function by using it's name, and adding the parentheses so
// that JavaScript knows we want to run (or call) that function
alertSomethingFunny();

// this function defines two arguments. Arguments are things that we want
// to receive when this function is called, and something with them
// the arguments that we define in this function is declaring a new variable
// that can ONLY be used INSIDE of the function's brackets. The firstNumber
// and secondNumber arguments cannot be used outside of the addNumbers function
function addNumbers(firstNumber, secondNumber) {
    // we're just going to add the firstNumber and secondNumber
    // and log that to the console
    console.log("addNumbers function", firstNumber + secondNumber);
}

// call this function and pass in the arguments that we want
addNumbers(256, 512);

// functions can also return values. The prompt is a good example of this
// the prompt function displays a prompt to a user and then returns what
// they entered so you can do something with that (usually set it to a variable)

// this is the same function as above, but instead of console.logging the
// value, we're returning it. This will allow us to set the return value
// to a variable
function addNumbersReturn(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// we can set the variable "sum" to the value returned from the
// addNumbersReturn function
var sum = addNumbersReturn(1042, 89);

// now we can console.log the sum value
console.log("logging the sum returned from addNumbersReturn", sum);

/***********************************************************************
 *                       OBJECTS WITH METHODS                          *
 **********************************************************************/

// objects can also have functions defined inside of them. We called these
// functions "methods"

// we define an object like we have before
var person = {
    age: 29,
    name: "David Allen",
    hungry: false,
    // to define a function in an object, we first start with the name
    // of the function, like we do with other properties on the object
    // we follow that with a colon, just like a normal property
    // and then we use the function keyword with parentheses
    eat: function () {
        // we can use the "this" keyword in order to access this objects
        // properties 
        // if this person is hungry
        if (this.hungry === true) {
            // feed them by setting hungry to false
            this.hungry = false;
        }
    },
    // this function has an argument, which we define inside of the parentheses
    isOlderThan: function (ageToCheck) {
        if (this.age > ageToCheck) {
            console.log(this.name + " is older than " + ageToCheck);
        } else {
            console.log(this.name + " is younger than " + ageToCheck);
        }
    } // <- there is no comma here because it's the last parameter in the object
};

console.log("persons age", person.age);

// call the eat method on the object, just like we do with any function
person.eat();

// call the isOlderThan method and pass in an argument
person.isOlderThan(21);

person.isOlderThan(30);