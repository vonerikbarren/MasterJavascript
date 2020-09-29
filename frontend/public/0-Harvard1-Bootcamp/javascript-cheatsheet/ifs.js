/***********************************************************************
 *                          IF STATEMENTS                              *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// we're going to declare a few variables to use for if statements
var likesCats = true;
var numberOfCats = 2;

// we define our if statement with the if keyword, and we put the condition
// we want to check is true inside of the parentheses. Then we need some
// brackets so that we can put the code we want to run if the conditiion is true

// with boolean variables you can just put the name of the variable in
// the parentheses that you want to check is true
if (likesCats) {
    // if likesCats is true, run this code
    console.log("likes cats if statement, no comparison operators");
}

// this is exactly the same as if (likesCats). We're using the double 
// equals comparison operator which checks the items on either side of
// comparison operator VALUES are the same but does not check that the
// TYPES are the same
if (likesCats == true) {
    console.log("likes cats if statement, with double equals (==) comparison");
}

// We're using the triple equals comparison operator which checks that
// the items on either side of the comparison operator VALUES are the same and
// their TYPES are the same
if (likesCats === true) {
    console.log("likes cats if statement, with triple equals (===) comparison");
}

// in all of the examples above with the boolean values, whether you use
// no comparison operator, the double equals (==), or triple equals (===)
// they will all be true since the VALUE of likesCats is true, and likesCats
// is a boolean, so the TYPE matches true as well 

// we're checking that the number numberOfCats VALUE equals the number 2
// which it does
if (numberOfCats == 2) {
    console.log("number of cats number if statement, with double equals (==) comparison");
}

// we're checking that the number numberOfCats VALUE equals the number 2
// and the numberOfCats TYPE (which is number) matches the type of 2 (which is number)
// which it does
if (numberOfCats === 2) {
    console.log("number of cats number if statement, with triple equals (===) comparison");
}

// we're checking that the number numberOfCats VALUE equals the string 2
// which it does
if (numberOfCats == "2") {
    console.log("number of cats string if statement, with double equals (==) comparison");
}

// we're checking that the number numberOfCats VALUE equals the string
// "2" (which it does) AND the TYPE of the numberOfCats (number) matches
// the string 2 (string) which it doesn't, so the console log will not
// be printed out to the console, because this condition is not true
if (numberOfCats === "2") {
    console.log("number of cats string if statement, with triple equals (===) comparison");
}

// there are many different comparison operators for all sorts of
// different situations. Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
/*
 ==    "equal to"
 ===   "equal value and type"
 !=    "not equal to"
 !==   "not equal value or not equal type"
 >     "greater than"
 <     "less than"
 >=    "greater than or equal to"
 <=    "less than or equal to"
*/

// you can compare more than just a variable to a number, boolean,
// string, etc. You can compare two variables together
var hasCats = true;
var likesCats = true;

// does hasCats equal the value and type of likesCats
if (hasCats === likesCats) {
    console.log("hasCats triple equals (===) likesCats");
}

/***********************************************************************
 *                       IF/ELSE STATEMENTS                            *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// in addition to basic if statements, we can also add else statements
// to them. If the condition in the if statement is not true, the else
// statement will be run instead.

var catsAreGross = false;

// this if statement is checking if catsAreGross == true, which it 
// does not, because it is false.
if (catsAreGross) {
    // this code will not run, because catsAreGross is false
    // so this code will be skipped and this console.log will not display
    console.log("cats are gross");
} else {
    // the if statement was not true, the code in this else statemet is
    // going to run instead
    console.log("cats are not gross");
}

// we can also add additional checks to the same if statement using
// else if statements. Note that when this code runs the first condition
// is checked, and if that condition is true the code in the first
// if statement is run and any other else if or else is skipped. However
// if the first if statement comparison is not true, the next statement
// in order will be checked. It will continue in this way until a 
// it finds a condition that is true. If none of them are true and an else
// is provided, the else will be run. If an else was not provided and
// all of the if and elseif statements fail, the program will simply
// continue without running any of the code inside the if statements 

var dogsAreGross = true;

// if catsAreGross is true (which it is not)
if (catsAreGross) {
    console.log("cats are gross");
} else if (dogsAreGross) {
    // if dogs are gross, which they are, this code will be run
    console.log("dogs are gross");
} else {
    // because the else if of dogsAreGross was true, this else statement
    // would not be run
    console.log("cats and dogs are gross else statement");
}

// if we change dogsAreGross to false and run the same exact if statement
// again, we'll see that the else statement is run

dogsAreGross = false;

// if catsAreGross is true (which it is not)
if (catsAreGross) {
    console.log("cats are gross");
} else if (dogsAreGross) {
    // if dogs are gross, which they are, this code will be run
    console.log("dogs are gross");
} else {
    // because the else if of dogsAreGross was true, this else statement
    // would not be run
    console.log("cats and dogs are gross else statement");
}

// you don't always need to use if/else if statements to check multiple
// things. You want to use if/else if statements if you want to check
// multiple scenarios in order and only pick one of them. If you wanted
// to check multiple criteria but allow the code to run in each case
// you can just use multiple if statements

// for example if I want to check independently if cats are gross
// and dogs are gross, I can do it like this
catsAreGross = true;
dogsAreGross = true;

// because I set catsAreGross to true, the console.log will occur
if (catsAreGross) {
    console.log("cats are gross");
}

// because I set dogsAreGross to true, the console.log will occur
if (dogsAreGross) {
    console.log("dogs are gross");
}

// using the same values as above, but with an if/else if statement
// we're going to get a different output.

if (catsAreGross) {
    // because catsAreGross is true this code is going to run
    // but because the next checks are an else if and else they will
    // not be run because the first if statement was true.
    console.log("cats are gross");
} else if (dogsAreGross) {
    // this would not be run because the initial if statement was true
    console.log("dogs are gross");
} else {
    // this would not be run because the initial if statement was true
    console.log("cats and dogs are gross else statement");
}

/***********************************************************************
 *           COMPOUND IF STATEMENTS WITH LOGICAL OPERATORS             *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical

/* multiple checks can be completed in one if statement using logical
 operators. There are three logical operators:
    &&   "and"
    ||   "or"
    !    "not"
 */

