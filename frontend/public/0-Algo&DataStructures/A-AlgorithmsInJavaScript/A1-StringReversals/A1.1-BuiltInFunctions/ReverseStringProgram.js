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
    if (inquirerResponse.confirm) {
      function reverseString(str) {
        return str.split("").reverse().join("");
      }
      reverseString(inquirerResponse.userInput);
      console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-");
      console.log(reverseString(inquirerResponse.userInput));
      console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-");
    }
  });