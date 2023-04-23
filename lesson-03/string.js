/*
== Strings ==

A string represents text.

console.log("hello"); // This code display a string that represents the text 'hello'.

alert("hello"); //THis code creates a pop-up on the page.

== Concantenation ==

Is when we combine strings together.

console.log("some" + "text"); // code displays 'sometext'

console.log("some" + "more" + "text");
 // code display 'somemoretext'


== Types of values in JS ==

Numbers and strings are two different types in javascript.

== Type coercion ==

Type coercion (automatic type conversion) 

console.log("hello" + 2); // Adding a string and a number JavaScript will automaticaly convert the number(2) into a string then combines them together 'hello' + '2' the result become 'hello2'

== String also follow the order of operation ==

console.log("$" + (2095 + 799) / 100); // THe result is $28.94

== Strings and numbers ==

  = Concatination

console.log("Items (" + (1 + 1) + ") :  $" + (2095 + 799) / 100); // The result is 'Items (2): $28.94'


alert("Items (" + (1 + 1) + "):  $" + (2095 + 799) / 100); // Code creates a pop-up inside our page that says Items (2):  $28.94 

== 3 ways to create a string ==

1 = We create string by using single quotes '...' (recommended in JavaScript)

e.g console.log('hello'); // displays a string hello in the console

2 = We create string by using double-quote "..."

e.g console.log("hello"); // displays a string hello in the console

= Special case to use double-quotes =

console.log("I'm learning JavaScript"); // displays stings that says I'm learning JavaScript 

The above exo shows single-quote inside double-quotes.

= Escape Character =

character = 1 letter / number / symbol

'hello' has 5 chracter.

CHaracter can be :

  - a number (1, 2, 3)
  -  a letter (a, b, c)
  - a symbol (!, @, #)
  - Escape character (\') (special character to be used in strings)

console.log('I\'m learning JavaScript');

= Newline Character =

Newline character (\n) //creates a new line of texts

alert("some\ntext"); //creates a pop-up with the string some and text on the newline 

3 = We create string by using back-ticks `...`

e.g console.log(`hello`); // displays a string hello in the console

= Template strings =

Strings created with back-ticks are called template strings.

  = Special features of back-ticks =

= Interpolation 

Interpolation lets us insert a value directly into a string

${} //allows us to insert a value directly into a string

console.log(`Items (${1 + 1}): $${(2095 + 799) / 100}`); // result is Items (2): $28.94 inside the console

Interpolation is much more cleaner way  to insert value into a string (recommended)

= Multi-line string

console.log(`some
text`); // display strings some and text on the newline

== WHat to use to create a strin ==

1= Use '...' by default

2= If we need interpolation or mult-line string use `...` (template string)




*/

console.log(`some
text`);
