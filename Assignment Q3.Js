var value = prompt("Enter a value:");
var reverse = "";

for (var i = value.length - 1; i >= 0; i--) {
    reverse = reverse + value[i];
}

if (value == reverse) {
    console.log("It is a Palindrome");
} else {
    console.log("It is not a Palindrome");
}

