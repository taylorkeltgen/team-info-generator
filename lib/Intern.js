const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name = '') {
    super(name);

    this.name = Employee.getName();
    this.role;
    this.school;
  }

  getRole() {
    // Overridden to return 'Intern'
    return (this.role = 'Intern');
  }

  getSchool() {
    return inquirer
      .prompt({
        type: 'input',
        name: 'school',
        message: 'What school are they a student at?',
      })
      .then(({ name }) => {
        this.school = name;
      });
  }
}

module.exports = Intern;
