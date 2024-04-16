#! /usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";
// Print a Wellcome message
console.log(chalk.blueBright.bold("\n \t Wellcome to Word Tally - CLI Word Counter \n"));
// Declare a aconstant 'answers' and assign it to the result of variable.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.gray("Enter your sentence to count words: ")
    }
]);
const words = answers.sentence.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`\nYour sentence word count is ${words.length}\n`);
