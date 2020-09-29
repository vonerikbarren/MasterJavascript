/***********************************************************************
 *                              OBJECTS                                *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// we define an object like any variable, with the var keyword and the
// name but we put all of the properties in brackets {}. Generally an
// object is defined on multiple lines. and make sure that you don't
// forget the semi-colon after the end bracket.
var basicObject = {
    // we define a "property" in an object by defining it's name first
    // and then using a colon : instead of an = to set a value.
    // and just like an array, we put a comma after each property.
    // if your property name doesn't have any special characters or spaces
    // you do not need to surround it in quotes, but you can if you prefer
    stringProperty: "a string property",
    // if your property name has spaces in it or special characters 
    // the property name needs to be in quotes. HOWEVER, when you have
    // control over the properties you are defining, stay away from
    // spaces in your property names, it's easier without them
    "number property": 12,
    booleanProperty: false,
    arrayProperty: [
        "string",
        12,
        true
    ],
    // this is the last property in the object, and it does not have 
    // a comma at the end
    "propertyInQuotes": "a string"
};

// we can access object properties in two different ways. The most common
// is called "dot notation". We can only use dot notation if the property
// name does not have spaces in it.
console.log("property accessed with dot notation: ", basicObject.stringProperty);

// the second way we can access a property is with bracket notation (which 
// is how we access arrays). We HAVE to do this if the property name
// has spaces in it, but you can access any property this way if you prefer
console.log("property accessed with bracket notation: ", basicObject["number property"]);

// our object has an array in it, so we can access the array property 
// just like any other property
console.log("basicObject arrayProperty array: ", basicObject.arrayProperty);

// now we can access items in the array the same way we normally would
// we just need to access it at basicObject.arrayProperty
console.log("first index in the basicObject arrayProperty array: ", basicObject.arrayProperty[0]);