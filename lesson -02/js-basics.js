/*
== Exercice 1 ==

== Add to cart:

2 quantity of socks at $10.90 with FREE shipping, and 1 quantity of Basketball at $20.95 with $4.99 - shipping.

== E.g - 1:

items (3):  $42.75 // cost of product bef taxes and shipping.

console.log(10.9 * 2 + 20.95); // calculated using Javascript.

== E.g - 2:

Total bef tax:  $47.74 // cost of procust + shipping.

console.log(10.9 * 2 + 20.95 + 4.99); // result is 47.74 calculated using JS.


=== Order of operations (operator precedence) ===

* / == are done 1st
- + == are done after

2 * 3 / 5 //Calculate form left to right because multiply and divide have the same priority.

2 + 3 - 5 //calculate from left to right becoz add and subtract have the same priority.

2 + 2; 2 - 2; 10 * 3; 10 /2; // These are called operations. THe chracters in the middle are called operators.

== Use (...) ==

We use bractes to control which part get done first.

(1 + 1) * 3 // result is 6 

== order of oprations ==

1. (...) //highest priority
2. * /
3. + -

== Exercices 2 ==

== Add to cart:

2 quantity of T-shirts at $7.99 with FREE shipping and 1 quantity of basketball at $20.95 with FREE shipping.

== E.g 1

Items (3):  $36.93 //cost of products bef shipping and taxes.

console.log(7.99 * 2 + 20.95); // result is 36.93 

console.log(36.93 * 0.1); // result is 3.693 estimated tax(10%).

console.log((7.99 * 2 + 20.95) * 0.1); // result is 3.693 calulated usong the order of operation to choose which part gets done 1st.

----------------------------------------------------

== In Programing: ==

2; 3; 4; // whole numbers are called intergers

2.2; 2.5; // decimal numbers are called flaoting point numbers (floats)

console.log(20.95 + 7.99); // result is 28.939999999999998 calculate with floating point numbers cause unaccuracy

--------------------------------

== How to avoid in inaccuracy when calcualting money in JS ==

== When calculating money calculate in cent to avoid that inaccuracy ==

console.log((2095 + 799) / 100); // result is 28.94

---------------------------------------------------


== How to round a number in JavaScript ==

2.2 => 2  // Taking a number and move it to the nearest integer (rounding).

== Math.round() // we use this code to rounf a number

Math.round(2.2); // the result is 2
Math.round(2.8); // the result is 3

== E.g 1

Calculate the cost of the products:

$20.95 for the basketball; $7.99 for the T-shrits; 10% tax

console.log(((2095 + 799) * 0.1) / 100); // the result is $2.894 after tax

Math.round((2095 + 799) * 0.1); // the result is 289 cents using the round() method then we convert to dollar by diving by 100.

Math.round((2095 + 799) * 0.1) / 100 // the result is $2.89 

== Summary ==

1st calculate the result in cent then round it to the nereast cent then at the end we convert back to dollars by diving the result by 100

== USING GOOGLE when learning to code ==

Javascript how to round a number // Search for what we are trying to do

== USING AI Tools ==

how to round a number in javascript // LIke CHatGPT

*/
