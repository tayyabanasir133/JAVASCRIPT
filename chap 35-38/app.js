//write a function that displays current date and time in your browser
function displayDateTime() {
    var currentDateTime = new Date();
    document.write("Current Date and Time: " + currentDateTime);
}

//write a function that takes first and last name and then it greets the user using his full name
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "! Welcome to our website.");
}

//write a function that adds two numbers (input by user) and returns the sum of two numbers
function addTwoNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
addTwoNumbers(5, 10);
//write a function that takes a number as input and squares it
function squareNumber(number) {
    return number * number;
}
squareNumber(4);
//write a function that computes factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
factorial(5);

//write a function that takes start and end number as inputs and prints counting in your browser
function printCounting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
printCounting(1, 10);

//write a nested function that calculates the hypotenuse of a right angle triangle
function calculateHypotenuse(base, perpendicular) {
    function square(num) {
        return num * num;
    }
    var hypotenuse = square(base) + square(perpendicular);
    return(hypotenuse)
}
calculateHypotenuse(3, 4);

//write a function that calculates the area of a rectangle
function calculateArea(length, width) {
    var area = length * width;
    document.write("Area of rectangle: " + area + "<br>");
    return area;
}
calculateArea(5, 3);
//write a function that checks whether a passed string is palindrome or not
var inputString = prompt("Enter a string to check if it's a palindrome:");
function palindrome(x) {
    var reversedString = x.split('').reverse().join('');
    if (x === reversedString) {
        document.write(x + " is a palindrome.<br>");
    } else {
        document.write(x + " is not a palindrome.<br>");
    }
}
palindrome(inputString);

//write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    var capitalizedString = words.join(' ');
    document.write("Capitalized String: " + capitalizedString + "<br>");
    return capitalizedString;
}
capitalizeFirstLetter("hello world");

//write a function that accepts a string as a parameter and find the longest word within the string
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    document.write("Longest word: " + longestWord + "<br>");
    return longestWord;
}
findLongestWord("hi,my name is Tayyaba");
//write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    var capitalizedString = words.join(' ');
    document.write("Capitalized String: " + capitalizedString + "<br>");
    return capitalizedString;
}
capitalizeFirstLetter("hello world");

//write a function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    document.write("Number of occurrences of '" + letter + "': " + count + "<br>");
    return count;
}
countOccurrences("hello world", "o");

//create two functions that calculate properity of a circle, using the definations here: 
// 1-create a function caled calcCircumference pass the radius to the function 
// 2-calculate the circumference based on the radius and output "The circumference is NN"
function calcCircumference(radius) {
    var circumference = 2 * 3.14 * radius;
    document.write("The circumference is " + circumference + "<br>");
    return circumference;
}
calcCircumference(5);
// 1-create a function caled calcArea pass the radius to the function
// 2-calculate the area based on the radius and output "The area is NN"
function calcArea(radius) {
    var area =  3.14* radius * radius;
    document.write("The area is " + area);
    return area;
}
calcArea(5);





