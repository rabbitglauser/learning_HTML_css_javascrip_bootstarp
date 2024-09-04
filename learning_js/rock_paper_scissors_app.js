let arr = ["Rock", "Paper", "Scissors"];

function Rock_paper_scissors_app() {
    /* Creating a random picker of arr */
    console.log(arr[Math.floor(Math.random() * arr.length)]);
    console.log(arr);
}

    rl.question("Enter your guess: ", (input) => {
    const a = Number(input);

Rock_paper_scissors_app();
