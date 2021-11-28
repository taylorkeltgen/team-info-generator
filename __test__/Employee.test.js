const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('creates an Employee object', () => {
  const employee = new Employee('Dave');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
