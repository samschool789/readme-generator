
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];
    
    inquirer  
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project?',
        }, 
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Please provide a Table of Contents',

        }
    ]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();