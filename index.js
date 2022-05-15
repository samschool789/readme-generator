// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const axios = require("axios");
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },

    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectName",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project?",
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "Please provide a Table of Contents",
    },

    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];


 inquirer
  .prompt(questions)
  .then(function(data){
     
        fs.writeFile("./README.md", generate(data, ), function(err) {
          if (err) {
            throw err;
          };
  
          console.log("New README file created with success!");
        });
      });




  // TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


 