// reset our values for these examples
catsAreGross = true;
dogsAreGross = true;

// this is checking if catsAreGross == true AND dogsAreGross == true
// this means that BOTH of these checks need to be true for the code
// in the if statement to run.
// In this case they are both true, so this console log will run
if (catsAreGross && dogsAreGross) {
    console.log("cats and dogs are gross");
}

// if we set dogsAreGross equal to false, and run it again
dogsAreGross = false;

// this is checking if catsAreGross == true AND dogsAreGross == true
// this means that BOTH of these checks need to be true for the code
// in the if statement to run.
// in this case dogsAreGross is false, so they are not both true
// you can think of this as checking if (true && false) (catsAreGross is true and dogsAreGross is false)
if (catsAreGross && dogsAreGross) {
    console.log("cats and dogs are gross");
}

// you can also check if either catsAreGross OR dogsAreGross
// this means that EITHER of these checks needs to be true in order
// to run the code in the if statement.
// in this case catsAreGross is true and dogsAreGross is false, but since
// one of them is true the code in the if statement will run
if (catsAreGross || dogsAreGross) {
    console.log("cats and dogs are gross");
}

// these checks can be more complex than simply checking a boolean like
// we are, for example:

// we're going to emulate the rock, paper, scissors example here with
// some predefined variables
var usersChoice = "scissors";
var computersChoice = "rock";

// we're checking if the usersChoice is "scissors" and the computersChoice
// is "rock", then the user should lose.
if (usersChoice == "scissors" && computersChoice == "rock") {
    console.log('you lose, rock beats scissors');
}

// set some new values for testing
usersChoice = "paper";
computersChoice = "rock";

// we can use parentheses as well, to create more complex checks

// you can see that the below if statement is broken onto multiple lines
// which you can do to help improve readability. The first part of the 
// if statement is checking all of the lose conditions for the user,
// then we put an else if to check for tie conditions, and finally
// an else which ultimately is checking for the win conditions

if ( // we have the opening parenthesis for the if statement like normal
    // we want to check for all of the lose conditions for the user here
    // the first one is that if the user chooses scissors and the computer
    // chooses rock. You can see how we've surrounding this check with
    // parentheses, and put an || (OR) at the end
    (usersChoice == "scissors" && computersChoice == "rock") ||
    // check the next lose condition, if the user chose paper
    // and the computer chose rock, with an OR at the end
    (usersChoice == "paper" && computersChoice == "scissors") ||
    // check the final lose condition, if the user chose rock
    // and the computer chose paper
    (usersChoice == "rock" && computersChoice == "paper")
) { // we have the closing parenthesis for the if statement followed 
    // by the opening bracket like normal
    console.log("you lose, " + computersChoice + " beats " + usersChoice);
} else if (usersChoice == computersChoice) {
    // if the usersChoice is the same as the computers choice, there would be a tie
    console.log("you tied");
} else {
    // since we first checked if the user lost, then we checked if
    // the user tied, the last possible scenario is that they won
    console.log("you win, " + usersChoice + " beats " + computersChoice);
}