var separator = "================================================";
var divider = "##################################################";
var tableHeader = ["|" + "_ID__" + "|" + "DATA1" + "|" + "DATA2"];
var tableRow = ["|" + "_____" + "|" + "_____" + "|" + "_____"];


// All of the `createGreeting` functions are equivalent
var createGreeting = function (message, name) {
  return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting);

// #########################################################################

// ORIGINAL WAY
var createSaying = function (message, name) {
  return message + ", " + name + "!!!";
};

// LEVEL 3 = OMIT function word:
var createSaying = (message, name) => {
  return message + ", " + name + "!!!";
};

// LEVEL 2 = ONLY 1 expression: 
var createSaying = (message, name) => message + ", " + name + "!!!";


// LEVEL 1 = ONLY 1 Parameter: 
var createSaying2 = message => console.log(message);
var message = "hello, this is a saying";

// #########################################################################
// LEVEL 1 Practice: 
// CodeNameA: Open Var Functions

var howIamFeeling = emotion => console.log("I am feeling " + emotion);


var happy = "happy";
var sad = "sad";
var irratated = "irratated";
var excited = "excited";
var tired = "tired";
var emotionArray = [happy, sad, irratated, excited, tired];

// -------
var calculations = num1 => console.log("Here is the calculation: " + num1);

var calculationAdd = num1 => console.log(num1 + num1 + num1 + num1 + num1);

var paymentDiscount = discountRate => console.log("Your new total is: " + discountRate);
// --------
var price = price => price;
var couponRate = couponRate => couponRate;
var discountRate = discountRate => discountRate;
var total = total => console.log(total = price(200.00) * discountRate(.15) * couponRate(.5));
// --------

var apple = "apple";
var orange = "orange";
var grapes = "grapes";

var item1 = item1 => item1;
var item2 = item2 => item2;
var item3 = item3 => item3;

var i1Q = i1Q => i1Q;
var i2Q = i2Q => i2Q;
var i3Q = i3Q => i3Q;

var item1Cost = item1Cost => item1(apple) + " is the price of " + itemCost(.25);

var itemCost = itemCost => itemCost;
var item1TotalCost = item1TotalCost => item1Cost(item1Cost) * i1Q(20);
var item2TotalCost = item2TotalCost => itemCost() * i2Q();

var quantity = quantity => quantity;
var cost = cost => cost;
var totalCost = totalCost => totalCost;
var customer = customer => customer;
var cWallet = cWallet => cWallet;

var purchase = purchase => item1() + i1Q();

// ------
var tLine = "|";
var tableBorder = tableBorder => tableBorder;
var tableHeader1 = tableHeader1 => tableHeader1;
var tableHeader2 = tableHeader2 => tableHeader2;
var tableHeader3 = tableHeader3 => tableHeader3;
var tableHeader4 = tableHeader4 => tableHeader4;
var tableHeader5 = tableHeader5 => tableHeader5;

var tableData = tableData => tableData;

var tableHeaderRow = tableHeaderRow => tableborder(tLine) + tableHeader("Hello") + tableBorder(tLine) + tableHeader("Goodbye") + tableBorder(tLine) + tableHeader("See you later") + tableBorder(tLine);

var tableRow = tableRow => tableRow;

var tableCell = tableCell => tableCell;

var table = table => table;

console.log();

// #########################################################################
// Level 2

var multipleSum = (num1, num2, item) => num


// #########################################################################


// ================================================================
// OUTPUT

console.log(divider);
console.log(separator);
console.log(" ");

console.log(multipleSum("Hello World", 5, "signs"));

console.log(" ");
console.log(separator);
console.log(divider);