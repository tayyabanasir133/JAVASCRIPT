//1-1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser.
var a = 10
document.write( "Result :" + "<br>" + "The value of a is " + a + "<br><br><br>")
var aOne = ++a //11
document.write("The value of ++a is " + aOne +"<br>"+ "The value of a is " + a+"<br><br>")
var aTwo = a++ //11 12
document.write("The value of a++ is " + aTwo +"<br>"+  "The value of a is " + a +"<br><br>")
var aThree = --a //11 
document.write("The value of --a is " + aThree +"<br>"+ "The value of a is " + a+"<br><br>")
var aFour = a-- //11 
document.write("The value of a-- is " + aFour +"<br>"+  "The value of a is " + a +"<br><br>")

//2- What will be the output in variables a, b & result after execution of the following script:
//Explain the output at each stage:
//- --a;
//- --a - --b;
//- --a - --b + ++b;
//- --a - --b + ++b + b--;
var a = 2
document.write("a = " + a+"<br>")
var b= 1
document.write("b = " + b+"<br>"+ "Result = ")
document.write((--a - --b )+(++b  + b--) +"<br><br>")

//Explanantion 
//--a = 1
//--b = 0
//++b = 1
//b-- = 1 /0
//var result = (--a - --b )+(++b  + b--)
//var result = (1 - 0 )+(1  + 1)
//var result = 1 + 2
//var result = 3

//3-Write a program that takes input a name from user & greet the user.
var data = prompt("Enter Your name")
console.log(data);
document.write("Hello " + data + "! How can I assist you?"+"<br><br>")

//4-Write a program to take input a number from user & display its multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var data = prompt("Enter a Number" , 5 )
console.log(data );

var one = data * 1
var two = data * 2
var three = data * 3
var four = data * 4
var five = data * 5
var six = data * 6
var seven = data * 7
var eight = data * 8
var nine = data * 9
var ten = data * 10
document.write(data + "*" + 1 + "=" + one + "<br><br>")
document.write(data + "*" + 2 + "=" + two + "<br><br>")
document.write(data + "*" + 3 + "=" + three + "<br><br>")
document.write(data + "*" + 4 + "=" + four + "<br><br>")
document.write(data + "*" + 5 + "=" + five + "<br><br>")
document.write(data + "*" + 6 + "=" + six + "<br><br>")
document.write(data + "*" + 7 + "=" + seven + "<br><br>")
document.write(data + "*" + 8 + "=" + eight + "<br><br>")
document.write(data + "*" + 9 + "=" + nine + "<br><br>")
document.write(data + "*" + 10 + "=" + ten + "<br><br><br><br>")

//5- 
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this. (Hint: user table)

 var dataFsub = prompt("First subject")
console.log( dataFsub );

 var dataFsubNo = prompt("First subject Marks")
console.log(dataFsubNo);
document.write(dataFsubNo/total )*100

  var dataSsub = prompt("Second subject")
console.log(dataSsub);


  var  dataSsubNo = prompt("Second subject Marks")
console.log(dataSsubNo );

   var dataTsub = prompt("Third subject")
   console.log(dataTsub);

   var dataTsubNo = prompt("Third subject Marks")
   console.log (dataTsubNo);

   var firstSub = 100
   //var secSub = 100
   //var thirdSub = 100

   var total = 100

