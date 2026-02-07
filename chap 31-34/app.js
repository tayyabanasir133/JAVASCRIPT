//write a program that displays current date and time in your browser.
var currentDate = new Date();
var currentDateTime = currentDate.toLocaleString();
document.write("Current date and time: " + currentDateTime);

//Write a program that alerts the current month in words. For example December.
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = monthNames[currentDate.getMonth()];
document.write("Current month: " + currentMonth);

//Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[currentDate.getDay()];
alert("Current day: " + currentDay);

//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var dayOfWeek = currentDate.getDay();
if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
    document.write("It's Fun day");
} else {
    document.write("It's a funday");
}

//Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
var currentDateOfMonth = currentDate.getDate();
if (currentDateOfMonth < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

//Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
var minutesSincemidnight = Math.floor(currentDate.getTime() / (1000 * 60));
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSincemidnight);
document.write("current Date: " + currentDate);
document.write("Elapsed milliseconds since January 1, 1970: " + currentDate.getMilliseconds());
//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var hours = currentDate.getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
//Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date(2020, 11, 31);
document.write("Later date: " + laterDate);

//create a Date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015.
var ramadanStartDate = new Date(2015, 5, 18);
var timeDifferenceRamadan = currentDate.getTime() - ramadanStartDate.getTime();
var daysPassedSinceRamadan = Math.floor(timeDifferenceRamadan / (1000 * 60 * 60 * 24));
alert("Number of days passed since 1st Ramadan: " + daysPassedSinceRamadan);

//Write a program that displays the seconds that elapsed between the reference date and the beginning of 2015.
var referenceDate = new Date(2015, 0, 1);
var timeDifferenceReference = currentDate.getTime() - referenceDate.getTime();
var secondsElapsedSinceReference = Math.floor(timeDifferenceReference / 1000);
alert("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsedSinceReference);

//Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var currentDateTime = new Date();
var currentHours = currentDateTime.getHours();
currentDateTime.setHours(currentHours + 1);
document.write("Current date and time: " + currentDateTime);

//Write a program that creates a Date object and show the date in an alert box that is reset to 100 years back?
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
currentDate.setFullYear(currentYear - 100);
alert("Date 100 years back: " + currentDate);

//write a program that asks the user about his age. Calculate and show his birth year in an alert box.
var userAge = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
alert("Your birth year is: " + birthYear);

//Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: Customer Name, Current Month, Number of units, Charges per unit, Net Amount Payable (within Due Date), Late Payment Surcharge, Gross Amount Payable (after Due Date). Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit and Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge.
var customerName = prompt("Enter your name:");
var currentMonth = new Date().toLocaleString('default', { month: 'long' });
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits.toFixed(2) + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "<br>");

