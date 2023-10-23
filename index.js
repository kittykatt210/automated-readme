// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of license for list used in questions array
const licenses = [
    'Apache 2.0', 
    'GNU General Public v3.0', 
    'MIT', 
    'BSD 2-Clause Simplified', 
    'BSD 3-Clause New or Revised', 
    'BoostSoftware 1.0', 
    'Creative Commons Zero V1.0 Universal', 
    'Eclispse Public 2.0', 
    'GNU Affero General Public v3.0', 
    'GNU General Public v2.0', 
    'GNU Lesser General Public v2.1', 
    'Mozilla Public 2.0', 
    'The Unlicense', 
    'None'
]

// Array of questions for user input
const questions = [
    {type: 'input', message: 'Hello and welcome to the README.md generator. Please enter your full name:', name: 'user', validate: (value) => {if(value) {return true} else { return 'Please enter your full name'}}},
    {type: 'input', message: 'Enter the title of your project:', name: 'title', validate: (value) => {if(value) {return true} else { return 'Please enter a title for your project'}}},
    {type: 'input', message: 'Enter a description of your project (the what, why, and how):', name: 'description', validate: (value) => {if(value) {return true} else { return 'Please enter a description for your project'}}},
    {type: 'input', message: 'Enter the installation instructions:', name: 'install', validate: (value) => {if(value) {return true} else { return 'Please enter install instructions for your project'}}},
    {type: 'input', message: 'Enter usage instructions:', name: 'usage', validate: (value) => {if(value) {return true} else { return 'Please enter usage intructions for your project'}}},
    {type: 'input', message: 'Enter any contributors, to include tutorial websites:', name: 'credits'},
    {type: 'input', message: 'Enter any test instructions:', name: 'tests'},
    {type: 'list', message: 'Select the license used for your project:', name: 'license', choices: licenses, default: 'None'},
    {type: 'input', message: 'Enter your github username:', name: 'github', validate: (value) => {if(value) {return true} else { return 'Please enter your github username'}}},
    {type: 'input', message: 'Enter your email address:', name: 'email', validate: (value) => {if(value) {return true} else { return 'Please enter your email'}}}
];

// Function to write README file
function writeToFile(data) {
    const filename = 'README.md';
    fs.writeFile(filename, generateMarkdown(data), {flag: 'w+'},(err) =>
    err ? console.error(err) : console.log(`Your README.md for ${data.title} has been generated.`))
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers)
    });
}

// Function call to initialize app
init();
