#!/usr/bin/env node
import inquirer from 'inquirer';
// Computer will generate a random number -done
// User input for guessing number -done
// Compare user input with computer-generated number and show result -done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    }
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
