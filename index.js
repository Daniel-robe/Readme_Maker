//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What commands should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about your repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What commands should be used to run tests?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BDS 3', 'None']
    }
];

//function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {writeToFile('./newReadme/README.md', generateMarkdown(answers))});
}

// Function call to initialize app
init();
