#! /usr/bin/env node 
import inquirer from "inquirer";
// 1. Computer will generate a random number 
// 2. user wil input guessing number
// 3 . compare computer and user number and compare it and generate result 
const RandomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "GuessNumber",
        type: "number",
        message: "Please Guess Any Random Number between 1-6",
    },
]);
if (answer.GuessNumber === RandomNumber) {
    console.log("Congratulations !! You Guess the Right Number :) ");
}
else {
    console.log("Ooops sorry Try Again :( ");
}
