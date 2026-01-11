//Declare and initialize an empty array
var emptyArray = [];
console.log("Empty Array:", emptyArray);
//Declare and initialize multidimensional array; 0123, 1012,2101
var multiDimensionalArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
console.log("Multidimensional Array:", multiDimensionalArray);
//write a program to print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//Write a program to print multiplication table of any number using for loop.Table number & length should be taken as an input from user
var tableNumber = +prompt("Enter the multiplication table number:");
var tableLength = +prompt("Enter the length of the multiplication table:");
for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

//Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i]);
}

//generate the following series in your browser. a. Counting: 1 to 15 b. Reverse counting: 10 to 1 c. Even numbers: 0 to 20 d. Odd numbers: 1 to 19 e. Series: 2k, 4k, 6k, ..., 20k
var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log("Counting: " + counting.join(", "));
var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
console.log("Reverse Counting: " + reverseCounting.join(", "));
var evenNumbers = [];
for (var i = 0; i <= 20; i += 2) {
    evenNumbers.push(i);
}
console.log("Even Numbers: " + evenNumbers.join(", "));
var oddNumbers = [];
for (var i = 1; i < 20; i += 2) {
    oddNumbers.push(i);
}
console.log("Odd Numbers: " + oddNumbers.join(", "));
var series = [];
for (var i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
console.log("Series: " + series.join(", "));
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var found = false;
for (var i = 0; i < items.length; i++) {
    if (items[i].toLowerCase() === userInput.toLowerCase()) {
        found = true;
        alert(userInput + " is available at index " + i + " in our bakery.");
        break;
    }
}
if (!found) {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}
//Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
var numbers = [24, 53, 78, 91, 12];
var largestNumber = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}
console.log("The largest number is " + largestNumber);
//Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
var smallestNumber = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }
}
console.log("The smallest number is " + smallestNumber);
//Write a program to print multiples of 5 ranging 1 to 100
for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}
