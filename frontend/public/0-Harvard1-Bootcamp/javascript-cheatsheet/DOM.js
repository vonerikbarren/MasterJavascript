/***********************************************************************
 *                         MANIPULATING THE DOM                        *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// the most common way to select a SINGLE element from the DOM is to use the
// querySelector method. The querySelector method can be used on pretty
// much any element type, but is most commonly used directly on the
// document itself. NOTE that querySelector only selects the FIRST
// element that it matches
var myParagraph = document.querySelector('#paragraph');

// document.querySelector can be used to select elements by their id,
// their class, or their element type

// select the first div tag
var firstDiv = document.querySelector('div');

// select the first element with a class of "active"
var firstClassActive = document.querySelector('.active');

// once we have set a variable to our element, we can do things with it
// many elements have a textContent property, which is the textContent
// between it's open and closing tag. Just like any object property
// we can access it with dot notation, and assign it a new value
// by using the equals sign
myParagraph.textContent = "some new text";

// we can also select multiple items that match the same query by using
// querySelectorAll. This method will ALWAYS return an array, even if 
// the query was only able to find one matching element.
// this querySelectorAll would find every div tag on the page and put it
// into an array, which we've assigned to allDivs variable
var allDivs = document.querySelectorAll('div');

// since the "allDivs" variable is an array, we can loop over it and
// access each of the items in the array and manipulate them
for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].textContent = "change div content!";
}

// different DOM elements/objects can have different properties, for
// example an input does not have a textContent property, but it does
// have a value property. If we wanted to either get the value from, 
// or change the value of an input, we would use the value property
var inputElement = document.querySelector('#nameInput');

// since we have already saved the name input element object to the 
// variable inputElement, we can access that element's properties easily
// and set the value of the input to a variable
var name = inputElement.value;

// we can also set the inputElements value property using the assignment
// operator and providing a value
inputElement.value = "David Allen";

/***********************************************************************
 *                         Creating DOM Elements                       *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

// we can create new elements by using document.createElement(), and passing in
// the HTML element we want to create as a string. This could be any HTML element
// like a div, p, ul, li, a, article, section, etc.
// we always want to set this element equal to a variable, so that we can put it
// in the document where we want, and also make changes to it, like adding classes
// updating styling, setting the text, etc.
var myNewParagraph = document.createElement("p");

// now that we have our element, let's add a class to it. We can use the
// setAttribute() method on the element to set any of the HTML attributes, like
// class, id, src, name, etc. NOTE that this will completely replace the attribute
// if it has already been set.
myNewParagraph.setAttribute("class", "text-center");
myNewParagraph.setAttribute("id", "my-paragraph");

// if we didn't want to completely replace the attribute, and instead want to 
// add or remove a specfic class but keep the other classes, we can access the 
// classList property on the element and use the add() and remove() methods
myNewParagraph.classList.add("my-new-class");
myNewParagraph.classList.remove("some-existing-class");

// most HTML elements have a textContent property which is the text inside of
// the element. For example with a paragraph it would be the actual paragraph
// content. We can add some text to the paragraph by setting the textContent 
// property, just like we would with any object 
myNewParagraph.textContent = "Here is some text that we want to display in the p";

// now that we've created our paragraph we want to actually add it to the document
// we can do this with the appendChild() method. Which will add the element in
// passed as the argument to the END of the inside of the element we call the 
// appendChild() on. The method call below will add our new paragraph to the end
// of the documents body. 
document.body.appendChild(myNewParagraph);

// we can call appendChild on any element we want, so we can build an entire HTML
// page using just javascript. In the bellow example the following HTML will be
// added to the document:
/* 
    <div class="row">
        <div class="col-md-6">
            <p id="new-paragraph">Some text</p>
        </div>
        <div class="col-md-6">
            <img src="https://picsum.photos/200/300">
        </div>
    </div>
*/

// first we start by creating all of the elements that we need
var rowDiv = document.createElement("div");
var firstColumn = document.createElement("div");
var secondColumn = document.createElement("div");
var colParagraph = document.createElement("p");
var image = document.createElement("img");

// the next step is to set all of the attributes that we want
// set the classes of the divs
rowDiv.setAttribute("class", "row");
firstColumn.setAttribute("class", "col-md-6");
secondColumn.setAttribute("class", "col-md-6");

// give the paragraph some text and an id
colParagraph.textContent = "Some text";
colParagraph.setAttribute("id", "new-paragraph");

// give the image a src attribute
image.setAttribute("src", "https://picsum.photos/200/300");

// now that we have set all of our attributes we want to start adding the elements
// onto the actual page

// the row div we just going to put right into the document body
document.body.appendChild(rowDiv);

// now that we've added the rowDiv, we want to put the two column divs INSIDE
// of that row div, so instead of calling document.appendChild we want to call
// the appendChild method on the rowDiv
rowDiv.appendChild(firstColumn);
rowDiv.appendChild(secondColumn);

// now we've added the two columns INSIDE of the rowDiv, just like we've outlined
// in our HTML. Now I want to put the paragraph inside of the firstColumn and
// the image inside of the secondColumn
firstColumn.appendChild(colParagraph);
secondColumn.appendChild(image);