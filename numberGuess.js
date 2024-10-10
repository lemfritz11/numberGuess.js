const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    
    if (guess < correctNumber) {
        console.log("Too low, try again.");
    } else if (guess > correctNumber) {
        console.log("Too high, try again.");
    } else {
        console.log("Correct! You guessed the number.");
    }
}
