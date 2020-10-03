## Free Code Camp Practice

- We will now use our knowledge of strings to build a "Mad Libs" style word game
we are calling "Word Blanks". You will create an (optionally humorous)
"Fill in the blank" style sentence. 

- In a "Mad Libs" game, you are provided sentences with some missing words, 
like nouns, verbs, adjectives, and adverbs. You then fill in the missing pieces
with words of your choice in a way that the completed sentence makes sense.

- Connsider this sentence - "It was really __, and we __ ourselves ___". This
sentence has three missing pieces - an adjective, a verb, and an adverb, and 
we can add words of our choice to complete it. We can then assign the completed 
sentence to a variable as follows: 

```JavaScript

// Begin-=-=-=-=-=-=-=-=-=-
// ...Example: 
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves "
+ "silly" + ".";
//

// End-=-=-=-=-=-=-=-=-=-=-

// -=-=-=- Break -=-=-=-

// Begin-=-=-=-=-=-=-=-=-=-
// ...Problem: 
// In this challenge, we provide you with a noun, a verb, an adjective, and an 
// adverb. You need to form a complete sentence using words of your choice, 
// along with the words we provide. 
//
// You will need to use the string concatenation operator + to build a new string
// , using the provided varaibles: myNoun, myAdjective, myVerb, and myAdverb. 
// You will then assign the formed string to the wordBlanks variable. You should
// not change the words assigned to the variables. 
//
// You will also need to accound for spaces in your string, so that the final 
// sentence has spaces between all the words. The result should be a complete
// sentence. 
//
// ... My Solution: 
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "I have a " + "big " + "dog " + "and when I called it " + ", it " + "ran " + "quickly" + "back to me " + ".";  ;
// End-=-=-=-=-=-=-=-=-=-=-


```