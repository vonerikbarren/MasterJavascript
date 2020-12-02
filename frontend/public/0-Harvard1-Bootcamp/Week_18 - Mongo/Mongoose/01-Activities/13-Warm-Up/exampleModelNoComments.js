var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ExampleSchema2 = new Schema({

  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  number: {
    type: Number,
    unique: true,
    required: true
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  boolean: Boolean,
  array: Array,

  date: {
    type: Date,
    default: Date.now
  },
  longstring: {
    type: String,
    validate: [
      function (input) {
        return input.length >= 6;
      },
      // Error Message
      "Longstring should be longer."
    ]
  },
  superlongString: {
    type: String,
    validate: [
      function (input) {
        return input.length >= 15;
      },
      // Error Message
      "superlongString should be longer."
    ]
  }
});



// This creates our model from the above schema, using mongoose's model method
var Example2 = mongoose.model("Example2", ExampleSchema2);

// Export the Example model
module.exports = Example2;


// `string` must be of type String. We "trim" it to remove any trailing white space
// `string` is a required field, and a custom error message is thrown if it is not supplied

// `number` is of type Number
// `number` must be unique
// `number` is required. The default mongoose error message is thrown if it is not supplied

// `email` is of type String
// `email` must match the regex pattern below and throws a custom error message if it does not
// You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html

// `boolean` must be of type Boolean

// `array` must be an Array

// `date` must be of type Date. The default value is the current date

// `longstring` must be of type String
// `longstring` uses a custom validation function to only accept values 6 characters or more
// A custom error message is thrown if the validation fails