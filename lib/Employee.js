const inquirer = require('inquirer');

class Employee {
  constructor(name = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = '';
  }

  getName() {
    return inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: "What is the member's name?",
      })
      .then(({ name }) => {
        this.name = name;
      });
  }

  getId() {
    return inquirer
      .prompt({
        type: 'input',
        name: 'id',
        message: "What is the Employee's ID number?",
      })
      .then(({ name }) => {
        this.id = name;
      });
  }

  getEmail() {
    return inquirer
      .prompt({
        type: 'input',
        name: 'id',
        message: "What is the Employee's email address?",
      })
      .then(({ name }) => {
        this.email = name;
      });
  }

  getRole() {
    return (this.role = 'employee');
  }
}

module.exports = Employee;
