//write a program to take two user inputs for first and last name using prompt and merge them in a new variable fullName titled "fullName" . Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "!");

//write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var favoritePhone = prompt("Enter your favorite mobile phone model:");
var inputLength = favoritePhone.length;
document.write("The length of your input is: " + inputLength);

//write a program to find the index of letter "n" in the word "Pakistani" and display the result in your browser
var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write("The index of letter 'n' in the word 'Pakistani' is: " + indexOfN);

//write a program to find the last index of letter "l" in the word "Hello World" and display the result in your browser
var phrase = "Hello World";
var lastIndexOfL = phrase.lastIndexOf("l");
document.write("The last index of letter 'l' in the phrase 'Hello World' is: " + lastIndexOfL);

//write a program to find the character at 3rd index in the word "Pakistani" and display the result in your browser
var word = "Pakistani";
var charAtIndex3 = word.charAt(3);
document.write("The character at index 3 in the word 'Pakistani' is: " + charAtIndex3);

//repeat write a program to take two user inputs for first and last name using prompt and merge them in a new variable fullName titled "fullName" . Greet the user using his full name. using string concat() method
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
document.write("Hello, " + fullName + "!");

//write a program to replace the "Hyder" to "Islam" in the word "Hyderabad" and display the result in your browser
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("The new city name is: " + newCity);

//write a program to replace all occurrences of "and" with "&" in the string "Ali and Sami are best friends. They play cricket and football together." and display the result in your browser
var sentence = "Ali and Sami are best friends. They play cricket and football together.";
var newSentence = sentence.replace(/and/g, "&");
document.write("The new sentence is: " + newSentence);

//write a program that converts a string "472" to a number 472. Display the values & types in your browser
var strNumber = "472";
var numNumber = Number(strNumber);
document.write("Value: " + numNumber + ", Type: " + typeof numNumber);

//write a program that takes user input. Convert and show the input in capital letters.
var userInput = prompt("Enter a string:");
var capitalizedInput = userInput.toUpperCase();
document.write("Capitalized Input: " + capitalizedInput);

//write a program that takes user input. Convert and show the input in title case.
var userInput = prompt("Enter a string:");
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
var titleCaseInput = toTitleCase(userInput);
document.write("Title Case Input: " + titleCaseInput);

//write a program that converts the variable num to string. var num = 35.36
// Display the values & types in your browser
var num = 35.36;
var strNum = num.toString();
document.write("Value: " + strNum + ", Type: " + typeof strNum);

//write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . , !] - refer to ASCII table at the end of this document.
//note: The ASCII codes for the special symbols are as follows:
// @ - 64
// . - 46
// , - 44
// ! - 33
var username = prompt("Enter a username:");
var isValid = true;
for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username without special symbols [@ . , !]");
} else {
    document.write("Username is valid: " + username);
}

//you have an array A = [cake", "apple pie", "cookie", "chips", "patties"]. Write a program to enable "search by user input" in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search for:");
var found = false;
for (var i = 0; i < items.length; i++) {
    if (items[i].toLowerCase() === userInput.toLowerCase()) {
        found = true;
        break;
    }
}
if (found) {
    alert("Item found in the list!");
} else {
    alert("Item not found in the list.");
}


//write a program to convert the following string to an array using string split method. var university = "University of Karachi". Display the elements of array in your browser.
var university = "University of Karachi";
var universityArray = university.split(" ");
document.write("Elements of the array: <br>");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

//write a program to display the last character of a user input
var userInput = prompt("Enter a string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("The last character of your input is: " + lastCharacter);

//write a program to count the number of occurrences of word "the" in the given string. var text = "The quick brown fox jumps over the lazy dog";
var text = "The quick brown fox jumps over the lazy dog";
var count = 0;
var word = "the";
var lowerText = text.toLowerCase();
var lowerWord = word.toLowerCase();
for (var i = 0; i < lowerText.length; i++) {
    if (lowerText.substring(i, i + lowerWord.length) === lowerWord) {
        count++;
    }


}
document.write("The word '" + word + "' occurs " + count + " times in the given string.");

