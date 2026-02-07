//write a program that takes a positive integer from user and display the following in your browser
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number
var num = prompt("Enter a positive integer:");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

//write a program that takes a negative floating point number from user and display the following in your browser
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number
var num = prompt("Enter a negative floating point number:");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

//write a program that displays the absolute value of a number.
var num = prompt("Enter a number:");
document.write("The absolute value of " + num + " is " + Math.abs(num) + "<br>");

//write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("The value of dice is: " + diceValue + "<br>");

//write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
var coinValue = Math.floor(Math.random() * 2) + 1;
var coinSide = (coinValue === 1) ? "Heads" : "Tails";
document.write("The value of coin toss is: " + coinSide + "<br>");

//write a program that shows a random number between 1 and 100 in your browser.
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber + "<br>");

//write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 50, 50kgs, 50.2kgs, 50.2kilograms etc.
var weightInput = prompt("Enter your weight in kgs(e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
var weight = parseFloat(weightInput);
document.write("Your weight is: " + weight + " kilograms<br>");

//write a program that stores a secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Guess the secret number between 1 and 10:");
if (parseInt(userGuess) === secretNumber) {
    document.write("Congratulations! You guessed the secret number " + secretNumber + " correctly!<br>");
} else {
    document.write("Sorry, the secret number was " + secretNumber + ". Try again!<br>");
}


