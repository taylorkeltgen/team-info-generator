const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateMarkdown = require('./src/page-template');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the member's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their ID number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their email address?',
  },
  {
    type: 'input',
    name: 'office',
    message: 'What is their office room number?',
  },
  {
    type: 'list',
    name: 'role',
    message: 'Would you like to add another team member?',
    choices: ['Engineer', 'Intern', 'Finish'],
  },
];

function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFileSync('./dist/index.html', data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!',
      });
    });
  });
}

function init() {
  console.log('Lets build your team!');

  return inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      return generateMarkdown(answers);
    })
    .then((pageHTML) => {
      console.log(pageHTML);
      return writeToFile(pageHTML);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
