var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var op = prompt("Enter +, -, *, /");

var result;

if (op == "+") {
    result = num1 + num2;
} else if (op == "-") {
    result = num1 - num2;
} else if (op == "*") {
    result = num1 * num2;
} else if (op == "/") {
    result = num1 / num2;
}

console.log(result);
