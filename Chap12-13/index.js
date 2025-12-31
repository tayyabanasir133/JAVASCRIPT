//1- Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var character = prompt("Enter a character")
console.log(character)
var message;
if (character >= 'A' && character <= 'Z') {
    message = "The character is an uppercase letter" + "<br><br>";
}
else if (character >= 'a' && character <= 'z') {
    message = "The character is a lowercase letter" + "<br><br>";
} else if (character >= '0' && character <= '9') { message = "The character is a digit" + "<br><br>"; }
else (message = "The character is a special character" + "<br><br>")
document.write(message);
//2-Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var message;
var integer1 = prompt("Enter a integers")
console.log(integer1)
var integer2 = prompt("Enter another integers")
console.log(integer2)
if (integer1 === integer2) {
    message = "Both are equal" + "<br><br>"
}
else if (integer1 > integer2) {
    message = "First One is Greater" + "<br><br>"
}
else if (integer1 < integer2) { message = "Second One is Greater" + "<br><br>" }
else (message = "Enter two integers" + "<br><br>")
document.write(message)

//3- Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var message;
var num = prompt("Enter a number")
console.log(num)
if (num > 0) {
    message = "The number is positive" + "<br><br>"
}
else if (num < 0) {
    message = "The number is negative" + "<br><br>"
}
else if (num == 0) { message = "The number is zero" + "<br><br>" }
else (message = "It's not a number" + "<br><br>")
document.write(message)

//4-Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
var message;
var input = prompt("Enter any character")
console.log(input)
if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u") {
    message = "It's true" + "<br><br>"
}
else (message = "It's false" + "<br><br>")
document.write(message)

//5-5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
var password = "Javascript"
var pass = prompt("Enter your password")
console.log(pass)
if (password === null || password === "") { document.write("Please enter your password" + "<br><br>") }

else if (password == pass) {
    document.write("correct!" + "<br><br>")
}
else (
    document.write("Incorrect!" + "<br><br>")
)

//6-This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//var if (hour < 18) { greeting = "Good day"; } else { greeting = "Good evening"; }
var greeting;
var ques = prompt("hour?")
console.log(ques)
var hour = 18;
if (ques < hour) {
    greeting = "Good day!" + "<br><br>"
}
else (greeting = "good evening" + "<br><br>")
document.write(greeting)

//7-7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements.
var message;
var time = prompt("Enter time in 24 hour clock format")
console.log(time)
if (time >= 0 && time < 1200) {
    message = "Good morning"
}
else if (time >= 1200 && time < 1700) {
    message = "Good afternoon"
}
else if (time >= 1700 && time < 2100) {
    message = "Good evening"
}
else if (time >= 2100 && time <= 2359) {
    message = "Good night"
}