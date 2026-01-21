var correctUsername = "Atharva Golande";
var correctPassword = "7905";

var attempts = 3;

while (attempts > 0) {

    var username = prompt("Enter username:");
    var password = prompt("Enter password:");

    if (username === "" || password === "") {
        console.log("Username or Password cannot be empty");
    }
    else if (username === correctUsername && password === correctPassword) {
        console.log("Login Successful. Welcome " + username);
        break;
    }
    else {
        attempts--;
        console.log("Invalid Username or Password");
        console.log("Attempts left: " + attempts);
    }

    if (attempts === 0) {
        console.log("Account locked. Please try again later.");
    }
}
