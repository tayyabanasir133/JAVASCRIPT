//1-
var students = [];
console.log(students);
students.push("Tayyaba", "fatima");
console.log(students);
//2-Declare an empty array using JS object notation to store student names in future.
var myStudents = {
    "students": [{ "firstName": "", "lastName": "" }, { "firstName": "", "lastName": "" }

    ]
};
console.log(myStudents);
firstName = "Tayyaba";
lastName = "Nasir";
console.log(firstName, lastName);

//3-Declare and initialize a strings array.
var Array = ["Tayyaba", "Fatima", "Ayesha", "Zainab"];
console.log(Array);

//4-Declare and initialize a numbers array.
var num = [0, 1, 2, 3, 4, 5];
console.log(num);

//5-Declare and initialize a boolean array.
var boolean = [true, false]
console.log(boolean);

//6-Declare and initialize a mixed array.
var mixedArray = ["Tayyaba", 1, true, "Fatima", 2, false];
console.log(mixedArray);

//7-Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var qualifications = ["1)SSC", "2)HSC", "3)BCS", "4)BS", "5)BCOM", "6)MS", "7)M. Phil.", "8)PhD"];
document.write("<h1>Qualifications:</h1>");
//qualifications.unshift("");
document.write("<br>" + qualifications[0], "<br>" + qualifications[1], "<br>" + qualifications[2], "<br>" + qualifications[3], "<br>" + qualifications[4], "<br>" + qualifications[5], "<br>" + qualifications[6], "<br>" + qualifications[7]);

//8-Declare and initialize an array and store the names of students and their scores & show the scores & percentages of students like:
var names = ["Tayyaba", "Fatima", "Ayesha"];
var scores = [450, 300, 350];
var totalMarks = 500;
document.write("<br><br><h3>Score of " + names[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / totalMarks) * 100 + "%" + "<br><br>" + names[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks) * 100 + "%" + "<br><br>" + names[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks) * 100 + "%</h3>");

//9-Initialize an array with color names. Display the array elements in your browser.
var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
document.write("<br><br><h3>Colors:</h3>" + colors);

//a-Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
var ColorAtBeginning = prompt("Which color do you want to add to the beginning?");
colors.unshift(ColorAtBeginning);
document.write("<br><br><h3>he/she wants to add to the beginning:</h3>" + colors);

//b-Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
var ColorAtEnd = prompt("Which color do you want to add to the end?");
colors.push(ColorAtEnd);
document.write("<br><br><h3>he/she wants to add at the end:</h3>" + colors);

//c-Add two more colors to the beginning of the array. Display the updated array in your browser.
colors.unshift("Orange", "Pink");
document.write("<br><br><h3>Add two more colors to the beginning of the array:</h3>" + colors);

//d-Delete the first color in the array. Display the updated array in your browser.
colors.shift();
document.write("<br><br><h3>Delete the first color in the array:</h3>" + colors);

//e-Delete the last color in the array. Display the updated array in your browser.
colors.pop();
document.write("<br><br><h3>Delete the last color in the array:</h3>" + colors);

//f-Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.
var AddAtIndex = prompt("At which index do you want to add a color?");
var ColorName = prompt("Which color do you want to add?");
colors.splice(AddAtIndex, 0, ColorName);
document.write("<br><br><h3>Add the color to desired position/index:</h3>" + colors);

//g-Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.
var DeleteAtIndex = prompt("At which index do you want to delete color(s)?");
var HowManyColors = prompt("How many colors do you want to delete?");
colors.splice(DeleteAtIndex, HowManyColors);
document.write("<br><br><h3>Remove the same number of color(s) from user-defined position/index:</h3>" + colors);


//10-Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var studentScores = [320, 230, 480, 120];
console.log("Scores of Students: " + studentScores);
studentScores.sort();
console.log("Ordered Scores of Students: " + studentScores);

//11-Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
console.log("Cities List: " + cities);
console.log("Selected Cities List: " + selectedCities);
//12-Write a program to create a single string from the below mentioned array
var arr = ["This", "is", "my", "cat"];
var mySingleString = arr.join(" ");
console.log("Single String: " + mySingleString);


//13-Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
console.log("Devices: ");
console.log(devices);
var firstIn = devices.shift();
console.log("OUT:" + firstIn);
var secondIn = devices.shift();
console.log("OUT:" + secondIn);
var thirdIn = devices.shift();
console.log("OUT:" + thirdIn);
var fourthIn = devices.shift();
console.log("OUT:" + fourthIn);


//14-Create a new array. Store values one by one in such a way that you can access the values in reverse order. (LIFO-Last In First Out)
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
console.log("Devices: ");
console.log(devices);
var lastIn = devices.pop();
console.log("OUT:" + lastIn);
var secondLastIn = devices.pop();
console.log("OUT:" + secondLastIn);
var thirdLastIn = devices.pop();
console.log("OUT:" + thirdLastIn);
var fourthLastIn = devices.pop();
console.log("OUT:" + fourthLastIn);

