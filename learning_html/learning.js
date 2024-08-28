const readline = require('readline');

function numberGuessing() {
  const guess = Math.floor(Math.random() * 100) + 1;
  console.log("Guess a number between 1-100");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askGuess() {
    rl.question("Enter your guess: ", (input) => {
      const a = Number(input);

      if (a === guess) {
        console.log("You guessed the correct answer");
        rl.close();
      } else if (a < guess) {
        console.log("Higher");
        askGuess();  // Ask again
      } else if (a > guess) {
        console.log("Lower");
        askGuess();  // Ask again
      }
    });
  }

  askGuess();  // Start the guessing
}

numberGuessing();
30

