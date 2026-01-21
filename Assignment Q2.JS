var secretNumber = Math.floor(Math.random() * 10) + 1;
var attemptCount = 0;
var guess;

console.log("Number Guessing Game");
console.log("Guess a number between 1 and 10");

while (true) {
    guess = Number(prompt("Enter your guess:"));
    attemptCount++;

    if (guess < 1 || guess > 10 || isNaN(guess)) {
        console.log("Enter a valid number between 1 and 10");
    }
    else if (guess > secretNumber) {
        console.log("Too high. Try again.");
    }
    else if (guess < secretNumber) {
        console.log("Too low. Try again.");
    }
    else {
        console.log("Correct. You guessed the number.");
        console.log("Attempts: " + attemptCount);
        break;
    }
}
