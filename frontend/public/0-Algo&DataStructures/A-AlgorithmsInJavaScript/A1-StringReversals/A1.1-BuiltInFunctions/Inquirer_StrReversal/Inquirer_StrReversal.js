var inquirer = require("inquirer");

inquirer.prompt([
  {
    name: "userInput",
    type: "input",
    message: "What is the word you would like to reverse?"
  },
  {
    name: "canConfirm",
    type: "confirm",
    message: "Are you sure?",
    default: true
  }
])
  .then(function (inquirerResponse) {
    if (inquirerResponse.userInput) {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("Sir, running your string reversal");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=");

      function reverseString(inquirerResponse) {
        return inquirerResponse.split("").reverse().join("");
      }
      reverseString(inquirerResponse.userInput);
      console.log("Your string reversal sir: ")
      console.log(reverseString(inquirerResponse.userInput));

    } else {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
      console.log("Sir, It didnt work, please try again.");
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=");
    }
  });