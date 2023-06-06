/* //examplo of teacher to calculate de distance

let dis = parseInt(prompt("enter the distance:"));
let time = parseInt(prompt("enter the time:"));

let speed = dis / time;

alert("the result is:"  + speed); 

 */

//example of teacher to perimeter and surface the radius of a circle 

/* let radius = parseInt(prompt("enter the radius:"));
let surface = 3.1415*Math.pow(radius, 2);
let perimeter = 2*3.1415*radius; 

alert("the surface is :" +surface + "the perimeter is :" + perimeter);  */

//Activity
//Realize the code to following statements

//1. write a program that asks the user for his name, and then greets him

/* let name = prompt("Enter your name :");

alert(" Hi! " + name + ":)"); */

//2. Calculate the perimeter area of a rectangle due it's base and height 

/* let base = parseInt(prompt("enter the base : "));
let height = parseInt(prompt("enter the height: "));
let perimeter = 2*base + 2*height;

alert("the perimetrer is " +perimeter); */

//3. given the legs of a triangle, calculate its hypotenuse

/* let leg1 = parseInt(prompt("enter the first leg: "));
let leg2 = parseInt(prompt("enter the second leg: "));

let hypotenuse = Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));

alert("the hypotenuse is :"  +hypotenuse); */

//4.Due 2 numbers show the addition, subtraction, multiplication and division
/* 
let number1 = parseInt(prompt("Enter the number 1 : "));
let number2 = parseInt(prompt("Enter the number 2: "));

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1/number2;

alert("the results are: \n"
+ addition  + "\n"
+ subtraction + "\n"
+ multiplication + "\n"
+ division + "\n"); */

//5.calculate the average of three numbers requested by the keyboard

/* let number1 = parseInt(prompt("Enter the number 1 : "));
let number2 = parseInt(prompt("Enter the number 2: "));
let number3 = parseInt(prompt("Enter the number 3: "));

let numbers = number1 + number2 + number3;
let average = numbers/3;

alert("The average of the numbers is :" + average); */

//6.A student wants to know what his final grade will be in the subject of Algorithms. Said rating is made up of the following percentages:
// 55% of the average of their three partial grades.
// 30% of the final exam grade.
//15% of the grade of a final work.

// Request the grades to student 
/* let gradePartial1 = parseFloat(prompt("Enter the qualification of the first partial: "));
let gradePartial2 = parseFloat(prompt("Enter the qualification of the second partial: "));
let gradePartial3 = parseFloat(prompt("Enter the qualification of the third partial: "));
let gradeExamFinal = parseFloat(prompt("Enter the qualification of the exam final: "));
let gradeFinalWork = parseFloat(prompt("Enter the qualification of the final Work: "));

// Calculate the average of the final partials
let averagePartials = (gradePartial1  + gradePartial2 + gradePartial3) / 3;

// Calculate the final grade
let gradeFinal = (averagePartials * 0.55) + (gradeExamFinal * 0.3) + (gradeFinalWork * 0.15);

// show the results
alert("your final grade of the subject of Algorithms is : " + gradeFinal); */

//7. Two vehicles are traveling at different speeds (v1 and v2) and are separated by a distance d.The one behind is traveling at a higher speed. It is requested to make an algorithm to enter the distance between the two vehicles (km) and their respective speeds (km/h) and with this determine and show in what time (minutes) the fastest vehicle will catch up with the other.

/* let distance = 100;
let speedH = parseInt(prompt("Enter the speed of the fastest speed"));
let speedL = parseInt(prompt("Enter the speed of the slowest speed"));

let time = distance/(speedH - speedL);
let minutes = time*60;

alert("the time to catch up the other car is :" + minutes + " minutes"); */