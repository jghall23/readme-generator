// TODO: Include packages needed for this application
const generateMarkdown = require(",/utils/generateReadme.js");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
console.log("README generator")
console.log("Answer the following questions")

const writeFileAsync = util.promisify(fs.writeFile)

function promptUser() { }
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the overview of the project",
    },
    {
        type: "input",
        name: "runcmd",
        message: "What is the project's run command?",
        default: "node index.js",
    },
    {
        type: "input",
        name: "testCmd",
        message: "What is the project's test command?",
        default: "npm test",
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err)) = {
        if(err) {
            return console.log(err);
        }
    }
    console.log("You can now Preview your README")
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(funciton(userInput))

    const markdownstring = generateMarkdown


}

// Function call to initialize app
init();
