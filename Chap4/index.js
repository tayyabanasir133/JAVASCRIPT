//1-Declare 3 variable in one statement:
var firstVar =  "hello!"
var secondVar = "My name is Tayyaba"
var thirdVar = "I am 19 years old"
console.log(firstVar + secondVar + thirdVar)

//2-Declare 5 legal and 5 illegal variable name :
//Legal:
var info = "xyz"
var name = "xyz"
var myName = "xyz"
var myVar = "xyz"
var detail = "xyz"

//illegal:
//var var = "xyz"
//var function = "xyz"
//var break = xyz
//var case = xyz
//var new = "xyz"

//3-Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ___, ___, ___ and ___.
 //For example $my_1stVariable
//c) Variables must begin with a ___, ___ or ____. For example $name, _name or name
//d) Variable names are case ____
//e) Variable names should not be JS ____.

//document.write ("Rules for Naming JS Variables")

//__________________a_______________________
const Heading = document.createElement("h1")
Heading.innerHTML = "Rules for Naming JS Variables"

//__________________b_________________________
var name = "Numbers"
var nameTwo = "$"
var nameThree = "_"
//console.log("variable names can only contain " + name +", " +  nameTwo + " and " + nameThree)
document.write("Variable names can only contain " + name +", " +  nameTwo + " and " + nameThree + " . For Example: $my_1stVariable <br><br>")

//________________c___________________________
var name = "letter"
var nameTwo = "$"
var nameThree = "_"
document.write(" Variable must begin with a " + name +", " +  nameTwo + " or " + nameThree + " . " + "For Example: $name, _name, or name<br><br>")

//_______________d______________________________
var name = "Sensitive"
document.write("Variables name are case " + name + ".<br><br>")

//________________e_____________________________
var name = "keywords"
document.write("Variables name should not be JS " + name + ".")
