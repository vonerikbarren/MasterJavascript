## Free Code Camp Practice

- Quotes are not the only characters that can be "escaped" inside of a string. 
There are two reasons to use escaping characters:

1. To allow you to use characters you may not otherwise be able to type out,
such as a carriage return.

2. To allow you to represent multiple quotes in a string without JavaScript 
misinterpreting what you mean. 

```JavaScript

// Begin-=-=-=-=-=-=-=-=-=-
// Examples:
// \' = single quote
// \" = double quote
// \\ = backslash
// \n = new line
// \r = carriage return
// \t = tab
// \b = word boundary 
// \f = form feed
//
// Note:
// the backslash itself must be escaped in order to display a backslash.
// 
// End-=-=-=-=-=-=-=-=-=-=-

// -=-=-=- Break -=-=-=-

// Begin-=-=-=-=-=-=-=-=-=-
// ...Problem: 
// Assign the following three lines of text into the single variable myStr
// using escape sequences. 
//
// You will need to use escape sequences to insert special characters correctly. 
// You will also need to follow the spacing as it looks above, with no spaces between
// escape sequences or words.
//
// Here is the text with the escape sequences written out. 
// "FirstLinenewline tab backslashSecondLinenewlineThirdLine"
//
// ...My Solution:

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine" 
// End-=-=-=-=-=-=-=-=-=-=-


```