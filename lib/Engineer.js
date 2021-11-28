const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name = '') {
    super(name);

    this.name = Employee.getName();
    this.role;
    this.github;
  }

  getRole() {
    // Overridden to return 'Engineer'
    return (this.role = 'Engineer');
  }

  getGithub() {
    return inquirer
      .prompt({
        type: 'input',
        name: 'github',
        message: 'What is their GitHub account name?',
      })
      .then(({ name }) => {
        this.github = name;
      });
  }
}

module.exports = Engineer;
