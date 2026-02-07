//create an interactive calculator 
function  result() {
function add(a, b) {
    var addition = a + b;
    return addition;
}

function subtract(a, b) {
    var subtraction = a - b;
    return subtraction;
}

function multiply(a, b) {
    var multiplication = a * b;
    return multiplication;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    else {
    var division = a / b;
    return division;
    }

}
}
document.getElementById("add").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var res = add(num1, num2);
    document.getElementById("result").innerHTML = "Result: " + res;
};
document.getElementById("subtract").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var res = subtract(num1, num2);
    document.getElementById("result").innerHTML = "Result: " + res;
};
document.getElementById("multiply").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var res = multiply(num1, num2);
    document.getElementById("result").innerHTML = "Result: " + res;
};
document.getElementById("divide").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var res = divide(num1, num2);
    document.getElementById("result").innerHTML = "Result: " + res;
};
