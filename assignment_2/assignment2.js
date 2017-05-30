/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

    // Using while loops

var number = 0;
while (number<100) {
    number += 1
    console.log (number);
}


    // Using for loops

for (var number = 1; number <= 100; number += 1)
    console.log(number);



/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

    // Using while loops and var number

var hash = "#";
var number = 0;
while (number<7) {
    console.log (hash);
    hash = hash + "#";
    number += 1;
}

    // Using while loops and .lenght

var hash = "#";
var number = 0;
while (hash.length < 8) {
    console.log (hash);
    hash = hash + "#";
}

// All done!