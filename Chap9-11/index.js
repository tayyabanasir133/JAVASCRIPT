//1-Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”.
var city = prompt("Enter a city name")
console.log(city)
var ans = "karachi"
if (city==ans){
    document.write ("<h1>Welcome to the city of Lights</h1>")
}

//2-Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var genderM = "male"
var genderF = "female"
var male = prompt("How do you describe your gender identity?")
console.log(male)
if (male===genderM){
    document.write("Good Morning Sir <br>")
}
if (male!==genderM){
    document.write("Good Morning Ma'am <br>")
}

//3-Write a program to take input color of road traffic signal from the user & show the message according to this table: 
var signalR = "red"
var signalY = "yellow"
var signalG = "green"
var signal = prompt("Enter the traffic light color:")
console.log(signal)

if (signal===signalR){
    document.write("Must Stop!")

}

if (signal===signalG){
    document.write("Move Now!")
    
}


if (signal===signalY){
    document.write("Ready to Move...")
    
}

//4- Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25 litres, show the message “Please refill the fuel in your car”.
var carFuel = prompt("How much fuel is left in the car? (In litres)")
console.log(carFuel)
var Fuel = 0.25 
if ( carFuel  <= Fuel ) { 
    
    document.write("Please refill the fuel in your car" + "<br><br>")

}

//5- Run this script, & check whether alert message would be displayed or not. Record the outputs.
//_____a______
var  a = 4
if (++a === 5) {
    alert("given condition for variable a is true")
}

//output: Displayed

//__________________________________________________________________________________________
//____b_______
var b = 82
if (b++ === 83 ) {
     alert("given condition for valiable a is true")
}

//output: Not Displayed

//__________________________________________________________________________________________
//____c_______
var c =12
if (c++ === 13) {
    alert("Condition 1 is true")
    
}
if (c === 13) {
    alert("Condition 2 is true")
    
}
if (++c < 14) {
        alert("Condition 3 is true")
}
if (c === 14) {
    alert("Condition 4 is true")
    
}

//output: Condition 2 and 4 are displayed
//__________________________________________________________________________________________
//____d_______
var materialCost = 20000
var laborCost = 20000
var totalCost =  materialCost+laborCost
if (totalCost===laborCost + materialCost) {
    alert("The cost equals")
}
//output: Displayed
//__________________________________________________________________________________________
//____e_______
if (true) {
    alert("True")
}
if (false) {

  alert("False")
}
//output: "True" displayed
//__________________________________________________________________________________________
//____f_______
if ("car"<"cat") {
    alert("Car is smaller than cat")
}
//output: Displayed
//__________________________________________________________________________________________
//6- Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per the following table:
var english = prompt("Your marks in English?")
console.log( english)
var isl = prompt("Your marks in Islamiat?")
console.log( isl)
var maths = prompt("Your marks in Maths?")
console.log(maths)
var totalM = prompt("Total marks?")
console.log(totalM)
 //var obt = english+isl+maths
 //console.log(obt)
if(english+maths+isl<=totalM){document.write("<h1>Marksheet</h1>"+ "<br><br>")
    document.write("Total Marks = " + totalM+ "<br><br>")
document.write("Marks 0btained=" + english+isl+maths)
document.write()
document.write()
}

//7-
var secNo = 5
var guess = prompt("Guess the number")
console.log(guess)
if (secNo==guess) {
    
    document.write("Bingo!Correct answer" +"<br><br>")
}
if (++guess === secNo) {
     document.write("Close enough to the correct answer"+"<br><br>")
}

//8-
var check = prompt("Check whether the number is divisible by 3")
console.log(check)
if (check%3==0) {
    document.write("It's divisible by 3" + "<br><br>")}
else{ document.write("It's not divisible by 3" + "<br><br>")}

//9-
var number = prompt("enter a number")
console.log(number)
if(number%2==0) {document.write("It's an even number" + "<br><br>")}
else{document.write("its an odd number" + "<br><br>")}

//10- Write a program that takes temperature as input and shows a message based on the following criteria:
   // - a. T > 40 then “It is too hot outside.”
  //  - b. T > 30 then “The Weather today is Normal.”
  //  - c. T > 20 then “Today’s Weather is cool.”
  //  - d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = prompt("What's the temperature today?")
console.log(temp)
if (temp>40) {
    document.write("It's too hot outside"+ "<br><br>")
    
}
 else if (temp>30) {
    document.write("The weather today is Normal"+ "<br><br>")
    
}
else  if(temp>20) {
    document.write("Today's weather is cool"+ "<br><br>")
    
}
else if(temp>10) {
    document.write("OMG!Today's weather is so cool."+ "<br><br>")
    
}

//11- Question 11: Write a program to create a calculator for +, -, *, /, % using if statements. Take the following input:
    //- a. First number
    //- b. Second number
   // - c. Operation (+, -, *, /, %)
//Compute & show the calculated result to the user.
var oneNum = prompt("Enter a Number")
console.log(oneNum)
var twoNum = prompt("Enter another Number")
console.log(twoNum)
var operation = prompt ("Which operation do you want to perform?")
console.log(operation)
if (operation=="+") {
    document.write(oneNum + twoNum)
}
else if (operation=="-") {
    document.write(oneNum-twoNum)
}
else if (operation=="/") {
    document.write(oneNum/twoNum)
}
else if (operation=="*") {
    document.write(oneNum*twoNum)
}
else if (operation=="%") {
    document.write(oneNum%twoNum)
}

