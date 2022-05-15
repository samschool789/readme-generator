// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
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
  ]);
};
promptUser().then((answers) => console.log(answers));








// fs.writeFile('README.md', generateMarkdown(input, data), err => {
//     if (err) throw err;
//    console.log('success! your README was generated!')
// });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
