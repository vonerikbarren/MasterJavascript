// Prompt:
// Write a recursive function that generates a random number
// from 0-9 and logs it. Exit the loop if the random value === 9.


// look up recursion in functions. 

function foo() {

  let number = Math.floor(Math.random() * 10);

  if (number === ) {

    return;

  } else {

    console.log(number)
    foo()
  }

}

foo();