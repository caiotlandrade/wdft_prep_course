/*
EXERCISE 1:

Declare a variable called name.
Assign the variable name the String value of your name.
Use the console.log function to print "Hello name", where name is your name.
*/

var name;
name = "Caio";

console.log("Hello "+name);

/*
EXERCISE 2:

Assign the variable x the Integer value of 1125.
Assign the variable answer the result of x modulus 2.
Output the answer to console.
*/

var x = 1125;
var answer = x % 2;

console.log(answer);

/*
EXERCISE 3:

The value of a is the Boolean true.
The value of b is the Boolean false.
The value of c is the Bolean true.
Find what a OR b OR c results in and print it to the console.
*/

a = true;
b = false;
c = true;

console.log(a||b||c);

/*
EXERCISE 4:

The value of a is the Boolean true.
The value of b is the Boolean false.
The value of c is the Boolean true.
Find what a AND b AND c results in and print it to the console.
*/

a = true;
b = false;
c = true;

console.log(a&&b&&c);

/*
EXERCISE 5:

Compute 10 - 3 * 5/4 + 202 % 3 and assign it to the variable answer1.
Compute 10 - (3 * (5/4) + (202 % 3)) and assign it to the variable answer2.
Print both of these answers. Why do you think they are different? Research the order of operations for JavaScript.
*/

var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));

console.log(answer1);
console.log(answer2);

/*
EXERCISE 6:

Convert the Integer 12 into a String.
Convert the String "113" into an Integer.
Convert the String "1.12356" into a Float.
Convert the String "Hello World" into an Integer and save it to the variable x.
    Print x to the console. What do you see? Research the resulting value if you're not sure.
*/

var twelve = 12
var a = twelve.toString();
var b = parseInt("113");
var c = parseFloat("1.12356");
var x = parseInt("Hello World");

console.log(a);
console.log(b);
console.log(c);
console.log(x);

