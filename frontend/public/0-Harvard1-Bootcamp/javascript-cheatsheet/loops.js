/***********************************************************************
 *                            FOR LOOPS                                *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// for loops allow us to run a block of code multiple times, where you 
// have control over how many times the loop runs for

// we define a for loop using the for keyword, and define three parts
// inside of the parantheses:
//     var i = 0; this is where we define the iterator variable. This 
//                is the variable that we are going to be incrementing
//                (or decrementing) as this loop runs. Note the var 
//                keyword, and the semi-colon after the declaration.
//
//     i < 20;    this is the condition for which we want this loop to 
//                continue running. So this loop will run until i = 19
//
//     i++        this is where we define how we want the iterator to be
//                incremented. i++ just says increase the i variable
//                by 1 each time this loop runs. This is the same as
//                i = i + 1 (adding one to itself). Note that there is
//                no semi-colon after i++, just the end parentheses.
for (var i = 0; i < 20; i++) {
    // run the code inside of the brackets while this loop is running.
    // you can use the iterator variable that we defined (i) inside
    // of this block of code, which will be incremented each time the 
    // loop runs.
    console.log("for loop i < 20", i);
}

// we can define an array on multiple lines just like we did wih objects
// we just need to make sure we don't forget the semi-colon at the end
// of the array after the close bracket ]
var forArray = [
    "first item",
    "second item",
    "third item",
    "forth item"
];

// for loops are great for looping over arrays, by setting the iterator
// at 0 (the first index in an array), and going until the iterator is
// less than (not less than or equal to) the length of the array. This
// will loop over every item in the array.
for (var i = 0; i < forArray.length; i++) {
    // we're accessing the index in the array using our iterator variable
    // since that is being incremented by one each time the loop runs
    console.log("for loop forArray", forArray[i]);
}

// you can also console log the array backwards, by starting the iterator
// with the last index, and decrementing the iterator instead of incrementing it
// remember that the length of the array is always 1 more than the last
// index, since the index starts at 0. So I am using the forArray.length -1
// you can also see that we are using i--, which substracts one from i,
// which is the same as i = i - 1
for (var i = forArray.length - 1; i >= 0; i--) {
    // we're accessing the index in the array using our iterator variable
    // since that is being incremented by one each time the loop runs
    console.log("for loop forArray backwards", forArray[i]);
}


/***********************************************************************
 *                          WHILE LOOPS                                *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// a while loop is similar to a for loop, in that it runs a block of code
// many times as long as the condition defined is still true. It's different
// than a for loop in that you don't define the iterator, or how it is 
// incremented. You only define the condition, which is the middle part
// of the for loop

// we're going to define our iterator OUTSIDE of our loop
var whileIterator = 0;

// define the while with the while keyword, and put the condition in which
// this while loop is going to continue running. In this example, it will
// run while our whileIterator variable is less than or equal to 20
while (whileIterator <= 20) {
    // let's just print out the whileIterator to the console so we know
    // what the value is
    console.log("whileIterator start", whileIterator);

    // this is where we would do some other stuff we want to run

    // I'm going to increment the iterator inside of the loop itself
    // by 3.

    // I've used a new assignment operator here, +=
    // This is exactly the same as whileIterator = whileIterator + 3
    // it just adds the number you define to itself
    whileIterator += 3;

    // let's console log the whileIterator after we've incremented it
    console.log("whileIterator end", whileIterator);
}