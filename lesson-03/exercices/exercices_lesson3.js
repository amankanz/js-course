/*
== Lesson 1 Exo - 3a ==

Create a text 'My name is:' as a string.

console.log("My name is:"); // displays in the console a the strings My name is:

== Lesson 1 Exo - 3b ==

Create your name as a string.

console.log("Ziha Amani"); // displays in the console the strings Ziha Amani


== Lesson 1 Exo - 3c ==

Using concatenation, add 2 strings from exo 3a ('My name is:') and 3b ('Ziha Amani') together to create one text.

console.log("My name is:" + "Ziha Amani"); // displays in the console the strings My name is:Ziha Amani


== Lesson 1 Exo - 3d ==

Calculate the total cost for 1 coffee for $5 and 1 bagel for $3. Using concatenation, to create the text.

console.log("Total cost: $" + (5 + 3)); // displays the result in the console Total cost: $8

== Lesson 1 Exo - 3e ==

Calculate the total cost for 1 coffee for $5 and 1 bagel for $3. Using template string and interpolation, to create the text.

console.log(`Total cost: $${5 + 3}`); // displays the result in the console Total cost: $8


== Lesson 1 Exo - 3f ==

Display the text 'Total cost: $8' in a pop-up

alert(`Total cost: $${5 + 3}`); // displays a pop-up inside with the text Total cost: $8 


== Lesson 1 Exo - 3g ==

Calculate the total cost of 1 coffee for $5.99, 1 bagel for $2.95. Using concatenation, create the text 'Total cost: $_'

console.log("Total cost: $" + (599 + 295) / 100); // the displays in the console Total cost: $8.94


== Lesson 1 Exo - 3h ==

Calculate the total cost of 1 coffee for $5.99, 1 bagel for $2.95. Using template string and interpolation, create the text 'Total cost: $_'

console.log(`Total cost: $${(599 + 295) / 100}`); // the displays in the console Total cost: $8.94


== Lesson 1 Exo - 3i ==

Display the text (Total cost: $8.94) in the popup

alert(`Total cost: $${(599 + 295) / 100}`); // display inside the popup the text Total cost: $8.94


== Lesson 1 Exo - 3j ==

Create the text from 3h (Total cost: $8.94) and add line text underneath it that says: 'Thank you, come again!' Dsiplay both lines in the pop-up

alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`); // displays a multi-line string inside the pop-up that says Total cost: $8.94
          THank you, come again on a new line.


== SETUP ==

in the Amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99) with $4.99 shipping.

== Lesson 1 Exo - 3k ==

Use interpolation create the 1st line of text, use math calculate the numbers 4 and 57.88

console.log(`Items(${2 + 2}): $${(2095 * 2 + 799 * 2) / 100}`); // displays the result in the console Items(4): $57.88

== Lesson 1 Exo - 3l ==

Create second line of text 'Shipping and handling: $9.98' (use math)

console.log(`Shipping and handling: $${(499 + 499) / 100}`); // displays the result in the console Shipping and handling: $9.98

== Lesson 1 Exo - 3m ==

Create the 3rd line: 'Total before tax: $67.86'
(use math)

console.log(`Total before tax: $${(2095 * 2 + 799 * 2 + (499 + 499)) / 100}`); // displays the result in the console Total before tax: $67.86

== Lesson 1 Exo - 3n ==

Create the 4th line: 'Estimated tax(10%): $6.79' (use math and Math.round(); to calculate the exact number)

console.log(`Estimated tax (10%): $${Math.round(6786 * 0.1) / 100}`); // displays the result in the console Estimated tax (10%): $6.79


*/
