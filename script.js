// ANSWER#1
var addition = 3 + 5;
document.write("Sum of 3 and 5 is " + addition);

// ANSWER#2a
var subtraction = 3 - 5;
document.write("<br> Subtraction of 3 and 5 is " + subtraction);

// ANSWER#2B
var multiplication = 3 * 5;
document.write("<br> Multiplication of 3 and 5 is " + multiplication);

// ANSWER#2C
var division = 3 / 5;
var text = "Division of 3 and 5 is ";
document.write("<br>" + text + division);

// ANSWER#2d
var modulus = 3 % 5;
document.write("<br> Modulus of 3 and 5 is " + modulus);

// ANSWER# 3A & 3B
var value;
document.write("<br> Value after variable declaration is " + value);

// ANSWER# 3C & 3D
var value = 5;
document.write("<br> Initial Value " + value);

// ANSWER#3E
var x = 5;
var y = ++x;
document.write("<br> Value after increment is " + y);

// ANSWER#3F
var x = 5;
var y = ++x;
var z = y + 7;
document.write("<br> Value after addition " + z);

// ANSWER#3G & 3H
var x = 5;
var y = ++x;
var z = y + 7;
document.write("<br> Value after addition " + z);

// ANSWER#3I & 3J
var x = 5;
var y = ++x;
var z = y + 7;
var p = --z;
document.write("<br> Value after decrement " + p);

// ANSWER#3K & 3L
var x = 5;
var y = ++x;
var z = y + 7;
var p = --z;
var q = p % 3;
document.write("<br> The reminder is " + q);

// ANSWER#4
var oneTicket = 600;
var fiveTicket = oneTicket * 5;
var result = fiveTicket;
document.write("<br> Total cost to buy 5 tickets to a movie is " + result + " PKR");

// ANSWER#5
var x = 4;
for (i = 1; i <= 10; i++) {
    let y = `${x} X ${i} = ${x * i} <br/>`;
    document.write("<br>" + y);
}

// ANSWER# 6A & 6B
var C = 25;
var cTof = (25 * 9 / 5) + 32;
document.write("<br>" + C + "&deg;C is " + cTof + "F&deg;");

// ANSWER# 6C & 6D
var F = 70;
var fToc = (70 - 32) * 5 / 9;
document.write("<br>" + F + 'F&deg; is ' + fToc + '&deg;C');

// ANSWER#7
var priceItemOne = 650;
document.write("<br> Price of item 1 is " + priceItemOne + "<br/>");
var quantityItemOne = 3;
document.write("Quantity of item 1 is " + quantityItemOne + "<br/>");

var priceItemTwo = 100;
document.write("Price of item 2 is " + priceItemTwo + "<br/>");
var quantityItemTwo = 7;
document.write("Quantity of item 2 is " + quantityItemTwo + "<br/>");

var shoppingCharge = 100;
document.write("Shopping charges " + shoppingCharge + "<br/>");

var total = priceItemOne * quantityItemOne + priceItemTwo * quantityItemTwo + shoppingCharge;
document.write("Total cost of your order is " + total);

// Q NO 8
var totalMarks = 980;
document.write("<br> Total marks: " + totalMarks + "<br/>");
var obtMarks = 804;
document.write("Marks obtained: " + obtMarks + "<br/>");
var percentage = (obtMarks / totalMarks) * 100;
document.write("Percentage: " + percentage);

// Q NO 9
var usDollar = 10;
var riyalCur = 25;
var inPKR = usDollar * 307.79 + riyalCur * 82.05305;
document.write("<br> Total Currency in PKR: " + inPKR);

// Q NO 10
var x = 5;
var y = x + 5 * 10 / 2;
document.write("<br> Result is " + y);

// Q NO 11
var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("<br> Your Age is: " + age);

// Q NO 12
var radius = 20;
document.write("<br> Radius of a circle: " + radius + "<br/>");
var circumference = 2 * 3.142 * radius;
document.write("The circumference is: " + circumference + "<br/>");
var area = 3.142 * radius * radius;
document.write("The area is: " + area);

// Q NO 13
var snack = "chocolate chip";
var currentAge = 19;
var estMaxAge = 65;
var amountSnack = 3;
var totalSnack = (estMaxAge - currentAge) * 365 * amountSnack;
document.write(`You will need ${totalSnack} ${snack} to last you until the ripe old age of ${estMaxAge}`);
