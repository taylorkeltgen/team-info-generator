const inquirer = require('inquirer');
const { getNamespaceURI } = require('parse5/lib/tree-adapters/default');
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '') {
    super(name);

    this.role;
    this.officeNumber;
  }

  getOfficeNumber() {
    return inquirer
      .prompt({
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office room number?',
      })
      .then(({ name }) => {
        this.officeNumber = name;
      });
  }

  getRole() {
    // Overridden to return 'Manager'
    return (this.role = 'Manager');
  }
}

module.exports = Manager;
