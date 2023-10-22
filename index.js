// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const licenses = ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "BoostSoftwareLicense 1.0", "Creative Commons Zero V1.0 Universal", "Eclispse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]

const questions = [
    {type: 'input', message: 'Enter the title of your project:', name: 'title', validate: (value) => {if(value) {return true} else { return 'Please enter a title for your project'}}},
    {type: 'input', message: 'Enter a description of your project (the what, why, and how):', name: 'description', validate: (value) => {if(value) {return true} else { return 'Please enter a description for your project'}}},
    {type: 'input', message: 'Enter the installation instructions:', name: 'install', validate: (value) => {if(value) {return true} else { return 'Please enter install instructions for your project'}}},
    {type: 'input', message: 'Enter usage instructions:', name: 'usage', validate: (value) => {if(value) {return true} else { return 'Please enter usage intructions for your project'}}},
    {type: 'input', message: 'Enter any contributors, to include tutorial websites:', name: 'credits'},
    {type: 'input', message: 'Enter any test instructions:', name: 'tests'},
    {type: 'list', message: 'Select the license used for your project:', name: 'license', choices: licenses},
    {type: 'input', message: 'Enter your github username:', name: 'github', validate: (value) => {if(value) {return true} else { return 'Please enter your github username'}}},
    {type: 'input', message: 'Enter your email address:', name: 'email', validate: (value) => {if(value) {return true} else { return 'Please enter your email'}}}
];
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data),(err) =>
    err ? console.error(err) : console.log('README.md has been generated.'))

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>    writeToFile(answers));
}
// Function call to initialize app
init();
